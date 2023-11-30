<template>
  <Layout>
    <section id="a-propos">
      <h1 class="title">formation proffessionnelle</h1>
      <div class="img-desc">
        <div class="right">
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
          <p style="font-size: 12px;">Reflet HQD est une startup de prestation de service, qui sont la formation
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


    <!-- section destination -->
    <section id="popular-destination">
      <h1 class="title">Listes des formations que nous vous proposons</h1>
      <div class="content" style="font-size: 15px;">
        <!-- box -->
        <div class="">
          <div class="content">
            <div>
              <h4 class="titre">formation sur le developpement personnel </h4>
              <p>cette formation consiste à maitriser la communication interne et externe de l’entreprise telle que la
                formation de rédaction d’un rapport, d’un communiqué, mailing, et les dossiers de candidature pour une
                demande d’emploi …</p>
              <router-Link to="/developpement" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">en savoir plus</router-Link>
            </div>
          </div>
        </div>
        <!-- box -->
        <!-- box -->
        <div class="">
          <div class="content">
            <div>
              <h4 class="titre">langue étragère</h4>
              <p>le français et l’anglais, les deux langues indispensables pour tous éventuels apprentis en quête d’une
                future vie professionnelle enrichissante. Ces formations sont ouvertes à tous ceux souhaitant apprendre et
                maitriser ces langues, parce que l’anglais est la première langue la plus utilisé dans le monde entier
                surtout dans le marché du travail et le français est la langue d’enseignement et l’une des langues
                officielles de Madagascar. </p>
                <router-Link to="/langue" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">en savoir plus</router-Link>
            </div>
          </div>
        </div>
        <!-- box -->
        <!-- box -->
        <div class="">
          <div class="content">
            <div>
              <h4 class="titre">Module de formation en informatique bureautique </h4>
              <p>il s’agit d’une formation basée sur le software tel que le Microsoft Word, Microsoft Excel, Microsoft
                Powerpoint et des astuces sur la maintenance de l’ordinateur pour les niveaux basique et avancé.</p>
                <router-Link to="/bureautique" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">en savoir plus</router-Link>
            </div>
          </div>
        </div>

        <div class="">
          <div class="content">
            <div>
              <h4 class="titre">Fromation en Programmation informatique </h4>
              <p>avoir une connaissance dans le monde de la technologie était auparavant facultative, mais à nos jours une
                personne ignorante de l’informatique est semblable à une personne analphabète. Il s’agit de l’ensemble de
                démarches écrites qui seront ensuite réalisées par un ordinateur. Programmer comporte donc à écrire des
                algorithmes informatiques. </p>
              <router-Link to="/programmation" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">en savoir plus</router-Link>
            </div>
          </div>
        </div>

        <div class="">
          <div class="content">
            <div>
              <h4 class="titre">formation en Entreprenariat</h4>
              <p class="mb-10">cette formation est dédiée aux porteurs de projet, aux entrepreneurs, et aux particuliers qui veulent
                accroitre leur niveau de compétence professionnel</p>
              <router-Link to="/entrepreneur" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">en savoir plus</router-Link>
            </div>
          </div>
        </div>


        <div class="">
          <div class="content">
            <div>
              <h4 class="titre">Developpement d'application sur mesure</h4>
              <p>Découvrez comment nous pouvons transformer votre vision en une application impressionnante. Contactez-nous pour discuter de votre projet et laissez-nous vous guider vers le succès numérique.</p>
              <router-Link to="/dev" class="rounded border-1 border-red-700 text-red-700 bg-white p-1 mt-5 hover:text-red-800">en savoir plus</router-Link>
            </div>
          </div>
        </div>
        <!-- box -->
        <!-- box -->

        <!-- box -->
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from './layout/Layout.vue';

export default {
  name: 'service',
  components: { Layout }
}

</script>

<style></style>