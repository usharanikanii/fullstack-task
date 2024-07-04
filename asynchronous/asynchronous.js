//setTimeOut
/*function start(){
    console.log("Start");
}
setTimeout(start,5000)

function running(){
    console.log("running");
}
running();*/

    //setInterval
/*let num = 1;
function start(){
    document.getElementById("time").innerHTML=++num;
}
setInterval(start,1000) //the number in this denotes milliseconds*/


/*let num = 1;
function start(){
    let d = new Date();
    document.getElementById("time").innerHTML = d;
}
setInterval(start,1000)

let num = 1;
function start(){
    let d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();//only time
    document.getElementById("time").innerHTML = d.toLocaleString();//date and time

}
setInterval(start,1000)*/

    //Asynch
    async function data(){
        await fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>console.log(json))
    }
    console.log(data());