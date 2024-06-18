const authen = new URLSearchParams(window.location.search)
console.log(authen)


const username = authen.get('username');
console.log(username)
const password = authen.get('password');
console.log(password)

if (username == 'altgomez' && password == '123'){

    window.location.href = '../paginas.fotos.html'
}

else {
alert('datos incorrectos')
     window.location.href = 'index.html'
}


//    function 
//    // Obtener los varores ingresados por el usuario
//    const username = document.getElementById('username').value;
//    const password = document.getElementById('password').value;
//    const terminosAccepted = document.getElementById('terminos').checked;

//    // mensaje de verificacion
//    const mensaje = document.getElementById('mensajes');

//    // Validar que el  usuario acepte terminos. 
//    if (!terminosAccepted) {
//        mensaje.texcontent = 'aceptar terminos para cuntinuar.';
//        mensaje.style.color = 'red';
//        return;
//    }
//    // Validarlos valores, aqui puedes agregar mas validaciones
//    if (username === 'altgomez' && password === '123') {
//        mensaje.textContent = 'bienvenido, ' + username + '!';
//        mensaje.style.color = 'green';

//        window.location.href = 'fotos.html';
//    } else {
//        mensaje.textContent = 'usuario y/o contraseña incorrectos.';
//        mensaje.style.color = 'red';

//        window.location.href = 'index.html'
//    }
