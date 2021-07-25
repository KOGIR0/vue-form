<template>
    <div>
        <div><input type="text" placeholder="name" v-model="userName"></div>
        <div><input type="number" placeholder="age" v-model="age"></div>
        <div><input type="phone" placeholder="phone number" v-model="phone"></div>
        <div><input type="email" placeholder="email address" v-model="email"></div>
        <button v-on:click="submit">submit</button>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            userName: "",
            age: 0,
            phone: "",
            email: ""
        }
    },
    methods: {
        submit: async function()
        {
            let data = {
                "name": this.userName,
                "age": this.age,
                "phone": this.phone,
                "email": this.email
            }
            let response = await fetch("http://localhost:8000/", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(data)
            });
        }
    }
}
</script>

<style lang="less">

</style>