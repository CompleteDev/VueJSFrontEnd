<template>
    <Navigation />
    
    <router-view />
    <div class="mt-5"></div>
    <Footer />
</template>

<script>
    import Navigation from "./components/Navigation";
    import Footer from "./components/Footer"
    
    export default {
        components: { Navigation, Footer },
    };
</script>

<style lang="scss">

</style>
