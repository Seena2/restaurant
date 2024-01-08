//Module to create the Contact page
//import the style
import './style.css';

const CreateContactPage=()=>{
const content= document.querySelector('#content');
const pageContent=document.createElement('div');
pageContent.classList.add('page-content');

//create contact form to dynamically added to the page
const contactForm= document.createElement('form');
contactForm.classList.add('form-style');

const nameInput= document.createElement('input');
nameInput.type='text';
nameInput.placeholder="Provide Your name here";
contactForm.appendChild(nameInput);

const addressInput= document.createElement('input');
addressInput.type='text';
addressInput.placeholder="your address please";
contactForm.appendChild(addressInput);

const phoneInput= document.createElement('input');
phoneInput.type='text';
phoneInput.placeholder="phone number";
contactForm.appendChild(phoneInput);

const submitBtn= document.createElement('button');
submitBtn.type='button';
submitBtn.placeholder="send";
contactForm.appendChild(submitBtn);

pageContent.appendChild(contactForm);
content.appendChild(pageContent);

}

//export the module
export default CreateContactPage;