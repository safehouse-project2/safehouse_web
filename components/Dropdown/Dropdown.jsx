import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OptionsBtn from '../../styles/styledComps';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus({
    op1 = 'Option 1',
    op2 = 'Option 2',
    op3 = 'Option 3',
    op4 = 'Option 4',
    icon1 = { icon1 },
    icon2 = { icon2 },
    // icon3 = { icon3 },
    // icon4 = { icon4 },
}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // const hostClick = () => {
    //     console.log('Host clicked');
    // }

    function hostClick() {
        console.log('Host clicked');
    }

    return (
        <div>
            <OptionsBtn
                // id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                // aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Please Select
            </OptionsBtn>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <MenuItem onClick={[handleClose, hostClick]} disableRipple>
                    {icon1}
                    {op1}
                </MenuItem>
                <MenuItem onClick={[handleClose, hostClick]} disableRipple>
                    {icon2}
                    {op2}
                </MenuItem>
                {/* <MenuItem onClick={handleClose} disableRipple>
                    {icon3}
                    {op3}
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    {icon4}
                    {op4}
                </MenuItem> */}
            </StyledMenu>
        </div>
    );
}