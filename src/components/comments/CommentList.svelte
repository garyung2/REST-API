<script>
  import Comment from './Comment.svelte';
  import { onMount } from 'svelte';
  import { router, meta } from 'tinro';
  import { articleContent, comments, isLogin } from '../../stores';

  const route = meta();
  const articleId = Number(route.params.id);

  let values = {
    formContent: ''
  }

  onMount(() => {
    articleContent.getArticle(articleId);
    comments.fetchComments(articleId);
  });

  const goArticles = () => router.goto(`/articles`);

  const onAddComment = async() => {
    await comments.addComment(articleId, values.formContent)
    values.formContent = ''
  }
</script>

<div class="comment-list">
  <div class="comment-list-inner">
    <div class="comment-list-top">
      <h4>{$articleContent.userEmail}</h4>
      <span>{$articleContent.createdAt}</span>
    </div>
    <div class="content">
      <p>{$articleContent.content}</p>
    </div>
    <button class="text-button go-to-list-button" on:click={goArticles}>
      <span>go to list!</span>
    </button>
    <div class="comments">
      <h5>comments</h5>
      <ul class="comments-list">
        {#each $comments as comment, index}
          <Comment {comment} {articleId}/>
        {/each}
      </ul>
    </div>
    {#if isLogin}
      <div class="comment-list-add">
        <textarea id="comment" placeholder="Enter your comment." bind:value={values.formContent} ></textarea>
        <button class="primary-button" on:click={onAddComment}>
          <span>submit</span>
        </button>
      </div>
    {/if}
  </div>
</div>

<style>
  .comment-list {
    width: 100%;
    background-color: #fff;  
    border-radius: 1.5rem;
  }

  .comment-list-inner {
    padding: 5rem;  
  }

  .comment-list-top {
    display: flex;
    align-items: center;
    justify-content: space-between;  
    padding-bottom: 1rem;
  }

  .comment-list-top h4 {
    font-size: 1.6rem;  
  }

  .comment-list-top span {
    color: #90A4AE;  
  }

  .content {
    min-height: 150px;
  }

  .go-to-list-button {
    display: block;
    margin-left: auto;  
  }

  .go-to-list-button span {
    text-decoration: underline;
    text-underline-offset: .5rem;
  }

  .comments {
    width: 100%;
    margin-top: 2rem;
  }

  .comments h5 {
    font-size: 2.4rem;
    padding-bottom: 2rem;
  }

  .comment-list-add {
    width: 100%;
  }

  .comment-list-add textarea {
    width: 100%;
    min-height: 150px;
    padding: 1rem;
  }
  
  .comment-list-add button {
    display: block;
    width: 104px;
    height: 38px;
    margin-top: 2rem;
    margin-left: auto;  
  }

  .comment-list-add button span {
    font-size: 1.6rem;
  }
</style>