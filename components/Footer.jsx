import Image from 'next/image';
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineAmazon, AiOutlineAlibaba} from 'react-icons/ai';
import shopper from '../public/carousel/shopper.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="logo"><Image src={shopper} height={64} width={100} alt='logo'/></p> 
      2023 Copyright Shopper All rights reserverd
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineAmazon/>
        <AiOutlineAlibaba/>
      </p>
    </div>
  )
}

export default Footer