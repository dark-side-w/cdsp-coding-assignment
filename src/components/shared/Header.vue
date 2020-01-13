<template>
  <div class="header">
    <div class="nav">
      <router-link to="/">
        <img
          class="home-img"
          src="../../assets/img/home.png"
        >
      </router-link>
      <router-link to="/">
        Home
      </router-link>
    </div>
    <div class="logo-wrapper">
      <router-link to="/">
        <img
          src="../../assets/img/credit_suisse_logo_white.png"
          alt="Credit Suisse Logo"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  background-color: black;
  height: 30px;
  padding: 0 30px;
  line-height: 30px;
  .nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    a {
      color: white;
      font-size: 10px;
      font-weight: 800;
    }
    .home-img {
      margin-right: 10px;
      height: 20px;
    }
  }
  .logo-wrapper {
    float: right;
    margin: 30px 0;
    img {
      width: 200px;
    }
  }
}
</style>
