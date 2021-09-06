import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default function Singlefavpage(props) {
  const { x } = props;

  const width = {
    width: '18rem',
    'min-height': '30rem',
  };

  const imagewidth = {
    width: '18rem',
    height: '18rem',
  };

  const size = {
    'font-size': '1.4rem',
  };

  const color = {
    color: '#b79c07',
  };

  return (
    <>
      <div className="card cardborder shadow-card" id={x.id} style={width}>
        <img src={x.course_photo} style={imagewidth} className="card-img-top" alt="course" />
        <div className="card-body d-flex justify-content-left">
          <div>
            <p className="card-title m-0 fw-bold">
              {x.name}
            </p>
            <p className="card-text m-0 fw-normal">
              {x.domain}
            </p>
            <p className="card-text m-0 fw-bold d-flex align-items-center justify-content-left">
              <span className="fw-bold" style={Object.assign(size, color)}>
                {' '}
                {x.rating}
                  &nbsp;
                {' '}
              </span>
              <ReactStars
                count={5}
                value={x.rating}
                size={22}
                edit={false}
                color2="#b79c07"
              />
            </p>
            <p className="card-text m-0 fw-normal">
              $
              {x.fee}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Singlefavpage.propTypes = {
  x: PropTypes.shape({
    id: PropTypes.number.isRequired,
    domain: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    fee: PropTypes.number.isRequired,
    course_photo: PropTypes.string,
  }),
};

Singlefavpage.defaultProps = {
  x: PropTypes.shape({
    course_photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2698114.jpg&f=1&nofb=1',
  }),
};
