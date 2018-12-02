<template>
  <v-toolbar dark color="#1a237e">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">BCRP</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="capturePhoto()">
      <v-icon>camera_alt</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>translate</v-icon>
    </v-btn>
    <!-- <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn> -->
  </v-toolbar>
</template>
<script>
  export default {
    name: 'ToolBar',
    props: [],
    data: () => ({
      // currentPage: '',
    }),
    methods: {
      playVideo() {
        this.$emit('clickPlay');
      },
      capturePhoto() {
        this.$emit('capturePhoto');
      }
    }
  };
</script>