import { Suspense} from 'react'

import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Technologies from "./components/Technologies/Technologies"
import type { ITech } from './types/Types'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer'

const techFetch=async():Promise<ITech[]>=>{
  const res=await fetch('/data.json')
  const data=await res.json();
  return data;
} ;


function App() {
 
 const techPromise=techFetch();
  return (
    <>
       <Nav/>
       <Hero/>
       <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies techPromise={techPromise}/>
       </Suspense>
       <ToastContainer />
       <Footer/>
       

    </>
  )
}

export default App
