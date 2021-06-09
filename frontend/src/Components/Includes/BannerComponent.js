
const BannerComponent = () => {
     return(
          <section id="home" className="home" style={{
               backgroundImage : "url(/images/rehi.jpg)"
          }}>
               <div className="overlay"></div>
               <div className="container">
                    <div className="banner display-table">
                         <div className="info-header table-cell">

                              <h1>
                                   <span>
                                        Hey There!
                                   </span> <br/>
                                   <span>I'm </span>
                                   Sehirul Islam Rehi
                                   <br />
                                   <span>Based In Bangladesh</span>
                              </h1>

                              <ul className="banner-meta">
                                   <li>Laravel</li>
                                   <li>Vue Js</li>
                                   <li>React Js</li>
                              </ul>


                              <a href="#about" className="down">
                                   <span className="down-one"></span>
                                   <span className="down-two">About Me</span>
                                   <span className="down-three"></span>
                              </a>


                         </div>
                    </div>
               </div>
          </section>
     );
}

export default BannerComponent