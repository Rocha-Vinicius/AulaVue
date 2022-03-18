<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Sobre</h2>
         <v-img class="inicio-imagem mb-4" src="https://i.ytimg.com/vi/5QIsyuVqbNQ/mqdefault.jpg">
        </v-img>
        <p>O projeto "Brasileirão 2022" foi desenvolvido durante o treinamento para a Edição Luna do Hackathon Decola Iteris promovido pela 
            <a href="www.iteris.com.br">Iteris</a>.</p>
        
        <p>Conheça os desenvolvedores</p>

        <v-simple-table>
            <template>
                <tbody>
                <tr v-for="desenvolvedor of desenvolvedores" :key="desenvolvedor.id" >
                    <td>
                        <v-avatar size=62 mb-50 mt-5>
                            <img
                                :src="desenvolvedor.avatar" 
                                :alt="desenvolvedor.nome"
                            >
                        </v-avatar>
                    </td>
                    <td><a :href="desenvolvedor.link"> {{desenvolvedor.nome}}</a></td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

    </v-container>

</template>

<script>
export default {
    name: 'SobreProjeto',

    data() {
        return {
            desenvolvedores: [
                {
                    "id": 1,
                    "link": "https://github.com/tamarabluz/",
                    "nome": "Tamara Luz",
                    "avatar": "https://github.com/tamarabluz.png"
                },
                {
                    "id": 2,
                    "link": "https://github.com/flaviaspassos/",
                    "nome": "Flavia Passos",
                    "avatar": "https://github.com/flaviaspassos.png"
                },
                {
                    "id": 3,
                    "link": "https://github.com/laislucasss/",
                    "nome": "Lais Lucas",
                    "avatar": "https://github.com/laislucasss.png"
                },
                {
                    "id": 4,
                    "link": "https://github.com/amandacbarreto/",
                    "nome": "Amanda Barreto",
                    "avatar": "https://github.com/amandacbarreto.png"
                },
                {
                    "id": 5,
                    "link": "https://github.com/BrendaDourado/",
                    "nome": "Brenda Dourado",
                    "avatar": "https://github.com/BrendaDourado.png"
                },
                {
                    "id": 6,
                    "link": "https://github.com/AlineLourenco/",
                    "nome": "Aline Lourenço",
                    "avatar": "https://github.com/AlineLourenco.png"
                },
                {
                    "id": 7,
                    "link": "https://github.com/Rocha-Vinicius/",
                    "nome": "Vinicius Rocha",
                    "avatar": "https://github.com/Rocha-Vinicius.png"
                },
                {
                    "id": 8,
                    "link": "https://github.com/MarianaThomaz/",
                    "nome": "Mariana Thomaz",
                    "avatar": "https://github.com/MarianaThomaz.png"
                },
                {
                    "id": 9,
                    "link": "https://github.com/dev-adriano-lira/",
                    "nome": "Adriano Lira",
                    "avatar": "https://github.com/dev-adriano-lira.png"
                }
            ]
        };
    },
    
};

</script>

<style scoped>
    .inicio-imagem {
        border-radius: 5px;
    }
</style>