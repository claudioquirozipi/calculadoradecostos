import React, { Fragment } from 'react';

import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography
} from '@material-ui/core';

export const TablaIngredientes = (props) => (
    <Fragment>
        <Typography color="primary" variant="title">Ingredientes</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell variant="head">Ingrediente</TableCell>
                    <TableCell variant="head">Unidad</TableCell>
                    <TableCell variant="head">Precio de Compra</TableCell>
                    <TableCell variant="head">Porciones/ Unidad</TableCell>
                    <TableCell variant="head">Precio/ Platillo</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.listaCi.map((co,i) => (                                
                    <TableRow hover={true} key={i}>
                        <TableCell>{co.ingrediente}</TableCell>
                        <TableCell>{co.unidad}</TableCell>
                        <TableCell>Bs {co.precioCompra}</TableCell>
                        <TableCell>{co.porciones}</TableCell>
                        <TableCell>Bs {co.precioVenta}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell variant="footer">Total</TableCell>
                    <TableCell variant="footer">Bs {props.ci}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Fragment>
);