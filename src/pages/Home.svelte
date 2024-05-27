<script>
  import Footer from "../components/Footer.svelte";
import Header from "../components/header/Header.svelte";
  import Navigation from "../components/navigation/Navigation.svelte";

</script>



<Header />
  <main class="main">
    <div class="main-inner">
      <div class="container"> 
        <Navigation/>
      </div>
    </div>
  </main>
<Footer />

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;  
  }
</style>



