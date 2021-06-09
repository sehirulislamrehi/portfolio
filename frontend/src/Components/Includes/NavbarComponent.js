
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useState } from 'react';

const NavbarComponent = () => {

     const [checked, setChecked] = useState(false);

     const toggleChecked = (e) => {
          setChecked((prev) => 
               !prev );
               if( e.target.checked == true ){
                    document.getElementById("theme_css").href = ""
               }
               else{
                    document.getElementById("theme_css").href = "http://localhost:3000/css/dark-theme.css"
               }
     };

     return(
          <nav className="navbar navbar-expand-lg dark fixed-top navbar-light">
                    
               <div className="container">
                    
                    <FormGroup>
                         <FormControlLabel
                         control={<Switch checked={checked} onChange={toggleChecked} />}
                         label="Light Theme"
                         />
                    </FormGroup>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtoggler"
                         aria-controls="navtoggler" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                         <span className="navbar-toggler-icon"></span>
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navtoggler">
                         <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                              <li className="nav-item">
                                   <a className="nav-link active" href="#home">Home <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#about">About</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#skills">Skills</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#expertise">Expertise</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#counting">Counting</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#service">Service</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#portfolio">Portfolio</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#blog">Blog</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#contact">Contact</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
}

export default NavbarComponent