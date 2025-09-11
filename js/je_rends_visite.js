
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
