<script setup lang="ts">
import IconeAffinite from '@/components/icons/Affinite.vue'
</script>

<template>
    <div class="flex">
        <img
            src="public/img/Anneaux.webp"
            class="w-40 h-[261px] relative z-0 object-cover border border-Primary2(White)"
        />
        
        <div class="w-[69px] h-[27px] z-10 flex justify-center space-x-2 rounded-tl-[20px] rounded-bl-[20px] bg-Primary1(Black) border-r border-Primary2(White)">
            <IconeAffinite class="w-[14.24px] h-[21px]"/>
            <p class="text-Primary2(White) text-left text-18px font-text">87%</p>
        </div>
    </div>
</template>