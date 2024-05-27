
<div class="article">
  <div class="article-inner">
    <div class="article-top">
      <h4>user1@user1.com</h4>
      <button class="icon-button toggle-button">
        <span>toggle</span>
      </button>
    </div>
    <div class="content">
      <p>content</p>
    </div>
    <ul class="detail">
      <li class="likes">
        <button class="icon-button">
          <span>likes</span>
        </button>
        <span>0</span>
      </li>
      <li class="comments">
        <button class="icon-button">
          <span>comments</span>
        </button>
        <span>0</span>
      </li>
      <li class="updated-on">
        <span>1일 전</span>
      </li>
    </ul>
  </div>
</div>

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

  .toggle-button span{
    background: url(../../../public/icons/menu.png) no-repeat center center / contain;
  }

  .content {
    width: 100%;
    height: 150px;  
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
