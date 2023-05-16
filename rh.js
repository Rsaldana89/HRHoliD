// Funciones Java para el sistema RH

// Lista de empleados
var empleados = [];

// Función para agregar un empleado a la lista
function agregarEmpleado() {
  var nombre = document.getElementById("nombre").value;
  var codigo = document.getElementById("codigo").value;
  var fechaIngreso = document.getElementById("fechaIngreso").value;

  var empleado = {
    nombre: nombre,
    codigo: codigo,
    fechaIngreso: fechaIngreso
  };

  empleados.push(empleado);

  // Se limpian los campos de entrada al ingresar el empleado
  document.getElementById("nombre").value = "";
  document.getElementById("codigo").value = "";
  document.getElementById("fechaIngreso").value = "";

  actualizarListaEmpleados(); // Actualizar la lista de empleados en el HTML rh.html

  console.log("Empleado agregado:", empleado);
}

// Función para actualizar la lista de empleados en el HTML
function actualizarListaEmpleados() {
  var listaEmpleados = document.getElementById("listaEmpleados");
  listaEmpleados.innerHTML = ""; // Limpiar la lista antes de actualizarla

  for (var i = 0; i < empleados.length; i++) {
    var empleado = empleados[i];

    var itemEmpleado = document.createElement("li");
    itemEmpleado.textContent = "Nombre: " + empleado.nombre + ", Código: " + empleado.codigo + ", Fecha de ingreso: " + empleado.fechaIngreso;

    listaEmpleados.appendChild(itemEmpleado);
  }


}

// Función para buscar las vacaciones de un empleado
function buscarVacaciones() {
  var codigoBuscar = document.getElementById("buscarCodigo").value;
  var empleadoEncontrado = empleados.find(function(empleado) {
    return empleado.codigo === codigoBuscar;
  });

  if (empleadoEncontrado) {
    var aniosLaborados = obtenerAniosLaborados(empleadoEncontrado.fechaIngreso);
    var diasVacaciones = obtenerDiasVacaciones(aniosLaborados);

    document.getElementById("resultado").innerText = "Días de vacaciones: " + diasVacaciones;
  } else {
    document.getElementById("resultado").innerText = "Empleado no encontrado.";
  }
}

// Función para calcular los años laborados
function obtenerAniosLaborados(fechaIngreso) {
  var fechaActual = new Date();
  var fechaIngreso = new Date(fechaIngreso);
  var tiempoTranscurrido = fechaActual - fechaIngreso;
  var aniosLaborados = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24 * 365));

  return aniosLaborados;
}

// Función para obtener los días de vacaciones según los años laborados
function obtenerDiasVacaciones(aniosLaborados) {
  var diasVacaciones = 0;

  if (aniosLaborados >= 1 && aniosLaborados <= 5) {
    switch (aniosLaborados) {
      case 1:
        diasVacaciones = 12;
        break;
      case 2:
        diasVacaciones = 14;
        break;
      case 3:
        diasVacaciones = 16;
        break;
      case 4:
        diasVacaciones = 18;
        break;
      case 5:
        diasVacaciones = 20;
        break;
      }
    } else if (aniosLaborados >= 6 && aniosLaborados <= 10) {
      diasVacaciones = 22;
    } else if (aniosLaborados >= 10 && aniosLaborados <= 15) {
      diasVacaciones = 24;
    } else if (aniosLaborados >= 15 && aniosLaborados <= 20) {
      diasVacaciones = 26;
    } else if (aniosLaborados >= 20 && aniosLaborados <= 25) {
      diasVacaciones = 28;
    } else if (aniosLaborados >= 25 && aniosLaborados <= 30) {
      diasVacaciones = 30;
      
  }

  return diasVacaciones;
}
