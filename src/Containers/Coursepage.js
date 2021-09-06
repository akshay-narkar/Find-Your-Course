import { useParams } from 'react-router-dom';
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
    courses, userid, calldispatch, errordispatch,
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
      {rightcourse.length === 0 ? (
        <div className="my-4">
          <h3 className="text-center">Loading... </h3>
        </div>
      )
        : (
          <>

            <div className="my-4">
              <h3 className="text-center">{rightcourse[0].name}</h3>
            </div>
            <div className="d-flex flex-wrap p-0 mx-auto mt-2 mb-4 justify-content-center favpage">
              {rightcourse.map((x) => (
                <div key={x.id} className="container my-4 mx-2 p-0">
                  <Singlecoursepage x={x} pageid={pageid} clickhandler={addtofavs} />
                </div>
              ))}
            </div>
          </>
        )}

    </>
  );
}

Coursepage.propTypes = {
  calldispatch: PropTypes.func.isRequired,
  errordispatch: PropTypes.func.isRequired,
  userid: PropTypes.number,
  courses: PropTypes.arrayOf(PropTypes.array).isRequired,
};

Coursepage.defaultProps = {
  userid: null,
};

function mapStateToProps(state) {
  const { userid } = state.usersreducer;
  const { courses } = state.coursersreducer;

  return ({ userid, courses });
}

const mapDispatchToProps = (dispatch) => ({
  calldispatch: (id) => dispatch(addfav(id)),
  errordispatch: (text) => dispatch(errors(text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Coursepage);
