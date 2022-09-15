let user = [],
  password = [];

menu();

function menu() {
  let loop = true;
  while (loop) {
    const choice = prompt(
      "Deseja fazer: \n1-Cadastre \n2-Login \n3-Excluir Cadastro \n4-Encerrar Programa"
    );
    if (choice == 1) {
      register();
    }
    if (choice == 2) {
      const userLogin = prompt("Usuario:"),
        passwordLogin = prompt("Senha:");
      alert(login(userLogin, passwordLogin));
    }
    if (choice == 3) {
      const userDelete = prompt("Qual Usuario voce que Excluir o cadastro?");
      alert(deleteRegister(userDelete));
    }
    if (choice == 4) {
      loop = false;
    }
  }
}
function register() {
  user[user.length] = prompt("Cadastre o seu Usuario:");
  password[password.length] = prompt("Cadastre a sua Senha:");
}
function login(User, Password) {
  if (user.includes(User) && password.includes(Password)) {
    return "Login Feito com Sucesso";
  }
  if (user.includes(User) || password.includes(Password)) {
    return "Usuario ou Senha Invalido";
  }
}
function deleteRegister(User) {
  if (user.includes(User)) {
    const index = user.indexOf(User);
    user.splice(index);
    password.splice(index);
    return "Cadastro Excluído com Sucesso";
  } else {
    return "Usuario Invalido";
  }
}
