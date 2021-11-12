import React from "react";
import { connect } from "react-redux";
import './SuccessPage.css'

const SuccessPage = ({ userData }) => {
  const {firstName, lastName, phoneNumber, email} = userData.data;

  return (
    <div>
      <h1>Success</h1>
      <div className='label-data-container'>
        <div className='labels-container'>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Phone Number</div>
          <div>E-mail</div>
        </div>
        <div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
        </div>
        <div>
          <div>{firstName}</div>
          <div>{lastName}</div>
          <div>{phoneNumber}</div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

export default connect(mapStateToProps)(SuccessPage);
