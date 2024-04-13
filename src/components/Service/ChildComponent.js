import { Component } from 'react'

 class ChildComponent extends Component {
    constructor(props) {
        super(props)
        {console.log(`Etape 1 : je suis dans le constructeur enfant`)}

        };
        componentDidMount() {
            {console.log(`Etape 2 : je suis dans le componentDidMount enfant`)}
        }
  render() {
    {console.log(`Etape 3 : je suis dans le render enfant`)}

    return (

      <div>
        {console.log(`Etape 4 : je suis dans le return enfant`)}
        ChildComponent
        </div>
    )
  }
}
export default ChildComponent;
