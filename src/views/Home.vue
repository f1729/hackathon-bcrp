<template>
  <div style="overflow: hidden;">
    <ToolBar @clickPlay="showVideo" @capturePhoto="capturePhoto"/>
    <input id="inputCamera" type="file" accept="image/*" capture style="display:none">
    <div style="width: 100%;position: relative;height: 100vh;padding-top: 60px;">
      <div>
        <img src="https://f1729.github.io/hackathon-bcrp/imagenes/mascot/static2.png" 
             style="width: auto;height:72vh;margin: 20px auto">
       
       <div class="bcrp-logo" style="position: absolute;top: 50%;width: 30px;left: 50%;margin-left: 44px;margin-top: -40px;">
          <img style="width: 100%;" src="https://f1729.github.io/hackathon-bcrp/imagenes/logo.png"> 
       </div>

        <div class="pancita" style="overflow: hidden;position: absolute;top: 50%;width: 328px;left: 50%;margin-left: -162px;margin-top: 11px">
          <!-- v-on:pageChange="pageChange" -->
          <carousel ref="carousel" :scrollPerPage="true" :perPage="1" >
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
                value="report"
                v-on:click="lol()"
              >
                
                <v-icon>report</v-icon>
                <br>
                <span>Reportar</span>
              </v-btn>
            </slide>
            <slide>
              <v-btn
                color="#1a237e"
                flat
                value="capture" @click="playVideo()">
                <v-icon>play_circle_filled</v-icon>
                <br>
                <span>Toque, mire y gire</span>
              </v-btn>
            </slide>
          </carousel>        
        </div>
      </div>
      
      <v-btn color="rgb(26, 35, 126)" style="color: white;" 
              @click="goToIndex"> IR </v-btn>
    </div>
    
    <transition name="fade">
      
      <div id="section-0" v-show="currentPage === 0" style="position: absolute;z-index: 2;height: 100vh;padding-top: 100px;top: 0;width: 100%;left: 0;background: white;">
          
          <div v-if="false">
            <div class="close-button" style="position: absolute;top: 55px;">
            
              <v-btn
                color="#1a237e"
                flat
                value="capture"
                v-on:click="backToHome()">
                <v-flex xs12>
                  <v-icon>arrow_back_ios</v-icon>
                  <span>Back</span>
                </v-flex>
              </v-btn>


            </div>
          <carousel :scrollPerPage="true" :perPage="1">
            <slide v-for="element in coverList">
              <img v-bind:src="element.cover" style="width: 300px;">
            </slide>
          </carousel>
        </div>
        <div>heydy</div>


        <!-- tiempo -->

        <div class="bcrp-logo anversoNumber" style="">
          <img style="width: 100%;" src="https://cdn153.picsart.com/229438784058212.png?r1024x1024"> 
        </div>

        <div class="bcrp-logo anversotrouxecolor">
          <img style="width: 100%;" src="https://cdn153.picsart.com/229438784058212.png?r1024x1024"> 
        </div>

        <div class="bcrp-logo anversomitad">
          <img style="width: 100%;" src="https://cdn153.picsart.com/229438784058212.png?r1024x1024"> 
        </div>

        <div class="bcrp-logo anversotira">
          <img style="width: 100%;" src="https://cdn153.picsart.com/229438784058212.png?r1024x1024"> 
        </div>

        <div class="bcrp-logo anversoMarcaAgua">
          <img style="width: 100%;" src="data:image/png;base64,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"> 
        </div>


        

        
        <div>
          <img src="https://f1729.github.io/hackathon-bcrp/imagenes/billetes/20a.jpg" style="width: 300px;">
        </div>


        <!-- <div>
          <img src="https://f1729.github.io/hackathon-bcrp/imagenes/billetes/20b.PNG" style="width: 300px;">
        </div> -->



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
    </transition>
    
    <transition name="fade">
      <div id="section-1" v-show="currentPage === 1" style="top: 0;left: 0;position: absolute; z-index: 3;height: 100vh;background: white;padding-top: 100px;">
        <div>
          <img id="uploadPreview" style="width: 70%;height: auto;">
        </div>
      </div>
    </transition>

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
    currentPage: '0',
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
    backToHome() {
      this.currentPage = '0';
    },
    goToIndex() {
      this.currentPage = this.$refs.carousel.currentPage;
      switch(this.$refs.carousel.currentPage) {
        case 0:
          console.log('Open Billetes')
        break;
        case 1:
          console.log('Report')
        break;
        case 2:
          this.showVideo();
          console.log('Show Video');
        break;
        default:
          console.log('Unknow')
        break;
      }
      console.log(this.$refs.carousel.currentPage);
    },
    capturePhoto() {
      camera.click();
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
        this.currentPage = 1;
      };

      console.log('image done!', file);
    });
  }
};
</script>
<style type="text/css">
  #section-0 .v-icon{
    width: 35px;
  }
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
