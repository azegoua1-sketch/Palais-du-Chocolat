// requete -> poseune question au jason

fetch("chocolatier.json")
.then(rep => {
    return rep.json()
})
.then(data => 
{
    console.log(data)
    afficherProduits(data.produits)
    afficherTemoignages(data.clients)
    listeBeneficesClients(data.listeBeneficesClients)
}
)



// ROLE : afficher les produits
// parametre : liste des produits
// return : rien

function afficherProduits(listeProduits){

    listeProduits.forEach(produit => {

        console.log(produit)
        document.querySelector("#produitsContainer").innerHTML += 
        `<div>
        
        
             <div>
             <img src="${produit.image}" alt="">
             <h3>${produit.titre}</h3>
             <p></p>
             <bouton></bouton>
             </div>
             </div> `
             
        
    });
}





// role :afficher les temoignages
// parametre : listes des temoignage
//  return : rien

function afficherTemoignages(listeTemoignages){

    // chercher les temoignages 1 par 1

    // quand jen aurait trouve 1 -> envoie 

  

    listeTemoignages.forEach(temoignage =>{
        console.log(temoignage)
        document.querySelector("#temoignageContainer").innerHTML +=
        `<div>
        <p>${temoignage.nom}</p>
         <p>${temoignage.commentaire}</p>
        <p>${temoignage.typePrestation}</p>
        <p>Note :${temoignage.note}</p>
        </div>`
    });


}





function listeBeneficesClients(listeBeneficesClients){

    listeBeneficesClients.forEach(liste => {

        console.log(liste)
        document.querySelector("#listeBeneficesClients").innerHTML += 
        `<div>
        
        
             <div>
           
             <h3>${liste}</h3>
             <p></p>
             <bouton></bouton>
             </div>
             </div> `
             
        
    });
}



