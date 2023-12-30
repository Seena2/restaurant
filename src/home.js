
const CreateRestaurantHomePage=() =>{
    //grab the content div
    const content= document.querySelector('#content');
    //create tags and elements and apply styles to them
   
    const pageContent=document.createElement('div');
    pageContent.classList.add('page-content');
    
    //Create and append Menu Elements
    const header= document.createElement('header');
    header.classList.add('header-style');

    //create and append Headline Elemant
    const headline=document.createElement('h2');
    headline.textContent='Restaurant Seena';
    pageContent.appendChild(headline);

    //create and append Paragraph
    const description=document.createElement('p');
    description.textContent='Restaurant Seena is best restaurant in town where you find delicious cousens and dring that quench your thirst. Come and test the original tests of foods in town, our door is always open for you.';
    pageContent.appendChild(description);

    //Create and append Images
    const image1=document.createElement('img');
    image1.src='./images/dish1.jpeg';
    image1.height='300';
    pageContent.appendChild(image1);

    //appent all the contents to the content div
    content.appendChild(pageContent);
}

export default CreateRestaurantHomePage;