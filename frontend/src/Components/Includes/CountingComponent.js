
const CountingComponent = () => {
     return(
          <div className="statistics pt-100 pb-70" id="counting">
               <div className="overlay"></div>
               <div className="container">
                    <div className="row">


                         <div className="col-lg-3 col-md-6">
                              <div className="stat-item">
                                   <div className="count" data-from="1" data-to="350" data-speed="3000">100</div>
                                   <p className="text">Projects Completed</p>
                              </div>
                         </div>

                         <div className="col-lg-3 col-md-6">
                              <div className="stat-item">
                                   <div className="count" data-from="1" data-to="321" data-speed="3000">100</div>
                                   <p className="text">Happy Clients</p>
                              </div>
                         </div>

                         <div className="col-lg-3 col-md-6">
                              <div className="stat-item">
                                   <div className="count" data-from="1" data-to="946" data-speed="3000">100</div>
                                   <p className="text">Line Of Code</p>
                              </div>
                         </div>


                         <div className="col-lg-3 col-md-6">
                              <div className="stat-item">
                                   <div className="count" data-from="1" data-to="145" data-speed="3000">100</div>
                                   <p className="text">Coffee Cups</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
export default CountingComponent