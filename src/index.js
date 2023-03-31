//Import
import myName from "./myName";

//testing the setup
//alert('test passed');

function component(){
    const element=document.createElement('div');

    //using imported myName function in another js
    element.textContent=myName('chaala');

    return element;
}
document.body.appendChild(component());

