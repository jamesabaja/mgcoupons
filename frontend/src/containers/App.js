import React, { Component } from 'react';
import '../assets/App.css';
import Navbar from '../components/Navbar';
import { Route } from 'react-router-dom';
import AddCoupon from '../components/AddCoupon';
import ViewActive from '../components/ViewActive';
import ViewInactive from '../components/ViewInactive';
import landingPage from '../components/landingPage';
import batchUpload from '../components/batchUpload';

class App extends Component {
  render() {
    return (
      <div className="App is-block-mobile">
        <Navbar />
        <Route exact path='/' component={landingPage}/>
        <Route exact path='/add' component={AddCoupon}/>
        <Route exact path='/add/batch' component={batchUpload}/>
        <Route exact path='/view/active' component={ViewActive}/>
        <Route exact path='/view/deactivated' component={ViewInactive}/>
        {/*<Route path="*" component={NotFound} />*/}
      </div>
    );
  }
}

export default App;
