<template>
  <div>
    <h2>1. Start your Webcam</h2>
    <div class="videos">
      <span>
        <h3>Local Stream</h3>
        <video ref="webcamVideo" autoplay playsinline></video>
      </span>
      <span>
        <h3>Remote Stream</h3>
        <video ref="remoteVideo" autoplay playsinline></video>
      </span>


    </div>

    <button ref="webcamButton" @click="onWebcamButton">Start webcam</button>
    <h2>2. Create a new Call</h2>
    <button ref="callButton" disabled @click="onCallButton">Create Call (offer)</button>

    <h2>3. Join a Call</h2>
    <p>Answer the call from a different browser window or device</p>

    <input ref="callInput" />
    <button ref="answerButton" disabled @click="onAnswerButton">Answer</button>

    <h2>4. Hangup</h2>

    <button ref="hangupButton" disabled>Hangup</button>
  </div>
</template>

<script>
// Importing User
import FB from '../db';

// Creating new user object
const fb = new FB();
const db = fb.db




/*
Then we add the STUN server, through which the data transfers. Luckily we have free iceServers from google. Then we initialize the PeerConnection and also set local stream and remote stream to null.
*/
// server config
const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'], // free stun server
    },
  ],
  iceCandidatePoolSize: 10,
};

// global states
const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null
console.log(fb, pc, localStream, remoteStream)

// importing dom elements
//const webcamButton = document.querySelector('#webcamButton');
// const webcamVideo = document.querySelector('#webcamVideo');
// const callButton = document.querySelector('#callButton');
// const callInput = document.querySelector('#callInput');
// const answerButton = document.querySelector('#answerButton');
// const remoteVideo = document.querySelector('#remoteVideo');
// const hangupButton = document.querySelector('#hangupButton');








export default {
  name: "VideoChat",
  created() {

  },
  methods: {
    async onWebcamButton() {
      console.log("start")
      // setting local stream to the video from our camera
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      })

      // initalizing the remote server to the mediastream
      remoteStream = new MediaStream();


      // Pushing tracks from local stream to peerConnection
      localStream.getTracks().forEach(track => {
        pc.addTrack(track, localStream);
      })

      pc.ontrack = event => {
        event.streams[0].getTracks(track => {
          remoteStream.addTrack(track)
        })
      }

      // displaying the video data from the stream to the webpage
      this.$refs.webcamVideo.srcObject = localStream;
      this.$refs.remoteVideo.srcObject = remoteStream;

      // enabling and disabling interface based on the current condtion
      this.$refs.callButton.disabled = false;
      this.$refs.answerButton.disabled = false;
      this.$refs.webcamButton.disabled = true;
    },
    async onCallButton(){

    // referencing firebase collections
    const callDoc = db.collection('calls').doc();
    const offerCandidates = callDoc.collection('offerCandidates');
    const answerCandidiates = callDoc.collection('answerCandidates');

    // setting the input value to the calldoc id
    this.$refs.callInput.value = callDoc.id;

    // get candidiates for caller and save to db
    pc.onicecandidate = event => {
        event.candidate && offerCandidates.add(event.candidate.toJSON());
    }

    // create offer
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    // config for offer
    const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type
    }

    await callDoc.set({offer});


    // listening to changes in firestore and update the streams accordingly

    callDoc.onSnapshot(snapshot => {
        const data = snapshot.data();

        if (!pc.currentRemoteDescription && data.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
        }

        // if answered add candidates to peer connection
        answerCandidiates.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {

                if (change.type === 'added') {
                    const candidate = new RTCIceCandidate(change.doc.data());
                    pc.addIceCandidate(candidate);
                }
            })
        })
    })

    this.$refs.hangupButton.disabled = false;

},

async onAnswerButton() {
    const callId = this.$refs.callInput.value;

    // getting the data for this particular call
    const callDoc = db.collection('calls').doc(callId); 

    const answerCandidates = callDoc.collection('answerCandidates');
    const offerCandidates = callDoc.collection('offerCandidates');

    // here we listen to the changes and add it to the answerCandidates
    pc.onicecandidate = event => {
        event.candidate && answerCandidates.add(event.candidate.toJSON());

    }

    const callData = (await callDoc.get()).data();

    // setting the remote video with offerDescription
    const offerDescription = callData.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));


    // setting the local video as the answer
    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(new RTCSessionDescription(answerDescription));

    // answer config
    const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp
    }

    await callDoc.update({ answer });

    offerCandidates.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {

            if (change.type === 'added') {
                let data = change.doc.data();
                pc.addIceCandidate(new RTCIceCandidate(data));

            }
        })
    })
}

  }
}
</script>

<style scoped>
body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 80px 10px;
  text-align: center;
}

video {
  width: 40vw;
  height: 30vw;
  margin: 2rem;
  background: rgb(44, 62, 80);
}

.videos {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>