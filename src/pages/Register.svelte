<script>
  import AuthRegister from "../components/Auth/AuthRegister.svelte";
import Footer from "../components/Footer.svelte";
  import Header from "../components/header/Header.svelte";

</script>
<Header/>
  <main class="main">
    <div class="main-inner">
      <div class="container"> 
        <AuthRegister/>
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