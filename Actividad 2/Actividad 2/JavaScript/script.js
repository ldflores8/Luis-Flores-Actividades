// Mostrar solo la sección correspondiente al hacer clic en el menú
document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('nav ul li a');
    const secciones = document.querySelectorAll('section');

    enlaces.forEach((enlace) => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            // Ocultar todas las secciones
            secciones.forEach((seccion) => {
                seccion.classList.remove('visible');
                seccion.classList.add('oculto');
            });

            // Mostrar la sección seleccionada
            const seccionID = enlace.getAttribute('data-section');
            document.getElementById(seccionID).classList.remove('oculto');
            document.getElementById(seccionID).classList.add('visible');
        });
    });
});

// Funcionalidades Lógicas

// Comparar Números
document.getElementById('comparar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado-comparacion');

    if (num1 > num2) {
        resultado.textContent = `El mayor es: ${num1}`;
    } else if (num1 < num2) {
        resultado.textContent = `El mayor es: ${num2}`;
    } else {
        resultado.textContent = 'Ambos números son iguales.';
    }
});

// Mostrar Mes
document.getElementById('mostrar-mes').addEventListener('click', () => {
    const mes = parseInt(document.getElementById('numero-mes').value);
    switch (mes) {
        case 1: alert('Enero'); break;
        case 2: alert('Febrero'); break;
        case 3: alert('Marzo'); break;
        case 4: alert('Abril'); break;
        case 5: alert('Mayo'); break;
        case 6: alert('Junio'); break;
        case 7: alert('Julio'); break;
        case 8: alert('Agosto'); break;
        case 9: alert('Septiembre'); break;
        case 10: alert('Octubre'); break;
        case 11: alert('Noviembre'); break;
        case 12: alert('Diciembre'); break;
        default: alert('Número fuera de rango');
    }
});

// Gestión de Arrays
const nombres = [];
document.getElementById('agregar-nombre').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    nombres.push(nombre);
    const lista = nombres.map((n, index) => `<p>${index + 1}. ${n}</p>`).join('');
    document.getElementById('lista-nombres').innerHTML = lista;
});

// Registro de Usuarios
document.getElementById('form-registro').addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = {
        id: document.getElementById('id').value,
        cedula: document.getElementById('cedula').value,
        nombre: document.getElementById('nombre-apellido').value,
        fecha: document.getElementById('fecha-nacimiento').value,
        ciudad: document.getElementById('ciudad').value
    };

    // Crear tabla
    const tabla = `
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Cédula</th>
                <th>Nombre</th>
                <th>Fecha de Nacimiento</th>
                <th>Ciudad</th>
            </tr>
            <tr>
                <td>${datos.id}</td>
                <td>${datos.cedula}</td>
                <td>${datos.nombre}</td>
                <td>${datos.fecha}</td>
                <td>${datos.ciudad}</td>
            </tr>
        </table>
    `;
    document.body.innerHTML = tabla;
});
