import {Tooltip} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {MenuItemType, Navbar} from './Components/Navbar/Navbar';
import {v1} from 'uuid';

type AppBarLabelPropsType = {}
export const AppBarLabel: React.FC<AppBarLabelPropsType> = () => {

    const [headTitle, setHeadTitle] = React.useState<MenuItemType>({id: v1(), title: 'Home', url: '/home', rus: 'Главная'})

    const changeHeadTitle = (newHeadTitle: MenuItemType) => {
        setHeadTitle(newHeadTitle)
    }
    return (
        <Toolbar>
            <Navbar changeHeadTitle={changeHeadTitle}/>
            <Tooltip arrow title={headTitle.rus} placement="right">
                <Typography variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1}}>
                    {headTitle.title}
                </Typography>
            </Tooltip>
        </Toolbar>
    );
}

