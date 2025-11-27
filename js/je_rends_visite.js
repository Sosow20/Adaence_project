
const getAdaenceData = async () => {
    const res = await fetch("../data/Adaence.json")
    const data = await res.json()
    return data
}


const profils = document.querySelectorAll('.display-data');

const displayProfils = async () => {
    const dataAda = await getAdaenceData();

    profils.forEach((div, index) => {
        const user = dataAda[index];
        if (!user) return;

        div.innerHTML = `
        <div class="profil-text">
            <ul>
                <li> <strong> Type de moment:</strong> ${user.type} </li>
                <li id="name"> <strong>Prénom:</strong>  ${user.firstname} </li>
                <li> <strong>Métier:</strong> ${user.job} • ${user.age} ans </li>
                <li> <strong>Localisation:</strong> ${user.city} </li>
                <li> <strong>Description:</strong> ${user.description} </li>
            </ul>
      </div>
    `;
    });
};

// filter includes addEventLisener => bouton recherche gitcopilot 

displayProfils();


// async function getAdaenceData(){

// try{
//     const params= new URLSearchParams(window.location.search);
//     const type = params.get("type")?.toLocaleLowerCase()"";
//     const city =params.get("city")?.toLowerCase()"";

//     const res = await fetch("../data/Adaence.json")
//     const data = await res.json()

//     const selectProfils = data.filter(profil =>
//         profil.type.toLocaleLowerCase().includes(type)&&
//         profil.city.toLocaleLowerCase().includes(city)


//     );

//     displayProfils(selectProfils)
// }

// catch(error){
//     console.error("Erreur lors du chargement:", error)
// }
// }

// const displayProfils = (selectProfils) => {
//     const div = document.getElementsByClassName("profil-content")

//     if(selectProfils.length > 0){
//         div.innerHTML = selectProfils.map(a)
//     }
// }
