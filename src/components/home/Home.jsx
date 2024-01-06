import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import {Box, styled} from '@mui/material';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MideSection';


import {getProducts} from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';




const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {

  const {products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();
  // console.log(products);
  // console
  useEffect(() =>{
      dispatch(getProducts());
  },[dispatch]);


  return (
    <div>
      <NavBar/>
      <Component>
        <Banner/>
          <MidSlide products={products} title="Deal of the Day" timer={true} />
          <MidSection/>
          <Slide products={products} title="Discount for You" timer={false} />
          <Slide products={products} title="Suggesting Items" timer={false} />
          <Slide products={products} title="Top Selection"  timer={false} />
          <Slide products={products} title="Reccomended Items" timer={false} />
          <Slide products={products} title="Trending Offer"    timer={false}/>
          <Slide products={products} title="Season's Top Picks" timer={false} />
          <Slide products={products} title="Top Deals on Accessories" timer={false} />
      </Component>
    </div>
  )
}

export default Home
