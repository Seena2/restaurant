//Module to create the Menu page

const CreateMenuPage=()=>{
    const content= document.querySelector('#content');
    const pageContent=document.createElement('div');
    pageContent.classList.add('page-style');
    
    //create heading
    const heading= document.createElement('h3');
    heading.textContent="Our Menu";
        
    const menuList= document.createElement('ul');
    const menuItem1= document.createElement('li');
    menuItem1.textContent='Cacabsa';
    const menuItem2= document.createElement('li');
    menuItem2.textContent='Marqa';
    const menuItem3= document.createElement('li');
    menuItem3.textContent='Micira';
    
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
    
    }
    
    //export the module
    export default CreateMenuPage;