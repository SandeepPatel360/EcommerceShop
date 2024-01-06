import { useState } from 'react';

import { Box, styled } from '@mui/material';



const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});


const ActionItem = ({ product }) => {

    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
        </LeftContainer>
    )
}

export default ActionItem;