
const ContactComponent = () => {
     return(
          <section id="contact" className="contact ptb-100">
               <div className="overlay"></div>
               <div className="container">

                    <div className="row">


                         <div className="col-md-8 offset-md-2">
                              {/* Title Of Section Center */}
                              <div className="section-title text-center">
                                   <h2>Get In Touch</h2>
                                   <h3>Contact <span>Me</span></h3>
                              </div>

                         </div>

                         <div className="offset-lg-1 col-lg-10 mb-20">
                              <div className="row">


                                   <div className="col-md-4">
                                        <div className="contact-item">

                                             <div className="inner-contact">
                                                  <span><i className="fa fa-location-arrow"></i></span>
                                                  <h6>Address</h6>
                                             </div>

                                             <div className="info-cont">
                                                  <p>Mohakhali Dhaka</p>
                                                  <p>Bangladesh</p>
                                             </div>

                                             <div className="bg-icon"><i className="fa fa-location-arrow"></i></div>
                                        </div>

                                   </div>


                                   <div className="col-md-4">
                                        <div className="contact-item">

                                             <div className="inner-contact">
                                                  <span><i className="fa fa-envelope"></i></span>
                                                  <h6>Email</h6>
                                             </div>

                                             <div className="info-cont">
                                                  <p style={{ textTransform: "lowercase" }}>mdsehirulislamrehi@gmail.com</p>
                                             </div>

                                             <div className="bg-icon"><i className="fa fa-envelope"></i></div>
                                        </div>

                                   </div>



                                   <div className="col-md-4">
                                        <div className="contact-item">
                                             <div className="inner-contact">
                                                  <span><i className="fa fa-phone"></i></span>
                                                  <h6>Call Me</h6>
                                             </div>
                                             <div className="info-cont">
                                                  <p>+8801858361812</p>
                                                  <p>+8801537418355</p>

                                             </div>
                                             <div className="bg-icon"><i className="fa fa-phone"></i></div>
                                        </div>
                                   </div>


                              </div>

                         </div>



                         <div className="offset-lg-1 col-lg-10">

                              <form className="form">
                                   <div className="row">
                                        <div className="col-md-6">
                                             <div className="form-group">
                                                  <input type="text" placeholder="Name"></input>
                                             </div>

                                        </div>

                                        <div className="col-md-6">
                                             <div className="form-group">
                                                  <input type="Email" placeholder="Email"></input>
                                             </div>

                                        </div>

                                        <div className="col-md-12">
                                             <div className="form-group">
                                                  <input type="text" placeholder="subject"></input>
                                             </div>

                                        </div>

                                        <div className="col-md-12">
                                             <div className="form-group">
                                                  <textarea placeholder="Your Message Here "></textarea>
                                             </div>
                                        </div>
                                   </div>


                                   {/* Button Send Message  */}
                                   <a href="#" className="btn-one">Send Message</a>
                              </form>


                         </div>



                    </div>
               </div>

          </section>
     );
}
export default ContactComponent;