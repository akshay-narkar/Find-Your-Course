/*eslint-disable*/

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getcourses, getcoursesingle, signin, signup, getfavs } from '../API/apicalls';
import Navbar from '../Components/Navbar'
import Homecourses from '../Components/Homecourses'

function Home(props) {

  const { courses } = props;

  useEffect(() => {
    // getfavs();
  }, []);

  return (
    <>
      <Navbar />
            <div className="d-flex flex-wrap container p-0 m-auto justify-content-center">
       {courses.length === 0 ? <h5>Loading... </h5>
          : 
        // courses[0].map((x)=>(<h1>{x.name}</h1>))}
          courses[0].map((x) => (
            <div key={x.id} className="border d-flex align-items-center justify-content-center m-2 py-4">
              <Homecourses x={x} />
            </div>
          ))}
      {/* {console.log(courses)} */}
      </div>
    </>
  );
}



function mapStateToProps(state) {
  const { courses } = state.coursersreducer;
  // const { filter } = state.filterReducer;
  // const { namefilter } = state.namefilterReducer;
  // return ({ teams, filter, namefilter });
  return ({ courses })
}

// const mapDispatchToProps = (dispatch) => ({
//   filtercat: (category) => dispatch(changeFilter(category)),
//   namefiltercat: (category) => dispatch(namechangefilter(category)),

// });

// Homepage.propTypes = {
//   teams: PropTypes.arrayOf(PropTypes.object),
//   filtercat: PropTypes.func.isRequired,
//   namefiltercat: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
//   namefilter: PropTypes.string.isRequired,
// };

// Homepage.defaultProps = {
//   teams: [],
// };

export default connect(mapStateToProps, null)(Home);