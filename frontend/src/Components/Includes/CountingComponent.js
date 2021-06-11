
const CountingComponent = () => {
     return(
          <div className="statistics pt-100 pb-70" id="counting" style={{
               backgroundImage : "url(/images/bg-1.jpeg)"
          }}>
               <div className="overlay"></div>
               <div className="container">
                    <div className="row">


                         <div className="col-lg-3 col-md-6">
                              <div className="stat-item">
                                   <div className="count" data-from="1" data-to="350" data-speed="3000">7</div>
                                   <p className="text">Projects Completed</p>
                              </div>
                         </div>

                         <div className="col-lg-3 col-md-6">
                              <div className="stat-item">
                                   <div className="count" data-from="1" data-to="321" data-speed="3000">5</div>
                                   <p className="text">Total Client Handle</p>
                              </div>
                         </div>

                         <div className="col-lg-3 col-md-6">
                              <div className="stat-item">
                                   <div className="count" data-from="1" data-to="946" data-speed="3000">10k+</div>
                                   <p className="text">Line Of Code</p>
                              </div>
                         </div>


                         <div className="col-lg-3 col-md-6">
                              <div className="stat-item">
                                   <div className="count" data-from="1" data-to="145" data-speed="3000">5</div>
                                   <p className="text">Satisfaction Of Our Customers</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
export default CountingComponent