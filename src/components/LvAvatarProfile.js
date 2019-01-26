import React, { Component } from 'react';
import { Avatar } from 'antd';
import './LvAvatarProfile.css';

const userDetailsStyle = {
    padding: "20px 10px 10px"
};


class LvAvatarProfile extends Component {
  
  render() {
     
    return (
       <div style={userDetailsStyle}>
       <div className="user-avar-aside">
        <img className="user-avar-aside-img" src="https://lavka.club/uploads/avatars/58bac411ba6f4743d2c20595/y7HVN9f8lANsFC83.jpg" />
       </div>
         <div className="user-name" >
         <b>
            <span>Иван</span>
            &nbsp;
            <span>Иванов</span>
        </b>
         </div>
        
      </div>
    );
  }
}


export default LvAvatarProfile;
