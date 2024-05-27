<script>
  import {auth} from '../../stores';

  let values ={
    formEmail: "",
    formPassword:"",  
  }

  const resetValues = () => {
    values.formEmail = ''
    values.formPassword = ''
  }

  const onLogin = async() => {
    try {
      await auth.login(values.formEmail, values.formPassword)
      resetValues();  
    }catch(error) {
      alert('인증이 되지 않았습니다. 다시 시도해 주세요.');
    }
  }

</script>

<div class="login">
  <div class="login-inner">
    <div class="title"> 
      <h2>
        Welcome Back!
      </h2>   
      <span>
        welcome back! Please enter your details.
      </span> 
    </div>
    <div class="auth-form">
      <ul>
        <li>
          <label for="email">Email adress</label>
          <input 
            type="email" 
            name="email" 
            id="email"  
            bind:value={values.formEmail}
          />
        </li>
        <li>
          <label for="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            autoComplete="off"  
            bind:value={values.formPassword}
          />
        </li>
        <li>
          <button class="text-button forgot-password-button">
             <span>Forgot password?</span>
          </button>
        </li>
        <li>
          <button class="primary-button full-width" on:click={onLogin}>
            <span>login</span>
          </button>
        </li>
        <li>
          <span>Don't have an account?</span>
          <button class="text-button">
            <a href="/register">
              <span>Sign up</span>
            </a>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .login {
    width: 100%;
    max-width: 480px;
  }

  .login-inner {
    padding: 5rem;
  }

  .auth-form ul li {
    margin-bottom: 4rem;
  }

  .auth-form ul li:nth-child(2) {
    margin-bottom: 2rem;
  }

  .auth-form ul li:nth-child(3) {
    text-align: right;
  }

  .auth-form ul li:nth-child(4) {
    margin-bottom: 2rem;
  }

  .auth-form ul li:nth-child(5) {
    text-align: center;
  }

  .auth-form ul li:last-child {
    margin-bottom: 0;
  }
</style>