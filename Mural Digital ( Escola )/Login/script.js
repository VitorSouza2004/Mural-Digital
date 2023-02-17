
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "o" && password == "i") {
      alert("Login bem-sucedido!");
    } else {
      alert("Nome de usuário ou senha incorretos. Tente novamente!");
    }
  }
  
