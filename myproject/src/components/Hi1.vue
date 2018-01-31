<template>
    <h1>{{$route.params.username}}</h1>
</template>
<script type="text/javascript">
    export default{
        name: 'Hi1',
        data(){
            return {
                msg: "I'm hi1"
            }
        }
    }
</script>
<style scoped="">

</style>