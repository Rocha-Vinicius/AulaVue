<template>
     <v-app>
    <div style="width: 80%" class="TelaLogin">
      <div class="TelaLogin-form">
        <h2>TelaLogin</h2>
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
          @click="logar"
          color="green"
          elevation="2"
          medium
          outlined
          rounded
          >TelaLogin</v-btn
        >
        <router-link to="/registro">
          <v-btn color="green" elevation="2" medium outlined rounded
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
      TelaLogin_id: "",
      TelaLogin_pass: "",
    };
  },
  methods: {
    logar() {
      let user = {
        nome: this.TelaLogin_id,
        id: this.TelaLogin_pass,
      };
      this.$store.commit("logar", user);
      this.$router.push({ name: "Usuario" });
    },
  },
};
</script>

<style>
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