import React from 'react';

export default function UpdateUser({handleSubmit,handleUpdate}) {
  return (
    <div>
        <form className='profile-form' onSubmit={(e)=>handleSubmit(e)}>
        <h2>Want to change some info?</h2>
        <label>Username:</label>
        <input
         type="text"
         name='Username'
          defaultValue={user.Username}
          onChange={(e) => handleUpdate(e.target.value)}
          required
          minLength="3"
        />
        <label>Password:</label>
        <input
         type="password"
         name='Password'
          defaultValue={user.Password}
          onChange={(e) => handleUpdate(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
         type="email"
         name='Email'
          defaultValue={user.Email}
          onChange={(e) => handleUpdate(e.target.value)}
          required
        />
        <label>Birthday:</label>
        <input
         type="date"
         name='Birthday'
          defaultValue={user.Birthday}
          onChange={(e) => handleUpdate(e.target.value)}
          required
        />
        <button variant='primary' type='submit'>Update</button>
    </form>
    </div>
  )
}
