<script>
  import Header from "../components/header/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import AuthLogin from "../components/auth/AuthLogin.svelte";
</script>

<Header/>
  <main class="main">
    <div class="main-inner">
      <div class="container"> 
        <AuthLogin/>
      </div>
    </div>
  </main>
<Footer/>  

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;  
  }
</style>