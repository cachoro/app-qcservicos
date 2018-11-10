<template>
    <Page>
        <ActionBar>
            <Image src="~/assets/images/logo_qc.png" class="logo" stretch="aspectFit" />
        </ActionBar>
        
        <WrapLayout orientation="horizontal" width="100%" height="100%"
                backgroundColor="lightgray" class="container">
            <Image src="~/assets/images/carpinteiro.jpg" @tap="$navigateTo(listarPage, {props:{profissao:'Carpinteiro'}})" stretch="none" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/costureira.jpg" @tap="$navigateTo(listarPage, {props:{profissao:'Costureira'}})" stretch="none" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/eletricista.jpg" @tap="$navigateTo(listarPage, {props:{profissao:'Eletricista'}})" stretch="none" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/mecanico.jpg" @tap="$navigateTo(listarPage, {props:{profissao:'Mecânico'}})" stretch="none" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/pedreiro.jpeg" @tap="$navigateTo(listarPage, {props:{profissao:'Pedreiro'}})" stretch="none" class="thumb home-image-size" width="48%" height="25%" />
            <Image src="~/assets/images/pintor.jpg" @tap="$navigateTo(listarPage, {props:{profissao:'Pintor'}})" stretch="none" class="thumb home-image-size" width="48%" height="25%" />
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
