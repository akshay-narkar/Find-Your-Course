/*eslint-disable*/

import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allfavs } from '../Actions/index';
import { getcourses, getcoursesingle, signin, signup, getfavs } from '../API/apicalls';
import Navbar from '../Components/Navbar'
import Singlefavpage from '../Components/Singlefavpage'
import { number } from 'prop-types';
import helperauth from '../API/helper_auth';

function FavsPage(props){
    const { id } = useParams();
    const userid = +id;
    const { favs, calldispatch } = props;
    console.log(props);
    const params = helperauth();

    // const [state, setstate] = useState({
    //     id: null,
    // });

    // const { key } = location.id;
    // let rightcourse = courses[0].filter((xmas) => xmas.id === pageid); 
    // console.log(rightcourse);

      useEffect(() => {
                getfavs(userid, calldispatch, params);
                // if (teaminfo.length !== 0) {
                //     setstate((prevstate) => ({ ...prevstate, id: teaminfo[0].id }));
                // }
        }, []);
    // const removefromfavs = () => {
          
    // } 



return(
    <>
    <Navbar />
      
         <div className="d-flex flex-wrap container p-0 m-auto justify-content-center">
       {favs.length === 0 ? <h5>Loading... </h5>
          : 
          favs[0].map((x) => 
            <div key={x.id} className="border d-flex align-items-center justify-content-center m-2 py-4">
              <Link to={{ pathname: `/course/${x.id}` }}>
                <Singlefavpage x={x} />
              </Link>
            </div>
        
          )}
      </div>
        
      {/* <button type="button" className="my-2 p-2 btn btn-primary btn-sm" onClick = {addtofavs} >Add to Favorites</button> */}
        
    </>
  );
}

function mapStateToProps(state) {
  const { favs } = state.favsreducer;
  return ({ favs });
}

const mapDispatchToProps = (dispatch) => ({
  calldispatch: (id) => dispatch(allfavs(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavsPage);