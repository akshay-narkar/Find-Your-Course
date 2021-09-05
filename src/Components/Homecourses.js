import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Courses(props) {
  const { x } = props;

  const maxwidth = {
    width: '310px',
  };

  return (
    <>
      <Link to={{ pathname: `/course/${x.id}`, id: { key: x.id } }} className="link">
        <div id={x.id} style={maxwidth} className="d-flex align-items-center justify-content-start px-5">
          {/* <img src={x.crestUrl} style={width} alt="LogoHere" /> */}
          <div>
            <p className="ms-3 fw-bold">{x.name}</p>
            <p className="ms-3 fw-light">{x.domain}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

Courses.propTypes = {
  x: PropTypes.shape({
    id: PropTypes.number.isRequired,
    domain: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

// AllTeams.defaultProps = {
//   x: PropTypes.shape({
//     crestUrl: null,
//   }),
