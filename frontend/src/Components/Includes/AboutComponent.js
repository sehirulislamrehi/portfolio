
const AboutComponent = () => {
     return(
          <section id="about" className="about ptb-100">
               <div className="container">

                    <div className="row">

                         <div className="col-lg-6">
                              <div className="about-img">
                                   <div className="box-img">
                                        <img src="/images/rehi-2.jpg" alt="About-me"></img>
                                   </div>
                              </div>
                         </div>

                         <div className="col-lg-6">
                              <div className="info-about">
                                   <div className="section-title-left">
                                        <h2>I'm Sehirul Islam Rehi</h2>
                                        <h3>I'm a Software Developer</h3>
                                   </div>

                                   <p className="mb-10">
                                        Hi I'm Md. Sehirul Islam Rehi. I'm A Software Developer. I'm Studying BSc In Computer Science And Engineering at Green University of Bangladesh. My Strength Is That I Am Discipline, Punctual And Honest. I Can Work Continuously Without Any Distraction. My Hobbies Are Playing Games. My Short-Term Goal Is To Get A Job Required Company Skills To Utilize And Improve My Knowledge. My Long-Term Goal Is To Be In A Respected Position In That Organization.
                                   </p>


                                   <div className="profile">
                                        <div className="row">
                                             <div className="col-md-6">
                                                  <p>Name: <span>Sehirul Islam Rehi</span></p>
                                             </div>

                                             <div className="col-md-6">
                                                  <p>Age: <span>21</span></p>
                                             </div>

                                             <div className="col-md-6">
                                                  <p>Phone: <span>+8801858361812</span></p>
                                             </div>

                                             <div className="col-md-6">
                                                  <p>Address: <span>Dhaka, Bangladesh</span></p>
                                             </div>

                                             <div className="col-md-6">
                                                  <p>Status: <span>Focusing</span></p>
                                             </div>

                                             <div className="col-md-6">
                                                  <p>Nationality: <span>Bangladeshi</span></p>
                                             </div>


                                        </div>
                                        <span className="icon-bg"><i className="far fa-address-book"></i></span>
                                   </div>


                                   <div className="follow-me">
                                        <p>Follow Me : </p>
                                        <ul className="social-media-about">
                                             <li><a href="https://www.facebook.com/sehirul.rehi.3" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                             
                                             <li><a href="https://www.linkedin.com/in/md-sehirul-islam-rehi-0ba022189/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>

                                   </div>
                              </div>
                         </div>

                    </div>

               </div>

          </section>
     );
}
export default AboutComponent;