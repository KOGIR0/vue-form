<template>
    <div>
        <div><input type="text" placeholder="name"></div>
        <div><input type="number" placeholder="age"></div>
        <div><input type="phone" placeholder="phone number"></div>
        <div><input type="email" placeholder="email address"></div>
        <button v-on:click="submit">submit</button>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            line: "Hello, World!"
        }
    },
    methods: {
        submit: function()
        {
            this.line = this.line.split('').reverse().join('');
        }
    }
}
</script>

<style>

</style>