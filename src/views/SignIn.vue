<template>
    <div class="bg">
        <login></login>
    </div> 
</template>

<script>
import login from '../components/LogIn.vue'
export default {
    components: {
        login
    }
}
</script>

<style scoped>
.bg {
    background-image: url("../assets/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}
</style>