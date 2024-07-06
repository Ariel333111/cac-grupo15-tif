function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value //input
    let autor_ingresado = document.getElementById("autor").value 
    let ancho_ingresado = document.getElementById("ancho").value 
    let largo_ingresado = document.getElementById("largo").value 
    let imagen_ingresada = document.getElementById("imagen").value 
    let estilo_ingresado = document.getElementById("estilo").value 

    console.log(nombre_ingresado,autor_ingresado,ancho_ingresado,largo_ingresado,imagen_ingresada,estilo_ingresado);
    // Se arma el objeto de js 
    let datos = {
        nombre:nombre_ingresado,
        autor:autor_ingresado,
        ancho:ancho_ingresado,
        largo:largo_ingresado,
        imagen:imagen_ingresada,
        estilo:estilo_ingresado
    }
    console.log(datos);
    
    let url = "https://ariel111222.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "../templates/tabla_cuadros.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}