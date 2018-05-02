import React, { Component } from 'react';
import TopNav from '../TopNav';
import GradeDetail from '../GradeDetail';
import GradeTest from '../GradeTest';
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
    return (
      <div>
        {
          isAuthenticated() &&
          <div>
            <TopNav {...this.props} />
            <GradeDetail />
            <Footer />
          </div>
        }
        {
          !isAuthenticated() && (
            <div>
              <TopNav {...this.props}/>
              <Hero {...this.props}/>
              <Footer />
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;