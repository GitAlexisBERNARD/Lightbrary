<template>
    <div v-if="book">
      <h1>{{ book.volumeInfo.title }}</h1>
      <p>Auteurs:
        <span v-for="(author, index) in book.volumeInfo.authors" :key="index">
          {{ author }}
          <span v-if="index < book.volumeInfo.authors.length - 1">, </span>
        </span>
      </p>
      <img :src="getBookThumbnail(book)" :alt="book.volumeInfo.title">
      <p>Date de publication: {{ book.volumeInfo.publishedDate }}</p>
      <p>Genre: {{ book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Non spécifié' }}</p>
      <p>{{ book.volumeInfo.description }}</p>
      
      <h2>Livres populaires :</h2>
      <div v-for="popularBook in popularBooks" :key="popularBook.id">
        <RouterLink @click="reloadPage" :to="{ name: 'pageitem-book-id', params: { id: popularBook.id } }">
        <img :src="getBookThumbnail(popularBook)" :alt="popularBook.volumeInfo.title">
        </RouterLink>
    </div>
    </div>
    <div v-else>
      <p>Vide</p>
    </div>
  </template>
   
  
  <script lang="ts">
  import PocketBase from 'pocketbase';
  import { RouterLink } from 'vue-router';
  
  var pocketbase_ip = '';
  if (process.env.NODE_ENV === 'production') {
    pocketbase_ip = '193.168.146.150:80';
  } else {
    pocketbase_ip = 'http://127.0.0.1:8090';
  }
  
  const pb = new PocketBase(pocketbase_ip);
  
  export default {
    props: {
      id: String,
    },
    data() {
      return {
        book: null,
        popularBooks: [],
      };
    },
    
    mounted() {
      this.fetchBook();
      this.fetchPopularBooks();
    },
    
    methods: {
      reloadPage() {
        setTimeout(() => {
          window.location.reload();
        }, 400);
      },
      async fetchBook() {
        try {
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${this.id}`);
          if (response.ok) {
            const data = await response.json();
            this.book = data;
          }
        } catch (error) {
          console.error('Erreur lors de la récupération du livre:', error);
        }
      },
      async fetchPopularBooks() {
        try {
          const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=popular&maxResults=5');
          if (response.ok) {
            const data = await response.json();
            this.popularBooks = data.items;
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des livres populaires:', error);
        }
      },
      getBookThumbnail(book) {
        if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) {
          return book.volumeInfo.imageLinks.thumbnail;
        }
        return 'https://via.placeholder.com/128x196?text=No+Image';
      },
    },
  };
  </script>
  