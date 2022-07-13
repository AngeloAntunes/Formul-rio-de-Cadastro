function formata_mascara(campo_passado, mascara){
  
  var campo = campo_passado.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(campo);

  if(texto.substring(0,1) != saida){
    campo_passado.value += texto.substring(0,1);
  }  
}

function confereSenha(){
  const senha = document.querySelector('input[name=password]');
  const confirma = document.querySelector('input[name=confirmPassword');

  if(confirma.value === senha.value){
    confirma.setCustomValidity('');
  } else {
    confirma.setCustomValidity('As senhas informadas não conferem, por favor, utilize a mesma senha para os dois campos.');
  }
}

