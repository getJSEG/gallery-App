import React from 'react';

import Image from './Image';
import NoResults from './NoResults';
import Loading from './Loading';

const GalleryList = (props) => {
  let images;
  
   props.images.length > 0 ?
     images = props.images.map( image =>
       <Image
           farm={image.farm}
           server={image.server}
           id={image.id}
           secret={image.secret}
           title={image.title}
           key={image.id}
       />
     ) : images = <NoResults />

       return (
         <div className="photo-container">
          <h2>Results</h2>
          <ul>
            {  props.loading ? <Loading /> :  images }
          </ul>
        </div>
       );
}

export default GalleryList;
