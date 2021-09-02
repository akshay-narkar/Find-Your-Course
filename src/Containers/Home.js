/*eslint-disable*/

import { useEffect } from 'react';
import { getcourses, getcoursesingle, signin, signup, getfavs } from '../API/apicalls';
import Navbar from '../Components/Navbar'



export default function Home() {

  useEffect(() => {
    // getfavs();
  }, []);

  return (
    <>
        <Navbar />

      <h1>This page has all the courses</h1>
    </>
  );
}
