<template>
   <div>
       <title>HTML5 Layout</title>
    <div class="wrapper">
        <header>
            <div class="top">
            </div>
            <div>
                    <nav class="nv">
                        <ul>
                            <li class="b1"><router-link to="/Register" class="camb1">Register</router-link></li>
                            <li class="b2"><router-link to="/Login" class="camb2">Login</router-link></li>
                        </ul>
                    </nav>
            </div>
        </header>
        <section class="games">
            <article>
                <figure class="fig">
                    <img class="principal" src="https://cdn.dribbble.com/users/748354/screenshots/2112660/full.gif" height="210" width="270" border-radius="5" />
                </figure>
                <hgroup>
                    <h2 style="color:white">Welcome to G4Games</h2>
                    <h3 style="color:#b6bbdf">The place where you learn how to be professional at your style</h3>
                </hgroup>
                <p style="color:#b6bbdf">In this page you'll find old and new school game that may interest you.</p>
            </article>
            <article>
                <figure class="fig2">
                    <img class="crash" src="https://i.pinimg.com/originals/26/d6/81/26d681bd3f7ced9f669780e7695327f0.gif" height="200" width="260" border-radius="5" />
                </figure>
                <hgroup>
                    <h2 style="color:white">Old school</h2>
                    <h3 style="color:#b6bbdf">The Crashing beginnings</h3>
                </hgroup>
                <p style="color:#b6bbdf">There are some things a true gamer should know but the most important is to appreciate the origins.
                    Crash Bandicoot is an example of those that have the title you must play because this great classic
                    was the childhood for most of people who had a playstation this platform game was the beginning and stil has a lot of impact in our days.
                </p>
            </article>
            <article>
                <figure class="fig3">
                    <img class="leon" src="https://thumbs.gfycat.com/AltruisticScholarlyGarpike-max-1mb.gif" height="200" width="260" border-radius="5"/>
                </figure>
                <hgroup>
                    <h2 style="color:white">New school</h2>
                    <h3 style="color:#b6bbdf">The S.T.A.R.S of these days</h3>
                </hgroup>
                <p style="color:#b6bbdf">Despite Resident Evil 2 is an Old school game also is a good example about nostalgia and the needing to bring back classics to the modern era the pass of time change our perspective of of gameplay playing back this game in the original Playstation would be strange to a lot of people including those who are beginning in videogames. So theres the reason for the remakes bring back and revive memories with the new perspective.</p>
            </article>
        </section>
        <aside>
            <section class="popular-recipes">
                <h2 style="color:white">2019 Games</h2>
                <a href="http://www.residentevil2.com/" style="color:#b6bbdf">Resident Evil 2 Remake</a>
                <a href="https://www.crashbandicoot.com/crashteamracing" style="color:#b6bbdf">Crash Team Racing</a>
                <a href="http://www.devilmaycry5.com/" style="color:#b6bbdf">Devil May Cry 5</a>
                <a href="https://www.sekirothegame.com/" style="color:#b6bbdf">Sekiro Shadows Die Twice</a>
            </section>
            <section class="contact-details">
                <h2 style="color:white">About Us</h2>
                <p style="color:#b6bbdf">We're students that only want to play :(</p>
            </section>
        </aside>
        <footer class="foo">
            &copy; G4Games Co.
        </footer>
    </div>
   </div>
</template>

<script>
export default {
}
</script>

<style>
figcaption {
    display: block;
}

body {
    color: #666666;
    background-color: #f9f8f6;
    background-image: url("http://image.noelshack.com/fichiers/2013/13/1364329736-thief.jpg");
    background-position: center;
    font-family: Georgia, Times, serif;
    line-height: 1.4em;
    margin: 0px;
    background-size: 1500px 1300px; 
}

.wrapper {
    width: 940px;
    margin: 20px auto 20px auto;
    border: 2px solid #000000;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.8);
    overflow-y:auto;
    border-radius: 10px;
}

.principal{
    border-radius: 10px;
    align-content: center;
    align-items: center;
}

.crash{
    border-radius: 10px;
    align-content: center;
    align-items: center;
}

.leon{
    border-radius: 10px;
    align-content: center;
    align-items: center;
}

.nv{
    background-color: #eeeeee;
}

.fig{
    border-radius: 10px;
    border: 1px solid white;
    padding: 0.1em;
    height: 210px;
    width: 270px;
}

.fig2{
    border-radius: 10px;
    border: 1px solid white;
    padding: 0.1em;
    height: 200px;
    width: 260px;
}

.fig3{
    border-radius: 10px;
    border: 1px solid white;
    padding: 0.1em;
    height: 200px;
    width: 260px;
}

header {
    height: 250px;
}

.top{
    background-image: url(https://media1.tenor.com/images/336ce75a6339238c64b4ad40c0e178dc/tenor.gif);
    height: 200px;
    background-repeat: no-repeat;
    background-size: 950px 300px;
    background-position: center;
}

h1 {
    text-indent: -9999px;
    width: 940px;
    height: 130px;
    margin: 0px;
}

nav,
footer {
    clear: both;
    color: #ffffff;
    background-color: #aeaca8;
    height: 30px;
}

nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
}

nav li {
    display: inline;
    margin-right: 40px;
}

nav li a {
    color: #ffffff;
}

nav li a:hover,
nav li a.current {
    color: #000000;
}

section.games {
    float: left;
    width: 659px;
    border-right: 1px solid #eeeeee;
}

article {
    clear: both;
    overflow: auto;
    width: 100%;
}

hgroup {
    margin-top: 40px;
}

figure {
    float: left;
    width: 290px;
    height: 220px;
    padding: 5px;
    margin: 20px;
    border: 1px solid #eeeeee;
}

figcaption {
    font-size: 90%;
    text-align: left;
}

aside {
    width: 230px;
    float: left;
    padding: 0px 0px 0px 20px;
}

aside section a {
    display: block;
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
}

aside section a:hover {
    color: #985d6a;
    background-color: #efefef;
}

a {
    color: #de6581;
    text-decoration: none;
}

h1,
h2,
h3 {
    font-weight: normal;
}

h2 {
    margin: 10px 0px 5px 0px;
    padding: 0px;
}

h3 {
    margin: 0px 0px 10px 0px;
    color: #de6581;
}

aside h2 {
    padding: 30px 0px 10px 0px;
    color: #de6581;
}

footer {
    font-size: 80%;
    padding: 7px 0px 0px 20px;
}

.camb1{
    color: #000000;
    position: absolute;
    left: 220px;
}

.camb2{
    color:#000000;
    position: absolute;
    left:1090px;
}

.foo{
    background-color: #eeeeee;
    color: #000000;
}

</style>

