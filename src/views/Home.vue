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

        <!-- 

        <div class="bcrp-logo anversoNumber">
          <img class="imgRedondo" src="https://f1729.github.io/hackathon-bcrp/imagenes/e_seguridad/p2.png"> 
        </div>

        <div class="bcrp-logo anversotrouxecolor">
          <img class="imgRedondo" src="https://f1729.github.io/hackathon-bcrp/imagenes/e_seguridad/p2.png"> 
        </div>

        
        <div class="bcrp-logo anversotira">
          <img class="imgRedondo" src="https://f1729.github.io/hackathon-bcrp/imagenes/e_seguridad/p2.png"> 
        </div>

        <div class="bcrp-logo anversoMarcaAgua">
          <img class="imgRedondo" src="https://f1729.github.io/hackathon-bcrp/imagenes/e_seguridad/p2.png"> 
        </div>

        <div>
          <img src="https://f1729.github.io/hackathon-bcrp/imagenes/billetes/20a.jpg" style="width: 300px;">
        </div> -->


        <div>
          <img src="https://f1729.github.io/hackathon-bcrp/imagenes/billetes/20b.PNG" style="width: 300px;">
        </div>


        <div class="bcrp-logo reversoNumber">
          <img class="imgRedondo" src="https://f1729.github.io/hackathon-bcrp/imagenes/e_seguridad/p2.png"> 
        </div>

        <div class="bcrp-logo reversomitad">
          <img class="imgRedondo" src="https://f1729.github.io/hackathon-bcrp/imagenes/e_seguridad/p2.png"> 
        </div>

        <div class="bcrp-logo reversoFranja">
          <img class="imgRedondo" src="https://f1729.github.io/hackathon-bcrp/imagenes/e_seguridad/p2.png"> 
        </div>



        <div>
          <span> Marca de Agua</span>
          <br>
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.1.png">
          <br>
          <div>
            hola mundo 
          </div>
        </div>

        <div>
          <span> Marca de Agua</span>
          <br>
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.11.jpg">
          <br>
          <div>
            hola mundo 
          </div>
        </div>

        <div>
          <span> Marca de Agua</span>
          <br>
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.2.png">
          <br>
          <div>
            hola mundo 
          </div>
        </div>

        <div>
          <span> Marca de Agua</span>
          <br>
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.3.1.png">
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.3.2.png">
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.3.3.png">
          <br>
          <div>
            hola mundo 
          </div>
        </div>

        <div>
          <span> Marca de Agua</span>
          <br>
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.4.1.png">
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.4.2.png">
          <br>
          <div>
            hola mundo 
          </div>
        </div>

        <div>
          <span> Marca de Agua</span>
          <br>
          <img class="imgCircle" src="https://f1729.github.io/hackathon-bcrp/codigoSeguridad/20/20.9.png">
          <br>
          <div>
            hola mundo 
          </div>
        </div>




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
      <div id="section-1" v-show="currentPage === 1" style="top: 0;left: 0;position: absolute; z-index: 3;height: 100vh;background: white;padding-top: 100px;width: 100%;">

        <!-- :cropmove="cropImage" -->
        <div v-show="image">
          <vue-cropper
            ref="cropper"
            :src="image"
            alt="Source Image">
          </vue-cropper>
          <!-- <img id="uploadPreview" style="width: 70%;height: auto;"> -->
          
          <!-- <img  id="imageCrop":src="cropImg" style="width: 200px; height: 150px; border: 1px solid gray" alt="Cropped Image" /> -->

          <v-btn color="rgb(26, 35, 126)" style="color: white;" 
              @click="cropImage"> OBTENER CODIGO </v-btn>
          
          <br>
          <br>
          <br>
          <br>

          <div style="text-align: center;">
            <span>Hemos obtenido el siguiente codigo: </span>
            <br>
            <br>
            <div style="width: 200px;text-align: center;margin: 0 auto;">
              <v-text-field
                label="Codigo"
                solo
                v-model="codigoDeBillete"
              ></v-text-field>              
            </div>

          </div>

          <v-btn color="rgb(26, 35, 126)" style="color: white;" 
              @click="verifyMoney"> VERIFICAR </v-btn>

              {{messageSuccess}}
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
import axios from 'axios';

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
    image: 'https://f1729.github.io/hackathon-bcrp/imagenes/billetes/10a.jpg',
    cropImg: '',
    codigoDeBillete: '',
    messageSuccess: '',
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
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      // const can = document.getElementById('imageCrop');
      

      try {
        Tesseract.recognize(this.cropImg, { lang:'spa',
                                            tessedit_char_whitelist: '0123456789QWERTYUIOPASDFGHJKLZXCVBNM'
        })
        .then((result) => {
          console.log('Tesseract done ->', result.text.trim().replace(/\n/g, ''));
          // this.codigoDeBillete = result.text.trim().replace(/\n/g, '');
        });
      } catch (e) {
        console.log(e);
      }

      const sourceForGoogle = this.cropImg.split('data:image/png;base64,')[1];
      axios.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD-UNkhhvPYZ5uIxLrLITxD350HI42W_bQ', 
      {
        "requests": [{
          "features": [{ 
            "type": "TEXT_DETECTION"

          }],
          "image": {
            "content": sourceForGoogle,
          }
        }]
      })
      .then((response) => {
        this.codigoDeBillete = response.data.responses[0].textAnnotations[0].description.replace(/\W/g, '');
        console.log('google done ->', response.data.responses[0].textAnnotations[0].description.replace(/\W/g, ''));



      })
      .catch(function (error) {
        console.log(error);
      });
    },

    verifyMoney() {
        /*
        axios.get('http://34.220.86.67/billetes')
        .then((response) => {
          return response[0].filter(element => element.numeracion === this.codigoDeBillete);
        })
        */

        const fakes = [{"id":1,"denominacion":"20","numeracion":"C3208927E"},{"id":2,"denominacion":"20","numeracion":"B2942453G"},{"id":3,"denominacion":"20","numeracion":"A9638214J"},{"id":4,"denominacion":"20","numeracion":"A0331602A"},{"id":5,"denominacion":"20","numeracion":"A0239612B"},{"id":6,"denominacion":"100","numeracion":"C4692338D"},{"id":7,"denominacion":"100","numeracion":"C0029425D"},{"id":8,"denominacion":"100","numeracion":"A4590096S"},{"id":9,"denominacion":"100","numeracion":"B4864122A"},{"id":10,"denominacion":"100","numeracion":"A2423134B"}];

        const filterInFakes = fakes.filter(element => element.numeracion === this.codigoDeBillete);

        if (filterInFakes.length > 0) {
          this.fail = true;
          console.log(true);
        } else {
          console.log('to validate');
          axios.post('http://ec2-34-220-86-67.us-west-2.compute.amazonaws.com/valida-billete', 
          {
            'denominacion': '20',
            'numeracion': this.codigoDeBillete,
          })
          .then((element) => {  
            this.messageSuccess = element.message;
            console.log('response', element.message);
          });
        }
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
      let ouputFile = new FileReader();
      ouputFile.readAsDataURL(camera.files[0]);
      ouputFile.onload = (event) => {
        // console.log(event.target.result);
        // document.querySelectorAll('.cropper-bg')[0].style.backgroundImage =  `url(${event.target.result})`;
        // document.querySelectorAll('.cropper-hide')[0].style.backgroundImage = `url(${event.target.result})`;
        this.image = '' + event.target.result;
        this.currentPage = 1;
      };
    });
  }
};
</script>
<style type="text/css">
  .cropper-container {
    margin: 0 auto;
  }
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
