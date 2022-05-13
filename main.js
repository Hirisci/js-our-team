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
const addMember = document.querySelector("#addMemberButton")
const fullName = document.querySelector("#name")
const position = document.querySelector("#role")
const image = document.querySelector("#image")

function addTeam(ogg,where){
    const figure = `
    <div class="team-card">
        <div class="card-image">
            <img src="${ogg.img}" alt="${ogg.fullName}" />
        </div>
        <div class="card-text">
            <h3>${ogg.fullName}</h3>
            <p>${ogg.position}</p>
        </div>
    </div>
    `;

    where.innerHTML += figure;

}

for (let i = 0; i < staff.length; i++) {
    addTeam(staff[i],teamContainer)  
}

addMember.addEventListener("click", function(){
    
    oggetto={
        fullName: fullName.value,
        position: position.value,
        img: image.value,
    };

    addTeam(oggetto,teamContainer)
})

















