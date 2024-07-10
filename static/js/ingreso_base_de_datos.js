function entrar(){
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("password").value;

        if (contraseña == "lolopolo" && usuario=="cuadros"){
            
            alert("Bienvenido/a a nuestros cuadros");

            window.location = " ";}
        else{
            alert("Por favor ingrese nombre de usuario y contraseña incorrectos")
        }   
}
