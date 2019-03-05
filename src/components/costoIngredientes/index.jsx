import React from 'react';
import {TablaIngredientes} from './tabla';
import { 
    Grid, 
    Paper, 
    Typography,
} from '@material-ui/core';
import { AgregarIngrediente } from './agregarIngrediente';

export const CostoIngredientes = (props) => (    
    <Grid container spacing={16}>
        <Grid item xs={12}>
            <Paper className="padding">
                <Typography
                    color="primary"
                    variant="display1"
                >Costo del plato</Typography>
                <Typography>
                    Felicidades, ya tienes el costo operativo, ahora
                    debes de calcular el costo del plato por los ingredientes. 
                    <br></br>
                    Para ello debes agregar en el formulario de la derecha, 
                    el nombre del ingrediente. La unidad del empaque (1kg, 1docena, 1paquete, etc)
                    el precio de compra de esa unidad. y por último la cantidad de platos que puedes 
                    hacer con esa unidad. (ejemplo un paquete de panes para perros de 12 unidades
                    alcanzará para 12 perros).
                    <br></br>
                    Listo ya terminaste, el precio aparecerá en la barra superior. 
                    Esta aplicación es un prototipo, tiene muchas cosas que mejorar así que si puedes 
                    comunícate conmigo y dime como podemos mejorarla. 
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={9}>
            <Paper className="padding">
                <TablaIngredientes ci={props.ci} listaCi={props.listaCi}/>
            </Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className="padding">
                <AgregarIngrediente 
                    handleActualizarFormulario={props.handleActualizarFormulario} 
                    handleAgregarListaCi={props.handleAgregarListaCi}
                />
            </Paper>
        </Grid>
    </Grid>
)