function crearElemento(nombretag) {
    return document.createElement(nombretag);

}
function crearElementoConTexto(nombretag, textotag) {
    var elemento = crearElemento(nombretag);
    var elementoTexto = document.createTextNode(textotag);
    elemento.appendChild(elementoTexto);
    return elemento;
}
function crearImagen(urlImagen) {
    var img = crearElemento("img");
    img.src = urlImagen;
    return img;
}
function adicionarBody(elemento) {
    document.body.appendChild(elemento);
}
function adicionarHijo(padre, hijo) {
    padre.appendChild(hijo);
}
function crearLink (textoLink, urlReferencia){
    var a = crearElementoConTexto("a",textoLink);
    a.href = urlReferencia;
    return a;
}