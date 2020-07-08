import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props){
//     return <p>{props.title}</p>;
// }

// const Hello = (props) => <p>{props.title}</p>;

class Hello extends Component {
    render() {
        return (<p>{this.props.title}</p>);
    }
}

class Text extends Component {
    render(){
        const {
            arrayOfNumbers,
            objectWithInfo,
            isActivated,
            multiply,
            number,
            text,
            title
        } = this.props;

        // this.props.title = <h3>Otra cosa</h3>; Esto no es posible por la propiedad de inmutabilidad

        const textoSegunBool = isActivated ? 'On' : 'Off';
        const mappedNumbers = arrayOfNumbers.map(n => n * 2);
        const mappedNumbers2 = arrayOfNumbers.map(this.props.multiply);

        return (
            <div>
                {title}
                {/* <p>{text}</p> */}
                {/* <p>{number}</p> */}
                {/* <p>{textoSegunBool}</p> */}
                {/* <p>{mappedNumbers.join(', ')}</p> */}
                <p>{mappedNumbers2.join(', ')}</p>
                <p>{this.props.objectWithInfo.key}</p>
            </div>
        );
    }
}

class Title extends Component {
    render(){
        return(
        <h1>{this.props.text}</h1>
        );
    }
}
Title.defaultProps = {
    text: "Titulo por defecto"
}

class Contador extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador: this.props.contadorInicial
        };
        setInterval(() => {
            this.setState({contador: this.state.contador + 1});
        }, 1000);
    }

    // state = {contador: 1};

    render(){
        return (
            <ContadorNumero numero={this.state.contador}/>
        );
    }

}
Contador.defaultProps = {
    contadorInicial: 0
}


class ContadorNumero extends Component{
    render(){
        // console.log('ContadorNumero render()');
        return (
            <span>{this.props.numero}</span>
        );
    }
}

function App() {
    return ( 
        <div className = "App">
            <header className = "App-header">
                <img src = { logo } className = "App-logo" alt = "logo" />
                <Hello title="Hello from props"/>
                <Text
                    arrayOfNumbers={[2, 3, 10]}
                    objectWithInfo={{
                        key: 'First Value',
                        key2: 'otherValue'
                    }}
                    isActivated
                    multiply={(number) => number * 4}
                    number={2}
                    text="Texto en string"
                    title={<h1>Este es el titulo</h1>}
                />
                <Title text="Otro titulo desde props"/>
                <Contador contadorInicial={100}/>
            </header>
        </div>
    );
}

export default App;