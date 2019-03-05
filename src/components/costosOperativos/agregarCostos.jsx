import React from 'react';

import {
    Typography,
    FormControl,
    InputLabel,
    Input,
    Button

} from '@material-ui/core';

export const AgregarCostos = (props) => (
    <form>
        <Typography
            variant="headline"
            color="primary"
            gutterBottom
        >Formulario de costs</Typography>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Descripción</InputLabel>
            <Input
                fullWidth
                required
                id="descripcionCo"
                onChange={props.handleActualizarFormulario}
            />
        </FormControl>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Costo</InputLabel>
            <Input 
                fullWidth
                required
                type="number" 
                min="0" 
                id="costoCo"
                onChange={props.handleActualizarFormulario}
            />
        </FormControl>
        <Button 
            color="primary"
            fullWidth={true}
            variant="contained"
            onClick={props.handleAgregarListaCo}
            id="agregarCo"
        >
            Agregar
        </Button>
    </form>
);