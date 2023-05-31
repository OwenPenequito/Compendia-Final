<template>
    <navbar />
    <div class="Rect">
        <div class="rect1">
        <h1>ARTICLES</h1>
            <div class="inrect" >
                        <div class="doc">
                            <table class="table">
                    <tbody>
                        <tr v-for="doc in doc_details" :key="doc.ID">
                            <td>
                            <button>
                                <router-link :to= "{ name: 'ArticleDetails', params: {id: doc.ID}}"><h1>{{ doc.Title }}</h1></router-link>
                            </button>
                            <div class="abstract">
                    
                            <div class="doc-content"><h3>{{ doc.Content }}</h3></div></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
    
</template>


<script>
import navbar from '@/views/navbar.vue';
import axios from 'axios';

export default  {
    components: { navbar },
    data() {
        return {
            doc_details: []
        }
    },

    async mounted() {
        this.getArticletitle();
    },
    methods: {
        getArticletitle(){
            axios.get('http://localhost:8000/docuDetails/view')
            .then((response) => {
                this.formatArticleDetails(response.data);
            });
        },
        formatArticleDetails(docs){
            for (let doc in docs){
                this.doc_details.push({...docs[doc], id: doc });
            }
        console.log(this.doc_details);
    }
}
}

</script>

<style scoped>
.Rect {
    height: auto;
    width: 1900px;
    background: #ffffff;
    padding: 25px;
    position: relative;
    top: -10px;
    left: -10px;
}
.rect1 {
    height: auto;
    width: 1650px;
    background: #ffffff;
    padding: 25px;
    position: relative;
    top: -10px;
    left: -10px;
}
.rect1 h1 {
    text-align: left;
    color: #373737;
}
.inrect {
    height: auto;
    width: 1370px;
    border-radius: 25px;
    background: #707070;
    padding: 25px;
    position: relative;
    top: -10px;
    left: 10px;
}
nav {
    position: relative;
    left: -300px;
}
.Article h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.Article h2:hover {
    background: #ddd;
}
.Article a{
    text-decoration: none;
}
.Article p {
    text-align: left;
    color: #000;
}
.summary {
    position: relative;
    top: -70px;
    left: 100%;
}
.doc-content {
    position: relative;
    top: 100px;
    left: 100px;
}
.abstract {
    position: relative;
    top: -90px;
    left: -100px;
}

.table button {
    margin-top: 50px;
    border-radius: 10px;
}

.summary {
    height: auto;
    width: 600px;
    background-color: #ffffff;
    border-radius: 5px;
}
</style>
