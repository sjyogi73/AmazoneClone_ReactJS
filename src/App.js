import React, { Component }  from 'react';
import './App.css';

import Home from "./Home/Home.jsx";
import Header from "./Header/Header.jsx";
import Checkout from "./Checkout/Checkout.jsx";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Header />

        <Switch>
          <Route path="/login">
            
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">    
            <Home />
          </Route>

        </Switch>
        </div>
      </Router>

 
  );
}

export default App;










// import './App.css';
// import React, { Component }  from 'react';
// import Header from './Header/Header.jsx';
// import Home from './Home/Home.jsx';
// import Checkout from './Checkout/Checkout.jsx';
// import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

// //LOGIN
// import Login from './Login.jsx';

// const App=()=> {
//   return (
//     <Router>
//     <div className="App">
//     <Header/>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/checkout" component={Checkout}/> 
//           </div> 
//       </Router>
    
           
// );
// }

// export default App; 