
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import BlogDetailComponent from "./Components/Includes/BlogDetailComponent";


function App() {


    return (

      <Router>
          <Switch>
              <div className="App">


                    <Route exact path="/">
                        <HomeComponent></HomeComponent>
                    </Route>

                    <Route path="/blog">
                        <BlogDetailComponent></BlogDetailComponent>
                    </Route>


              </div>    
          </Switch>
      </Router>
      
    );
}

export default App;
