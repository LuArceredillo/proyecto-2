import React, { Component } from 'react';

export default class Semis extends Component {
    state = {
        item: []
    };



    handleClick(param, i, e) {
        var arreglo = ["j1", "j2"];
        this.props.setJugador(param, i, arreglo);
    }
    render() {
        let a = [this.props.jugador1, this.props.jugador2];
        let r = [];

        for (let i = 0; i < 2; i++) {

            r.push(<div key={"semi" + this.props.i + i} className="row border">
                <div className="col-2 jugador">
                    {a[i].pais && <img src={"banderas/" + a[i].pais + ".png"}></img>}
                </div>
                <div className="col-10 jugador">
                    <button type="button" className="btn btn-light jugador"
                        onClick={(e) => this.handleClick(a[i], (Number(this.props.i)), e)}>
                        {a[i].nombre && a[i].nombre}
                    </button>
                </div>
                <button type="button" className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(a[i], (Number(this.props.i)), e)}>
                    {a[i].abrev && a[i].abrev}
                </button>
            </div >);
        }
        return <div>

            {r}



        </div>


    }
}
