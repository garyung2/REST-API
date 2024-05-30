<script>
  import CommentList from "../components/comments/CommentList.svelte";

</script>

<div class="comments">
  <div class="comments-inner">
    <CommentList />
  </div>
</div>


<style>
  .comments {
    overflow-y: auto;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    width: 100%;
    height: calc(100% - 102px);
    position: fixed;
    top: 51px;
    right: 0;
    left: 0;
    bottom:0;
    background-color: #eceff1;
  }

  .comments::-webkit-scrollbar{
    display:none;
  }

  .comments-inner {
    padding: 5rem;
  }
</style>