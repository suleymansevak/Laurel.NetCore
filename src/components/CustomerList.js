import React from 'react';
import { Table } from 'react-bootstrap';


debugger;
const CustomerList = (props) => {
    debugger;
    if (props.data) {
        debugger;
        const mappedList = props.data.customerList.map((items) => {
            debugger;
           let id=  items.id 
           let firstname= items.firstName 
           let lastname= items.lastName 
           let country= items.country   
        });

        return (
            <div key={props.data.id}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Country</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.customerList.map((item) =>

                            <tr>
                                <td> <p>{item.id}</p></td>
                                <td> <p>{item.firstName}</p></td>
                                <td> <p>{item.lastName}</p></td>
                                <td> <p>{item.country}</p></td>
                            </tr>

                        )}
                    </tbody>
                </Table>
            </div>
        )

        return mappedList;
    } else {
        return (
            <div />
        );
    }
}

export default CustomerList;