<script>
  import  { Route } from 'tinro';

  import Home from "./pages/Home.svelte";
  import Login from './pages/Login.svelte';
  import Register from './pages/Register.svelte';
  import Articles from './pages/Articles.svelte';
</script>

<Route path="/" redirect="/home"><Home/></Route>
<Route path="/home"><Home /></Route>
<Route path="/login"><Login/></Route>
<Route path="/register"><Register/></Route>
<Route path="/articles/*"><Articles/></Route>