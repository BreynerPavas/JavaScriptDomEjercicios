console.log(document.title);
window.onload = () => {
    //1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
    document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";
    //2. Cambia el color de fondo de la primera generación de Pokimon.
    console.log(document.getElementById("gen-1").nextElementSibling)
    document.getElementById("gen-1").nextElementSibling.setAttribute("style","background-color: lightblue;");
    //3. Imprime por consola la URL de la página.
    console.log(document.URL);
    //4. Imprime por consola el dominio de la página.
    console.log(document.domain);
    //5. Imprime todos los nodos de imagen.
    let imgs = document.getElementsByTagName("img");
    for(var i = 0; i< imgs.length; i++){
        //console.log(imgs[i]);
    //6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
        imgs[i].setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
    }
    //7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
    
    let voladores = document.querySelectorAll(".flying")
    for (const element of voladores) {
        element.parentElement.parentElement.setAttribute("style","background-color: cyan;");
    }    
    
    
}