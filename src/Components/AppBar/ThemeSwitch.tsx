import React from 'react';
import {Switch} from '@mui/material';

type ThemeSwitchPropsType = {
    onDarkTheme: boolean
    setOnDarkTheme: (checked: boolean) => void
}
export const ThemeSwitch: React.FC<ThemeSwitchPropsType> = ({onDarkTheme, setOnDarkTheme}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOnDarkTheme(event.target.checked);
    };
    return (
        <Switch
            checked={onDarkTheme}
            onChange={handleChange}
            inputProps={{'aria-label': 'controlled'}}
        />
    )
}