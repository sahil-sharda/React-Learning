import react, { Component } from 'react'

class InputClass extends Component {
    constructor(props) {
        super(props)
        this.state = {}; 
    }

    render() {
        return(
            <input type= {this.props.type}/>
        );
    }
}
export default InputClass