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
    mounted()
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
}
</script>

<style lang="less">
#users-info-table
{
    margin: 0 auto 0 auto ;
}
</style>