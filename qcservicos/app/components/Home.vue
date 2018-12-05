<template>
    <Page>
        <ActionBar>
            <Image src="~/assets/images/logo_qc.png" class="logo" stretch="aspectFit" />
        </ActionBar>
        
        <WrapLayout orientation="horizontal" width="100%" height="100%"
                backgroundColor="lightgray" class="container">
            <Image src="~/assets/images/Carpintaria.png" @tap="$navigateTo(listarPage, {props:{profissao:'Carpinteiro'}})" stretch="aspectFill" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/Costura.png" @tap="$navigateTo(listarPage, {props:{profissao:'Costureira'}})" stretch="aspectFill" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/Eletrica.png" @tap="$navigateTo(listarPage, {props:{profissao:'Eletricista'}})" stretch="aspectFill" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/Mecanica.png" @tap="$navigateTo(listarPage, {props:{profissao:'Mecânico'}})" stretch="aspectFill" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/Construcao.png" @tap="$navigateTo(listarPage, {props:{profissao:'Pedreiro'}})" stretch="aspectFill" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/Pintura.png" @tap="$navigateTo(listarPage, {props:{profissao:'Pintor'}})" stretch="aspectFill" class="thumb home-image-size" width="48%" height="25%" />
        </WrapLayout>
    </Page>
</template>

<script>
  import Listar from './Listar';
  export default {
    data() {
      return {
        listarPage: Listar,
      }
    },
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
    .home-image-size {
        width: 100%;
        margin: 5px;
        display: inline-block;
        max-width: 100%;
        height: auto;
        padding: 4px;
        line-height: 1.42857143;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        -webkit-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
</style>
