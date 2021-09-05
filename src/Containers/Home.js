import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import Homecourses from '../Components/Homecourses';

function Home(props) {
  const { courses } = props;

  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap container p-0 m-auto justify-content-center">
        {courses.length === 0 ? <h5>Loading... </h5>
          : courses[0].map((x) => (
            <div key={x.id} className="border d-flex align-items-center justify-content-center m-2 py-4">
              <Homecourses x={x} />
            </div>
          ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  const { courses } = state.coursersreducer;
  return ({ courses });
}

Home.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

// Homepage.defaultProps = {
//   teams: [],
// };

export default connect(mapStateToProps, null)(Home);
