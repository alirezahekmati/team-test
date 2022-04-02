/* ***********************************************
**********************************************
               alireza section         
 **********************************************
 ************************************************ */
let isAlirezaEmoji = false
function alirezaEmojiClick(e) {
    isAlirezaEmoji = !isAlirezaEmoji
    isAlirezaEmoji ? e.target.textContent = "😳" : e.target.textContent = "😊"
}
document.getElementById("alireza-face").addEventListener("click", alirezaEmojiClick)

/*******************************
 * Member Constructor
 *******************************/

 const memberData = {
    sushant: { name: "Sushant", timeZone: "GMT + 5:30" },
  };
  
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
  
  const sushant = new Member(memberData.sushant);
  sushant.addToPage();
  

/* ***********************************************
**********************************************
               name section         
 **********************************************
 ************************************************ */