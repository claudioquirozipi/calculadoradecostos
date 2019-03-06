import React from 'react';
import { 
    Grid, 
    Paper, 
    Typography,
    Button,
} from '@material-ui/core';
import { TablaCostos } from './table';
import { AgregarCostos } from './agregarCostos';
import { Variables } from './variables';

export const CostosOperativos = (props) => (    
    <Grid container spacing={16}>
        <Grid item xs={12}>
            <Paper className="padding">
                <Typography
                    color="primary"
                    variant="display1"
                >Costos Operativos</Typography>
                <Typography>
                    Bienvenido. 
                    <br></br>
                    ¿Te has preguntado en que precio vender los platillos 
                    en tu restaurant? hiciste tus calculos pero no estás seguro
                    de que realmente estés ganando dinero.
                    ¿Te ha pasado que calculas el precio y enseguida cambia monto a pagar 
                    por un servicio, o aumenta la materia prima para tu comida?
                    <br></br>
                    Bueno Con esta aplicación tendrás más control de tus ganancias y 
                    sabrás cual es el costo de tus platos de comida. 
                    <br></br>
                    Ahora bien, para la primera etapa, primero preciona el botón "borrar
                    datos e iniciar", luego agrega los costos mensuales de tu
                    negocio como: luz, agua, alquiler, prestamos, sueldos, y también no olvides
                    pagarte un sueldo.
                    <br></br>
                    Una vez agregados los costos operativos tendrás que modificar 3 variables. 
                    la primera son las facturas en promedio que se realizan al día. 
                    la segunda son los días en promedio que trabajarás en un mes. 
                    y la tercera es la ganancia esta se encuentra en %. Estos tres valores 
                    ya vienen por defecto como: 100 facturas al día, 24 días al mes y 20% de ganancia.
                    
                </Typography>
                <Button 
                    className="margintop"
                    color="primary"
                    variant="contained"
                    onClick={props.handleReiniciar}
                >Borrar datos e iniciar
                </Button>
            </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
            <Paper className="padding">
                <TablaCostos coMes={props.coMes} listaCo={props.listaCo} />
            </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
            <Paper className="padding">
                <AgregarCostos 
                    handleAgregarListaCo={props.handleAgregarListaCo}
                    handleActualizarFormulario={props.handleActualizarFormulario}
                />
            </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
            <Paper className="padding">
                <Variables handleVariables={props.handleVariables}/>
            </Paper>
        </Grid>
    </Grid>
)