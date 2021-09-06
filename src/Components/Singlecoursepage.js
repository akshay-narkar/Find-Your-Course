/*eslint-disable*/

import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import image from '../images/signup.jpg';

function Singlecoursepage(props) {
  const {
    x, favlist, pageid, clickhandler,
  } = props;


  const imagewidth = {
    width: '100%',
  };

  const size = {
    'font-size': '1.4rem',
  };

  const color = {
    color: '#b79c07',
  };

  return (
    <>
      <div className="card singlecardborder shadow-card" id={x.id}>
        <img src={image} style={imagewidth} className="card-img-top-favs" alt="course" />
        <div className="card-body d-flex justify-content-left">
          <div>
            <h4 className="card-title fw-bold my-3">
              <span className="fw-bold">Taught By:</span>&nbsp; {x.teacher}
            </h4>
             <h5 className="card-text fw-normal">
              <span className="fw-bold">Domain:</span>&nbsp;{x.domain}
            </h5>
            <p className="card-text fw-bold d-flex align-items-center justify-content-left my-2">
              <span className="fw-bold" style={Object.assign(size, color)}>
                {' '}
                 <span className="fw-bold">Rating:</span>&nbsp;{x.rating}
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
               <h5 className="card-text fw-normal my-2">
                <span className="fw-bold">Fees:</span>&nbsp;$
                {x.fee}
              </h5>
            <h5 className="card-text fw-bold my-2">
              About The Course: 
             <span> {x.details} </span>
            </h5>

          </div>
        </div>
        <div>
          {/* eslint-disable-next-line */}
      { (sessionStorage.getItem('uid'))
        ? (favlist.includes(pageid))

          ? (
            <>
              <div className="text-center">
                <button type="button" className="btn w-100 favsbtn shadow fw-bold">In Favs</button>
              </div>
            </>
          )
          : (
            <>
              <div className="text-center">

                <button type="button" className="btn w-100 favsbtn shadow fw-bold" onClick={clickhandler}>Add to Favorites</button>
              </div>
            </>
          )
        : (
          <div className="text-center">

            <Link to={{ pathname: '/login' }} className="link">
              <button type="button" className="btn w-100 favsbtn shadow fw-bold">Add to Favorites</button>
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
  pageid: PropTypes.string.isRequired,
  clickhandler: PropTypes.func.isRequired,
  x: PropTypes.shape({
    id: PropTypes.number.isRequired,
    domain: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    fee: PropTypes.number.isRequired,
  }).isRequired,
};

Singlecoursepage.defaultProps = {
  favlist: [''],
};

function mapStateToProps(state) {
  const { favlist } = state.favsreducer;

  return ({ favlist });
}

export default connect(mapStateToProps)(Singlecoursepage);
