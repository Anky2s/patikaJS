let isim=prompt("İsminizi giriniz")


let ad=document.querySelector("#myName")
ad.innerHTML=isim


let saat=document.querySelector("#myClock")
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
var dayName = days[new Date().getDay()];
saat.innerHTML =  h + ":" + m + ":" + s + " " +dayName;


