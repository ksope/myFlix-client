import React from 'react';
import { Link } from 'react-router-dom';

export default function UserInfo({email, name}) {
  return (
    <>
    <p>User: {name}</p>
    <p>Email: {email} </p>
    </>
  )


  // Here is where we define all the props constraints for the UserInfo
UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};
}
