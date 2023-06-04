<script setup lang="ts">
    import IconLogo from '@/components/icons/SVG_blanc_1.vue'
    import IconFacebook from '@/components/icons/facebook.vue'
    import IconInstagram from '@/components/icons/instagram.vue'
    import IconTwitter from'@/components/icons/twitter.vue'
    import IconMail from '@/components/icons/mail.vue'
    import { ref } from 'vue'
    import IconX from '@/components/icons/x.vue'
    
    const activeContact = ref(false)
    const showOverlay = ref(false)
</script>

<template>
    <footer class="text-Primary2(White) font-ubuntu bg-Sky">
        <nav class="flex items-center justify-center lg:hidden mt-[-60px]">
            <a href="#">
                <IconLogo class="w-48"/>
            </a>
                <nav>
                    <div class="text-center">
                        A propos
                    </div>
                    
                    <div class="ml-7 pt-6">
                        <button  
                        @click="showOverlay = true">
                            Contact
                        </button>
                        <nav class="fixed inset-0 flex"
                            :class="{ 'hidden': !showOverlay }">
                            <div class="fixed inset-0 bg-Primary1(Black) opacity-full"></div>
                            <div class="absolute top-0 right-0 m-4">
                                <button 
                                @click="showOverlay = false">
                                    <IconX />
                                </button>
                            </div>
                            <div class="ml-12 z-10">
                                <h1 class="text-Primary2(White) pt-12 pb-10">Contactez nous</h1>
                                    <h6 class="text-Secondary1(Gold)">Email</h6>
                                    <div class="mt-2">
                                        <input type="text" placeholder="exemple@gmail.com" class="px-3 py-2 border border-Secondary1(Gold)
                                        rounded-md w-80 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black)">
                                    </div>
                                    <h6 class="text-Secondary1(Gold) pt-4">Nom</h6>
                                    <div class="mt-2">
                                        <input type="text" placeholder="Nom" class="px-3 py-2 border border-Secondary1(Gold)
                                        rounded-md w-80 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black)">
                                    </div>
                                    <h6 class="text-Secondary1(Gold) pt-4">Prénom</h6>
                                    <div class="mt-2">
                                        <input type="text" placeholder="Prénom" class="px-3 py-2 border border-Secondary1(Gold)
                                        rounded-md w-80 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black)">
                                    </div>
                                    <h6 class="text-Secondary1(Gold) pt-4">Commentaire</h6>
                                    <div class="mt-2">
                                        <input type="text" placeholder="Détails" class="px-3 py-2 border border-Secondary1(Gold)
                                        rounded-md w-80 h-[130px] focus:outline-none focus:ring-Primary2 focus:border-Primary2 
                                        bg-Primary1(Black) pb-20">    
                                    </div>
                                <nav class="flex justify-center pt-10">
                                    <button class="px-12 py-3 bg-Secondary1(Gold) text-Primary1(Black) rounded-md
                                    hover:bg-Primary1(Black) hover:text-Secondary1(Gold) focus:ring-2 focus:ring-Secondary1(Gold)">
                                        Envoyer
                                    </button>
                                </nav>
                            </div>
                        </nav>
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
            <div class="lg:col-start-1">Contact
                <ul class="text-sm pt-4">
                    <li>Département MMI</li>
                    <li>4 place Tharradin,</li>
                    <li>25200 Montbéliard</li>
                    <li>France</li>
                    <li class="pt-4">Contact@gmail.com</li>
                    <li>03 81 99 47 34</li>
                </ul>
            </div>
            <div class="lg:col-start-2">Mentions légales
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
                    <IconLogo class="w-40 mt-[-150px]"/>
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
            <div class="lg:col-start-4">Lightbrary
                <ul class="text-sm pt-4">
                    <li>Accueil</li>
                    <li class="pt-2">Films</li>
                    <li class="pt-2">Séries</li>
                    <li class="pt-2">Livres</li>
                    <li class="pt-2">Musiques</li>
                </ul>
            </div>
            <div class="lg:col-start-5">A propos
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
