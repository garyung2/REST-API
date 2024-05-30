<script>
  import Header from "../components/header/Header.svelte";
  import ArticleAddForm  from "../components/articles/ArticleAddForm.svelte";
  import ArticleList  from "../components/articles/ArticleList.svelte";
  import Comments from "./Comments.svelte";
  import Footer from "../components/Footer.svelte";
  import {isLogin} from '../stores';
  import { Route } from "tinro";
</script>

<Header/>
<main class="main">
  <div class="main-inner">
    <div class="container">
      {#if $isLogin}
        <ArticleAddForm />
      {/if}
      <ArticleList />
      <Route path="/comments/:id">
        <Comments />
      </Route>
    </div>
  </div>
</main>
<Footer/>

<style>  
  .container {
    overflow-y: auto;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    padding: 5rem 0;  
  }

  .container::-webkit-scrollbar{
    display:none;
  }
</style>