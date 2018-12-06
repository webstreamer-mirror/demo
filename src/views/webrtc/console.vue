<template>
  <div class="app-container">
    <!-- $t is vue-i18n global function to translate lang -->
    <video id="my-video" class="video-js">
    <!--source src="https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_2mb.mp4" type='video/mp4'-->
    </video>
    <br>
    <br>
    <el-input :placeholder="'wss://'" v-model="url" style="width:85%;" prefix-icon="el-icon-phone"/>
    <br>
    <br>
    <el-button style="margin-bottom:20px;" type="primary" icon="webrtc" @click="start"> start</el-button>
    <el-button style="margin-bottom:20px;" type="primary" icon="webrtc" @click="stop"> stop</el-button>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
  name: 'ExportZip',
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      url: 'https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_2mb.mp4'
    }
  },
  created() {
  },
  methods: {
    start() {
      var player = videojs('my-video')
      player.src(this.url);
      player.ready(function() {
        player.play();
      });
    },
    stop() {
      var player = videojs('my-video')
      player.pause()
    },
  }
}
</script>
