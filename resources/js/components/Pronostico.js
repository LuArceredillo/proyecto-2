import React, { Component } from 'react';

export default class Pronostico extends Component {
    state = {
        items: [],

    }
    componentDidMount() {
        console.log("pronostico.js");
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        var miInit = {
            headers: {
                'X-CSRF-TOKEN': token.content,
                'Authorization': 'Bearer ' + api_token.content
            }
        }

        fetch('http://localhost/pr2/api/cantidadpronosticos', miInit)
            .then(res => res.json())
            .then(json => {
                if (json != null)
                    this.setState({
                        items: json.items,
                    })
            });

    }

    componentWillReceiveProps() {

        // let api_token = document.querySelector('meta[name="api-token"]');
        // let token = document.head.querySelector('meta[name="csrf-token"]');

        // var miInit = {
        //     headers: {
        //         'X-CSRF-TOKEN': token.content,
        //         'Authorization': 'Bearer ' + api_token.content
        //     }
        // }

        // fetch('http://localhost/pr2/api/cantidadpronosticos', miInit)
        //     .then(res => res.json())
        //     .then(json => {
        //         if (json != null)
        //             this.setState({
        //                 items: json.items,
        //             })
        //     });

    }

    async  handlePronosticos() {
        var selectBox = document.getElementById("selectBox");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;


        this.props.setPronostico(selectedValue);

        console.log(this.state.pronostico);
        if (this.state.pronostico != -1) {

            fetch('http://localhost/pr2/api/pronostico/4/' + selectedValue)
                .then(res => res.json())
                .then(json => {

                    this.props.cuartos0(json.items[0]),
                        this.props.cuartos1(json.items[1]),
                        this.props.cuartos2(json.items[2]),
                        this.props.cuartos3(json.items[3])

                });
            fetch('http://localhost/pr2/api/pronostico/2/' + selectedValue)
                .then(res => res.json())
                .then(json => {
                    this.props.semis1(json.items[0]),
                        this.props.semis2(json.items[1])

                });
            fetch('http://localhost/pr2/api/pronostico/1/' + selectedValue)
                .then(res => res.json())
                .then(json => {
                    this.props.final(json.items[0])

                });
            fetch('http://localhost/pr2/api/pronostico/0/' + selectedValue)
                .then(res => res.json())
                .then(json => {

                    this.props.campeon(json.items[0])

                });
        }
    }


    render() {
        var i = "";
        var { items } = this.state;
        if (items != null) {
            {
                i = items.map((item, i) => (
                    <option key={i}>
                        {item.pronostico}
                    </option>
                ))
            }
        }

        return <div>
            <div className="row">
                <div className="form-group">
                    <div className="row">
                        <h5>Bienvenido Usuario</h5>
                    </div>
                    <label >Selecciona el pronóstico a ver:</label>
                    <select className="form-control" id="selectBox" onChange={(e) => this.handlePronosticos()}>
                        <option> </option>
                        {i}

                    </select>
                </div>
            </div >

        </div >
    }
}