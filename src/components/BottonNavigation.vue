<template>
  <v-card height="200px" flat>
    <v-bottom-nav
      :active="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="#1a237e"
        flat
        value="money"
        v-on:click="$emit('change', 'money')"
      >
        <span>Billetes y Monedas</span>
        <v-icon>attach_money</v-icon>
      </v-btn>

      <v-btn
        color="#1a237e"
        flat
        value="capture"
        v-on:click="capturePhoto()"
      >
        <input id="inputCamera" type="file" accept="image/*" capture style="display:none"> 
        <span>Capturar</span>
        <v-icon>camera_alt</v-icon>
      </v-btn>

      <!-- <v-btn
        color="#1a237e"
        flat
        value="nearby"
      >
      14cm x 6.5cm
      140mm x 65mm
        <span>Video</span>
        <v-icon>play_circle_filled</v-icon>
      </v-btn> -->
    </v-bottom-nav>
  </v-card>
</template>
<script>
  let camera;
  export default {
    props: ['bottomNav'],
    data: () => ({
      // currentPage: '',
    }),
    mounted() {
      camera = document.getElementById('inputCamera');
      camera.addEventListener('change', (file) => {
        const ouputFile = new FileReader();
        ouputFile.readAsDataURL(camera.files[0]);
        ouputFile.onload = (event) => {
          document.getElementById('uploadPreview').src = event.target.result;
        };

        console.log('image done!', file);
      });
    },
    methods: {
      capturePhoto() {
        this.$emit('change', 'capture');
        camera.click();
      }
    }
  };
</script>
<style>
  .v-item-group.v-bottom-nav--absolute {
    background-color: white !important;
  }
</style>