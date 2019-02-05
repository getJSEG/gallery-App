import  React from 'react';



const Error = (props) => (
  <div className='Error'>
      <h1> Oops...! Something went wrong  </h1>
      <h1> { props.error } </h1>
  </div>

)
export default Error;
