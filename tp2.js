let registros = [
  { patente: "AB123CD", velocidad: 120, tipo: "auto",   km: 150 },
  { patente: "XY987ZW", velocidad: 95,  tipo: "camion", km: 300 },
  { patente: "MN456GH", velocidad: 135, tipo: "auto",   km: 80  },
  { patente: "QR789JK", velocidad: 88,  tipo: "moto",   km: 45  },
  { patente: "ST012LM", velocidad: 125, tipo: "auto",   km: 200 }
];

const LIMITE = 110;
const TOPE_MULTA_LEVE = 130;
const MULTA_LEVE = 5000;
const MULTA_GRAVE = 10000;

function calcularMulta(velocidad) {
  if (velocidad <= LIMITE) {
    return 0;
  }
  if (velocidad <= TOPE_MULTA_LEVE) {
    return MULTA_LEVE;
  }
  return MULTA_GRAVE;
}

function superaLimite(vehiculo) {
  return vehiculo.velocidad > LIMITE;
}

let reporteMultas = registros.map(vehiculo => ({
  patente: vehiculo.patente,
  monto: calcularMulta(vehiculo.velocidad)
}));

console.log("Reporte de multas:");
console.log(reporteMultas);

let infractores = registros.filter(superaLimite);
let patentesInfractores = registros.filter(superaLimite).map(vehiculo => vehiculo.patente);

console.log(`Cantidad de infractores: ${infractores.length}`);
console.log("Patentes de los infractores:", patentesInfractores);

let totalKm = registros.reduce((sumaKm, vehiculo) => sumaKm + vehiculo.km, 0);
let recaudacion = reporteMultas.reduce((sumaMontos, multa) => sumaMontos + multa.monto, 0);

console.log(`La flota recorrió ${totalKm} km y generó $${recaudacion} en multas.`);
