import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Partner from "./pages/Partner";
import About from "./pages/About";
import UserFavourites from "./pages/UserFavourites";
import VendorList from "./pages/VendorList";
import LoginBusiness from "./pages/LoginBusiness";
import RestaurantAdmin from "./pages/RestaurantAdmin";
import RegisterSuccess from "./pages/RegisterSuccess";
import RestaurantDetails from "./pages/RestaurantDetails";
import RestaurantLanding from "./pages/RestaurantLanding";

import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserProvider from "./contexts/UserProvider";
import RestaurantProvider from "./contexts/RestaurantProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <RestaurantProvider>
          <UserProvider>
            <Header />
            <Container className="d-flex align-items-center justify-content-center">
              <div className="w-100 mt-4" style={{ maxWidth: "750px" }}>
                <Route path="/" component={Home} exact />
                <Route path="/Login" component={Login} />
                <Route path="/LoginBusiness" component={LoginBusiness} />
                <Route path="/Register" component={Register} />
                <Route path="/About" component={About} />
                <Route path="/UserFavourites" component={UserFavourites} />
                <Route path="/VendorList" component={VendorList} />
                <Route path="/Partner" component={Partner} />
                <Route path="/RestaurantAdmin" component={RestaurantAdmin} />
                <Route path="/RegisterSuccess" component={RegisterSuccess} />
                <Route path="/RestaurantDetails" component={RestaurantDetails} />
                <Route path="/RestaurantLanding" component={RestaurantLanding} />
              </div>
            </Container>
          </UserProvider>
        </RestaurantProvider>
      </Router>
    </div>
  );
}

export default App;
