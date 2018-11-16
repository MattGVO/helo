import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {

    async componentDidMount () {
        let res = await axios.get('/auth/user-data');
        console.log(res.data);
    }

    render() {
      return (
          <div>
              <h1>This is Dashboard</h1>
          </div>
      );
    }
  }
  
  export default Dashboard;
  