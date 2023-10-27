const eta = document.getElementById("eta").value = "";
const chilometri = document.getElementById("chilometri").value = "";
let btn = document.querySelector("button");
const element = document.getElementById("message");
const price = 0.21;
let message = "";

btn.addEventListener("click", function(){

});

    // // Se età e distanza sono numerici
    // if( Number.isFinite(eta) && Number.isFinite(chilometri) ) {
    
    //     // Calcola costo iniziale
    //     let costo = chilometri * price;
    //     console.log("Costo iniziale: ", costo);
    
    //     // Sconto under 18
    //     if(eta < 18) {
    //         costo = costo * 0.8;
            
    //         message = `Hai diritto allo sconto junior. `;
    
    //     // Sconto over 65
    //     } else if(eta >= 65) {
    //         costo = costo * 0.6;      
    //         message = `Hai diritto allo sconto senior. `;
    //     }
    
    //     //Dopo if/else dell'età
    //     message += `Costo biglietto: ${costo.toFixed(2)} €`;
    
    // // In caso di errori relativi ai dati inseriti
    // } else {
    //     message = "Errore: i dati inseriti non sono numerici";
    // }


