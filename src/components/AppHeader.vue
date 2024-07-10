<script>
export default {
    name: 'AppHeader',
    props: {message: String},
}


</script>

<template>
    <header class="container">
        <img src="https://images.ygoprodeck.com/images/assets/ygoprodeck_header_logo.png?v=1.13" alt="Logo">
        <span class=" my-5"> {{ message }}</span>
    </header>

</template>

<style scoped lang="scss">
header{
    height: 60px;
    margin-left: 0;
    

    img{
        width: 100px;
        margin-bottom: 10px;
    }

    span{
        font-size: 2.2rem;
        margin-left: 20px;
        
        
    }
}
</style>