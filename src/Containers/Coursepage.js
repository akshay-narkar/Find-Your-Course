/*eslint-disable*/

import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addfav, errors } from '../Actions/index';
import { addfavapi } from '../API/apicalls';
import Navbar from '../Components/Navbar'
import Singlecoursepage from '../Components/Singlecoursepage'
import helperauth from '../API/helper_auth';

function Coursepage(props){
     
    const [state, setstate] = useState({
          toggle: 0
        });

    const { toggle } = state;
    
    const { id } = useParams();
    const pageid = +id;
    const { courses, userid, favlist, calldispatch, errordispatch } = props;
    const rightcourse = courses[0].filter((xmas) => xmas.id === pageid); 
    let params;

    if (sessionStorage.getItem('uid')){ params = helperauth(); }

    const addtofavs = () => {
          addfavapi(userid, calldispatch, params, id, errordispatch); 
    }
    
    
    // const removefromfavs = () => {
          
    // } 



return(
    <>
    <Navbar />
      
         <div className="d-flex flex-wrap container p-0 m-auto justify-content-center">
       {rightcourse.length === 0 ? <h5>Loading... </h5>
          : 
          rightcourse.map((x) => (
            <div key={x.id} className="border d-flex align-items-center justify-content-center m-2 py-4">
              <Singlecoursepage x={x} />
            </div>
          ))}
      {/* {console.log(courses)} */}
      </div>
    { (sessionStorage.getItem('uid')) ? 
          (favlist.includes(pageid)) ?
               
             <> <button type="button" className="my-2 p-2 btn btn-primary btn-sm" >In Favs</button> {console.log("here")} </>
              :
            <> <button type="button" className="my-2 p-2 btn btn-primary btn-sm" onClick = {addtofavs} >Add to Favorites</button> {console.log("nothere")} </>
          : 
        <Link to={{ pathname: `/login` }}>
                 <button type="button" className="my-2 p-2 btn btn-primary btn-sm">Add to Favorites</button>  
        </Link>
    }   
    </>
  );
}

// function Team(props) {
//   const { location, calldispatch, teaminfo } = props;
//   const { key } = location.id;
//   const [state, setstate] = useState({
//     id: null,
//   });

 
//   return (
//     <>
//       <div className="container">
//         <Link to={{ pathname: '/' }} className="link">
//           <button type="button" className="my-2 p-2 btn btn-primary btn-sm">Home</button>
//         </Link>
//       </div>
//       <h1 className="text-center mb-3 pb-3"> Team Details </h1>
//       <div className="">
//         {(teaminfo.length === 0 || teaminfo[0].id === state.id)
//           ? <div className="container m-auto text-center border">Loading... (API might take time. Only 10 Requests/Min)</div> : <Teamcard teaminfo={teaminfo[0]} />}
//       </div>
//     </>
//   );
// }

// Coursepage.propTypes = {
//   location: PropTypes.shape({
//     id: PropTypes.objectOf(PropTypes.number),
//   }),
//   calldispatch: PropTypes.func.isRequired,
//   teaminfo: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// Coursepage.defaultProps = {
//   location: {
//     id: { key: 1 },
//   },
// };

// const mapDispatchToProps = (dispatch) => ({
//   calldispatch: (id) => dispatch(teamdeets(id)),
// });

function mapStateToProps(state) {
  const { userid } = state.usersreducer;
  const { courses } = state.coursersreducer;
  const { favlist } = state.favsreducer;

  return ({ userid, courses, favlist });
}

const mapDispatchToProps = (dispatch) => ({
  calldispatch: (id) => dispatch(addfav(id)),
  errordispatch: (text) => dispatch(errors(text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Coursepage);