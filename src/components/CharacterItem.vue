<script>
export default {
    name: 'CharacterItem',
    props: {
        character_item: Object
    }

}
</script>

<template>
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card">
            <img :src="character_item.image" alt="">
            <div>
                {{ character_item.id }}
                {{ character_item.name }}
                {{ character_item.species }}
                {{ character_item.status }}
            </div>
        </div>
    </div>
</template>



<style scoped>
.card {
    background-color: white;
    transition: all 1s;

    &:hover {
        filter: drop-shadow(0 0 15px #507183);
        scale: 1.02;
    }

    >img {

        width: 100%;
    }

    >div {
        padding: 1rem;
    }
}
</style>