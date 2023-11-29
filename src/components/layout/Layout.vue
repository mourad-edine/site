<template>
    <header>
        <div class="flex">
            <p to="/" class="mt-2">RefleHQD</p>
            <img src="../../images/logo.jpg" alt="" width="40" height="40">
        </div>
        <ul class="menu" style="margin-bottom: 0;">
            <li><router-Link to="/" class="p-3 hover:bg-red-700 hover:text-white">Acceuil</router-Link></li>
            <li><router-Link to="/about" class="p-3 hover:bg-red-700 hover:text-white transition-all">à propos</router-Link></li>
            <li><router-Link to="/service" class="p-3 hover:bg-red-700 hover:text-white">nos services</router-Link></li>
            <li><router-Link to="/contact" class="p-3 hover:bg-red-700 hover:text-white">contact</router-Link></li>
        </ul>
        <div class="responsive-menu"></div>
    </header>
    <!-- acceuil section -->
    <section id="home">
        <h4>THE EXCELENCE <span class="text-red-700"> IS OUR DUTY</span></h4>
        <p>reussite perceverance polyvalence excelence </p>
        <p>Nous sommes là pour vous guider dans un monde meilleur</p>
        <router-Link to="/contact" class="btn-reservation home-btn">nous contacter</router-Link>
        <div class="find_trip flex justify-evenly text-white">
            <router-Link to="/about" class="hover:text-white p-1 hover:bg-red-700">historiques</router-Link>
            <router-Link to="/missions" class="hover:text-white p-1 hover:bg-red-700">nos missions</router-Link>
            <router-Link to="/valeur" class="hover:text-white p-1 hover:bg-red-700 transition-all">nos valeurs</router-Link>
        </div>
    </section>

    <!---header-->

    <slot />
    <!--footer-->

    <footer class="" style="font-size: 16px; background : #222;">
        <div class="container p-4">
            <div class="row">
                <div class="col-2">

                </div>
                <div class="col-7">
                    <span style="font-weight: bold; color : red">RefletHQD</span> <br>
                    <p class="text-white">7 rue george washington, Ampasimazava Est</p>
                    <div class="pt-3">

                        <a href="mailto:reflethqd@gmail.com" class="text-white">
                            reflethqd@gmail.com</a><br>
                        <p class="text-white">+261 34 98 077 33<br></p>
                    </div>

                    <div class="mt-4 lien_fb">
                        <h6 class="text-white text-uppercase">Suivez-nous sur les reseau</h6>
                        <small><br>
                            <i class="fab fa-facebook mr-2"></i>
                            <a href="mailto:reflethqd@gmail.com" class="text-info">Reflet HQD</a>
                        </small>
                    </div>
                </div>
                <div class="col-3 " id="partenaire">
                    <span style="font-weight: bold;color : red">reseau sociaux</span>
                    <ul class="list-unstyled list-inline pt-2">
                        <li><a href="#" class=" text-white">facebook</a></li>
                        <li><a href="#" class=" text-white">twitter </a></li>
                        <li><a href="#" class=" text-white">linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright text-center p-4 text-white" id="drCopie">
            &copy; Copyright by:&copy;<a href="https://www.facebook.com/reflethqd/" class="text-white"> Reflet HQD</a>, 2023
            <p>Tous droits reservés</p>
        </div>
    </footer>
    <!--------fin du footer........-->
</template>

<script>


export default {
    name: 'Layout',

}


</script>


<style>
a.router-link-active{
    background: #b91c1c;
    color: white;
}


.titre {
    font-size: 18px;
    font-weight: bold;
}

.bout:hover {
    color: red;
    font-size: 14px;
    border-bottom: red solid;
    transition: all 1s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: 0;
}


body {
    background-color: #f8fafc;
    font-family: "montserrat";
}

section {
    margin-top: 50px;
}

header {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 5%;
    border-bottom: solid red;

}

header .logo a span {
    color: black;
}

.menu {
    display: flex;
    align-items: center;
}

.menu li {
    margin: 0 15px;
    list-style-type: none;
}

.menu li a {
    color: black;
    font-size: 14px;
}

.btn-reservation {
    color: #f87171;
    font-size: 14px;
    border: 1px solid #f87171;
    padding: 5px 20px;
    transition: 0.5s;
    font-weight: bolder;
}

.btn-reservation:hover {
    background-color: #f87171;
    color: #fff;

}

/* Home acceuil CSS */

#home {
    background: linear-gradient(rgba(0, 0, 0, 0.1), #333), url("../../images/mr.jpg");
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

}


#home h2 {
    font-size: 45px;
    margin-bottom: 10px;
    -webkit-text-stroke: #fff 0.02px;
    color: transparent;
    text-transform: lowercase;
}

#home h4 {
    font-size: 50px;
    color: #fff;
    margin-bottom: 10px;
    text-transform: capitalize;
}



