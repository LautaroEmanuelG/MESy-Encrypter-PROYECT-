
var Encryptor = function () {
    this.mensaje = null;
};

Encryptor.prototype.setNewMsj = function (mensaje) {
    var nuevoMensaje = "";
    var msj = mensaje.toString();
    console.log(msj);
    for (var i = 0; i < msj.length; i++) {
        //console.log(i);
        var asciiCode = msj.charCodeAt(i);
        var newAscii = calculador(asciiCode);
        var newChar = nuevoCaracter(newAscii);
        nuevoMensaje = nuevoMensaje.concat(newChar.toString());
        
    }
    console.log(nuevoMensaje);
    return nuevoMensaje;
}

function calculador(unicode) {
    var binario = unicode.toString(2);
    console.log(binario);
    var cant1 = 0;
    var cant0 = 0;
    for (let i = 0; i < binario.length; i++) {
        if (binario[i] === '1') {
            cant1++;
        } else {
            if (binario[i] === '0') {
                cant0++;
            }
        }
    }
    if (binario.length < 8) {
        var cerosExtras = 8 - binario.length;
        cant0 = cant0 + cerosExtras;
    }
    console.log(cant0, cant1);
    var aux;
    var newValor;
    if (unicode <= 111 && unicode != 32) {
        aux = unicode * cant1;
        newValor = aux / cant0;
        if (newValor > 255) {
            newValor = newValor - 111;
        } else {
            if (newValor < 32) {
                newValor = newValor + 111;
            }
        }
    } else {
        if (unicode > 111 && unicode != 127) {
            aux = unicode / cant1;
            newValor = aux * cant0;
            if (newValor > 255) {
                var aux2 = Math.trunc(newValor / 111);
                newValor = newValor - (111 * aux2);
            }
            if (newValor < 32) {
                newValor = newValor + 111;
            }
        }
    }
    console.log(newValor);
    return Math.round(newValor);
}

function nuevoCaracter(valor) {
    var newChar = String.fromCharCode(valor);
    return newChar;
}
