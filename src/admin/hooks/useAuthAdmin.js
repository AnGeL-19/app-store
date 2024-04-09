import React, { useState } from 'react'

const loginFetch = () => {
  
}


export const useAuthAdmin = () => {
    const [authed, setAuthed] = useState(false);
  
    return {
      authed,
      login() {
        return new Promise((res) => {
          setAuthed(true);
          res();
        });
      },
      logout() {
        return new Promise((res) => {
          setAuthed(false);
          res();
        });
      },
    };
}
