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

      <div className="d-flex flex-wrap container p-0 m-auto justify-content-center">
        {favs.length === 0 ? <h5>No Favorites Yet! </h5>
          : favs[0].map((x) => (
            <div key={x.id} className="border d-flex align-items-center justify-content-center m-2 py-4">
              <Link to={{ pathname: `/course/${x.id}` }}>
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
