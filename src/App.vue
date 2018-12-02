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
  width: 50px;
  left: 50%;
  margin-left: 100px;
  margin-top: 22px;
}

.anversotrouxecolor{
  position: absolute;
  top: 50%;
  width: 60px;
  left: 50%;
  margin-left: -85px;
  margin-top: -38px;
}

.anversomitad{

  position: absolute;
  top: 50%;
  width: 37px;
  left: 50%;
  margin-left: -152px;
  margin-top: -70px;

}

.anversotira{
  position: absolute;
  top: 50%;
  width: 30px;
  left: 50%;
  margin-left: -42px;
  margin-top: -43px;
}

.anversoMarcaAgua{
  position: absolute;
  top: 50%;
  width: 59px;
  left: 50%;
  margin-left: -143px;
  margin-top: -21px;
}

</style>
