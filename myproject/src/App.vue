<template>
    <div id="app">
        <router-view/>
        <router-view name="left" style="float:left;width:50%;height: 500px;background: red"/>
        <router-view name="right" style="float:right;width:50%;height: 500px;background: green"/>





        <router-link to="/">连接到首页</router-link>
        <br>
        <router-link to="/hi">连接到hi--1页面</router-link>
        <br>
        <router-link to="/hi1">连接到hi--2页面</router-link>
        <br>
        <router-link to="/hi2">连接到hi--3页面</router-link>


        <router-link :to="{name:'hi1',params:{username:'jspang'}}">跳转hi1</router-link>


        <router-link to="/params/198/444">params</router-link>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
