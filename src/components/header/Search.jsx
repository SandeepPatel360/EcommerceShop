import React from 'react'
import { InputBase, Box , styled, inputBaseClasses} from '@mui/material'
// import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search';



const SearchContainer = styled(Box)`
    background: #fff;
    width:38%;
    margin-left: 10px;
    border-radius: 2px;
    display: flex;

`

const InputSearchBase = styled(InputBase)`
      padding-left:20px;
      width: 100%;
      font-size:unset;

`
const SearchIconWrapper = styled(Box)`
    color: blue;
    margin-right:1%;
    padding:5px;
`
function Search() {
  return (
    <SearchContainer>
      <InputSearchBase placeholder='search for products, brands and more'/>
      <SearchIconWrapper>
          <SearchIcon/>
      </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search
