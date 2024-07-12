function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let autor_ingresado = document.getElementById("autor").value 
    let ancho_ingresado = document.getElementById("ancho").value 
    let largo_ingresado = document.getElementById("largo").value 
    let imagen_ingresada = document.getElementById("imagen").value 
    let estilo_ingresado = document.getElementById("estilo").value

    let datos = {
        nombre: nombre_ingresado,
        autor:autor_ingresado,
        ancho:ancho_ingresado,
        largo:largo_ingresado,
        imagen:imagen_ingresada,
        estilo:estilo_ingresado
    }

    console.log(datos);

    let url = "https://ariel111222.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../templates/tabla_cuadros.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}