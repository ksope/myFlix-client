//delete a user's account and details from the system

import React from 'react'

export default function DeleteUser({ user, token}) {
      const [user, setUser] = userState();
      const [token, setToken] = userState();
    
    const deleteAccount = () => {
        fetch(`https://myflixapp-220423.herokuapp.com/user/${user.Username}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
  }).then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        alert("oops, seems something went wrong");
        console.log(e);
      });
      setUser(null);
      setToken(null);
      localStorage.clear();
    };

      return (
    <>
    <Button
          onClick={deleteAccount}
          type="button"
          variant="danger"
        >
          Delete account
        </Button>
    </>
        )
    }