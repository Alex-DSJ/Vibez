import React, { Component } from 'react'
import MyButton from '../util/MyButton'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'
//redux
import {connect} from 'react-redux';
import {likeScream, unlikeScream} from '../redux/actions/dataActions'
 class LikeButton extends Component {

    likedScream = ()=>{
        //first, check if there is a like in the user object
       //if there is something, return true, else return false
        if(this.props.user.likes && this.props.user.likes.find(like => like.screamId === this.props.screamId
          )
        ) return true;
        else return false;
      };
    
      likeScream = () => {
        this.props.likeScream(this.props.screamId);
      };
      unlikeScream = () => {
        this.props.unlikeScream(this.props.screamId);
      }
    render() {
        const {authenticated} = this.props.user;
        //defining the likeButton, doing this way since it requires if,else
    const likeButton = !authenticated? ( //favoriteborder is the transparent heart icon
        <Link to="/login">
            <MyButton tip="like">
         
            <FavoriteBorder color='primary'/>
            </MyButton>
        </Link>
      ) : ( //after loging in
        this.likedScream() ? ( //have you liked it? Yes, show the heart
          <MyButton tip="undo like" onClick={this.unlikeScream}>
            <Favorite color="primary"/>
          </MyButton>
        ) : ( //havent liked ? Show the transparent heart
          <MyButton tip="like" onClick={this.likeScream}>
            <FavoriteBorder color="primary"/>
          </MyButton>
        )
      );
          //finish defining likeButton
        return (
            likeButton
        )
    }
}

LikeButton.propTypes={
    user: PropTypes.object.isRequired,
    screamId: PropTypes.string.isRequired,
    likeScream: PropTypes.func.isRequired,
    unlikeScream: PropTypes.func.isRequired,

}

const mapStateToProps = (state)=>({
    user: state.user
})

const mapActionsToProps= {
    likeScream,
    unlikeScream
}

export default connect(mapStateToProps, mapActionsToProps)(LikeButton)
