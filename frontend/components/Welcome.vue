<template>
  <div class="welcome-page">
    <div class="auth-section">
      <h2>Вход / Регистрация</h2>
      <form @submit.prevent="submitForm" class="login-form">
        <div class="input-field">
          <img src="/login.svg" alt="Email Icon" class="input-icon"/>
          <input type="email" v-model="login" placeholder="E-mail or Login" required class="login-box"/>
        </div>
        <div class="input-field">
          <img src="/password.svg" alt="Password Icon" class="input-icon"/>
          <input type="password" v-model="password" placeholder="Password" required class="password-box"/>
          <img src="/eye.svg" alt="Show Password Icon" class="show-password-icon" @click="togglePasswordVisibility"/>
        </div>
        <div class="buttons-container">
          <button type="button"
                  :class="{ 'active-button': activeButton === 'signIn', 'inactive-button': activeButton !== 'signIn' }"
                  @click="switchButton('signIn')">Войти
          </button>
          <button type="button"
                  :class="{ 'active-button': activeButton === 'signUp', 'inactive-button': activeButton !== 'signUp' }"
                  @click="switchButton('signUp')">Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
    <div class="project-section">
      <h1>CryptoGaze</h1>
      <p>Краткое описание проекта в одно предложение</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      activeButton: 'signIn'
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted');
    },
    switchButton(button) {
      this.activeButton = button;
    }
  }
}
</script>

<style lang="scss">


.welcome-page {
  font-family: Roboto, sans-serif;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: radial-gradient(63.88% 129.61% at 25.55% 31.91%, #20135C 0%, #140739 92.82%);
}

.auth-section {
  width: 35vw;
  height: 77.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #251767 54.26%, #141d45 99.01%);
  filter: drop-shadow(0px 25px 25px rgba(0, 3, 32, 0.5));
  color: #FFFFFF;
  border-radius: 8px;
  margin-left: 5%;
}

.auth-section h2 {
  font-weight: 500;
  font-size: 2.3vw;
  line-height: 6.16vh;
  letter-spacing: 0.05em;
  margin-bottom: 26px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 27.8vw;
  height: 7.6vh;
  background: #32395E;
  box-shadow: 0 4px 20px rgba(1, 143, 255, 0.15);
  border-radius: 8px;
  margin-bottom: 26px;
}

.input-icon {
  position: absolute;
  left: 0.73vw;
  top: 50%;
  transform: translateY(-50%);
  width: 2.60vh;
  height: 2.60vh;
  padding: 0.85vh;
  border-radius: 50%;
  box-shadow: inset 0 0 0 0.27vh #5FB2FF;
}

.show-password-icon {
  position: absolute;
  right: 0.73vw;
  top: 50%;
  transform: translateY(-50%);
  width: 1.46vw;
  height: 2.60vh;
  cursor: pointer;
}

.login-box,
.password-box {
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  padding: 0 2.93vw;
  color: white;
  align-items: center;
  margin-left: 2vw;
  font-size: 1.46vw;
  line-height: 2.60vh;
}

.buttons-container {
  display: flex;
  width: 60%;
  padding-right: 40%;
}


$white: #FFFFFF;
$shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
$button-padding: 1.30vh 1.46vw;
$button-margin: 1.30vh;
$button-font-size: 1.46vw;
$button-line-height: 2.60vh;

.button {
  width: auto;
  padding: $button-padding;
  margin: $button-margin;
  box-sizing: border-box;
  white-space: nowrap;
  font-size: $button-font-size;
  line-height: $button-line-height;
  box-shadow: $shadow;
  border-radius: 8px;
}

.active-button {
  @extend .button;
  color: $white;
  background: linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%);
}

.inactive-button {
  @extend .button;
  color: #949EC0;
  background: linear-gradient(88.43deg, #2F3453 11.5%, #242845 76.7%);
}

.project-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 5.27vw;
}

.project-section h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  font-size: 5.27vw;
  line-height: 11.07vh;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
}

.project-section h1::after {
  content: "";
  display: block;
  width: 60%;
  height: 1px;
  background: #1288E8;
  margin-bottom: 10px;
}

.project-section p {
  font-style: normal;
  font-size: 1.75vw;
  line-height: 3.65vh;
  color: #FFFFFF;
  text-shadow: 0 4px 20px rgba(1, 143, 255, 0.15);
}

@media (max-aspect-ratio: 14/16) {
  .welcome-page {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .project-section {
    order: -1;
    margin-right: 0;
  }

  .project-section h1::after {
    width: 80%;

  }
  .auth-section {
    width: 35vh;
    height: 77.5vw;
    margin-left: 0;
    margin-top: 10vh;
  }

  .auth-section h2 {
    font-size: 2.3vh;
    line-height: 6.16vw;
    margin-bottom: 26px;
  }

  .input-field {
    width: 27.8vh;
    height: 7.6vw;
  }

  .input-icon {
    width: 1.46vh;
    height: 2.60vw;
    padding: 0.65vw;
  }

  .login-box,
  .password-box {
    font-size: 1.46vh;
    line-height: 2.60vw;
    padding: 0 2.93vh;
  }

  .buttons-container {
    width: 60%;
    padding-right: 40%;
  }

  .show-password-icon {
    width: 1.46vh;
    height: 2.60vw;
  }

  .active-button,
  .inactive-button {
    font-size: 1.46vh;
    padding: 1.30vw 1.46vh;
    margin: 1.30vh;
  }
  .project-section h1 {
    font-size: 5.27vh;
    line-height: 11.07vw;
  }
  .project-section p {
    font-size: 1.75vh;
    line-height: 3.65vw;
  }
}
</style>