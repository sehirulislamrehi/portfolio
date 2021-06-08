
import {BrowserRouter as Router,Switch,Route,Link,useHistory } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";

function App() {

  const history = useHistory()

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
