<script>
import moveText from './moveText';

const navigations = [
  {name: 'login', direction: 'left', href:'/login'},
  {name: 'Register', direction: 'right', href:'/register'},
  {name: 'articles', direction: 'left', href:'/articles/all'},
]

</script>

<ul class="navigation">
  {#each navigations as navigation, index}
    <li class={navigation.direction}>
      <span>0{index + 1}</span>
      <a href={navigation.href}>
        <div class="animation-box" use:moveText>
          <h2 class="normal">{navigation.name}</h2>
          <h2 class="italic">{navigation.name}</h2>
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  .navigation {
    width: 100%;
    max-width: 480px;  
  }
  .navigation li {
    position: relative;
    width: 100%;
    height: 80px;
    margin-bottom: 4rem;
  }

  .navigation li:last-child {
    margin-bottom: 0;
  }

  .navigation li span {
    position: absolute;  
    font-size: 1.6rem;
    font-weight: 600;  
  }

  .navigation li a {
    overflow: hidden;
    display: block;
    width: 100%;
    height: 80px;  
  }
  
  .navigation li.left span {
    left: -20px;
  }

  .navigation li.right span {
    right: -20px;
  }

  .navigation li.right h2 {
    text-align: right;
  }

  .animation-box {
    width: 100%;
    height: 160px;  
    transition: 0.5s ease-in-out;
  }

  .animation-box h2 {
    width: 100%;
    height: 80px;
    font-size: 5.4rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-weight: 800;
  }

  .italic {
    font-style: italic;
  }
</style>