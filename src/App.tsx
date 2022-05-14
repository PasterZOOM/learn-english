import AppBar from '@mui/material/AppBar';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {SearchComponent} from './Components/AppBar/SearchComponent';
import {Grid} from '@mui/material';
import {AppBarLabel} from './AppBarLabel';
import {Body} from './Components/Body/Body';
import {blueGrey, deepOrange, indigo, lightBlue, pink} from '@mui/material/colors';
import React from 'react';
import {ThemeSwitch} from './Components/AppBar/ThemeSwitch';


export function App() {
    const [onDarkTheme, setOnDarkTheme] = React.useState<boolean>(false);
    const lightTheme = createTheme({
        ...global,
        palette: {
            mode: 'light',
            contrastThreshold: 3,
            tonalOffset: 0.1,
            text: {
                primary: blueGrey[600],
            },
            primary: {
                main: indigo[500],
            },
            secondary: {
                main: pink[500],
            },
        },
    });
    let darkTheme = createTheme({
        ...global,
        palette: {
            mode: 'dark',
            contrastThreshold: 3,
            tonalOffset: 0.1,
            background: {
                default: blueGrey[900],
            },
            text: {
                primary: blueGrey[50],
            },
            primary: {
                main: lightBlue[900],
            },
            secondary: {
                main: deepOrange[500],
            },
        },
    });

    return (
        <ThemeProvider theme={onDarkTheme ? darkTheme : lightTheme}>
            <AppBar position="static" color="primary" enableColorOnDark elevation={0}>
                <Grid container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center">
                    <Grid item>
                        <AppBarLabel/>
                    </Grid>
                    <Grid item>
                        <ThemeSwitch onDarkTheme={onDarkTheme} setOnDarkTheme={setOnDarkTheme}/>
                    </Grid>
                    <Grid item sx={{mr: 2}}>
                        <SearchComponent/>
                    </Grid>
                </Grid>
            </AppBar>
            <Body/>

        </ThemeProvider>
    );
}

