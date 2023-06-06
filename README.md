New readme
Test 


Test Alexis

<template>
  <main>
    <header class="grille_mobile lg:grille_desktop relative">
      <div class="col-span-4 lg:col-span-6 lg:col-start-4 flex items-center border border-Secondary1(Gold) rounded-[20px] gap-5 px-3">
        <img class="w-6 h-6" src="/img/icon_search.webp" alt="Icone rechercher">
        <input class="w-full h-14 bg-Primary1(Black) font-text text-Secondary1(Gold) focus:outline-none" type="text" id="search"
          v-model="search" placeholder="Recherche un film, une série..." @keyup.enter="fetchData" />
        <!-- <button class="font-text font-bold text-Primary2(White)" @click="fetchData">OK</button>  -->
      </div>
    </header>

    <button class="text-Primary2(White)" @click="rechargerPage">
      Retour
    </button>

    <div class="grille_mobile" v-for="(item, index) in combinedResults" :key="index">
      <template v-if="item.type === 'film'">
        <img class="col-span-1 w-full mb-5 pb-5" v-if="item.imageUrl" :src="item.imageUrl" :alt="item.title" />
        <div class="col-span-3 col-start-2 mb-5 pb-5 border-b-[3px] border-Secondary1(Gold) font-text">
          <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">
            {{ item.title }}
          </h4>
          <p class="text-[11px] text-Gray1" v-if="item.authorPromise">{{ item.author }}</p>
        </div>
        
      </template>

      <template v-else-if="item.type === 'book'">
        <img class="col-span-1 w-full mb-5 pb-5" v-if="item.thumbnail" :src="item.thumbnail" :alt="item.title" />
        <div class="col-span-3 col-start-2 mb-5 pb-5 border-b-[3px] border-Secondary1(Gold) font-text">
          <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">
            {{ item.title }}
          </h4>
          <p class="text-[11px] text-Gray1">{{ item.authors }}</p>
          <p class="italic text-[10px] text-Secondary2(Beige)">{{ item.genre }}</p>
        </div>
        
      </template>

      <template v-else-if="item.type === 'music'">
        <img class="col-span-1 w-full mb-5 pb-5" :src="item.artworkUrl100" :alt="item.trackName" />
        <div class="col-span-3 col-start-2 mb-5 pb-5 border-b-[3px] border-Secondary1(Gold) font-text">
          <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">
            {{ item.trackName }}
          </h4>
          <p class="text-[11px] text-Gray1">{{ item.authors }}</p>
          <p class="italic text-[10px] text-Secondary2(Beige)">{{ item.genre }}</p>
        </div>
      </template>
    </div>
  </main>
</template>