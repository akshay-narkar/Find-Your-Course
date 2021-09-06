import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allfavs, errors } from '../Actions/index';
import { getfavs } from '../API/apicalls';
import Navbar from '../Components/Navbar';
import Singlefavpage from '../Components/Singlefavpage';
import helperauth from '../API/helper_auth';

function FavsPage(props) {
  /* eslint-disable-next-line */
  const { user_id } = useParams();
  const { favs, calldispatch, errordispatch } = props;
  const params = helperauth();

  useEffect(() => {
    getfavs(user_id, calldispatch, params, errordispatch);
  }, []);

  return (
    <>
      <Navbar />

      <div className="my-4">
        <h3 className="text-center">Your Favorites </h3>
      </div>
      <div className="d-flex flex-wrap p-0 mx-auto my-4 justify-content-center">
        {favs.length === 0 ? <h5>No Favorites Yet! </h5>
          : favs[0].map((x) => (
            <div key={x.id} className="d-flex align-items-center justify-content-center my-4 mx-2">
              <Link to={{ pathname: `/course/${x.id}` }} className="link">
                <Singlefavpage x={x} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

FavsPage.propTypes = {
  calldispatch: PropTypes.func.isRequired,
  errordispatch: PropTypes.func.isRequired,
  favs: PropTypes.arrayOf(PropTypes.object),
};

FavsPage.defaultProps = {
  favs: [{}],
};

function mapStateToProps(state) {
  const { favs } = state.favsreducer;
  return ({ favs });
}

const mapDispatchToProps = (dispatch) => ({
  calldispatch: (id) => dispatch(allfavs(id)),
  errordispatch: (text) => dispatch(errors(text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FavsPage);
