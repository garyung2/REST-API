<script>
  import { auth, comments } from './../../stores/index.js';
  export let comment;
  export let articleId;
  
  const onDeleteComment = () => {
    if(confirm("삭제하시겠습니까?")) {
      comments.deleteComment(comment.id, articleId);    
    } 
  };
</script>

<li class="comment">
  <div class="comment-top">
    <h4>{comment.userEmail}</h4>
    <span>{comment.createdAt}</span>
  </div>
  <div class="comment-bottom" on:click={onDeleteComment}>
    <div class="content">
      <p>{comment.content}</p>
    </div>
    {#if comment.userId === $auth.id} 
      <button class="icon-button">
        <span>delete</span>
      </button>
    {/if}
  </div>
</li>


<style>
  .comment {
    width: 100%;
    margin-bottom: 2rem;  
    border-bottom: 1px solid #f9f9f9;
  }

  .comment-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  .comment-top h4 {
    font-size: 1.6rem;
  }

  .comment-top span {
    color: #90A4AE;
  }

  .comment-bottom {
    display: flex;  
    align-items: center;
    justify-content: space-between;
  }

  .comment-bottom button span {
    background:url(../../../public/icons/delete.png) no-repeat center center / contain;
  }

  .content {
    width: calc(100% - 44px);
    min-height: 50px;
  }
</style>