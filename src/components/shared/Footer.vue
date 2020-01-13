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
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
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
    }
  }
  hr {
    background-color: white;
    margin: 30px 0;
    color: white;
  }
}
</style>