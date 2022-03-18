<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr class="bgTable" colspan="3">
            <th class="text-center">Classificação</th>
            <th class="text-center">Clubes</th>
            <th class="text-center">Pontos</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(clube, index) of clubesListaOrdenadas" :key="clube.id">
            <td class="text-center">{{ index + 1 }}</td>
            <td>
              <v-avatar size="24">
                <img 
                :src="clube.escudo" 
                :alt="clube.nome" />
              </v-avatar>
              <span>{{ clube.nome }}</span>
            </td>
            <td class="text-center">{{ clube.pontos }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>


<script>
export default {
  name: "ListaClube",
  data() {
    return {
      clubesLista: [],
    };
  },
  computed: {
    clubesListaOrdenadas() {
      const listaOrdenada = this.clubesLista
        .slice(0)
        .sort((a, b) => (a.pontos > b.pontos ? -1 : 1));
      return listaOrdenada;
    },
  },
  created() {
    fetch(" https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.clubesLista = json;
      });
  },
};
</script>

<style scoped>
.bgTable{
    background-image: linear-gradient(to right, #02c4b0, #12a099c2);
}
</style>