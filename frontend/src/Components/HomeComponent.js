import AboutComponent from "./Includes/AboutComponent"
import BannerComponent from "./Includes/BannerComponent"
import ContactComponent from "./Includes/ContactComponent"
import CountingComponent from "./Includes/CountingComponent"
import ExpertiseComponent from "./Includes/ExpertiseComponent"
import FooterComponent from "./Includes/FooterComponent"
import MySkillsComponent from "./Includes/MySkillsComponent"
import NavbarComponent from "./Includes/NavbarComponent"
import PortfolioComponent from "./Includes/PortfolioComponent"
import ServiceComponent from "./Includes/ServiceComponent"


const HomeComponent = () => {
     return(
          <div id="main">

               <NavbarComponent></NavbarComponent>
               <BannerComponent></BannerComponent>
               <AboutComponent></AboutComponent>
               <MySkillsComponent></MySkillsComponent>
               <ExpertiseComponent></ExpertiseComponent>
               <CountingComponent></CountingComponent>
               <ServiceComponent></ServiceComponent>
               <PortfolioComponent></PortfolioComponent>
               <ContactComponent></ContactComponent>
               <FooterComponent></FooterComponent>
          
          </div >
     );
}

export default HomeComponent;