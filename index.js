
async function hola(){

    var prop=[]
    const url= "https://api.openweathermap.org/data/2.5/weather?q=Argentina&appid=39c445c6e6887be90682a3d469114d07&units=metric"
    
    document.getElementById("btnCity")
    
    await fetch(url)
    .then(response=>response.json())
    .then(data=> {
        prop.push(data)
    }) 
console.log(prop[0])
var nameCity = prop[0].name
var min=prop[0].main.temp_min
var max=prop[0].main.temp_max
var img= "http://openweathermap.org/img/wn/10n@2x.png"

        document.getElementById("text").append(nameCity)
        document.getElementById("min").append(min)
        document.getElementById("max").append(max)
        document.getElementById("img").append(img)   




// console.log(nameCity)
// document.getElementById("text").append(nameCity)
}



function on (){
document.getElementById("overlayOff").style.display="block"
document.getElementById("myVideo").pause()
}

function off (){
document.getElementById("overlayOff").style.display="none"
document.getElementById("myVideo").play()
 location.reload();

}


