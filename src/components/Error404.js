import  React from 'react';
import { NavLink } from 'react-router-dom';


const Error404  = () => (
  <div className='Error404'>
      <h1> 404 Error </h1>
      <h3> Page Not Found </h3>
      <NavLink className='back-to-home' to='/search/cars'>Back To Main Page</NavLink>
  </div>

)
export default Error404;
