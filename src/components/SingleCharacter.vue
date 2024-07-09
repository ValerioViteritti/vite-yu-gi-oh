<script>
export default {
    name: 'SingleCharacter',
    props: ['info'],

}


</script>

<template>
    <div class="character text-center">
        <img class="img-fluid mb-3" :src="info.card_images[0].image_url" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <div class="font-weight-bold">{{ info.archetype }}</div>
    </div>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.character{

    img{

        height: 400px;
    }
}
</style>