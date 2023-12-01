<template>
    <header class="fixed top-0 w-full bg-white text-gray-800 z-10">
        <nav class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="#" class="flex-shrink-0">
                        <img class="h-12 w-12" src="../../images/logo.jpg" alt="Workflow logo">
                    </a>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <router-Link to="/"
                                class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-200">Accueil</router-Link>

                            <router-Link to="/about"
                                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">À 
                                propos</router-Link>

                            <router-Link to="/choix"
                                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</router-Link>
                            <router-Link to="/contact"
                                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</router-Link>
                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <!----dropdown-->
                    <div class="relative" data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            href="#" type="button" id="dropdownMenuButton2" data-te-dropdown-toggle-ref
                            aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                            <img src="../../images/menu.png" alt="" class="w-8 h-8">
                        </a>
                        <ul class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                            <li>
                                <router-Link
                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-dark  active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    to="/" data-te-dropdown-item-ref>Accueil</router-Link>
                            </li>
                            <li>
                                <router-Link
                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-dark  active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    to="/about" data-te-dropdown-item-ref>À propos</router-Link>
                            </li>
                            <li>
                                <router-Link
                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-dark   active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    to="/choix" data-te-dropdown-item-ref>Services</router-Link>
                            </li>
                            <li>
                                <router-Link
                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-dark   active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    to="/contact" data-te-dropdown-item-ref>Contact</router-Link>
                            </li>
                        </ul>
                    </div>
                    <!----fin dropdown-->
                </div>
            </div>
        </nav>
    </header>




    <!-- acceuil section -->
    <section id="home">
        <h4>REFLET <span class="text-red-700"> HQD</span></h4>
        <h5 class="text-white"><span class="text-red-700">THE EXCELENCE</span> IS OUR DUTY</h5>
        <router-Link to="/contact" class="border-1 border-red-300 text-red-300 p-2 mt-5 hover:text-red-400">Nous
            contacter</router-Link>
        <div class="find_trip flex justify-evenly text-white">
            <router-Link to="/about" class="hover:text-white p-1 hover:bg-red-700">Historique</router-Link>
            <router-Link to="/missions" class="hover:text-white p-1 hover:bg-red-700">Nos missions</router-Link>
            <router-Link to="/valeur" class="hover:text-white p-1 hover:bg-red-700 transition-all">Nos valeurs</router-Link>
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
                    <span style="font-weight: bold; color : red">Reflet HQD</span>
                    <br>
                    <div class="flex mt-2">
                        <img src="../../images/adress.png" alt="" class="w-6 h-6">
                        <p class="text-white ml-1">7 rue george washington, Ampasimazava Est</p>

                    </div>
                    <br>

                    <div class="flex">
                        <img src="../../images/gmail.png" alt="" class="w-6 h-6">
                        <a href="mailto:reflethqd@gmail.com" class="text-white ml-1">
                            reflethqd@gmail.com
                        </a>
                    </div>
                    <br>
                    <div class="flex">
                        <img src="../../images/number.png" alt="" class="w-6 h-6">
                        <p class="text-white ml-1">+261 34 98 077 33<br></p>
                    </div>


                    <div class="mt-4 lien_fb">
                        <h6 class="text-white text-uppercase">Suivez-nous sur les reseau</h6>
                        <br>
                        <i class="fab fa-facebook mr-2"></i>
                        <a href="mailto:reflethqd@gmail.com" class="text-info">Reflet HQD</a>
                    </div>
                </div>
                <div class="col-3 " id="partenaire">
                    <span style="font-weight: bold;color : red">reseau sociaux</span>
                    <ul class="list-unstyled list-inline pt-2">
                        <li>
                            <div class="flex mt-2">
                                <img src="../../images/facebook.png" alt="" class="w-6 h-6"><a href="https://www.facebook.com/reflethqd"
                                    class=" text-white ml-1">facebook</a>
                            </div>
                        </li>
                        <li>
                            <div class="flex mt-4">
                                <img src="../../images/linkedin.png" alt="" class="w-6 h-6"><a href="https://www.linkedin.com/in/eric-florent-raharinirina-2a4594147/?originalSubdomain=mg"
                                class=" text-white ml-1">linkedin</a>
                            </div>
                        </li>
                        <li>
                            <div class="flex mt-4">
                                <img src="../../images/whatsapp.png" alt="" class="w-6 h-6"><a href="#"
                                class=" text-white ml-1">Whatsapp</a>
                            </div>
                        </li>
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
<script setup>
import { onMounted } from "vue";
import {
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";

onMounted(() => {
    initTE({
        Dropdown,
        Ripple
    });
});
</script>

<style>
a.router-link-active {
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
    font-family: 'Roboto';
}

a {
    text-decoration: 0;
}


body {
    background-color: #f8fafc;
}

section {
    margin-top: 50px;
}









.btn-reservation {
    color: #f87171;
    border: 1px solid #f87171;
    padding: 5px 20px;
    transition: 0.5s;
    font-weight: bolder;
    margin-top: 10px;
}

.btn-reservation:hover {
    background-color: #f87171;
    color: #fff;

}

/* Home acceuil CSS */

#home {
    background: linear-gradient(rgba(0, 0, 0, 0.1), #333), url("../../images/cop.jpg");
    background-position: center;
    background-size: cover;
    height: 80vh;
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
}
</style>









