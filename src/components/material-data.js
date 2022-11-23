import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from "react";
import { GlobalContext } from "./context/globelContext";
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -2,
        top: 3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 0px',

    },
}));

export function Cartbutton() {
    const { badge } = useContext(GlobalContext);

    return (
        <IconButton className='mycartbtn' title='My Cart'  aria-label="cart">
            <StyledBadge badgeContent={badge[0]} color="warning">
                <div  className="white-text">
                    <ShoppingCartOutlinedIcon   color="inherit" />
                </div>
            </StyledBadge>
        </IconButton>
    );
}
export function WishLIstButton() {
    return (
        <IconButton className='mycartbtn' title= 'My Wish List' aria-label="cart">
            <StyledBadge badgeContent={2} color="warning">
                <div className="white-text">
                    <FavoriteBorderOutlinedIcon  color="inherit" />
                </div>
            </StyledBadge>
        </IconButton>
    );
}

export function CartbadgeData(){
    "yes my value"
}