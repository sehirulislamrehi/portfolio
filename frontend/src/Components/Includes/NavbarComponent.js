

const NavbarComponent = () => {
     return(
          <nav className="navbar navbar-expand-lg dark fixed-top navbar-light">
                    
               <div className="container">
                    
                    <a href="index.html" className="navbar-brand">
                         Nour
                         <span className="brand-bg"></span>
                    </a>
                    
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