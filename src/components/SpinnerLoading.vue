<script>
export default {
    name: 'SpinnerLoading'
}
</script>

<template>
    <div class="loader">
        <i class="fa-solid fa-spinner fa-spin" style="color: #74C0FC;"></i>
        <div>LOADING...</div>
    </div>
</template>

<style scoped>
.loader {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    >div {
        padding: 0 1rem;
    }

}
</style>