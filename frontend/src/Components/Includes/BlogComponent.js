import { Link } from "react-router-dom";

const BlogComponent = () => {
     return(
          <section id="blog" className="blog pt-100 pb-70">
               <div className="container">
                    <div className="row">


                         <div className="col-md-8 offset-md-2">
                              {/* Title Of Section Center */}
                              <div className="section-title text-center">
                                   <h2>My Recent Posts</h2>
                                   <h3><span>My</span> Blog</h3>


                              </div>

                         </div>

                         {/* New Item */}
                         <div className="col-lg-4">
                              <div className="blog-item">
                                   {/* Blog Image */}
                                   <div className="blog-img">
                                        <a href="#"><img src="https://nour-theme.netlify.app/assets/images/blog/blog-1.jpeg" alt="blog"></img></a>

                                   </div>
                                   {/* Blog info */}
                                   <div className="blog-info">

                                        <ul className="date">
                                             <li>25 NOV 18 / </li>
                                             <li><a href="#">Branding</a></li>
                                        </ul>


                                        <div className="title-post">

                                             <a href="#">
                                                  <h5>What Has Happened to All of the Web Design Ideas?</h5>
                                             </a>
                                        </div>

                                        <div className="post-text">
                                             <p>Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Usmod Tempor
                                                  Incididunt Ut Labore Et Dolore Magna...</p>
                                        </div>

                                        <Link to="/blog">
                                        View More
                                        </Link>
                                   </div>

                              </div>
                         </div>



                         {/* New Item */}
                         <div className="col-lg-4">
                              <div className="blog-item">
                                   {/* Blog Image */}
                                   <div className="blog-img">
                                        <a href="#"><img src="https://nour-theme.netlify.app/assets/images/blog/blog-2.jpeg" alt="blog"></img></a>

                                   </div>

                                   {/* Blog info */}
                                   <div className="blog-info">

                                        <ul className="date">
                                             <li>25 NOV 18 / </li>
                                             <li><a href="#">Logo</a></li>
                                        </ul>


                                        <div className="title-post">

                                             <a href="#">
                                                  <h5>How To Create Great Logo For Your Business</h5>
                                             </a>
                                        </div>

                                        <div className="post-text">
                                             <p>Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Usmod Tempor
                                                  Incididunt Ut Labore Et Dolore Magna...</p>
                                        </div>

                                        <a href="#" className="link">View More</a>
                                   </div>

                              </div>
                         </div>

                         {/* New Item */}
                         <div className="col-lg-4">
                              <div className="blog-item">
                                   {/* Blog Image */}
                                   <div className="blog-img">
                                        <a href="#"><img src="https://nour-theme.netlify.app/assets/images/blog/blog-3.jpeg" alt="blog"></img></a>

                                   </div>
                                   {/* Blog info */}
                                   <div className="blog-info">

                                        <ul className="date">
                                             <li>25 NOV 18 / </li>
                                             <li><a href="#">Design</a></li>
                                        </ul>


                                        <div className="title-post">

                                             <a href="#">
                                                  <h5>What Has Happened to All of the Web Design Ideas?</h5>
                                             </a>
                                        </div>

                                        <div className="post-text">
                                             <p>Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Usmod Tempor
                                                  Incididunt Ut Labore Et Dolore Magna...</p>
                                        </div>

                                        <a href="#" className="link">View More</a>
                                   </div>

                              </div>
                         </div>


                    </div>
               </div>
          </section>
     );
}

export default BlogComponent;