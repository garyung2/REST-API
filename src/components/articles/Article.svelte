<script>
  export let article;
	import { articles, auth } from './../../stores/index.js';
  import ArticleEditForm from './ArticleEditForm.svelte';
  import {router} from 'tinro';

  let isViewMenu = false

  $: {
    if($articles.menuPopup === article.id) {
      isViewMenu = true 
    }else{
      isViewMenu = false
    }
  }

  const onToggleMenuPopup = (id) => {
    if(isViewMenu === true) {
      articles.closeMenuPopup()
      return
    }

    articles.openMenuPopup(id)
  }
  
  const onEditModeArticle = (id) => {
    articles.openEditModeArticle(id)
  }

  const onDeleteArticle = (id) => {
    if(confirm('삭제 하시겠습니까?')){
      articles.deleteArticle(id)
    }
  }

  const goComment = (id) => {
    router.goto(`/articles/comments/${id}`)
  }

</script>

{#if $articles.editMode === article.id}
  <ArticleEditForm {article} />
{:else}
  <div class="article">
    <div class="article-inner">
      <div class="article-top">
        <h4>{article.userEmail}</h4>
        <div class="edit-mode">
          <button class="icon-button toggle-button" on:click={() => onToggleMenuPopup(article.id)}>
            <span>toggle</span>
          </button>
          {#if article.userId === $auth.id}
            <ul class="popup" class:block={isViewMenu}>
              <li>
                <button class="text-button" on:click={() => onEditModeArticle(article.id)}><span>edit</span></button>
              </li>
              <li>
                <button class="text-button" on:click={() => onDeleteArticle(article.id)}><span>delete</span></button>
              </li>
            </ul>
          {/if}
        </div>
      </div>
      <div class="content">
        <p>{article.content}</p>
      </div>
      <ul class="detail">
        <li class="likes">
          <button class="icon-button">
            <span>likes</span>
          </button>
          <span>{article.likeCount}</span>
        </li>
        <li class="comments">
          <button class="icon-button" on:click={() => goComment(article.id)}>
            <span>comments</span>
          </button>
          <span>{article.commentCount}</span>
        </li>
        <li class="updated-on">
          <span>{article.createdAt}</span>
        </li>
      </ul>
    </div>
  </div>
{/if}

<style>
  .article {
    width: 100%;  
    background-color: #fff;
    border-radius: 1.5rem;
  }

  .article-inner {
    padding: 5rem;
  }

  .article-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  .article-top h4 {
    font-size: 1.6rem;
  }

  .edit-mode {
    position: relative;
  }

  .popup {
    display: none;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 104px;  
    border-radius: .5rem;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.3);
  }

  .popup.block {
    display: block;
  }

  .popup li {
    width: 104px;
    height: 38px;
  }

  .popup li:first-child {
    border-bottom: 1px solid #f9f9f9;
  }

  .popup li button {
    width: 100%;
    height: 100%;
  }

  .toggle-button span{
    background: url(../../../public/icons/menu.png) no-repeat center center / contain;
  }

  .content {
    width: 100%;
    min-height: 150px;  
  }

  .detail {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 2.4rem;
  }

  .detail li:not(:last-child) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 2rem;
  }

  .likes > span,
  .comments > span {
    font-size: 1.6rem;
  }
  
  .likes button span {
    background: url(../../../public/icons/likes.png) no-repeat center center / contain;
  }

  .comments button span {
    background: url(../../../public/icons/comment.png) no-repeat center center / contain;
  }

  .updated-on {
    margin-left: auto;
  }

  .updated-on span {
    color: #90A4AE;
  }

</style>
