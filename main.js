
let btn = document.querySelector("#button");
let remove = document.querySelector("#annulla");
const element = document.getElementById("message");
const price = 0.21;
let message = "";
const nomeCognome = "";
btn.addEventListener("click", function(){
    const eta = parseFloat(document.getElementById("eta").value);
    const chilometri = parseFloat(document.getElementById("chilometri").value);
    const nomeCognome = document.getElementById("nome-cognome").value;
    const nomePasseggeroElement = document.getElementById("nome-passeggero");
    if( Number.isFinite(eta) && Number.isFinite(chilometri) ) {
        // Calcola costo iniziale
        let costo = chilometri * price;
        
        
        // Sconto under 18
        if(eta < 18) {
            costo = costo * 0.8;
            
            message = `Hai diritto allo sconto junior. `;
    
        // Sconto over 65
        } else if(eta >= 65) {
            costo = costo * 0.6;      
            message = `Hai diritto allo sconto senior. `;
        }
    
        //Dopo if/else dell'età
        message += `${costo.toFixed(2)} €`;
    
        // In caso di errori relativi ai dati inseriti
            
    }   else {
            message = "Errore: i dati inseriti non sono numerici";
        }
        //console.log(nomeCognome);
        element.innerHTML = message;
        nomePasseggeroElement.textContent = nomeCognome;
});
remove.addEventListener('click', function(){
    document.getElementById("eta").value = "";
    document.getElementById("chilometri").value = "";
    document.getElementById("nome-cognome").value = "";
    document.getElementById("nome-passeggero").innerHTML = "";
    document.getElementById("message").innerHTML = "";
});
