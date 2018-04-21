import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

class Home extends Component {
// stateful stuff

  render() {
    // state = {
    //   loggedIn: false
    // }
    // componentDidMount() {
    //   this.checkedLoggedIn();
    // }

    // checkedLoggedIn = () => {
    //   API.checkLogIn().then(res => {
    //     if(res) {
    //       this.setState({
    //         loggedIn: true
    //       })
    //     } else {
    //       // redirect?
    //     }
    //   })
    // }

    return (
      <div>

        {/* {!this.state.loggedIn ? (
          <div>Loading</div>
        ) : (
        <div>
          <h1>Welcome to Teacher's Pet!</h1>
        </div>
        )} */}
        <Nav />
        <Wrapper>
          <Sidebar />
          <h1>Info coming soon!</h1>
        </Wrapper>
      </div>
    );
  }
}

export default Home;