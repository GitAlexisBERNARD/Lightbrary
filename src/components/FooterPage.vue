<script setup lang="ts">
import IconLogo from '@/components/icons/SVG_blanc_1.vue'
import IconFacebook from '@/components/icons/facebook.vue'
import IconInstagram from '@/components/icons/instagram.vue'
import IconTwitter from '@/components/icons/twitter.vue'
import IconMail from '@/components/icons/mail.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="grille_mobile lg:grille_desktop text-Primary2(White) font-text bg-[#1A2131] pt-7 pb-12">
    <RouterLink class="col-span-2 lg:hidden" to="">
      <IconLogo class="w-full h-full"/>
    </RouterLink>

    <nav class="col-span-2 col-start-3 font-light text-[12px] text-center self-start lg:hidden">
      <h4 class="pt-6">A propos</h4>
      <h4 class="pt-6">Contact</h4>
      <h4 class="pt-6">Mentions légales</h4>
    </nav>

    <div class="col-span-4 lg:hidden">
      <ul class="flex justify-center gap-7">
        <li>
          <RouterLink to=""><IconFacebook/></RouterLink>
        </li>
        <li>
          <RouterLink to=""><IconInstagram/></RouterLink>
        </li>
        <li>
          <RouterLink to=""><IconTwitter /></RouterLink>
        </li>
        <li>
          <RouterLink to=""><IconMail /></RouterLink>
        </li>
      </ul>
    </div>

    <div class="hidden lg:block col-span-2">
      <h4 class="font-bold text-[20px] pb-5">Contact</h4>
      <address class="font-light text-[14px]">
        <p>Département MMI</p>
        <p>4 place Tharradin,</p>
        <p>25200 Montbéliard</p>
        <p class="pb-5">France</p>
        <a href="contact@gmail.com">contact@gmail.com</a>
        <p>03 81 99 47 34</p>
      </address>
    </div>

    <nav class="hidden lg:block col-span-2">
      <h4 class="font-bold text-[20px] pb-5">Mentions légales</h4>
      <ul class="font-light text-[14px] flex flex-col gap-2">
        <li>
          <RouterLink to="">Politique de confidentialité</RouterLink>
        </li>
        <li>
          <RouterLink to="">Conditions d'utilisation</RouterLink>
        </li>
        <li>
          <RouterLink to="">RGPD</RouterLink>
        </li>
        <li>
          <RouterLink to="">Mentions légales</RouterLink>
        </li>
        <li>
          <RouterLink to="">Plan du site</RouterLink>
        </li>
      </ul>
    </nav>

    <div class="hidden lg:block col-span-4">
      <IconLogo class="w-[159px] h-[159px] mx-auto"/>
      <ul class="flex justify-center gap-7">
        <li>
          <RouterLink to=""><IconFacebook/></RouterLink>
        </li>
        <li>
          <RouterLink to=""><IconInstagram/></RouterLink>
        </li>
        <li>
          <RouterLink to=""><IconTwitter /></RouterLink>
        </li>
        <li>
          <RouterLink to=""><IconMail /></RouterLink>
        </li>
      </ul>
    </div>

    <nav class="hidden lg:block col-span-2">
      <h4 class="font-bold text-[20px] pb-5">Lightbrary</h4>
      <ul class="font-light text-[14px] flex flex-col gap-2">
        <li>
          <RouterLink to="">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="">Films</RouterLink>
        </li>
        <li>
          <RouterLink to="">Séries</RouterLink>
        </li>
        <li>
          <RouterLink to="">Livres</RouterLink>
        </li>
        <li>
          <RouterLink to="">Musique</RouterLink>
        </li>
      </ul>
    </nav>

    <nav class="hidden lg:block col-span-2">
      <h4 class="font-bold text-[20px] pb-5">A propos</h4>
      <ul class="font-light text-[14px] flex flex-col gap-2">
        <li>
          <RouterLink to="">Nous</RouterLink>
        </li>
        <li>
          <RouterLink to="">Carrières</RouterLink>
        </li>
        <li>
          <RouterLink to="">FAQs</RouterLink>
        </li>
        <li>
          <RouterLink to="">Equipe</RouterLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>