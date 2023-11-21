<template>

<main>
  <form action="post" >
 <div class="form-group">
 <label for="nome">Nome:</label>
 <input type="text" placeholder="Nome">
 </div>
 <div class="form-group">
 <label for="nome">Telefone:</label>
 <input type="text" placeholder="Telefone">
 </div>

 <div class="form-group">
 <label for="nome">Email:</label>
 <input type="text" placeholder="Email">
 </div>

 <input type="reset" value="Limpar">
 </form>
</main>
</template>

<script>
export default {
  name: 'FormCliente',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main{
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  width: 400px;
  align-items: center;
}
.form-group{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  width: 400px;

}
input[type='text'] {
  width: 100%;
  margin: 10px 0;
  height: 35px;
  border-radius: 6px;
  border: none;
  outline: none;
  padding-left: 6px;
  font-size: 1em;
  transition: all .2s ease-in-out;
  box-shadow: inset -2px 2px 8px rgba(0, 0, 0, .2);
}

</style>
