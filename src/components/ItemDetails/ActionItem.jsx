import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Card, FlashOn as Flash} from '@mui/icons-material';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import Cart from '../cart/Cart';


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

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;


const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Card/>Add to Cart</StyledButton>
            <StyledButton  variant="contained" styled={{background: '#ff9f00'}}><Flash/> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;