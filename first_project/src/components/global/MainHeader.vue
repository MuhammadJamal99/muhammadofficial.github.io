<template>
    <section id="header">
        <ul id="nav">
            <router-link to="/" tag="li" exact>Home</router-link>
            |
            <router-link to="/about" tag="li">About</router-link>
            |
            <router-link to="/help" tag="li" replace>Help</router-link>
        </ul>
    </section>
</template>

<script>
export default {
    name: "MainHeader"
};
</script>
