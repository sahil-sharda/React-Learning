import React, { Component } from 'react';
import InputClass from './input';

class FormClass extends Component {
    constructor() {
        super();
        this.setState = {};
    }

    render() {
        // submit() {

        // };

        return (
            <div>
                <InputClass type="text" />
                <InputClass type="number" />
                <InputClass type="email" />
                {/* <button type="button" onClick={submit}>submit</button> */}
            </div>
        );
    }
}
export default FormClass