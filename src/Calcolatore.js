import React from 'react';
import InputTemperatura from './InputTemperatura';
import VerdettoEbollizione from './VerdettoEbollizione';
import conversione from './Conversione';
import toCelsius from './toCelsius';
import toFahrenheit from './toFahrenheit';

class Calcolatore extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
        this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
        this.state = { temperatura: '', scala: 'c' };
    }

    handleChangeCelsius(temperatura) {
        this.setState({ scala: 'c', temperatura });
    }

    handleChangeFahrenheit(temperatura) {
        this.setState({ scala: 'f', temperatura });
    }

    render() {
        const scala = this.state.scala;
        const temperatura = this.state.temperatura;
        const celsius = scala === 'f' ? conversione(temperatura, toCelsius) : temperatura;
        const fahrenheit = scala === 'c' ? conversione(temperatura, toFahrenheit) : temperatura;

        return (
            <div>
                <InputTemperatura
                    scala="c"
                    temperatura={celsius}
                    onChangeTemperatura={this.handleChangeCelsius} />
                <InputTemperatura
                    scala="f"
                    temperatura={fahrenheit}
                    onChangeTemperatura={this.handleChangeFahrenheit} />
                <VerdettoEbollizione
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calcolatore;