<script>
  import Article from "./Article.svelte";

</script>

<div class="infinite-target">
  <ul class="article-list">
    <li>
      <Article />
    </li>
  </ul>
</div>



<style>
  .article-list li {
    margin-bottom: 5rem;
  }
  .article-list li:last-child {
    margin-bottom: 0;
  }
</style>