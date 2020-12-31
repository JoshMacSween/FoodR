import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Partner from "./pages/Partner";
import About from "./pages/About";
import RestaurantList from "./pages/RestaurantList";
import LoginBusiness from "./pages/LoginBusiness";
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
                <Route path="/RestaurantList" component={RestaurantList} />
                <Route path="/Partner" component={Partner} />
              </div>
            </Container>
          </UserProvider>
        </RestaurantProvider>
      </Router>
    </div>
  );
}

export default App;
