<template>
<div>
    <title>Register Page</title>
    <img src="https://cdn.dribbble.com/users/748354/screenshots/2112660/full.gif" height="250" width="250">
    <strong>
        <h2 style="color: white;">Register Now</h2>
    </strong>
        <br>
        <form v-on:submit.prevent="registerCompleto">
        <label style="color:white" for="userName">New User:</label><input type="text" name="userName" v-model="user.name" placeholder="Enter Username" class="userRegClass" align="center">
        <br>
        <label style="color:white" for="password">New Password:</label><input id="pass" type="password" name="password" v-model="user.password" placeholder="Enter Password" class="passRegClass" align="center">
        <br>
        <label style="color:white" for="password">Confirm Password:</label><input id="pass" type="password" name="password" v-model="user.passwordConfirm" placeholder="Confirm Password" class="passConfClass" align="center">
        <br>
        <button id="button" type="submit" v-on:submit.prevent="registerCompleto">Register</button>
        <br>
         <router-link to="/Login" class="cambio">Already have an account?</router-link>
        </form>      
</div>
</template>

<script>
export default {
    data(){
        return{
            user:{
            }
        }
    },
    methods:{
        registerCompleto(){
            alert('Bienvenido a G4Games esperamos que te quedes con nosotros!!!!!');
            console.log("El usuario es: " + this.user.name + " contraseña: " + this.user.password + "la confirmacion es: " + this.user.passwordConfirm);
              var fileText = new Blob([this.user.name + " " + this.user.password], { type: "application/json" });
             var textURL = window.URL.createObjectURL(fileText);
             var downloadLink = document.createElement("a");
            downloadLink.download = "myJson.json";
            downloadLink.innerHTML = "";
            downloadLink.href = textURL;
            document.body.appendChild(downloadLink);
            downloadLink.click();
         this.user={};
        }
    }

}
</script>

<style>
body{
    background-image: url("https://i.pinimg.com/originals/4e/e3/b3/4ee3b34ea9ec1850fc15e90aa088f752.jpg");
}

button{
    background-color:whitesmoke;
    border:none;
    color:black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    position: relative;
    top: 10px;
    left: 100px;
    border-radius: 10px;
}
.cambio{
    background-color:whitesmoke;
    position: relative;
    top: -450px;
    left: -550px;
}
.userRegClass{
    background-color:white;
    background-image: url('https://image.flaticon.com/icons/png/512/23/23228.png');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
    border-radius: 10px;
}
.passRegClass{
    background-color: white;
    background-image: url('https://image.flaticon.com/icons/png/512/23/23228.png');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
    border-radius: 10px;
}
.passConfClass{
    background-color: white;
    background-image: url('https://image.flaticon.com/icons/png/512/23/23228.png');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
    border-radius: 10px;
}

label{
display:inline-block;
width:200px;
margin-right:30px;
text-align:right;
}

</style>
