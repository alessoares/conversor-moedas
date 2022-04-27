import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {

  constructor(props){
    super(props);

    this.state = {
      moedaA_valor:"",
      moedaB_valor: 0,
    }
    this.converter = this.converter.bind(this);
  }

  converter() {
    const dePara = `${this.props.moedaA}_${this.props.moedaB}`;
    const apiKey = '818fa9b1757b8d45d262';
    const url = `http://free.currencyconverterapi.com/api/v5/convert?q=${dePara}&compact=y&apiKey=${apiKey}`;

    fetch(url)
    .then(res=>{
      return res.json()
    })
    .then(json=>{
      let cotacao = json[dePara].val;
      let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
      this.setState({moedaB_valor});
    })
  }

  render() {
    return (
      <div className="conversor">
        <h2><span className="moeda">{this.props.moedaA}</span> para <span className="moeda">{this.props.moedaB}</span></h2>
        <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
        <input type="button" onClick={this.converter} value="converter"></input>
        <h3>Valor: {this.state.moedaB_valor}</h3>
      </div>
    )
  }
}
