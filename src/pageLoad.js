//import the style
import './style.css';
import createHomePage from './restauranthome';
import CreateTabs from './tabs';


function initialLoad(){
    CreateTabs();
    createHomePage();
}


//export the function
export default initialLoad;