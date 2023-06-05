<script setup lang="ts">
    import IconX from '@/components/icons/x.vue'
    import { ref } from 'vue'
    const showOverlay = ref(false)
</script>

<template>
    <main>
        <p>
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
        </p>
    </main>
</template>