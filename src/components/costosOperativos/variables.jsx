import React from 'react';

import {
    Typography,
    FormControl,
    InputLabel,
    Input
} from '@material-ui/core';

export const Variables = (props) => (
    <form>
        <Typography
            variant="headline"
            color="primary"
            gutterBottom
        >Modificar Variables</Typography>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Facturas al día</InputLabel>
            <Input
                fullWidth
                required
                type="number"
                onChange={props.handleVariables}
                id="FacturasDia"
            />
        </FormControl>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Días laborables al mes</InputLabel>
            <Input 
                fullWidth
                required
                type="number" 
                onChange={props.handleVariables}
                id="diasLaborables"
            />
        </FormControl>
        <FormControl margin="normal" fullWidth>
            <InputLabel >Ganancia en %</InputLabel>
            <Input 
                fullWidth
                required
                type="number" 
                onChange={props.handleVariables}
                id="ganancia"
            />
        </FormControl>
    </form>
);