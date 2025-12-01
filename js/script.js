  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email  = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (email === "" || senha === "") {
        mensagem.textContent = "Por favor, preencher todos os campos.";
    } else {


        if(email === "administrador@vidaplus.com" && senha === "123456") {
            mensagem.style.color = "green";
            mensagem.textContent = "Login realizado com sucesso!";
        } else {
            mensagem.style.color = "red";
            mensagem.textContent = "E-mail ou senha inválidos!";
        }
    }

  });
  
  
