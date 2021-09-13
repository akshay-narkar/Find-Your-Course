import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import Homecourses from '../Components/Homecourses';

function Home(props) {
  const { courses } = props;

  return (
    <>
      <Navbar />
      <div className="my-4">
        <h3 className="text-center">Top Courses </h3>
      </div>
      <div className="d-flex flex-wrap p-0 mx-auto my-4 justify-content-center">
        {courses.length === 0 ? <h5>Loading... </h5>
          : courses[0].map((x) => (
            <div key={x.id} className="d-flex align-items-center justify-content-center my-4 mx-2">
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

export default connect(mapStateToProps, null)(Home);
