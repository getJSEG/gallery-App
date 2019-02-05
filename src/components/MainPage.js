import React, { Component } from 'react';
import axios from 'axios';

import '.././css/App.css';
import '.././css/index.css';
import APIkey from '.././config';
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import GalleryList from './GalleryList';
import Error from './Error';

let link = '';

class MainPage extends Component {

  state = {
    images: [],
    error:false,
    errorStatus: '',
    loading: true,
    itemPerPage: 24,
    query: 'cars'
  }

  // this updates the query
  updateQuery = ( query ) => {
    return new Promise( (resolve) => {
      this.setState({ query })
      return resolve();
    })
  }
  //set ups the link and passes it to the request function
  updateLink = () => {
    let updateQuery = this.state.query.replace(/ /g,"%2B");
      link =  `https://api.flickr.com/services/rest/
                ?method=flickr.photos.search
                &api_key=${ APIkey }
                &tags=${ updateQuery }
                &per_page=${ this.state.itemPerPage }
                &format=json
                &nojsoncallback=1`;
  }

  //handles reques for search query
  requestPhotos = () => {
    axios.get(link.replace(/ /g,""))
         .then(response => {
              this.setState({
                images: response.data.photos.photo,
                loading: false,
                error: false
              });
          })
          .catch ( error => this.setState({
              error:true,
              errorStatus:error.message
          })) ;
  }

  //perfomer search
  performSearch = (current) => {
    this.updateQuery(current)
    .then( () => this.updateLink() )
    .then( () => this.requestPhotos() );
  }

  //keeps cheking if the query has changed
  componentDidUpdate(prevProps){
    if(prevProps.match.params.query !== this.props.match.params.query ){
      this.onRouteChanges(this.props.match.params.query);
    }
  }

  //checks if the routes has change
  onRouteChanges(current) { this.performSearch(current);}
  //when page load this will run
  componentDidMount () {
    this.performSearch(this.state.query);
    this.props.history.push(this.state.query);
  }

  render() {
    return (
        <React.Fragment>
            <SearchForm  search={ this.performSearch } history={ this.props.history }/>
            <MainNav />
            {
              this.state.error ?
              <Error error={ this.state.errorStatus } /> :
              <GalleryList  images={this.state.images} loading={ this.state.loading }/>
            }
        </React.Fragment>
    );
  }
}

export default MainPage;
