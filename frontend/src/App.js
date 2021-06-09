
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";


function App() {


    return (

      <Router>
          <Switch>
              <div className="App">


                  <Route exact path="/">
                      <HomeComponent></HomeComponent>
                  </Route>


              </div>    
          </Switch>
      </Router>
      
    );
}

export default App;
