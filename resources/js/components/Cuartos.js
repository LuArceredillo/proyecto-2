import React, { Component } from 'react';

import './partidos.css'
export default class Cuartos extends Component {
    state = {
        item: []
    };



    handleClick(param, e) {
        console.log('Parameter', param);
        console.log('Event', e);
        document.getElementById("hola").innerHTML += "<p>" + param + "</p>";

    }
    render() {
        var { item } = this.state;

        return <div>

            <div className="partido row " >
                <div className="col-2 octavos">
                    <p> </p>

                </div>
                <div className="col-2 cuartos">
                    <div className="row">

                        <button type="button" className="btn btn-light">jugador</button>
                    </div>

                    <div className="row">
                        <button type="button" className="btn btn-light">jugador</button>
                    </div>
                </div>
                <div className="col-4 semis">

                </div>
                <div className="col-2 cuartos">
                    <div className="row ">
                        <button type="button" className="btn btn-light ">jugador</button>
                    </div>

                    <div className="row" >
                        <button type="button" className="btn btn-light "  > jugador</button>
                    </div>
                </div>
                <div className="col-2 octavos">
                    <p> </p>
                </div>

            </div>

        </div>




    }
}
