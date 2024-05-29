<script>
  export let article;
  import {articles} from '../../stores';

  let articleValue = {
    id: article.id,
    userEmail: article.userEmail,
    createAt: article.creatAt,
    content: article.content,  
  }

  const onCloseEditModeArticle = () => {
    articles.closeEditModeArticle()
  }

  const onUpdateArticle = () => {
    articles.updateArticle(articleValue)  
  }

</script>

<div class="article-edit-form">
  <div class="article-edit-form-inner">
    <div class="article-edit-form-top">
      <h4>{article.userEmail}</h4>
      <span>{article.createdAt}</span>
    </div>
    <textarea id="message" placeholder="Enter your new contents." bind:value={articleValue.content}></textarea>
    <div class="buttons">
      <button class="primary-button submin-button" on:click={onUpdateArticle}><span>submit</span></button>
      <button class="text-button cancel-button" on:click={onCloseEditModeArticle}><span>cancel</span></button>
    </div>
  </div>
</div>


<style>
  .article-edit-form {
    width: 100%;  
    margin-bottom: 5rem;
    background-color: #fff;
    border-radius: 1.5rem;
  }
  
  .article-edit-form-inner {
    padding: 5rem;
  }
    
  .article-edit-form-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .article-edit-form-top h4 {
    font-size: 1.6rem;
  }

  .article-edit-form-top span {
    color: #90A4AE;
  }
  
  .article-edit-form-inner textarea {
    width: 100%;
    height: 150px;  
    padding: 1rem;
    font-size: 1.4rem;
  }
  
  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 2.4rem;
    margin-top: 2rem;
  }
  
  .submin-button  {
    width: 104px;
  }
  
  .submin-button span{
    font-size: 1.6rem; 
  }
  
  .cancel-button span {
    text-transform: uppercase;
  }
  </style>
