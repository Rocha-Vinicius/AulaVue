<template>
     <v-app>
    <div style="width: 80%" class="TelaLogin">
      <div class="TelaLogin-form">
        <h2 class="text-h5 text-center mb-3 mt-5">Login</h2>
      </div>

      <v-form class="TelaLogin-box">
        <v-text-field v-model="TelaLogin_id" label="ID" required> </v-text-field>

        <v-text-field
          type="password"
          v-model="TelaLogin_pass"
          label="Password"
          required
        >
        </v-text-field>
      </v-form>

      <div class="botoes">
        <v-btn
          @click="nologin"
          color="teal lighten-1"
          elevation="2"
          medium
          outlined
          rounded
          >Login</v-btn
        >
        <router-link to="/cadastrousuario">
          <v-btn color="teal lighten-1" elevation="2" medium outlined rounded
            >Cadastrar-se</v-btn
          >
        </router-link>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "TelaLogin",
  data() {
    return {
    };
  },
  methods: {
    nologin: function () {
    
      alert('Você não tem login conosco, clique em CADASTRAR-SE')
    }
  }
}
</script>

<style scoped>
.TelaLogin {
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
}
.login-box {
  max-width: 100%;
}
.botoes a {
  text-decoration: none;
}
</style>