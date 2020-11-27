let Curso = {
    "id" : 0,
    "nombre_curso" : "",
    "nombre_docente" : ""
};


function mostrarNombreCurso(nombre){ 
    console.log(`El nombre del curso es ${nombre}`)
}

mostrarPrecio = (precio)=>{
    //Muestra consola en formato de tabla, pero no esta bien
    //El error era que la variable estaba indefinida
    let precioMostrar = precio;
    console.log(`El precion es ${precioMostrar}`);
} 