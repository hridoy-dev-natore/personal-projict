
function rectanglecelculite(){
const wridthlangth=document.getElementById('rectangle-langth');
const langth=wridthlangth.value;
const convert=parseFloat(langth)
console.log(convert)
//get wridth
const hrigthlangth=document.getElementById('rectangle-hrigth');
const valuese=hrigthlangth.value;
const consts=parseFloat(valuese);
console.log(consts)
//culculet
const area=convert*consts;
console.log(area);
//culculet area
const totalvalue=document.getElementById('rectangle-area');
totalvalue.innerText=area
}