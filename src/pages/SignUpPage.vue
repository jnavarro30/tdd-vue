<template>
    <form>
            <h1>Sign Up</h1>
        <label for="username">Username</label>
        <input id="username" placeholder="username" v-model="username"/>

        <label for="email">Email</label>
        <input id="email" placeholder="email" v-model="email"/>

        <label for="password">Password</label>
        <input id="password" type="password" placeholder="password" v-model="password" />

        <label for="password-repeat">Password Repeat</label>
        <input id="password-repeat" type="password" placeholder="password" v-model="passwordRepeat" />

        <button :disabled="isDisabled" @click.prevent="submit">Sign Up</button>

        {{ username }}
    </form>
</template>

<script>
import axios from 'axios'
import { fixRequestBody } from 'http-proxy-middleware'

export default {
    name: 'SignUpPage',
    data() {
        return {
            username: "",
            email: "",
            password: "",
            passwordRepeat: "",
        }
    },
    methods: {
        // onChangeUsername(event) {
        //     this.username = event.target.value;
        // },
        submit() {
            const requestBody = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            // axios.post('/api/1.0/users', {
            //     username: this.username,
            //     email: this.email,
            //     password: this.password
            // })
            fetch('/api/1.0/users', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                     'Content-Type': 'application/json'
                }
            })
        }
    },
    computed: {
        isDisabled() {
            return this.password && this.passwordRepeat ? this.password !== this.passwordRepeat : true
        }
    }
} 
</script>


<style scoped>
    form {
        display: grid;
        height: 50vh;
        justify-content: center;
    }

    button, label {
        margin-top: 1rem;
    }
</style>