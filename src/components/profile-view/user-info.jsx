import React from 'react';
import { Link } from 'react-router-dom';

export default function UserInfo({email, name}) {
  return (
    <>
    <p>User: {name}</p>
    <p>Email: {email} </p>
    </>
  )
}
