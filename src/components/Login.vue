<template>
<div>
    <title>Login Page</title>
    <img src="https://cdn.dribbble.com/users/748354/screenshots/2112660/full.gif" height="250" width="250">
    <strong>
        <h2 style="color: white;">Login Now</h2>
    </strong>
        <br>
        <form v-on:submit.prevent="loginCompleto">
        <label style="color:white" for="userName">User:</label><input type="text" name="userName" v-model="user.name" placeholder="Username" class="userClass" align="center">
        <br>
        <label style="color:white" for="password">Password:</label><input id="pass" type="password" name="password" v-model="user.password" placeholder="Password" class="passClass" align="center">
        <br>
              <button id="button" type="submit" v-on:submit.prevent="loginCompleto">Login</button>
        <br>
        <router-link to="/Register" class="cambio2">Doesn't have an account yet?</router-link>
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
        loginCompleto(){
            alert('Bienvenido otra vez a G4Games!!!!!');
         console.log("El usuario es: " + this.user.name + " contraseña: " + this.user.password);
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
    background-image: url("https://wallpapercave.com/wp/wp2149977.jpg");
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
.userClass{
    background-color:white;
    background-image: url('https://image.flaticon.com/icons/png/512/23/23228.png');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
    border-radius: 10px;
}
.passClass{
    background-color: white;
    background-image: url('https://image.flaticon.com/icons/png/512/23/23228.png');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
    border-radius: 10px;
}

.cambio2{
    background-color:whitesmoke;
    position: relative;
    top: -450px;
    left: -550px;
}

label{
display:inline-block;
width:200px;
margin-right:30px;
text-align:right;
}

</style>

