

<div class="article-add-form">
  <div class="article-add-form-inner">
    <label for="message">Share your thoughts and feels now.</label>
    <textarea id="message" placeholder="Enter your contents."></textarea>
    <div class="buttons">
      <button class="primary-button submin-button"><span>submit</span></button>
      <button class="text-button cancel-button"><span>cancel</span></button>
    </div>
  </div>
</div>

<style>
  .article-add-form {
    width: 100%;  
    margin-bottom: 5rem;
    background-color: #fff;
    border-radius: 1.5rem;
  }

  .article-add-form-inner {
    padding: 5rem;
  }
  
  .article-add-form-inner label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: #90A4AE;  
  }

  .article-add-form-inner textarea {
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