import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'> 
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/create'component={Create} />
              <Route path='/blogDetails/:id' component = {BlogDetails} />
            </Switch>  
        </div>
      </div>
    </Router>
  );
}

export default App;
