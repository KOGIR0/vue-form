<template>
    <div>
        <div v-for="(data, index) in users" v-bind:key="index">
            <span>{{data.name}}</span>
            <span>{{data.age}}</span>
            <span>{{data.phone}}</span>
            <span>{{data.email}}</span>
        </div>
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
    beforeMount()
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