#home p {
    color: #fff;
    margin-bottom: 10px;
    font-size: 12px;
}



.find_trip {
    background-color: #222;
    padding: 20px;
    width: 70%;
    position: absolute;
    bottom: -50px;
}



/*A propos CSS*/
#a-propos {
    margin-top: 100px;
    margin-bottom: 50px;
    padding: 0 10%;
    width: 100%;
}

.title {
    text-transform: capitalize;
    margin: 70px 0;
    font-weight: bold;
    color: red;
    position: relative;
    margin-left: 15px;
    font-size: 18px;

}

.title::after {
    position: absolute;
    left: -15px;
    content: "";
    height: 100%;
    background-color: #000;
    width: 5px;
}

.img-desc {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}


.img-desc .right {
    width: 57%;
}

/*Destination CSS*/
#popular-destination {
    padding: 0 10%;
    margin-bottom: 50px;
}

#popular-destination .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
}

#popular-destination .content .box {
    overflow: hidden;
    position: relative;
    height: 250px;
    transition: 0.5s;
}

#popular-destination .content .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.box .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    text-align: center;
    align-items: center;
    transform: translateX(100%);
    transition: 0.5s;
}

.box .content p:nth-child(3) {
    margin-bottom: 25px;
}

.box .content a {
    margin-top: 60px;
    padding: 10px 60px;
    border: 2px solid red;
    color: red;
    font-weight: bold;
}

.box:hover {
    box-shadow: 0 0 10px red;
}

.box:hover .content {
    transform: translateX(0);
}

/* Contact CSS */

.responsive-menu {
    display: none;
}

/*Responsive*/
@media (max-width:750px) {

    .menu li a {
        color: white;
        font-size: 14px;
    }

    header .menu {
        display: none;
    }

    /*Home responsive*/
    #home h2 {
        font-size: 18px;
        -webkit-text-stroke: 0;
        color: #fff;
    }

    #home h4 {
        font-size: 28px;
    }

    #home p {
        text-align: center;
        font-size: 10px;
    }

    .find_trip {
        width: 100%;
        height: 80px;
    }

    .home-btn {
        display: block;
    }

    /*Responsive A propos*/

    /*Responsive menu*/
    .responsive-menu {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
    }

    .responsive-menu::after {
        position: absolute;
        content: "";
        height: 3px;
        background-color: red;
        width: 28px;
        box-shadow: 0 10px 0 red;
        transform: translateY(-10px);
        transition: 0.5s;
    }

    .responsive-menu.active::after {
        box-shadow: 0 0 0 red;
        transform: rotate(45deg);
    }

    .responsive-menu::before {
        position: absolute;
        content: "";
        height: 3px;
        background-color: red;
        width: 28px;
        transform: translateY(10px);
        transition: 0.5s;
    }

    .responsive-menu.active::before {
        transform: rotate(-45deg);
    }

    header .menu.responsive {
        display: flex;
        position: relative;
        top: -110px;
        right: 0;
        flex-direction: column;
        background-color: #222;
        align-items: unset;
        animation: animate-menu .5s forwards;
    }

    header .menu.responsive li {
        margin: 20px;
        width: 100px;
        padding-left: 20px;
    }

    @keyframes animate-menu {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(100%);
        }
    }
}








:root {
    --circle-size: clamp(1.5rem, 5vw, 3rem);
    --spacing: clamp(0.25rem, 2vw, 0.5rem);
}

.c-stepper {
    display: flex;
}

.c-stepper__item {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;


    &:before {
        --size: 3rem;
        content: "";
        display: block;
        width: var(--circle-size);
        height: var(--circle-size);
        border-radius: 50%;
        background-color: red;
        opacity: 0.5;
        margin: 0 auto 1rem;
    }

    &:not(:last-child) {
        &:after {
            content: "";
            position: relative;
            top: calc(var(--circle-size) / 2);
            width: calc(100% - var(--circle-size) - calc(var(--spacing) * 2));
            left: calc(50% + calc(var(--circle-size) / 2 + var(--spacing)));
            height: 2px;
            background-color: #e0e0e0;
            order: -1;
        }
    }
}



.c-stepper__title {
    font-weight: bold;
    font-size: clamp(1rem, 4vw, 1.25rem);
    margin-bottom: 0.5rem;
    color: white;
}

.c-stepper__desc {
    color: #000;
    font-size: 20px;
    padding-left: var(--spacing);
    padding-right: var(--spacing);
}

.somme__title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #000;
}

.somme__desc {
    color: #000;
    font-size: 15px;
    padding-left: var(--spacing);
    padding-right: var(--spacing);
}

/*** Non-demo CSS ***/

.wrapper {
    max-width: 80%;
    margin: 2rem auto 0;
}


*,
*:before,
*:after {
    box-sizing: border-box;
}</style>









