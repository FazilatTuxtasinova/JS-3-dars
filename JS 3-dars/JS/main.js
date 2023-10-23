/*
let arrayObject = [45,78,"JavaScript","matn",true,false];
*/

/*
let oddiyObject = {ism:"Rustam", familiya: "Murodov", yoshi: 15};
*/

/*
console.log( arrayObject[2]);*/

/*
console.log(oddiyObject.ism);*/

/*
Functions in JS*/


/*
function savatchaniTekshir(){
    if(savatcha.length == 0){
        document.write("Savatchaning ichida" + savatcha.length + "dona ma`lumot bor");
    }
    else {
        document.write("Savatchaning ichida" + savatcha.length + "ta ma`lumot bor");
    }
}
let savatcha = [12,"text"];
savatchaniTekshir();*/
/*
Date in JS*/

let sana = new Date();

sana.setFullYear(2007);
sana.setMonth(01);
sana.setDate();


let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let soat = sana.getTime()
let seconds = sana.getSeconds()
let hours = sana.getHours()
let milliseconds = sana.getMilliseconds()
let timezoneOffset = sana.getTimezoneOffset()
let utcDate = sana.getUTCDate()
let utcDay = sana.getUTCDay()
let minutes = sana.getMinutes()
let utcFullYear = sana.getUTCFullYear()
let utcMilliseconds = sana.getUTCMilliseconds()
let utcMinutes = sana.getUTCMinutes()
let utcMonth = sana.getUTCMonth()
let utcSeconds = sana.getUTCSeconds()
let varDate = sana.getVarDate







 let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];
let hafta = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"];
document.write(" Hozir " + yil + " -yil " + oylar[oy]  + " oyining " + kun + "-kuni. Haftaning esa "+ hafta [haftaKuni] +" kuni" +
    soat + ":" + seconds + ":" + hours + "": +
    milliseconds + "/" + timezoneOffset + "/" + utcDate + "/" + utcDay + "/" + minutes + "/" +  utcFullYear + "/" + utcMilliseconds + "/" +
    utcMinutes+ "/" + utcMonth+ "/" + utcSeconds+ "/" + varDate);




















