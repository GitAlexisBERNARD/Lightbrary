New readme
Test 


Test Alexis

<main>
    <p>Test API</p>
    <label for="search">Barre de recherche:</label>
    <input type="text" id="search" v-model="search" />
    <button @click="fetchData">OK</button>

    <div v-for="(item, index) in combinedResults" :key="index">
      <template v-if="item.type === 'film'">
        <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.title" />
        <p>{{ item.title }}</p>
        <p v-if="item.authorPromise">{{ item.author }}</p>
      </template>
      <template v-else-if="item.type === 'book'">
        <img v-if="item.thumbnail" :src="item.thumbnail" :alt="item.title" />
        <p>{{ item.title }}</p>
        <p>{{ item.authors }}</p>
        <p>{{ item.genre }}</p>
      </template>
      <template v-else-if="item.type === 'music'">
        <img :src="item.artworkUrl100" :alt="item.trackName" />
        <p>{{ item.trackName }}</p>
        <p>{{ item.authors }}</p>
        <p>{{ item.genre }}</p>
      </template>
    </div>
</main>