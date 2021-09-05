import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addfav, errors } from '../Actions/index';
import { addfavapi } from '../API/apicalls';
import Navbar from '../Components/Navbar';
import Singlecoursepage from '../Components/Singlecoursepage';
import helperauth from '../API/helper_auth';

function Coursepage(props) {
  const { id } = useParams();
  const pageid = +id;
  const {
    courses, userid, favlist, calldispatch, errordispatch,
  } = props;
  const rightcourse = courses[0].filter((xmas) => xmas.id === pageid);
  let params;

  if (sessionStorage.getItem('uid')) { params = helperauth(); }

  const addtofavs = () => {
    addfavapi(userid, calldispatch, params, id, errordispatch);
  };

  // const removefromfavs = () => {

  // }

  return (
    <>
      <Navbar />

      <div className="d-flex flex-wrap container p-0 m-auto justify-content-center">
        {rightcourse.length === 0 ? <h5>Loading... </h5>
          : rightcourse.map((x) => (
            <div key={x.id} className="border d-flex align-items-center justify-content-center m-2 py-4">
              <Singlecoursepage x={x} />
            </div>
          ))}
      </div>
      {/* eslint-disable-next-line */}
      { (sessionStorage.getItem('uid'))
        ? (favlist.includes(pageid))

          ? (
            <>
              {' '}
              <button type="button" className="my-2 p-2 btn btn-primary btn-sm">In Favs</button>
              {' '}
            </>
          )
          : (
            <>
              {' '}
              <button type="button" className="my-2 p-2 btn btn-primary btn-sm" onClick={addtofavs}>Add to Favorites</button>
              {' '}
            </>
          )
        : (
          <Link to={{ pathname: '/login' }}>
            <button type="button" className="my-2 p-2 btn btn-primary btn-sm">Add to Favorites</button>
          </Link>
        )}
    </>
  );
}

Coursepage.propTypes = {
  calldispatch: PropTypes.func.isRequired,
  errordispatch: PropTypes.func.isRequired,
  userid: PropTypes.number,
  courses: PropTypes.arrayOf(PropTypes.array).isRequired,
  favlist: PropTypes.arrayOf(PropTypes.string),
};

Coursepage.defaultProps = {
  favlist: [''],
  userid: null,
};

function mapStateToProps(state) {
  const { userid } = state.usersreducer;
  const { courses } = state.coursersreducer;
  const { favlist } = state.favsreducer;

  return ({ userid, courses, favlist });
}

const mapDispatchToProps = (dispatch) => ({
  calldispatch: (id) => dispatch(addfav(id)),
  errordispatch: (text) => dispatch(errors(text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Coursepage);
