import React, { useState } from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
const Home = ({ products, bannerData }) => {
  const [categoryState, setCategoryState] = useState('all');
  return(
  <>
    <HeroBanner heroBanner={bannerData} />
    <div className="products-heading">
      <h2>Products</h2>
    </div>
    <div className='selections'>
      <p onClick={()=>setCategoryState('all')} 
        style={{textDecoration: categoryState === 'all' ? 'underline': 'none'}}>All</p>
      <p onClick={()=>setCategoryState('new')}
        style={{textDecoration: categoryState === 'new' ? 'underline': 'none'}}>New</p>
      <p onClick={()=>setCategoryState('toprated')}
        style={{textDecoration: categoryState === 'toprated' ? 'underline': 'none'}}>Top Rated</p>
    </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} categoryState={categoryState}/>)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </>
)};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
