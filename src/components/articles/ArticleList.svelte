<script>
  import Article from "./Article.svelte";
  import { articles, currentArticlesPage, loadingArticle, articlePageLock } from "../../stores";
  import { onMount } from "svelte";
  import ArticleLoading from "./ArticleLoading.svelte";
  
  let component;
  let element; 
  
  onMount(() => {
    articles.resetArticles();
    articles.fetchArticles();
  })

  $: {
    if(component) {
      element = component.parentNode
      element.addEventListener("scroll", onScroll)  
      element.addEventListener("resize", onScroll)  
    }  
  }

  const onScroll = (e) => {
    const scrollHeight = e.target.scrollHeight
    const clientHeight = e.target.clientHeight
    const scrollTop = e.target.scrollTop
    const realHeight = scrollHeight - clientHeight
    const triggerHeight = realHeight * 0.7;

    const triggerComputed = () => {
       return scrollTop > triggerHeight  
    }

    const countCheck = () => {
      const check = $articles.totalPageCount <= $currentArticlesPage
      return check  
    }

    if(countCheck()) {
      articlePageLock.set(true)  
    }

    const scrollTrigger = () => {
      return triggerComputed() && !countCheck() && !$articlePageLock
    }

    if(scrollTrigger()) {
      currentArticlesPage.increasePage();
    }
  }
</script>

<div class="infinite-target" bind:this={component}>
  <ul class="article-list">
    {#each $articles.articleList as article, index}
      <li>
        <Article {article}/>
      </li>
    {/each}
  </ul>
</div>

{#if $loadingArticle}
  <ArticleLoading />
{/if}

<style>
  .article-list li {
    margin-bottom: 5rem;
  }
  .article-list li:last-child {
    margin-bottom: 0;
  }
</style>