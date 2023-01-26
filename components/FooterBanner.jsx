import Image from 'next/image';
import React from 'react';
import footer from '../public/carousel/acorg.png'

const FooterBanner = () => {
  return (
    <div className='promo'>
      <Image src={footer} width={1400} height={700} style={{borderRadius: '10%'}}/>
    </div>
  )
}

export default FooterBanner