<template>
  <div class="app-container">
    <!-- $t is vue-i18n global function to translate lang -->
    <switch-roles v-model="initiator" />
    <br>
    <label>Server : </label>
    <el-input v-model="server" style="width:85%;"/>
    <br>
    <label>Session ID : </label><el-input v-model="sessionId" style="width:50%;" />
    <br>
    <offer-option title="send" @change="onOfferSend"/>
    <offer-option title="receive" @change="onOfferRecv"/>
    <el-button style="margin-bottom:20px;" type="primary" icon="webrtc" @click="doAction"> {{ action }} </el-button>

    <br>
    <div id="webrtc-container" style="width:85%;"/>
  </div>
</template>

<script>
import SwitchRoles from './components/SwitchRoles'
import offerOption from './components/offerOption'
import WebRTCElement from 'webrtc-element'
import 'sockjs-client'
export default {
  name: 'WebrtcConsole',
  components: { SwitchRoles, offerOption },
  data() {
    return {
      url: 'https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_2mb.mp4',
      server: 'http://localhost:9001/',
      sessionId: 'webstreamer/123',
      action: 'start',
      initiator: true,
      offer: {
        send: ['audio', 'video'],
        recv: ['audio', 'video']
      }
    }
  },
  mounted() {
    // var caller = new WebRTCElement('webrtc-caller')
    // var callee = new WebRTCElement('webrtc-callee')
    // caller.start(true)
    // callee.start(false)
  },
  methods: {
    onOfferSend(val) {
      this.offer.send = val
    },
    onOfferRecv(val) {
      this.offer.recv = val
    },
    doAction() {
      if (this.action === 'start') {
        this.action = 'stop'
        this.webrtc = new WebRTCElement('webrtc-container', {
          server: this.server,
          sessionid: this.sessionId,
          initiator: this.initiator
        })
        this.webrtc.start()
      } else {
        this.action = 'start'
        this.webrtc.stop()
        delete this.webrtc
      }
    }
  //  },
  //  stop() {
  //    var player = videojs('my-video')
  //    player.pause()
  //  },
  }
}
</script>

