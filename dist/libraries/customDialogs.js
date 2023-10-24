//------------------------------ Custom Confirmation Page --------------------------
var customConfirm = async function(title, description){
    /*
    document.getElementById("customConfirm-page").style.display = "block";
    document.getElementById("confirmTitle").innerText = title;
    document.getElementById("confirmDescription").innerText = description;*/

    // Create the main container div
    const mainContainerDiv = document.createElement('div');
    mainContainerDiv.id = 'customConfirm-page';
    mainContainerDiv.className = 'defaultPopupPage';
    mainContainerDiv.setAttribute("style", "z-index: 21; display: block");

    // Create the inner content div
    const contentDiv = document.createElement('div');
    contentDiv.className = 'defaultPopupContent';

    // Create the h1 element for the title
    const h1Title = document.createElement('h1');
    h1Title.innerHTML = title;

    // Create the p element for the description
    const pDescription = document.createElement('p');
    pDescription.setAttribute("style", "word-wrap: break-word; overflow-x: hidden; padding-left: 15px; padding-right: 15px;")
    pDescription.innerText = description;

    // Create the button for "İptal"
    const cancelButton = document.createElement('button');
    cancelButton.style.width = '130px';
    cancelButton.textContent = 'İptal';
    cancelButton.addEventListener('click', customConfirmCancelButton);

    // Create the button for "Tamam"
    const okayButton = document.createElement('button');
    okayButton.style.width = '130px';
    okayButton.id = 'customConfirmOkay';
    okayButton.textContent = 'Tamam';

    // Append the h1 and p elements to the content div
    contentDiv.appendChild(h1Title);
    contentDiv.appendChild(pDescription);

    // Append the buttons to a div for button container
    const buttonContainerDiv = document.createElement('div');
    buttonContainerDiv.setAttribute("style",  "padding-bottom: 25px; display: flex; align-items: center; justify-content: space-around;")
    buttonContainerDiv.appendChild(cancelButton);
    buttonContainerDiv.appendChild(okayButton);

    // Append the button container div to the content div
    contentDiv.appendChild(buttonContainerDiv);

    // Append the content div to the main container div
    mainContainerDiv.appendChild(contentDiv);

    // Append the main container div to the document body
    document.body.appendChild(mainContainerDiv);

    await btnClick(document.getElementById("customConfirmOkay"))

    document.getElementById("customConfirm-page").remove();
    if(customConfirmationCancel){ customConfirmationCancel = false; return false }
    return true;
}
var customConfirmationCancel = false;
var customConfirmCancelButton = function(){
    customConfirmationCancel = true;
    document.getElementById("customConfirmOkay").click();
}
async function btnClick(btn) {
    return new Promise(resolve =>  btn.onclick = () => resolve());
}
//------------------------------ Custom Confirmation Page --------------------------
//------------------------------ Custom Alert Page --------------------------
var customAlert = function(title, description){
    let dialogBox = document.createElement("div");
    dialogBox.setAttribute("class", "defaultPopupPage");
    dialogBox.setAttribute("style", "z-index: 20; display: block;");
    dialogBox.setAttribute("onclick", "if(!this.firstElementChild.contains(event.target) && this.contains(event.target)){this.remove()}")
    
    let dialogBoxContent = document.createElement("div");
    dialogBoxContent.setAttribute("class", "defaultPopupContent");

    let titleElement = document.createElement("h1");
    titleElement.innerText = title;

    let descriptionElement = document.createElement("p");
    descriptionElement.setAttribute("style", "word-wrap: break-word; overflow-x: hidden; padding-left: 15px; padding-right: 15px;");
    descriptionElement.innerText = description;

    let okButtonDiv = document.createElement("div");
    okButtonDiv.setAttribute("style", "padding-bottom: 25px");

    let okButton = document.createElement("button");
    okButton.setAttribute("onclick", "this.parentNode.parentNode.parentNode.remove()");
    okButton.textContent = "Tamam"

    okButtonDiv.appendChild(okButton);

    dialogBoxContent.appendChild(titleElement);
    dialogBoxContent.appendChild(descriptionElement);
    dialogBoxContent.appendChild(okButtonDiv);

    dialogBox.appendChild(dialogBoxContent);

    document.body.appendChild(dialogBox);
}
//------------------------------ Custom Alert Page ---------------------------------
