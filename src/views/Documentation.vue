<i18n src="@/locales/long_langs/documentation.json"></i18n>
<template>
  <div>
    <q-drawer :value="showSidebar" side="left" bordered content-class="IHR_documentation-page-sidebar">
      <h3>{{ $t('documentationPage.title') }}</h3>
      <div>
        <div class="text-weight-light">
          {{ $t('documentationPage.sectionsTitle.general') }}
        </div>
        <ul>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.about.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.about.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.faq.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.faq.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.ack.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.ack.title') }}</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="text-weight-light">
          {{ $t('documentationPage.sectionsTitle.reports') }}
        </div>
        <ul>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.globalreport.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.globalreport.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.networkreport.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.networkreport.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.countryreport.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.countryreport.title') }}</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="text-weight-light">
          {{ $t('documentationPage.sectionsTitle.analysisModules') }}
        </div>
        <ul>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.asdependency.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.asdependency.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.countryasdependency.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.countryasdependency.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.prefixasdependency.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.prefixasdependency.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.netdelay.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.netdelay.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.delayforward.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.delayforward.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.disco.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.disco.title') }}</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="text-weight-light">
          {{ $t('documentationPage.sectionsTitle.dataAccess') }}
        </div>
        <ul>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.api.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.api.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.pythonlibrary.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.pythonlibrary.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.dumps.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.dumps.title') }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'documentation',
                hash: '#' + replaceSpaces($t(`documentationPage.sections.datapolicy.title`)),
              }"
              class="IHR_delikify"
              >{{ $t('documentationPage.sections.datapolicy.title') }}</router-link
            >
          </li>
        </ul>
      </div>
    </q-drawer>

    <div id="IHR_documentation-page">
      <div v-for="(sec, idx) in $t('documentationPage.sections')" v-bind:key="idx" class="IHR_documentation-page">
        <div class="IHR_anchor" :id="replaceSpaces(sec.title)"></div>
        <h1 v-html="sec.title"></h1>
        <p class="text-left text-body1" v-html="sec.summary"></p>
        <div v-for="(sub, idx) in sec.description" v-bind:key="idx">
          <h2 v-html="sub.header"></h2>
          <img v-if="sub.img" :src="require(`@/${sub.img[0]}`)" :style="sub.img[1]" />
          <p class="text-left text-body1" v-html="sub.body"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationView',
  props: {
    showSidebar: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    'sidebar-action': function(sideBarAction) {
      if (sideBarAction !== null) {
        return true;
      } else {
        console.warn('Sidebar Action is missing!');
        return false;
      }
    }
  },
  mounted() {
    this.$emit('sidebar-action', true)
  },
  methods: {
    replaceSpaces(text) {
      return text.split(' ').join('_').split('(').join('_').split(')').join('_').split("'").join('_')
    },
  },
}
</script>

<style lang="stylus">
@import '~quasar-variables';

#IHR_
  &documentation-page
    margin 0pt auto
    width 100%
    max-width 1200px
    padding 0 1rem

.IHR_
  &documentation-page
    & > h1
      line-height 2rem
      padding 0.5rem 0
      font-weight 500
      border-bottom 1px solid #ccc
      margin 4rem 0 1.5rem
      @media screen and (max-width: 720px)
        font-size 22pt
        margin 2rem 0 1rem

    & > div
      & > h2
        margin-top 34pt
        font-size 18pt
        font-weight 500
        line-height 1.5rem
        @media screen and (max-width: 600px)
          font-size 16pt
          margin-bottom 10pt
      & > .text-body1
        overflow-anchor none
        & > a
          overflow-anchor none
#cod
      background-color: #e7e9eb
      padding:1em
      border-radius: 6pt
      padding-bottom: 0

.IHR_
  &documentation-page-sidebar
    & > h3
      margin-top 2pt
      width 88%
      margin 0px auto
      font-size 16pt
      font-weight 500
      @media screen and (max-width: 600px)
        font-size 12pt

      &:first-letter
        text-transform capitalize

    & > div
      width 82%
      margin 4pt auto 2pt auto

      & a:hover
        border-bottom 1px solid $primary

      & a:active
        border-bottom 1px solid $accent

      .router-link-active,
      .router-link-exact-active 
        border-bottom 1px solid red        

      & ul
        margin 5px
        padding 0px

      & li
        list-style-type none
        margin 0px
        padding 0px
        padding-left 15px

.IHR_anchor
  display block
  position relative
  top -100px
  visibility hidden

pre
  overflow-x scroll

</style>
