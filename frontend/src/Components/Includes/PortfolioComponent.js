
const PortfolioComponent = () => {
     return(
          <section id="portfolio" className="portfolio pt-100 pb-70">
               <div className="container">
                    <div className="row">

                         <div className="col-md-8 offset-md-2">
                              <div className="section-title text-center">
                                   <h2>Let's See My Work</h2>
                                   <h3><span>My</span> Portfolio</h3>

                              </div>

                              <div className="filter-group">
                                   <ul id="control" className="list-control">
                                        <li className="active" data-filter="all">All</li>
                                        <li data-filter="1">Web Applications</li>
                                        <li data-filter="2">Software</li>
                                        <li data-filter="2">Mobile Apps</li>
                                   </ul>
                              </div>
                         </div>





                    </div>

                    <div id="filtr-container" className="row">

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="1" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="https://nour-theme.netlify.app/assets/images/portfolio/item-1.jpg" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://nour-theme.netlify.app/assets/images/portfolio/item-1.jpg">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>Crearive Design</span>
                                             <h5>Web Design</h5>
                                        </div>
                                   </a>
                              </div>
                         </div>


                         {/* Column Image */}
                         <div className="col-md-6 col-lg-4 filtr-item" data-category="3" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="https://nour-theme.netlify.app/assets/images/portfolio/item-1.jpg" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://nour-theme.netlify.app/assets/images/portfolio/item-1.jpg">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>Crearive Design</span>
                                             <h5>Branding</h5>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         {/* Column Image */}
                         <div className="col-md-6 col-lg-4 filtr-item" data-category="2" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="https://nour-theme.netlify.app/assets/images/portfolio/item-1.jpg" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://nour-theme.netlify.app/assets/images/portfolio/item-1.jpg">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>Crearive Design</span>
                                             <h5>Graphic Desing</h5>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         {/* Column Image */}

                        
                    </div>


               </div>
          </section>
     );
}
export default PortfolioComponent;