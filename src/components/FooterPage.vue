<script setup lang="ts">
import IconLogo from '@/components/icons/SVG_blanc_1.vue'
import IconFacebook from '@/components/icons/facebook.vue'
import IconInstagram from '@/components/icons/instagram.vue'
import IconTwitter from '@/components/icons/twitter.vue'
import IconMail from '@/components/icons/mail.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="text-Primary2(White) font-ubuntu bg-Sky">
    <nav class="flex items-center justify-center lg:hidden mt-[-60px]">
      <a href="#">
        <IconLogo class="w-48" />
      </a>
      <nav>
        <div class="text-center">A propos</div>

        <div class="ml-7 pt-6">
          <RouterLink to="/contact">Contact</RouterLink>
        </div>

        <div class="text-center pt-6">
          <h3>Mentions légales</h3>
        </div>
      </nav>
    </nav>
    <div class="flex justify-center lg:hidden">
      <ul class="flex space-x-12 mb-14 mt-[-70px]">
        <li>
          <a href="#"><IconFacebook /></a>
        </li>
        <li>
          <a href="#"><IconInstagram /></a>
        </li>
        <li>
          <a href="#"><IconTwitter /></a>
        </li>
        <li>
          <a href="#"><IconMail /></a>
        </li>
      </ul>
    </div>

    <nav class="hidden lg:grid lg:grid-cols-5 pt-8 pl-20 gap-44">
      <div class="lg:col-start-1">
        Contact
        <ul class="text-sm pt-4">
          <li>Département MMI</li>
          <li>4 place Tharradin,</li>
          <li>25200 Montbéliard</li>
          <li>France</li>
          <li class="pt-4">Contact@gmail.com</li>
          <li>03 81 99 47 34</li>
        </ul>
      </div>
      <div class="lg:col-start-2">
        Mentions légales
        <ul class="text-sm pt-4">
          <li>Politique de confidentialité</li>
          <li class="pt-2">Conditions d'utilisation</li>
          <li class="pt-2">RGPD</li>
          <li class="pt-2">Mentions légales</li>
          <li class="pt-2">Plan du site</li>
        </ul>
      </div>
      <div class="lg:col-start-3">
        <a href="#">
          <IconLogo class="w-40 mt-[-150px]" />
        </a>
        <div class="flex justify-center lg:col-start-3 mt-[-110px]">
          <ul class="flex space-x-8 mb-10">
            <li>
              <a href="#"><IconFacebook /></a>
            </li>
            <li>
              <a href="#"><IconInstagram /></a>
            </li>
            <li>
              <a href="#"><IconTwitter /></a>
            </li>
            <li>
              <a href="#"><IconMail /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:col-start-4">
        Lightbrary
        <ul class="text-sm pt-4">
          <li>Accueil</li>
          <li class="pt-2">Films</li>
          <li class="pt-2">Séries</li>
          <li class="pt-2">Livres</li>
          <li class="pt-2">Musiques</li>
        </ul>
      </div>
      <div class="lg:col-start-5">
        A propos
        <ul class="text-sm pt-4">
          <li>Nous</li>
          <li class="pt-2">Carrière</li>
          <li class="pt-2">FAQs</li>
          <li class="pt-2">Équipe</li>
        </ul>
      </div>
    </nav>
  </footer>
</template>
