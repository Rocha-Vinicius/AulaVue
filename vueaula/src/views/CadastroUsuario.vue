<template>
  <div class="CadastroUsuario"> 
    <h2 class="text-h5 text-center mb-3 mt-5">Cadastro</h2>
      <v-form class="registro-box" ref="form" >
                    <v-text-field v-model="nome" label="Usuário" required>
                    </v-text-field>
                    <v-text-field v-model="password" type="password" label="Senha" required>
                    </v-text-field>
                    <v-text-field
                        v-model="numeroTelefone"
                        label="Telefone"
                        required
                    >
                    </v-text-field>
                    
                    <v-text-field v-model="email" label="E-mail" required>
                    </v-text-field>
                    <v-text-field v-model="endereco" label="Endereço" required>
                    </v-text-field>

                    <v-text-field v-model="time" label="Time" required>
                    </v-text-field>
          

                    <v-checkbox
                        v-model="checkbox"
                        label="Concordo com os termos de uso"
                        required
                    >
                    </v-checkbox>
    </v-form>  
    
      <div class="botoes">
                        <v-btn
                            class="botaoLimpar"
                            color="teal lighten-1"
                            elevation="2"
                            medium
                            outlined
                            rounded
                            @click="limpar"
                        >
                            Limpar
                        </v-btn> 
                        <v-btn @click="push"
                            class="botaoCadastrar"
                            color="teal lighten-1"
                            elevation="2"
                            medium
                            outlined
                            rounded
                            :disabled= "loading"
                        >
                            {{ loading ? "LOADING..." : "Cadastrar" }}
                        </v-btn>
                       
                    </div>   
  </div>
</template>

<script>
export default {
    name: "CadastroUsuario",
    data() {
        return {
            nome: "",
            password: "",
            numeroTelefone: "",
            email: "",
            endereco: "",
            time:"",
            checkbox: false,
            loading:false
        };
    },
    methods: {
        push() {
          this.loading=true
          setTimeout(()=>{
          this.$router.push('/analisecadastro')
          },1000)
           

        },
        limpar() {
            this.nome = "";
            this.numeroTelefone = "";
            this.email = "";
            this.endereco = "";
            this.password = "";
            this.time = "";
            this.checkbox = false;
        },
    },
};
</script>

<style>
.CadastroUsuario {
    text-align: center;
    margin: auto;
    padding: 10px;
    margin-bottom: 100px;
}
.botoes a{
  text-decoration: none;
}
</style>