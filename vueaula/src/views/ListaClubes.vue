<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>

    <template>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Classificação</th>
              <th class="text-center">Clubes</th>
              <th class="text-center">Pontos</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(clube, index) of clubesListaOrdenadas" :key="clube.id">
                <td class="text-center">{{ index + 1 }}</td>
              <td>{{ clube.nome }}</td>
              <td>{{ clube.pontos }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>

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
          const listaOrdenada = this.clubesLista.slice(0).sort(
              (a, b) => a.pontos > b.pontos ? -1 : 1
          );
          return listaOrdenada
      }
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
</style>