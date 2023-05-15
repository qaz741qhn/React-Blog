import './App.css';
import Home from './Home';
import Create from './Create';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/blogs/:id" component={BlogDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
