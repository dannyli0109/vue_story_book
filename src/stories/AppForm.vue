<template>
    <div class="container">
        <form>
            <div class="row" v-show="!submitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <hr>
                    <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input v-model="userInfo.firstName" type="text" id="first-name" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="last-name">Last Name</label>
                        <input v-model="userInfo.lastName" type="text" id="last-name" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="userInfo.email" type="email" id="email" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="userInfo.password" type="password" id="password" class="form-control">
                    </div>

                    <label>Store data?</label>
                    <div class="radio">
                        <label class="radio-inline"><input type="radio" v-model="storeInDatabase" value="Yes">Yes</label>
                        <label class="radio-inline"><input type="radio" v-model="storeInDatabase" value="No">No</label>
                    </div>

                    <button class="btn btn-primary" @click.prevent="submit">Submit</button>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-show="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userInfo.firstName }} {{ userInfo.lastName }}</p>
                        <p>Mail: {{ userInfo.email }}</p>
                        <p>Password: {{ userInfo.password }}</p>
                        <p>Store in Database?: {{ storeInDatabase }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                },
                storeInDatabase: "Yes",
                submitted: false
            }
        },
        methods: {
            submit() {
                this.submitted = true
            }
        }
    }
</script>

<style>
</style>
