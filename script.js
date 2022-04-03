/* ***********************************************
**********************************************
               alireza section         
 **********************************************
 ************************************************ */
let isAlirezaEmoji = false;
function alirezaEmojiClick(e) {
  isAlirezaEmoji = !isAlirezaEmoji;
  isAlirezaEmoji
    ? (e.target.textContent = "😳")
    : (e.target.textContent = "😊");
}
document
  .getElementById("alireza-face")
  .addEventListener("click", alirezaEmojiClick);

/* *****************************
 * Member data array (array of objects containing member details)
 ******************************/
const memberData = [
  { name: "Sushant", timeZone: "GMT + 5:30" },
  { name: "Silvia", timeZone: "GMT + 1" },
  { name: "Gene Lorenz", timeZone: "GMT + 8" },
];

/*******************************
 * Member Constructor
 *******************************/
function Member(memberDetails) {
  Object.assign(this, memberDetails);

  this.log = function () {
    console.log(this.name);
  };

  this.addToPage = function () {
    const p = document.createElement("p");
    p.id = "alireza";
    p.innerHTML = `Hello team, my name is <span id="alireza-span">${this.name}</span>
        I am from timezone: ${this.timeZone}
          <span id="alireza-face">😊</span> <span id="alireza-hand">👋</span>`;
    document.querySelector(".container").appendChild(p);
  };
}
/* *****************************
 * Loop over each member then create a new member object
 ******************************/
memberData.forEach((member) => new Member(member).addToPage());

/* ***********************************************
**********************************************
               name section         
 **********************************************
 ************************************************ */
