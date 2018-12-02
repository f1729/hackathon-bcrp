<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.anversoNumber{
  position: absolute;
  top: 50%;
  width: 7%;
  left: 50%;
  margin-left: 100px;
  margin-top: 38px;
}

.anversotrouxecolor{
  position: absolute;
  top: 50%;
  width: 7%;
  left: 50%;
  margin-left: -80px;
  margin-top: -18px;
}

.anversomitad{

  position: absolute;
  top: 50%;
  width: 7%;
  left: 50%;
  margin-left: -155px;
  margin-top: -70px;

}

.anversotira{
  position: absolute;
  top: 50%;
  width: 7%;
  left: 50%;
  margin-left: -42px;
  margin-top: -45px;
}

.anversoMarcaAgua{
  position: absolute;
  top: 50%;
  width: 7%;
  left: 50%;
  margin-left: -143px;
  margin-top: -13px;
}

.imgRedondo{
  width: 40%;
}


.reversoNumber{
  position: absolute;
  top: 50%;
  width: 7%;
  left: 50%;
  margin-left: 110px;
  margin-top: -67px;
}

.reversomitad{
  position: absolute;
  top: 50%;
  width: 7%;
  left: 50%;
  margin-left: -142px;
  margin-top: 35px;
}

.reversoFranja{
  position: absolute;
  top: 50%;
  width: 7%;
  left: 50%;
  margin-left: 86px;
  margin-top: 35px;
}

.imgCircle{
  // width:300px;
  // height:300px;
  // border-radius:150px;
  // border:10px solid #666;

  width: 100px;
  height: 100px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  
}

.imgseguridad{
  float:flex;
}

.modal{
  background-color: rgba(0, 0, 255, 0.26);
  width: auto;
  height: inherit;
}

.message{
  float:flex;
}


</style>
