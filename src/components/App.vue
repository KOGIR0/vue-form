<template>
    <form id="input-form" v-on:submit="submit">
        <div class="input-field">
            <input required type="text" placeholder="name" v-model="userName">
        </div>
        <div class="input-field">
            <input required min="0" max="150" type="number" placeholder="age" v-model="age">
        </div>
        <div class="input-field">
            <input required type="phone" placeholder="phone number" v-model="phone">
        </div>
        <div class="input-field">
            <input required type="email" placeholder="email address" v-model="email">
        </div>
        <button type="submit" class="submit-button">submit</button>
        <div>{{infoMessage}}</div>
    </form>
</template>

<script>
export default {
    data()
    {
        return {
            userName: "",
            age: 0,
            phone: "",
            email: "",
            infoMessage: ""
        }
    },
    methods: {
        submit: async function(e)
        {
            e.preventDefault();
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
            this.infoMessage = "form accepted";
            setTimeout(() => this.infoMessage = "", 5000);
        }
    }
}
</script>

<style lang="less">
#input-form
{
    background-color: orange;
    box-sizing: border-box;
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
    width: 250px;
    text-align: center;

    .input-field
    {
        input
        {
            color: black;
            border: 1px solid darkorange;
            padding: 3px;
            margin: 5px;
        }
    }

    .submit-button
    {
        width: 125px;
        border: none;
        color: black;
        background-color: white;
        border-radius: 2px;
    }

    .submit-button:hover
    {
        background-color: lightgrey;
    }
}
</style>