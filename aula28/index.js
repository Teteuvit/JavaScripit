const data = new Date();
const hora = data.getHours();
const dia = data.getDate();
const mes = data.getMonth() + 1; // mes começa do 0
const ano = data.getFullYear();
const min = data.getMinutes();
const seg = data.getSeconds();
const ms = data.getMilliseconds();
const diaSemana = data.getDay(); // 0 - domingo, 6 - sábado.

console.log (ano, mes, dia, hora, min, seg, ms, diaSemana);