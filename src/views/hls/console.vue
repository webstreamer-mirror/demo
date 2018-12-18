<template>
  <div class="app-container">
    <label>src : </label>
    <el-input v-model="src" style="width:75%;"/>
    <label>type : </label>
    <el-input v-model="type" style="width:15%;"/>
    <br>
    <el-input v-model="setup" style="width:85%;"/>
    <br>
    video
    <video class="video-js" >
      <source src="src" type="type">
    </video>
    end
    <video id="my-video" class="video-js vjs-default-skin" controls preload="auto">
      <source src="http://vjs.zencdn.net/v/oceans.mp4" type="'video/mp4">
    </video>

    <br>
    <div id="webrtc-container" style="width:85%;"/>
  </div>
</template>

<script>

import 'sockjs-client'
export default {
  name: 'HlsConsole',
  data() {
    return {
      src: 'http://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4',
      setup: '{"controls": true, "autoplay": false, "preload": "auto"}'
    }
  }
}
</script>

