import React, { Component } from 'react';
//pour activer ChildComponent.js decommenter en dessous
// import ChildComponent from './ChildComponent';

class LifeCycle extends Component {

    /* La méthode `constructor(props)` dans un composant React est une méthode spéciale qui est appelée
    lorsque le composant est initialisé. Dans cette méthode, `super(props)` est utilisé pour appeler
    le constructeur de la classe parent (Component dans ce cas) et lui transmettre l'objet `props`. */
    constructor(props) {
        super(props);
        this.state = {
            name: "JACK",
            age: 20,
            step: 1
        };
        console.log(`Etape ${this.state.step} : je suis dans le constructeur`);
    }
componentDidMount() {
    console.log(`Etape ${this.state.step} : je suis dans le componentDidMount`);
    this.setState({
        name: this.props.name,
        step: this.state.step + 1
    })
    console.log(`Etape ${this.state.step} : je suis dans le setstate du componentDidMount`);
}
componentDidUpdate(prevProps, prevState) { 
    
    console.log(`Etape ${this.state.step} : je suis dans le componentDidUpdate`);
    console.log(prevState);
    console.log(this.state);

} 
    render() {
        console.log(`Etape ${this.state.step} : je suis dans le render`);

        return (
            <div>
                {console.log(`Etape ${this.state.step} : je suis dans le return`)}
                <p>Chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
             {/* <ChildComponent /> */}
            </div>
        );
    }

}

export default LifeCycle;
