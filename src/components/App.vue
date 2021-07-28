<template>
    <div id="app">
        <div id="navigation">
            <router-link to="/users" class="route">Users</router-link>
            <router-link to="/form" class="route">Form</router-link>
        </div>
        <router-view />
    </div>
</template>


<style lang="less">
#navigation
{
    display: flex;
    flex-direction: row;
    background-color: lightblue;
    .route
    {
        padding: 5px;
        text-decoration: none;
        color: black;
    }
}
</style>