<template>
    <div>
        <Header />
        <p>Main component</p>
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from '../shared/Header'
import Footer from '../shared/Footer'

export default {
    name: "OnlineReporting",
    components: { Header, Footer },
}
</script>

<style scoped>

</style>