import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Singlecoursepage(props) {
  const {
    x, favlist, pageid, clickhandler,
  } = props;

  const imagewidth = {
    width: '100%',
  };

  const size = {
    fontSize: '1.3rem',
  };

  const color = {
    color: '#b79c07',
  };

  return (
    <>
      <div className="card singlecardborder shadow-card" id={x.id}>
        <img src={x.course_photo} style={imagewidth} className="card-img-top-favs" alt="course" />
        <div className="card-body d-flex justify-content-left">
          <div>
            <h5 className="card-title fw-normal my-3">
              <span className="fw-bold">Taught By:</span>
&nbsp;
              {x.teacher_name}
            </h5>
            <h5 className="card-text fw-normal my-3">
              <span className="fw-bold">Domain:</span>
&nbsp;
              {x.domain}
            </h5>
            <h5 className="card-text d-flex align-items-center justify-content-left my-3">
              <span className="fw-bold" style={Object.assign(size, color)}>
                {' '}
                <span className="fw-normal text-dark">Rating:</span>
&nbsp;
                {x.rating}
                {' '}
              </span>
              <ReactStars
                count={5}
                value={x.rating}
                size={22}
                edit={false}
                color2="#b79c07"
              />
            </h5>
            <h5 className="card-text fw-normal my-3">
              <span className="fw-normal">Fees:</span>
&nbsp;$
              {x.fee}
            </h5>
            <h5 className="card-text fw-bold my-3">
              About The Course:
            </h5>
            <p>{x.details}</p>

          </div>
        </div>
        <div>
          {/* eslint-disable-next-line */}
      { (sessionStorage.getItem('uid'))
        ? (favlist.includes(pageid))

          ? (
            <>
              <div className="text-center">
                <button type="button" className="btn w-100 favsbtn shadow fw-bold favssize">In Favs</button>
              </div>
            </>
          )
          : (
            <>
              <div className="text-center">

                <button type="button" className="btn w-100 favsbtn shadow fw-bold favssize" onClick={clickhandler}>Add to Favorites</button>
              </div>
            </>
          )
        : (
          <div className="text-center">

            <Link to={{ pathname: '/login' }} className="link">
              <button type="button" className="btn w-100 favsbtn shadow fw-bold favssize">Add to Favorites</button>
            </Link>
          </div>
        )}
        </div>
      </div>

    </>
  );
}

Singlecoursepage.propTypes = {
  favlist: PropTypes.arrayOf(PropTypes.string),
  pageid: PropTypes.number.isRequired,
  clickhandler: PropTypes.func.isRequired,
  x: PropTypes.shape({
    id: PropTypes.number,
    domain: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.string,
    rating: PropTypes.number,
    fee: PropTypes.number,
    teacher_name: PropTypes.string,
    course_photo: PropTypes.string,
  }),
};

Singlecoursepage.defaultProps = {
  favlist: [''],
  x: PropTypes.shape({
    id: 1,
    domain: 'Tech',
    name: 'Prof X',
    rating: 5,
    fee: 25,
    course_photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2698114.jpg&f=1&nofb=1',
  }),
};

function mapStateToProps(state) {
  const { favlist } = state.favsreducer;

  return ({ favlist });
}

export default connect(mapStateToProps)(Singlecoursepage);
