<template>
    <transition appear>
        <div id="app">
            <Header />
            <router-view />
            <Footer />
        </div>
    </transition>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
    name: 'Layout',
    components: { Header, Footer }
}
</script>

<style lang="scss">
body {
    background-color: pink;
}
</style>
