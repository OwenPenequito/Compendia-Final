<template>
  <loggednav />
    <div class="home">
  
      <div class="block">
        <h1>The Archive:</h1>
        <h2>Web-based Research Compendium - TIP </h2>
      </div>
    </div>
  
    
 <form @submit.prevent="handleSearch">
  <input type="text" v-model="search">

  <div class="search">
    <button>Search</button>
  </div>
</form>

<div class="Block1">
  <div class="head">
    <h1>Recommendations:</h1>
  </div>
  
  <div class="articles">
      <div v-for="recommendation in recommendations" :key="recommendation.ID" class="Article">
        <router-link :to="`/LoggedArticle/${recommendation.ID}`">
          <p>{{ recommendation.Title }}</p>
          <p>{{ recommendation.Content }}</p>
        </router-link>  
      </div>
    </div>
  </div>

<div class="Resultblock">
<div v-if="searchResults.length > 0" class="search-results">
  <h3>Search Results:</h3>
  <ul>
    <li v-for="result in searchResults" :key="result.ID">
      <button class="Results"><router-link :to="`/LoggedArticle/${result.ID}`">{{ result.Title }}</router-link></button>
    </li>
  </ul>
</div>
</div>
  
  </template>
  
  <script>
  import loggednav from '@/views/loggednav.vue'
  import axios from 'axios';

  export default {
    name: 'loggedHome',
    components: { loggednav },
    data() {
      return {
        search: '',
        searchResults: [],
        recommendations: []
      }
    },
    methods: {
  handleSearch() {
    if (this.search.trim() === '') {
      this.searchResults = [];
      this.recommendations = []; // Add this line to clear the recommendations when the search is empty
      return;
    }
    axios.get(`http://localhost:8000/docuDetails/search/${this.search}`)
      .then(response => {
        this.searchResults = response.data;
        const firstResult = this.searchResults[0];
        if (firstResult) {
          axios.get(`http://localhost:8000/docuDetails/recommend/${firstResult.ID}`)
            .then(recommendationResponse => {
              this.recommendations = recommendationResponse.data.slice(0,3); // Assign the retrieved recommendations to the data property
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          this.recommendations = []; // If there are no search results, clear the recommendations
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}
  }
  </script>
  
  <style scoped>
div.block {
  margin: 150px auto 0;
  vertical-align: text-bottom;
  width: 550px;
  border-radius: 20px;
  background: #5d5d5d;
  color: #fff;
  padding: 10px;
  opacity: 0.7;
}
input {
  margin: 50px;
  border-radius: 20px;
  height: 35px;
  width: 500px;
  
}
button{
  margin: 0px 0px 200px ;
  height: 25px;
  width: 150px;
  border-radius: 10px;
  background-color: rgb(255, 255, 106);
}
.head h1 {
  text-decoration: underline;
  position: relative;
  color: #ffffffb0;
  z-index: 1;
}
.articles {
  height: auto;
  width: 105%;
  display: flex;
  margin: 0 0 0;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  left: -10px;
}
.Article {
  height: auto;
  width: auto;
  background: #e2e2e2;
  border-radius: 25px;
  margin: 0 150px 0px 100px;
  color: #fff;
  text-align: left;
  padding: 30px;
  border: 2px solid;
  border-color: rgba(255, 255, 0, 0.682);
}

.Block1 {
  height: fit-content;
  width: auto;
  background-color: #979797;
  border-radius: 50px;
}

.Resultblock {
  height: fit-content;
  width: auto;
  background-color: #ffffff;
  border-radius: 50px;
}

.Resultblock button {
  border-radius: 10px;
  margin-top: -100px;
}

.Results {
  width: fit-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
  </style>