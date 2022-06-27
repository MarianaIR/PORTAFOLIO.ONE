document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario!');
      return;
    }
    var asunto = document.getElementById('asunto').value;
    if (asunto.length < 3) {
      alert('Cantidad de caracteres invalidos!');
      return;
    }
    var correo = document.getElementById('correo').value;
    if (correo.length < 10) {
      alert('Correo electronico vacio!');
      return;
    }
    var mensagem = document.getElementById('mensagem').value;
    if (mensagem.length > 50) {
      alert('Mensaje invalido, mas de 50 caracteres!');
      return;
    }
    if(mensagem.length == 0) {
        alert('No has escrito nada en el mensaje!');
        return;
      }
      
    this.submit();
  }
  

 