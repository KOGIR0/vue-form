<template>
    <div>
        <table id="users-info-table">
            <tr id="table-header">
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
            <tr v-for="(data, index) in users" v-bind:key="index">
                <td>{{data.name}}</td>
                <td>{{data.age}}</td>
                <td>{{data.phone}}</td>
                <td>{{data.email}}</td>
                <button v-on:click="() => deleteUser(data.id)">Delete</button>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            users: []
        }
    },
    methods: {
        deleteUser: async function(id)
        {
            let data = {
                id: id
            }
            console.log(data);
            await fetch("http://localhost:8000/delete", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(data)
            });
            this.getUsers();
        },
        getUsers: function()
        {
            fetch("http://localhost:8000/")
            .then((res) => {
                res.json().then(data => {
                    console.log(data);
                    this.users = data;
                })
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    mounted()
    {
        this.getUsers();
    }
}
</script>

<style lang="less">
#users-info-table
{
    margin: 0 auto 0 auto ;
}
</style>