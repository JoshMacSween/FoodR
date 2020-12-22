import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserProvider from "./contexts/UserProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Header />
          <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100 mt-4" style={{ maxWidth: "750px" }}>
              <Route path="/" component={Home} exact />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/About" component={About} />
            </div>
          </Container>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
