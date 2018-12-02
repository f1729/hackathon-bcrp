<template>
  <div style="overflow: hidden;">
    <ToolBar @clickPlay="showVideo"/>

    <div style="width: 100%;position: relative;height: 100vh;padding-top: 60px;">
      <div>
        <img src="https://f1729.github.io/hackathon-bcrp/imagenes/mascot/static2.png" 
             style="width: auto;height:72vh;margin: 20px auto">
       
       <div class="bcrp-logo" style="position: absolute;top: 50%;width: 30px;left: 50%;margin-left: 44px;margin-top: -40px;">
          <img style="width: 100%;" src="https://f1729.github.io/hackathon-bcrp/imagenes/logo.png"> 
       </div>

        <div class="pancita" style="overflow: hidden;position: absolute;top: 50%;width: 328px;left: 50%;    margin-left: -162px;margin-top: 11px">

          <carousel ref="carousel" :scrollPerPage="true" :perPage="1" v-on:pageChange="pageChange">
            <slide>
              <v-btn
                color="#1a237e"
                flat
                value="money"
                v-on:click="$emit('change', 'money')"
              >
                <v-icon>attach_money</v-icon>
                <br>
                <span>Billetes y Monedas</span>
              </v-btn>
            </slide>
            <slide>
              <v-btn
                color="#1a237e"
                flat
                value="capture"
                v-on:click="capturePhoto()"
              >
                <input id="inputCamera" type="file" accept="image/*" capture style="display:none"> 
                <v-icon>camera_alt</v-icon>
                <br>
                <span>Capturar</span>
              </v-btn>

            </slide>
            <slide>
              <v-btn
                color="#1a237e"
                flat
                value="report"
                v-on:click="lol()"
              >
                
                <v-icon>report</v-icon>
                <br>
                <span>Reportar</span>
              </v-btn>

            </slide>
          </carousel>        
        </div>
      </div>
      
      <v-btn color="rgb(26, 35, 126)" style="color: white;" 
              @click="goToIndex"
              v-bind:href="`#section-${currentPage}`"
              v-smooth-scroll="{ duration: 1000 }"
              >IR</v-btn>

    </div>
    
    <div id="section-0" v-show="currentPage === 0" style="height: 100vh;padding-top: 100px;">

      <carousel :scrollPerPage="true" :perPage="1">
        <slide v-for="element in coverList">
          <img v-bind:src="element.cover" style="width: 300px;">
        </slide>
      </carousel>
      <!--
      <vue-glide :bullet="true">
        <vue-glide-slide v-for="element in coverList" :key="i">
          <img v-bind:src="element.cover" style="width: 200px;margin: 0 50px;">
        </vue-glide-slide>
        <template slot="control">
          <button data-glide-dir="<">prev</button>
          <button data-glide-dir=">">next</button>
        </template>
      </vue-glide>
      -->
      <!--<coverflow :coverList="coverList" :coverWidth="260" :index="2"></coverflow>-->
    </div>

    <div id="section-1" v-show="currentPage === 1" style="height: 100vh;">
      <div>
        <p>Capture view</p>
        <img id="uploadPreview" style="width: 70%;height: auto;">
      </div>
    </div>

    <!-- <BottonNavigation :bottomNav="currentPage" @change="changeView"/> -->
    <transition name="fade">
      <div id="youtube" v-show="playVideo">
        <youtube :video-id="'69GdyS6OTcM'" :player-vars="{ autoplay: 0 }" @ready="ready"></youtube>
      </div>
    </transition>
    
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import BottonNavigation from '../components/BottonNavigation.vue';
import ToolBar from '../components/ToolBar.vue';

import coverflow from 'vue-coverflow';
import { Glide, GlideSlide } from 'vue-glide-js'
import { Carousel, Slide } from 'vue-carousel';

let camera;

export default {
  components: {
    HelloWorld,
    BottonNavigation,
    ToolBar,
    coverflow,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    Carousel,
    Slide,
  },
  data: () => ({
    currentPage: 0,
    playVideo: false,
    coverList: [
      {
        cover: 'https://f1729.github.io/hackathon-bcrp/imagenes/billetes/10a.jpg',
        title: '10 soles'
      }, {
        cover: 'https://f1729.github.io/hackathon-bcrp/imagenes/billetes/20a.jpg',
        title: '20 soles'
      }, {
        cover: 'https://f1729.github.io/hackathon-bcrp/imagenes/billetes/50a.jpg',
        title: '50 soles'
      }, {
        cover: 'https://f1729.github.io/hackathon-bcrp/imagenes/billetes/100a.jpg',
        title: '100 soles'
      }, {
        cover: 'https://f1729.github.io/hackathon-bcrp/imagenes/billetes/200a.jpg',
        title: '200 soles'
      },
    ],
  }),
  methods: {
    changeView(value) {
      this.currentPage = value;
    },
    ready (event) {
      console.log(event);
      this.player = event.target
    },
    showVideo() {
      this.player.playVideo();
      this.playVideo = true;
    },
    pageChange(value) {
      this.currentPage = value;
    },
    goToIndex() {
      document.getElementsByTagName('body')[0].style.overflow = 'initial';
      setTimeout(() => {
        // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      }, 1100);
      
      
      switch(this.$refs.carousel.currentPage) {
        case 0:
          console.log('Open Billetes')
        break;
        case 1:
          camera.click();
          console.log('Take a pic')
        break;
        case 2:
          console.log('Report')
        break;
        default:
          console.log('Unknow')
        break;
      }
      console.log(this.$refs.carousel.currentPage);
    },
  },
  mounted() {
    // console.log(screen);
    // window.screen.lockOrientation('landscape-primary');
    // Screen.lockOrientation('landscape-primary');
    camera = document.getElementById('inputCamera');
    camera.addEventListener('change', (file) => {
      const ouputFile = new FileReader();
      ouputFile.readAsDataURL(camera.files[0]);
      ouputFile.onload = (event) => {
        document.getElementById('uploadPreview').src = event.target.result;
      };

      console.log('image done!', file);
    });
  }
};
</script>
<style type="text/css">
  .v-toolbar {
    position: fixed;
    z-index: 9999;
  }
  .pancita .VueCarousel-pagination {
    margin-top: -10px;
  }
  .pancita .v-btn__content {
    display: block
  }
  .v-card {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .v-card {
    height: 0px !important;
  }
  .theme--light.v-card {
    background-color: transparent !important;
  }

  #youtube iframe {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .coverflow {
    left: -50%;
    margin-left: -115px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
