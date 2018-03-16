import React, { Component } from 'react';
import "./index.css";
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import Nav from "../Nav";
import Footer from "../Footer";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <Nav />
   <img src="http://getmespark.com/wp-content/uploads/welcome_thumb_tacks_1600_clr_9661.png" height="40%" width="40%"/>

    
    <h2>This is a team colaborative to test functionality for work related web solutions...</h2>
    <h3>The following can be contacted for updates to this site:</h3>
    
    {Object.keys(users).map(key =>
      <div key={key}>{users[key].email}</div>
    )}
    <br/><br/>
    <Footer />
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
