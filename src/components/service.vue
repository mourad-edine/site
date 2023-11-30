<template>
<Layout>
    <section id="a-propos">
      <h1 class="title">formation proffessionnelle</h1>
      <div class="img-desc">
        <div class="">
          <h4>Par définition une formation est une forme d’apprentissage à la fois structurée et institutionnalisée. Et
            une
            formation professionnelle est un processus d’acquisition de connaissances et de compétences indispensables
            dans
            un métier spécifique ou plus largement sur le marché de l’emploi. Reflet HQD offre des formations permettant
            de
            structurer des parcours qui tiennent en considération à la fois des objectifs de formation et des acquis de
            l’apprenant. En le divisant par module, elle est une condition essentielle de l’individualisation des
            parcours.
          </h4>
          <p class="mt-3">Reflet HQD est une startup de prestation de service, qui sont la formation
            professionnelle et le développement informatique</p>
        </div>
      </div>

    </section>

    <section id="">
      <h1 class="title" style="margin-left: 170px;">Les études peuvent se derouler comme suit</h1>
      <div class="wrapper option-1 option-1-1">
        <ol class="c-stepper">
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">Etape 1</h3>
            <p class="c-stepper__desc">Définir les objectifs spécifiques</p>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">Etape 2</h3>
            <p class="c-stepper__desc">Établir des critères de mesure</p>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">etape 3</h3>
            <p class="c-stepper__desc">Planifier l'application des apprentissages </p>
          </li>
        </ol>
      </div>
    </section>


    <!-- section formation -->

    <section>
      <h1 class="title" style="margin-left: 170px;">Nos formations</h1>
      <div class="grid sm:grid-cols-3 ml-10 mr-10 sm:ml-20">
        <div class="max-w-sm rounded overflow-hidden mb-4 mt-3 shadow-lg">
          <img class="w-full" src="../images/OIP.jpg" alt="Sunset in the mountains">
          <div class="px-3 py-1">
            <div class="font-bold text-xl text-red-700">Cours de langues</div>
          </div>
          <div class="">
            <span
              class="flex justify-center border-1 border-red-700 rounded p-2 text-red-700 font-semibold m-3">plus d'informatisation</span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden mb-4 mt-3 shadow-lg">
          <img class="w-full" src="../images/infor.jpg" alt="Sunset in the mountains">
          <div class="px-3 py-1">
            <div class="font-bold text-xl">Programmation informatique</div>
          </div>
          <div class="">
            <span
              class="flex justify-center border-1 border-red-700 rounded p-2 text-red-700 font-semibold m-3">Plus d'information</span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden mb-4 mt-3 shadow-lg">
          <img class="w-full" src="../images/word.jpg" alt="Sunset in the mountains">
          <div class="px-3 py-1">
            <div class="font-bold text-xl">Cours en informatique bureautique</div>
          </div>
          <div class="">
            <span
              class="flex justify-center border-1 border-red-700 rounded p-2 text-red-700 font-semibold m-3">plus d'information</span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden mb-4 mt-3 shadow-lg">
          <img class="w-full" src="../images/dev.jpg" alt="Sunset in the mountains">
          <div class="px-3 py-1">
            <div class="font-bold text-xl">Development personnelle</div>
          </div>
          <div class="">
            <span
              class="flex justify-center border-1 border-red-700 rounded p-2 text-red-700 font-semibold m-3">plus d'information</span>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import Layout from './layout/Layout.vue';

export default {
  name: 'service',
  components : {
    Layout
  }
}

</script>
