import React from 'react';
import {NavLink} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import {v1} from 'uuid';
import {Tooltip} from '@mui/material';


export type MenuItemType = {
    id: string,
    title: string,
    url: string,
    rus: string
}
export type MenuItemsType = Array<MenuItemType>
export const menuItems: MenuItemsType = [
    {id: v1(), title: 'Home', url: '/home', rus: 'Главная'},
    {id: v1(), title: 'Alphabet', url: '/alphabet', rus: 'Алфавит'},
    {id: v1(), title: 'Phonetic', url: '/phonetic', rus: 'Фонетика'},
    {id: v1(), title: 'Grammar', url: '/grammar', rus: 'Грамматика'},
    {id: v1(), title: 'Tenses', url: '/tenses', rus: 'Времена'},
    {id: v1(), title: 'Dictionary', url: '/dictionary', rus: 'Словарь'},
]
export type NavbarPropsType = {
    changeHeadTitle: (newMenuItem: MenuItemType) => void
}

export const Navbar: React.FC<NavbarPropsType> = ({changeHeadTitle}) => {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const onClickMenuItem = (newMenuItem: MenuItemType) => {
        changeHeadTitle(newMenuItem)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getMenuItem = (m: MenuItemType) => {
        return (
            <NavLink key={m.id}
                     to={m.url}
                     style={{
                         textDecoration: 'none'
                     }}
                     onClick={() => onClickMenuItem(m)}>
                <Tooltip arrow title={m.rus} placement="right">
                    <MenuItem onClick={handleClose}>{m.title}</MenuItem>
                </Tooltip>
            </NavLink>
        )
    }

    return (
        <div>
            <IconButton edge="start"
                        onClick={handleClick}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="menu"
                        sx={{mr: 2}}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button'}}>
                <nav>
                    {menuItems.map(getMenuItem)}
                </nav>
            </Menu>
        </div>
    )
}

