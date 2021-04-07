import React from 'react';
import Button from 'react-bootstrap/Button';

class Delete extends React.Component {
  render(){
    return(
      <Button 
        className="bg-info text-light"
        onClick={()=>this.props.deleteMovie(this.props.movieId)}>
        x
      </Button>
    )
  }
}

export default Delete;