import React from 'react';
import { 
    AppBar, 
    Toolbar,
    Grid,
    Typography,
    Link,
    IconButton,
    SvgIcon,
    Icon
} from '@material-ui/core';

export const Nav = (props) => (
    <AppBar>
        <Toolbar variant="dense" >
            <Grid 
                justify="space-between"
                alignItems="center"
                container
            >
                <Link
                    target="_blank"
                    variant="display1"
                    color="inherit"
                    href="https://cquirozipi.firebaseapp.com/"
                >
                cQuiroz ipi
                </Link>
                    <Grid 
                        container
                        justify="flex-end"
                        alignItems="center"
                        item
                        xs={7}
                        spacing={16}
                    >
                    <Grid item>
                    <Typography color="inherit">(Co: {props.costos.co} + Ci: {props.costos.ci})*Ga:{props.costos.ga} = Ctotal: </Typography>
                    </Grid>
                    <Grid item>
                    <Typography 
                        color="inherit"
                        variant="display2"
                        >Bs {props.costos.ctotal}
                    </Typography>
                    </Grid>
                    </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
);