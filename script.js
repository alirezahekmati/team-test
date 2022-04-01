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

/* ***********************************************
**********************************************
               name section         
 **********************************************
 ************************************************ */