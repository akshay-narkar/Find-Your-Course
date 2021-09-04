/*eslint-disable*/

export default function Singlefavpage(props) {
  const { x } = props;

  return (
    <>
      <div className="container">
        <div className="row border align-items-center">
          {/* <div className="col-lg-3 p-0 text-center"> */}
          {/* <img src={teaminfo.crestUrl} style={maxwidth} alt="logo" /> */}
          {/* </div> */}
          <div className="col-lg-9 container align-items-center">
            <div className="row p-0 border">
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Name: </span>
                {x.name}
              </h5>
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Country:  </span>
                {x.domain}
              </h5>
              <h5 className="px-4 py-4 mb-0 col-md-4 border">
                <span>Shortname:  </span>
                {x.fee}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
