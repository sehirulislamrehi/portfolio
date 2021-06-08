import AboutComponent from "./Includes/AboutComponent"
import BannerComponent from "./Includes/BannerComponent"
import NavbarComponent from "./Includes/NavbarComponent"


const HomeComponent = () => {
     return(
          <div id="main">

               <NavbarComponent></NavbarComponent>
               <BannerComponent></BannerComponent>
               <AboutComponent></AboutComponent>
          
          </div >
     );
}

export default HomeComponent;