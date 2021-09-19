import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addfav, addfavonce, errors } from '../Actions/index';
import { addfavapi, getfavonce } from '../API/apicalls';
import Navbar from '../Components/Navbar';
import Singlecoursepage from '../Components/Singlecoursepage';
import helperauth from '../Helpers/helper_auth';

function Coursepage(props) {
  const { id } = useParams();
  const pageid = +id;
  const {
    courses, calldispatch, errordispatch, addfavoncedispatch,
  } = props;
  let params;

  useEffect(() => {
    if (sessionStorage.getItem('uid')) {
      params = helperauth();
      getfavonce(addfavoncedispatch, params, errordispatch);
    }
  }, []);

  let rightcourse = [];
  let userid = 1;

  if (courses.length > 0) {
    rightcourse = courses[0].filter((xmas) => xmas.id === pageid);
  }

  // let params;

  if (sessionStorage.getItem('uid')) {
    params = helperauth();
    userid = JSON.parse((sessionStorage.getItem('userdetails')));
    userid = userid.userid;
  }

  const addtofavs = () => {
    addfavapi(userid, calldispatch, params, id, errordispatch);
  };

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
  addfavoncedispatch: PropTypes.func.isRequired,
  errordispatch: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(PropTypes.array).isRequired,
};

function mapStateToProps(state) {
  const { courses } = state.coursersreducer;

  return ({ courses });
}

const mapDispatchToProps = (dispatch) => ({
  calldispatch: (id) => dispatch(addfav(id)),
  errordispatch: (text) => dispatch(errors(text)),
  addfavoncedispatch: (ids) => dispatch(addfavonce(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Coursepage);
