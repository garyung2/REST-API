<script>
  import {auth} from '../../stores';

  let values = {
    formEmail: '',
    formPassword: '',
    formPasswordConfirm: '',
  }

  const onRegister = async() => {
    try {
      await auth.register(values.formEmail, values.formPassword);
    } catch(error) {
      alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
    } 
  }
</script>

<div class="register">
  <div class="register-inner">
    <div class="title"> 
        <h2>
          Hi!
        </h2>   
        <span>
          Create your Flowbite account.
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
            <label for="confirm-password">Confirm Password</label>
            <input 
              type="password" 
              name="confirm-password" 
              id="confirm-password" 
              autoComplete="off"  
              bind:value={values.formPasswordConfrim}
            />
          </li>
          <li>
            <button class="primary-button full-width" on:click={onRegister}>
              <span>sign up</span>
            </button>
          </li>
          <li>
            <span>Already have an account?</span>
            <button class="text-button" >
              <a href="/login">
                <span>Login</span>
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <style>
    .register {
      width: 100%;
      max-width: 480px;
    }

    .register-inner {
      padding: 5rem;
    }

    .auth-form ul li {
      margin-bottom: 4rem;
    }

    .auth-form ul li:nth-child(4) {
      margin-bottom: 2rem;  
    }
    
    .auth-form ul li:last-child {
      margin-bottom: 0;  
      text-align: center;
    }

  </style>