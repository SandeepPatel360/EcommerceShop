import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import {Box, styled} from '@mui/material';


import {getProducts} from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';




const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {

  const {products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(getProducts());
  },[dispatch]);


  return (
    <div>
      <NavBar/>
      <Component>
        <Banner/>
      </Component>
    </div>
  )
}

export default Home
