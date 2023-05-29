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
    <footer class="space-y-10 pt-20 max-w-screen-xl m-auto lg:grid-cols-2 lg-gap-8 lg:space-y-0 bg-Sky">
        <nav class="flex items-center justify-center">
            <IconLogo class="mx-8 lg-col-span-1 w-48"/>
                <nav class="text-Primary2(White) font-ubuntu">
                    <div class="text-center">
                        <h3>A propos</h3>
                    </div>
                    
                    <div class="flex ml-7 items-center gap-4 pt-6">
                        <button class="relative z-10 flex h-5 w-8 flex-col justify-between" 
                        @click="showOverlay = true">
                            Contact
                        </button>
                        <nav class="fixed inset-0 flex z-20"
                            :class="{ 'hidden': !showOverlay }">
                            <div class="fixed inset-0 bg-Primary1(Black) opacity-full"></div>
                            <div class="absolute top-0 right-0 m-4">
                                <button 
                                @click="showOverlay = false">
                                    <IconX />
                                </button>
                            </div>
                            <div class="ml-8 z-30">
                                <h1 class="text-Primary2(White) pt-12 pb-10">Contactez nous</h1>
                                    <h6 class="text-Secondary1(Gold)">Email</h6>
                                    <div class="mt-2">
                                        <input type="text" placeholder="exemple@gmail.com" class="px-3 py-2 border border-Secondary1(Gold)
                                        rounded-md w-64 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black)">
                                    </div>
                                    <h6 class="text-Secondary1(Gold) pt-4">Nom</h6>
                                    <div class="mt-2">
                                        <input type="text" placeholder="Nom" class="px-3 py-2 border border-Secondary1(Gold)
                                        rounded-md w-64 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black)">
                                    </div>
                                    <h6 class="text-Secondary1(Gold) pt-4">Prénom</h6>
                                    <div class="mt-2">
                                        <input type="text" placeholder="Prénom" class="px-3 py-2 border border-Secondary1(Gold)
                                        rounded-md w-64 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black)">
                                    </div>
                                    <h6 class="text-Secondary1(Gold) pt-4">Commentaire</h6>
                                    <div class="mt-2">
                                        <input type="text" placeholder="Détails" class="px-3 py-2 border border-Secondary1(Gold)
                                        rounded-md w-64 h-[130px] focus:outline-none focus:ring-Primary2 focus:border-Primary2 
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
        <div class="flex justify-center pt-10">
            <ul class="flex space-x-4 mb-14">
                <li class="w-1/2 flex-auto">
                    <a href="#"><IconFacebook /></a>
                </li>
                <li class="w-1/2 flex-auto">
                    <a href="#"><IconInstagram /></a>
                </li>
                <li class="w-1/2 flex-auto">
                    <a href="#"><IconTwitter /></a>
                </li>
                <li class="w-1/2 flex-auto">
                    <a href="#"><IconMail /></a>
                </li>
            </ul>
        </div>
    </footer>
</template>
