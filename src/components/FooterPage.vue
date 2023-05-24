<script setup lang="ts">
    import IconLogo from '@/components/icons/SVG_blanc_1.vue'
    import IconFacebook from '@/components/icons/facebook.vue'
    import IconInstagram from '@/components/icons/instagram.vue'
    import IconTwitter from'@/components/icons/twitter.vue'
    import IconMail from '@/components/icons/mail.vue'
</script>

<template>
    <footer class="space-y-10 pt-20 max-w-screen-xl m-auto lg:grid-cols-2 lg-gap-8 lg:space-y-0 bg-Sky">
        <nav class="flex items-center justify-center">
            <IconLogo class="mx-8 lg-col-span-1 w-48"/>
            <nav class="text-center">
                <nav class="text-Primary2(White) font-ubuntu">
                    <div>
                        <h3>A propos</h3>
                    </div>
                    <div class="pt-6">
                        <h3>Contact</h3>
                    </div>
                    <div class="pt-6">
                        <h3>Mentions légales</h3>
                    </div>
                </nav>
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
