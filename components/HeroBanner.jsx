import React from 'react';
import pic1 from '../public/carousel/brooke-cagle-aVT8VkmzML4-unsplash.png'
import pic2 from '../public/carousel/chris-ghinda-wK2ESlRRZQ8-unsplash.png'
import pic3 from '../public/carousel/jc-gellidon-JM8TkWJ9UIY-unsplash.png'
import pic4 from '../public/carousel/laptop.png'
import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '.';


const imageMap = {
  1: pic1,
  2: pic2,
  3: pic3,
  4: pic4
}

const HeroBanner = () => {
  const [num,setNum] = useState(1)
  const currentImg = imageMap[num] || pic1
   
  return (
    <div className='heroban' style={{position:'relative', height:'clamp(110vh,50vh)', paddingTop:'1%', marginBottom:'50px'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', marginTop:'20px'}}>
        <div className='heromain' style={{display: 'flex', justifyContent:'center', borderRadius:'15px'}}>
            <button className='btn1' onClick={()=>setNum(num>1? num-1 : num)}><i className='arrow left'></i></button>
              <Image src={currentImg} alt='landing page' width={1000} height={500}/>
            <button className='btn2' onClick={()=>setNum(num<4? num+1 : num)}><i className='arrow right'></i></button> 
        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <div style={{height:'10px', width: '10px', border:'1px solid gray', borderRadius:'100%', marginTop:'10px', boxShadow: num===1?'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px':'none'}}></div>
          <div style={{height:'10px', width: '10px', border:'1px solid gray', borderRadius:'100%', marginTop:'10px', boxShadow: num===2?'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px':'none' }}></div>
          <div style={{height:'10px', width: '10px', border:'1px solid gray', borderRadius:'100%', marginTop:'10px', boxShadow: num===3?'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px':'none' }}></div>
          <div style={{height:'10px', width: '10px', border:'1px solid gray', borderRadius:'100%', marginTop:'10px', boxShadow: num===4?'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px':'none' }}></div>
        </div>
      </div>

    </div>
   
  )
}

export default HeroBanner