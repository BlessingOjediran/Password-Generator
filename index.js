const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let mypassword1 = document.getElementById("password1")
let mypassword2 = document.getElementById("password2") 
let errorText = document.getElementById("errorMessage")
let mypasswordlength = document.getElementById("passwordLength")


function generatePasswords() {
    mypassword1.textContent = ""
    mypassword2.textContent = ""
    let mypasswordlengthValue = mypasswordlength.value

    for (let i = 0; i < mypasswordlengthValue; i++) {
        if (mypasswordlengthValue >= 8 && mypasswordlengthValue <= 20) {
            let num1 = Math.floor(Math.random() * characters.length)
            let num2 = Math.floor(Math.random() * characters.length)
            errorText.textContent = ""
         
            mypassword1.textContent += characters[num1]
            mypassword2.textContent += characters[num2]
        }
        else {
            errorText.textContent = "Password length should be between 8 and 20! Please try again."
        }
    }
}

function copyToClipboard() {

    navigator.clipboard.writeText(mypassword1.textContent).then(() => {
        alert('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
    },
    () => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
    });
  }


