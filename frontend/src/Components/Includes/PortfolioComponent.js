
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
                                        <li data-filter="2">SPA</li>
                                        <li data-filter="3">Software</li>
                                        <li data-filter="4">Mobile Apps</li>
                                   </ul>
                              </div>
                         </div>





                    </div>

                    <div id="filtr-container" className="row">

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="3" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/sms.webp" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://sms.hostzam.com/" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>SMS Software</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="2" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/as-associates.webp" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://as-associate.beautyclinicbd.com/" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>A.S & Associates</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="4" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/app.png" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://play.google.com/store/apps/details?id=com.servier.file" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>Servier Apps</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="1" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/abe.png" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://abe.com.bd/" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>AB Electronics</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="3" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/order.png" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://order.sehirulislamrehi.com/login" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>Order Software</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="2" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/vara123.png" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://vara123.com/" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>Vara 123</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="1" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/sscuisineurs.png" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="http://sscuisineurs.com/" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>SSCUISINERUS</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="1" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/bugsbd.png" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://bugsbd.com/" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>Bugs BD</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="2" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/vue.png" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://vuefrontend.sehirulislamrehi.com/" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>Vue Ecommerce</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                         <div className="col-md-6 col-lg-4 filtr-item" data-category="2" data-sort="value">
                              <div className="my-work">
                                   <div className="image">
                                        <img className="img-fliud" src="/images/portfolio/vue.png" alt="my-work"></img>
                                   </div>
                                   <a className="overlay" href="https://react.sehirulislamrehi.com/" target="_blank">
                                        <span className="icon-img"><i className="fas fa-image"></i></span>
                                        <div className="info-img">
                                             <span>React Ecommerce</span>
                                        </div>
                                   </a>
                              </div>
                         </div>

                        
                    </div>


               </div>
          </section>
     );
}
export default PortfolioComponent;