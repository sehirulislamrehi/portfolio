import { Link } from "react-router-dom";



const BlogDetailComponent = () => {
     return(
          <div id="main">
               <nav className="navbar navbar-expand-lg dark fixed-top navbar-light">
                    
                    <div className="container">
                         
                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtoggler"
                              aria-controls="navtoggler" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                              <span className="navbar-toggler-icon"></span>
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         
                         <div className="collapse navbar-collapse" id="navtoggler">
                              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                   <li className="nav-item">
                                   <Link to="/" className="nav-link"  >
                                        Home <span className="sr-only">(current)</span>
                                   </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>

               <section id="home" className="home" style={{
               background : "#343436",
               height : "50vh"
               }}>
                    <div className="overlay"></div>
                    <div className="container">
                         <div className="banner display-table">
                              <div className="info-header table-cell" style={{ height: "50vh" }}>

                                   <h1 style={{ margin: "0" }}>
                                        <span>
                                             Blog Details
                                        </span> 
                                   </h1>

                              </div>
                         </div>
                    </div>
               </section>

               <section id="contact" className="contact ptb-100" style={{ background : "white" }}>
                    <div className="overlay"></div>
                         <div className="container">
                              <div className="row">
                                   <div className="col-md-12">
                                        <code>
                                             
                                        </code>
                                   </div>
                              </div>
                         </div>
                    </section>

          </div>
     );
}

export default BlogDetailComponent;