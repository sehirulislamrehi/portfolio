
const FooterComponent = () => {
     return(   

          <div className="app">

               <footer className="footer">
                    <div className="container">
                         <ul className="social-media text-center">
                              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                         </ul>
                         <div className="copyright text-center">
                              &copy; 2021 Sehirul Islam Rehi All Rights Reserved By
                         </div>

                    </div>
               </footer>

               <div className="scroll-up">
                    <span className="top-one"></span>
                    <span className="top-two">Top</span>
                    <span className="top-three"></span>
               </div>
               
          </div>
     );
}

export default FooterComponent;