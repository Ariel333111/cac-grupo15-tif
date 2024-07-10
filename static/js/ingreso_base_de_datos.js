function entrar(){
    const contraseña = "lolopolo"
    const usuario = "cuadros"
        if (document.form.password.value==contraseña && document.form.login.value==usuario){
            alert("Bienvenido/a a nuestros cuadros");
            window.location ="../templates/tabla_cuadros.html"}
        else{
            alert("Por favor ingrese nombre de usuario y contraseña incorrectos")
        }   
}
