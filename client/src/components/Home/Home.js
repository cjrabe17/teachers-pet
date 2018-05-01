import React, { Component } from 'react';
import TopNav from '../TopNav';
import GradeDetail from '../GradeDetail';
import Hero from '../Hero';
import Footer from '../Footer';

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    const myProps = this.props;
    return (
      <div>
        {
          isAuthenticated() &&
          <div>
            <TopNav {...myProps} />
            <GradeDetail />
            <Footer />
          </div>
        }
        {
          !isAuthenticated() && (
            <div>
              <TopNav {...myProps}/>
              <Hero {...myProps}/>
              <Footer />
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;