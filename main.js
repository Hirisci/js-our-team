const staff = [
    {
        fullName : "Wayne Barnett",
        position : "Founder & CEO",
        img : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        fullName : "Angela caroll",
        position : "Chief Editor",
        img : "img/angela-caroll-chief-editor.jpg"
    },
    {
        fullName : "Angela Lopez",
        position : "Social Media Manager",
        img : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        fullName : "Barbara Ramos",
        position : "Graphic Designer",
        img : "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        fullName : "Scott Estrada",
        position : "Developer",
        img : "img/scott-estrada-developer.jpg"
    },
    {
        fullName : "Walter Gordon",
        position : "Office Manager",
        img : "img/walter-gordon-office-manager.jpg"
    },
]
const teamContainer = document.querySelector(".team-container")

for (let i = 0; i < staff.length; i++) {
    const figure = `
    <div class="team-card">
        <div class="card-image">
            <img src="${staff[i].img}" alt="${staff[i].fullName}" />
        </div>
        <div class="card-text">
            <h3>${staff[i].fullName}</h3>
            <p>${staff[i].position}</p>
        </div>
    </div>
    `;

    teamContainer.innerHTML += figure;
    
}















