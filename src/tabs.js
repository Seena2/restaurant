import CreateContactPage from "./contact";
import CreateRestaurantHomePage from "./home";
import CreateMenuPage from "./menu";


const CreateTabs=()=>{

    const content=document.querySelector('#content');

    //Create three divs for menus items
    const div1=document.createElement('a');
    const div2=document.createElement('a');
    const div3=document.createElement('a');

    //Set id for each div, so that we target them when we style them (it can be class)
    div1.setAttribute('id','home-tab');
    div2.setAttribute('id','Menu-tab');
    div3.setAttribute('id','contact-tab');

    //set classes for the div
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //Add text content
    div1.textContent="Home";
    div2.textContent="Menu";
    div3.textContent="contact";

    //finally append the div to the parent content div
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    //Add event Listens to the tabs
    div1.addEventListener('Click',()=>{
        ClearContent();
        CreateRestaurantHomePage();
    });
    div2.addEventListener('Click',()=>{
        ClearContent();
        CreateMenuPage();
    });
    div3.addEventListener('Click',()=>{
        ClearContent();
        CreateContactPage();
    });


}

//function that removes the the current content and replace it with content of clicked tab
function ClearContent (){
 const content=document.querySelector('#content');
 const pageContent=document.querySelector('.pageContent');
 
 if(pageContent){
    content.removeChild(pageContent);

 }
}

//export Module
export default CreateTabs;