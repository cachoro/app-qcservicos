<template>
  <Page>
    <ActionBar>
      <Label :text="profissao" class="titulo" />
    </ActionBar>

    <ListView for="item in resultado">
      <v-template>
        <StackLayout>
          <Label class="text-left item item-nome" horizontalAlignment="left" :text="item.nome" height="40" textWrap="true"></Label>
          <Label class="text-left item" horizontalAlignment="left" height="40" :text="item.fone" ></Label>
          <Label class="text-left item" horizontalAlignment="left" height="40" :text="item.local" ></Label>
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
</template>
<script>
  import dados from './dados/dados.js'
  import Home from './Home'
  export default {
    name: 'listar',
    props: {
      profissao:{
        type: String,
        required: false,
      }
    },
    data: function(){
      return{
        homePage: Home,
        resultado:[],
        cidade:null,
        titulo: this.profissao,
        items: [
          'Costureira',
          'Pedreiro',
          'Mecânico',
          'Carpinteiro',
          'Eletricista',
          'Pintor',
          'Jardineiro',
        ],
        cidades:[
          'Agudo',
          'Restinga Sêca',
          'Santa Maria',
          'São João do Polesine',
          'Silveira Martins',
          'Faxinal do Sorturno',
        ],
        dados: dados,
      }    
    },
    mounted() {
      this.filtrar();
    },
    watch: {
      profissao() {
        if (this.profissao){
          this.filtrar();
        }
      },
    },
    methods:{
      filtrar() {
        this.resultado = [];
        this.dados.map((dado) => {
          if (dado.profissao == this.profissao){
            this.resultado.push(dado)
          }
        })
      }
    }
  }
</script>

<style scoped>
  ActionBar {
      background-color: #ffffff;
      color: #333333;
  }

  .message {
      vertical-align: center;
      text-align: center;
      font-size: 20;
      color: #333333;
  }
  .logo {
      height: 100px;
  }
  .titulo {
    font-size: 25px;
    text-align: center;
  }
  .item {
    padding-left: 8px;
    padding-bottom: 8px;
  }
  .item-nome {
    font-size: 18px;
    font-weight: bold;
  }
  .warn-item {
    padding: 10px;
  }
</style>