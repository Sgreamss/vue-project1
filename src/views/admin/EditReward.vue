<template>
    <div class="bg">
        <edit-reward></edit-reward>
    </div> 
</template>

<script>
import EditReward from '../../components/admin/EditReward.vue'
export default {
    components: {
        EditReward
    }
}
</script>

<style scoped>
.bg {
    height: 100vh;
}
</style>