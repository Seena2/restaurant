//import the style
import './style.css';
//Import Images
import logo from './images/s.png';
import dish1 from './images/dish1.jpeg';
import dish2 from './images/dish2.jpeg';
import dish3 from './images/dish3.jpeg'

const createHomePage = () => {
    //grab the content div
    const content = document.querySelector('#content');

    //for adding and removing page content
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append Headline Elemant
    const headline = document.createElement('h1');
    headline.textContent = "SEENA Restaurant";
    headline.classList.add('welcome')
    pageContent.appendChild(headline);

    //create and append Paragraph
    const description = document.createElement('p');
    description.textContent = 'Restaurant Seena is best restaurant in town where you find delicious cousens and dring that quench your thirst. Come and test the original tests of foods in town, our door is always open for you.';
    pageContent.appendChild(description);

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'Menus';
    pageContent.appendChild(menuHeading);


    const foods = document.createElement('div');
    foods.classList.add('foods')

    const marqa = document.createElement('div');
    const marqaH3 = document.createElement('h3');
    marqaH3.textContent = "Marqa";
    //Create and append Images
    /*
    const image1=document.createElement('img');
    image1.src='./images/dish1.jpeg';
    image1.height='300';
 */
    //or using webpack add image to the existing div
    const foodImage1 = new Image();
    foodImage1.src = dish1;
    const descMerqa = document.createElement('p');
    descMerqa.textContent = "Made from pure wheat flour made via traditional process,this origional test will be saved to your mind";
    marqa.appendChild(marqaH3);
    marqa.appendChild(foodImage1);
    marqa.appendChild(descMerqa);
    foods.appendChild(marqa);
    pageContent.appendChild(foods)

    const micira = document.createElement('div');
    const miciraH3 = document.createElement('h3');
    miciraH3.textContent = "Micira";
    const foodimage2 = new Image();
    foodimage2.src=dish2;
    foodimage2.height='300';
    const descMicira = document.createElement('p');
    descMicira.textContent = "Made from pure wheat flour made via traditional process,this origional test will be saved to your mind";

    micira.appendChild(miciraH3);
    micira.appendChild(foodimage2);
    micira.appendChild(descMicira);
    foods.appendChild(micira);
    pageContent.appendChild(foods);
   
    const cacabsa = document.createElement('div');
    const cacabsaH3 = document.createElement('h3');
    cacabsaH3.textContent = "Cacabsa";
    const imageCacabsa=new Image();
    imageCacabsa.src=dish3;
    const descCacabsa = document.createElement('p');
    descCacabsa.textContent = "Made from pure wheat flour made via traditional process,this origional test will be saved to your mind";

    cacabsa.appendChild(cacabsaH3);
    cacabsa.appendChild(imageCacabsa);
    cacabsa.appendChild(descCacabsa);
    foods.append(cacabsa);
    pageContent.appendChild(foods);


    //append all the contents to the content div
    content.appendChild(pageContent);
}

export default createHomePage;