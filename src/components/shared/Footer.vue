<template>
  <div class="footer">
    <div class="nav">
      <a href="#">Lorem</a>
      <a href="#">Lorem</a>
      <a href="#">Lorem Ipsum</a>
    </div>
    <hr>
    <div class="nav">
      <a href="#">Lorem ipsum</a>
    </div>
    <div class="copyright-wrapper">
      <div class="text">
        <span>Copyright © Lorem ipsum</span>
      </div>
      <div class="img">
        <img
          src="../../assets/img/credit_suisse_logo.png"
          alt="Credit Suisse Logo"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common/colors";

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  padding: 30px;
  .nav {
    a {
      font-sizet: 14px;
      margin-right: 30px;
      color: white;
      &:hover {
        color: $gray6;
      }
    }
  }
  hr {
    background-color: white;
    margin: 30px 0;
    color: white;
  }
  .copyright-wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
  }
}
</style>
