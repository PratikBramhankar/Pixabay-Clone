import React, { useEffect, useRef, useState } from 'react'
import Nav from '../Navbar/Nav';
import './index.css' 
   
export default function Data() {

    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");
    const ipRef = useRef();

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=40363740-e6930f8d294311528e4ee74b3&q=${search}&image_type=photo&pretty=true`)
        .then((res) => res.json())
        .then((d) => setData(d.hits))
    },[data])

    useEffect(() => {
        ipRef.current.focus();
    },[])

  return (
    <div className='Data'>
    <Nav setting = {setSearch} refs = {ipRef}/>
    <div className='Data__cont'>
        {data.map((x) => {
            return(
                <section key={x.id} className='secImg'>
                <img src={x.webformatURL} alt='' height={x.webformatHeight} width={x.webformatWidth}></img>
                </section>
            )
        })}
        </div>
    </div>
  )
}
