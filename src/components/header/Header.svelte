<script>
  import {router, meta} from "tinro";
  import {date} from './date';
  import {auth, isLogin} from '../../stores';
  
 // 날짜, 시간 포맷
 let options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
  };

  $: dateTime = $date.toLocaleString("en", options);

  // url
  const route = meta();
  const url = $route.url;

  // 로그아웃
  const onLogout = () => auth.logout();
</script>

<!--header start-->
<header class="header">
  <div class="inner">
    <h1 class="logo">
       <a href="/">
         :&nbsp;post
       </a>
    </h1>  
    {#if url === 'articles'}
      <ul class="filter">
        <li>
          <button class="text-button">
            <span>All</span>
          </button>
        </li>
        <li>
          <button class="text-button">
            <span>Likes</span>
         </button>
        </li>
        <li>
          <button class="text-button">
            <span>My post</span>
          </button>
        </li>
      </ul>
    {/if}
    {#if $isLogin}
      <button class="icon-button logout-button" on:click={onLogout}>
        <span>logout</span>
      </button>
    {:else}
      <span>{dateTime}</span> 
    {/if}
  </div>
</header>
<!--header end-->

<style>
  .header {
    position: absolute;
    top:0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 50px;  
  }

  .header .inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;  
  }

  .logo {
    text-transform: uppercase;
    color: #fff;
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2.4rem;
  }

  .filter li {
    width: 78px;  
  }

  .filter li button {
    width: 100%;  
    height: 28px;
    border-radius: 5px;
  }

  .logout-button span{
    background:url(../../../public/icons/logout.png) no-repeat  center center  / contain;
  }
</style>