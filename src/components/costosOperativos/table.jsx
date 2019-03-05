import React, { Fragment } from 'react';

import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography
} from '@material-ui/core';

export const TablaCostos = (props) => (
    <Fragment>
        <Typography color="primary" variant="title">Lista de Costos</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell variant="head">Descripción</TableCell>
                    <TableCell variant="head">Costos mensuales</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.listaCo.map((co,i) => (                                
                    <TableRow hover={true} key={i}>
                        <TableCell>{co.descripcion}</TableCell>
                        <TableCell>Bs {co.costo}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell variant="footer">Total</TableCell>
                    <TableCell variant="footer">Bs {props.coMes}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Fragment>
);