
import React, { Component } from 'react';
import CustomerList from './CustomerList';
import * as ServiceUtils from '../Utils/ServiceUtils';


export default class GetList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };
    }


    async componentWillMount() {        
        debugger;
        const incomingResponse = await ServiceUtils.getRequest('http://localhost:59982/api/Customer/GetList');
        debugger;
        if (incomingResponse.status === 401) {
                this.props.history.push('/');
        }
        this.setState({ customers: incomingResponse });
    }


    render() {
        if (this.state.customers.length === 0) {
            return <div />
        }
        
        return (
            <div>
                <CustomerList
                    data={this.state.customers}
                />
            </div>

        )
    }
};
