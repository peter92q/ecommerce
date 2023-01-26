import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Product = ({ product: { image, name, slug, price,category }, categoryState }) => {
  const version1 = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiOutlineStar/>,<AiOutlineStar/>];
  const version2 = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiOutlineStar/>];
  const version3 = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,,<AiFillStar/>,,<AiFillStar/>];

  const randomer = {
    1: version1,
    2: version2,
    3: version3 
  }


  return (
    <>
      {categoryState==='all' && 
            <Link href={`/product/${slug.current}`}>
            <div className="product-card">
              <img 
                src={urlFor(image && image[0])}
                width={250}
                height={250}
                className="product-image"
              />
              <p className="product-name">{name}</p>
              <p className="product-price">${price}</p>
              <div className="reviews">
                <div className='ratings'>
                  {randomer[1+Math.floor(Math.random()*3)]}
                </div>
                <p>
                  {1+Math.floor(Math.random() * 30)} reviews 
                </p>
               </div>
            </div>
          </Link>}

      {category === 'new' && categoryState === 'new' &&
            <Link href={`/product/${slug.current}`}>
            <div className="product-card">
              <img 
                src={urlFor(image && image[0])}
                width={250}
                height={250}
                className="product-image"
              />
              <p className="product-name">{name}</p>
              <p className="product-price">${price}</p>
              <div className="reviews">
                <div className='ratings'>
                  {randomer[1+Math.floor(Math.random()*3)]}
                </div>
                <p>
                  {1+Math.floor(Math.random() * 30)} reviews
                </p>
              </div>
            </div>
          </Link>}

      {category === 'topRated' && categoryState === 'toprated' &&
            <Link href={`/product/${slug.current}`}>
            <div className="product-card">
              <img 
                src={urlFor(image && image[0])}
                width={250}
                height={250}
                className="product-image"
              />
              <p className="product-name">{name}</p>
              <p className="product-price">${price}</p>
              <div className="reviews">
                <div className='ratings'>
                  {randomer[1+Math.floor(Math.random()*3)]}
                </div>
                <p>
                  {1+Math.floor(Math.random() * 30)} reviews
                </p>
              </div>
            </div>
          </Link>}

    </>
  )
}

export default Product