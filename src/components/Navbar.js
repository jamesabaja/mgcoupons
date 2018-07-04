import React, {Component } from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.clickNavbarBurger = this.clickNavbarBurger.bind(this);
    this.state = {
      active: false
    };
  }

  clickNavbarBurger() {
    if(this.state.active) {
      this.setState({
        active: false
      });
    }else {
      this.setState({
        active: true
      });
    }
  }

  render() {
    return(
      <nav className="navbar is-primary is-fixed-top" aria-label="main navigation">
        <NavbarBrand brand='MGCoupons' onClick={this.clickNavbarBurger}/>
        <NavbarMenu isActive={this.state.active}/>
      </nav>
    );
  } 
}
export default Navbar;