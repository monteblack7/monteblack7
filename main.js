//baddies caught
//goombas: 12
//bob-ombs: 8 
//cheep-cheeps: 5



var goombas = 5;
var bob_ombs = 7;
var cheep_cheeps = 11;

document.getElementById("totalCoins").addEventListener("click", function(){
    var goomb = parseInt(document.getElementById("goombaCount").value);
    var bobomb = parseInt(document.getElementById("bobombCount").value);
    var cheep = parseInt(document.getElementById("cheepCount").value);
    
    var total = ((goomb * 5)+(bobomb * 7)+(cheep * 11));
    
//    console.log(total);
    
    document.getElementById("outputSize").innerHTML = total + " Coins";
});