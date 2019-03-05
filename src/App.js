import React, { Component } from 'react';

import './App.css';

import { Nav } from './components/nav';
import {CostosOperativos} from './components/costosOperativos/index';
import {CostoIngredientes} from './components/costoIngredientes/index';


class App extends Component {
  constructor(){
    super();
    this.state= {
      listaCostosOperativos: [
        {descripcion: "Luz", costo: 100},
        {descripcion: "Agua", costo: 150},
        {descripcion: "Alquiler", costo: 300},
      ],
      ListaIngredientes: [
        {ingrediente: "Pan", unidad: "paquete 12uni", precioCompra: 120, porciones: 12, precioVenta: 10 },
        {ingrediente: "Carne", unidad: "1kg", precioCompra: 100, porciones: 10, precioVenta: 10 },
        {ingrediente: "Queso", unidad: "1kg", precioCompra: 200, porciones: 20, precioVenta: 20 },
      ],
      descripcion: "prueba2",
      costo: 10,
      ingrediente: "prueba",
      unidad: "1kg",
      precioCompra: 200,
      porciones: 5,
      // precioVenta: 20,
      facturasDia: 100,
      diasAlMes: 24,
      ganancia: 20
    } 
    this.handleVariables = this.handleVariables.bind(this);
    this.handleAgregarListaCo = this.handleAgregarListaCo.bind(this);
    this.handleAgregarListaCi = this.handleAgregarListaCi.bind(this);
    this.handleActualizarFormulario= this.handleActualizarFormulario.bind(this);
    this.handleReiniciar = this.handleReiniciar.bind(this);
  }
  handleReiniciar() {
    this.setState({
      listaCostosOperativos: [],
      ListaIngredientes: []
    })
  }

  handleVariables(even) {
    switch (even.target.id){
    case "FacturasDia":
      this.setState({
        facturasDia: even.target.value
      })
      break;

    case "diasLaborables":
      this.setState({
        diasAlMes: even.target.value
      })
      break;

    case "ganancia":
      this.setState({
        ganancia: even.target.value
      })
      break;

    default:
      console.log("caso por default al cambiar las variables");
    }
  }
  handleAgregarListaCo() {
    let { descripcion, costo} = this.state;
    let pushLiCo = this.state.listaCostosOperativos;
    pushLiCo.push({
      descripcion: descripcion,
      costo: costo
    })
    this.setState({
      listaCostosOperativos: pushLiCo
    })  
  }
  handleAgregarListaCi() {
    let {ingrediente, unidad, precioCompra, porciones,} = this.state;
    let precioVenta = parseInt(precioCompra)/parseInt(porciones);
    let pushLiCi = this.state.ListaIngredientes;
    pushLiCi.push({ ingrediente, unidad, precioCompra, porciones, precioVenta })
    this.setState({ListaIngredientes: pushLiCi})
  }
  handleActualizarFormulario(even) {
    switch (even.target.id) {
      case "descripcionCo":
        this.setState({descripcion: even.target.value})
        break;
      case "costoCo":
        this.setState({costo: parseInt(even.target.value)})
        break;
        case "ingrediente":
        this.setState({ ingrediente: even.target.value })
        break;
        case "unidad":
        this.setState({ unidad: even.target.value })
        break;
        case "precioCompra":
        this.setState({ precioCompra: even.target.value })
        break;
      case "porciones":
        this.setState({ porciones: even.target.value })
        break;
      default:
      
    }
  }
  render() {
    let coMes = 0;
    let {listaCostosOperativos} = this.state;
    listaCostosOperativos.map(precio => coMes += precio.costo);
    let co = Math.round(coMes/this.state.diasAlMes/this.state.facturasDia*100)/100;
    let ci =0;
    let {ListaIngredientes} = this.state;
    ListaIngredientes.map(precio => ci += precio.precioVenta);
    let ga = this.state.ganancia;
    let ctotal = Math.round((ci + co)*(ga/100+1)*100)/100;
    let costos = {
        coMes: coMes,
        co: co,
        ci: ci,
        ga: ga,
        ctotal: ctotal
    }
    return (
      <div className="App">
        <Nav costos={costos}/>
        <CostosOperativos 
          coMes={coMes} 
          listaCo={this.state.listaCostosOperativos} 
          handleVariables={this.handleVariables}
          handleAgregarListaCo={this.handleAgregarListaCo}
          handleActualizarFormulario={this.handleActualizarFormulario}
          handleReiniciar={this.handleReiniciar}
        />
        <CostoIngredientes 
          ci={ci} 
          listaCi={this.state.ListaIngredientes} 
          handleActualizarFormulario={this.handleActualizarFormulario}  
          handleAgregarListaCi={this.handleAgregarListaCi}
        />
      </div>
    );
  }
}

export default App;
