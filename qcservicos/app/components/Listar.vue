<template>
  <Page>
    <ActionBar>
      <Image src="~/assets/images/logo_qc.png" @tap="$navigateTo(homePage)" class="logo" stretch="aspectFit" />
    </ActionBar>
    <StackLayout>
      <Label :text="profissao" class="titulo" />
        
        <Label v-if="resultado.length == 0" class="text-left warn-item" horizontalAlignment="left" text="Nenhum profissional cadastrado na categoria selecionada." row="1" col="0" textWrap="true"></Label>
        
        <ListView for="item in resultado">
          <v-template>
            <CardView class="cardStyle" margin="10" elevation="10" radius="2" >
              <GridLayout rows="0,25,35,*" columns="auto">
                <Label class="text-left item item-nome" horizontalAlignment="left" :text="item.nome" row="1" col="0" textWrap="true"></Label>
                <Label class="text-left item" horizontalAlignment="left" :text="item.fone" row="2" col="0"></Label>
                <Label class="text-left item" horizontalAlignment="left" :text="item.local" row="3" col="0"></Label>
              </GridLayout>
            </CardView>
          </v-template>
        </ListView>
    </StackLayout>
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