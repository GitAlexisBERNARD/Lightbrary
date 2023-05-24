<script setup lang="ts">
import IconeAffinite from '@/components/icons/Affinite.vue'
import IconSearch from '@/components/icons/search.vue'
</script>

<template>
    <div class="w-[333px] h-14 relative rounded-[20px] bg-[#2c2927] border border-[#ecb365]">
        <IconSearch class=""/>
        <p class="w-[219px] absolute left-[70px] top-3.5 font-text text-Primary2(White)">
            Recherche un film,une série...
        </p>
        <div
            class="flex justify-start items-start w-[51.78px] h-[21.6px] absolute left-[152.29px] top-0 gap-2.5 px-2"
        ></div>
    </div>

    <div class="w-40 h-[261px] grid-cols-principal">
        <img
            src="public\img\Anneaux.webp"
            class="w-40 h-[261px] relative object-cover border border-Primary2(White)"
        />
        
        <div class="bg-Primary1(Black)">
            <p class="w-[33px] relative text-lg text-left font">87%</p>
            <IconeAffinite/>
        </div>
    </div>
</template>