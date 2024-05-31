<script>
	import { registerValidate, extractErrors } from './../../utils/validates.js';
  import {auth} from '../../stores';

  let errors = {}

  let values = {
    formEmail: '',
    formPassword: '',
    formPasswordConfirm: '',
  }

  const onRegister = async() => {
    try {
      await registerValidate.validate(values, {abortEarly: false})
      await auth.register(values.formEmail, values.formPassword);
    } catch(error) {
      //alert('회원가입에 실패했습니다. 다시 시도해 주세요.');

      errors = extractErrors(error)
      if(errors.formEmail) alert(errors.formEmail)
      if(errors.formPassword) alert(errors.formPassword)
      if(errors.formPasswordConfirm) alert(errors.formPasswordConfirm)
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
              class:wrong={errors.formEmail}
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
              class:wrong={errors.formPassword}
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
              class:wrong={errors.formPasswordConfirm}
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

    .wrong {
      border-bottom: 1px solid red;  
   }
  </style>