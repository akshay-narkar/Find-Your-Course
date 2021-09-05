import PropTypes from 'prop-types';

export default function Singlefavpage(props) {
  const { x } = props;

  return (
    <>
      <div id={x.id} className="d-flex align-items-center justify-content-start px-5">
        <div>
          <p className="ms-3 fw-bold">{x.name}</p>
          <p className="ms-3 fw-light">{x.domain}</p>
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
  }).isRequired,
};
