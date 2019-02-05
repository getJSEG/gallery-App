import React from 'react';

const Image = (props) =>{
  const imgSource = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;

  return(
    <li>
        <img src={ imgSource } alt={ props.title } />
    </li>
  );
}
export default Image;
