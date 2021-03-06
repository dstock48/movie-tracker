import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard/MovieCard';
import { fetchAddFavorites, fetchUserFavorites, fetchDeleteFavorite} from '../actions';

const mapStateToProps = (state) => {
  return {
    userData: state.userCreds,
    userFavorites: state.userFavorites.data,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites : (movieData, userCreds) => {
      dispatch(fetchAddFavorites(movieData, userCreds));
    },
    retrieveFavorites : (userId) => {
      dispatch(fetchUserFavorites(userId));
    },
    removeFromFavorites : (movieObj) => {
      dispatch(fetchDeleteFavorite(movieObj));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
