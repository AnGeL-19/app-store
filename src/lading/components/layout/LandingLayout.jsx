import {
    Outlet,
   // RouterProvider,
   // Route,
   Link,
  } from "react-router-dom";



export const LadingLayout = () => {

    return (
        <div>
            <h1>Hello World</h1>

            <div>
              <Link to="/">HOME</Link>
              <br />
              <Link to="store">STORE</Link>
              <br />
              <Link to="game">GAME</Link>
              <br />
              <Link to="cart">CART</Link>
              <br />
              <Link to="auth/login">LOGIN</Link>
              <br />
              <Link to="auth/register">REGISTER</Link>
            </div>
            <hr />

            <Outlet /> 
  
            
         </div>
    )
  }