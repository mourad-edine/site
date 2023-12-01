<template>
    <Layout>
        <section id="a-propos">
            <h1 class="title">Choix de services</h1>
            <div class="">
                <div class="sm:grid md:grid-cols-1 lg:grid-cols-2 grid-cols-2 mb-72">
                    <div class="flex sm:ml-28 md:ml-20 shadow-md sm:w-96 h-24">
                        <div class="w-20 h-20">
                            <img src="../images/logo.jpg" alt="" class="w-16 h-16 m-2">
                        </div>
                        <div class="ml-5">
                            <p class="text-red-700 font-bold mb-4">Formation professionnelle</p>
                            <router-Link to="/service" class=" bg-red-700 text-white rounded p-2 w-20 ml-10">Voir plus</router-Link>
                        </div>
                    </div>
                    <div class="flex sm:ml-20 shadow-md sm:w-96 h-24">
                        <div class="w-20 h-20">
                            <img src="../images/logo.jpg" alt="" class="w-16 h-16 m-2">
                        </div>
                        <div class="ml-5">
                            <p class="text-red-700 font-bold mt-1 mb-4">Developpement d'application</p>
                            <router-Link to="/dev" class=" bg-red-700 text-white rounded p-2 w-20 ml-10  mt-3">Voir plus</router-Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </Layout>
</template>
  
<script>
import Layout from './layout/Layout.vue';

export default {
    name: 'choix',
    components: { Layout }
}

</script>
  
<style></style>