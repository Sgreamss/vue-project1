<template>
    <div class="bg">
        <register></register>
    </div>
</template>

<script>
import Register from "../components/Register.vue"
export default {
    components: {
        Register
    }
}
</script>

<style scoped>
.bg{
    background-image: url("../assets/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}
</style>
