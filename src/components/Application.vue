<template>
    <Layout>
        <section id="a-propos">
            <h1 class="title">Developpement d'application sur mesure</h1>
            <div class="img-desc">
                <div class="">
                    <h3>Vous avez une idée brillante pour une application, mais vous manquez de ressources ou d'expertise pour la concrétiser ? Nous sommes là pour transformer vos concepts en des applications interactives et innovantes.
                        <br>
                        <br>
                        Chez <span class="text-danger">refletHQD</span>, nous sommes passionnés par la création d'applications qui repoussent les limites, simplifient la vie quotidienne et transforment les idées en réalité numérique. Notre équipe d'experts en développement d'applications est dévouée à vous offrir des solutions sur mesure, quels que soient vos besoins ou votre domaine d'activité.
                    </h3>
                    <p>voici les 3 pricipaux types d'applications que nous pouvons vous fournir : </p>
                    <ol class="mt-4 mx-4" style="font-size: 15px;">
                        <li>Developpement d'application desktop</li>
                        <li>Developpement d'application mobile</li>
                        <li>Developpement d'application web</li>

                    </ol>
                    <p class="mt-4 mb-3" style="font-size: 15px;">Reflet HQD est une startup de prestation de service, qui sont la
                        formation professionnelle et le développement informatique</p>
                    <router-Link to="/service" class="btn-reservation mt-5">retour</router-Link >
                </div>
            </div>

        </section>

    </Layout>
</template>
  
<script>
import Layout from './layout/Layout.vue';

export default {
    name: 'application',
    components: { Layout }
}

</script>
  
<style></style>