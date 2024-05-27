<script>
  import {date} from './date';
  import {auth} from '../../stores';
  
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
    <span>{dateTime}</span> 
    <!-- {#if isLogin}
      <button class="icon-button logout-button" on:click={onLogout}>
        <span>logout</span>
      </button>
    {:else}
      <span>{dateTime}</span> 
    {/if} -->
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

  /* .logout-button span{
    background:url(../../../public/icons/logout.png) no-repeat  center center  / contain;
  } */
</style>