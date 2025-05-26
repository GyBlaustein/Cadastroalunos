function enviar() {
    //Não carregar a página ao clicar no botão
event.preventDefault()

    Swal.fire({
        title: "Parabéns",
        text: "Dados emviados com sucesso!",
        icon: "success"
    
      });
}

