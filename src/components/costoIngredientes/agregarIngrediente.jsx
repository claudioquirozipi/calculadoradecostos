import React from 'react';

import {
    Typography,
    FormControl,
    InputLabel,
    Input,
    Button

} from '@material-ui/core';

export const AgregarIngrediente = (props) => (
    <form>
        <Typography
            variant="headline"
            color="primary"
            gutterBottom
        >Agregar Ingrediente</Typography>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Ingrediente</InputLabel>
            <Input
                fullWidth
                required
                id="ingrediente"
                onChange={props.handleActualizarFormulario}
            />
        </FormControl>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Unidad</InputLabel>
            <Input
                fullWidth
                required
                id="unidad"
                onChange={props.handleActualizarFormulario}
            />
        </FormControl>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Precio de Compra</InputLabel>
            <Input
                fullWidth
                required
                type="number"
                id="precioCompra" 
                onChange={props.handleActualizarFormulario}
            />
        </FormControl>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Porciones por unidad</InputLabel>
            <Input
                fullWidth
                required
                type="number" 
                id="porciones"
                onChange={props.handleActualizarFormulario}
            />
        </FormControl>
        {/* <FormControl margin="normal" fullWidth>
            <InputLabel >Precio del platillo</InputLabel>
            <Input 
                fullWidth
                required
                type="number" 
            />
        </FormControl> */}
        <Button 
            color="primary"
            fullWidth={true}
            variant="contained"
            onClick={props.handleAgregarListaCi}
        >
            Agregar
        </Button>
    </form>
);