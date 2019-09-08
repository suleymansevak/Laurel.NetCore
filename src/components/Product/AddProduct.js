import React, { Component } from 'react'
import * as  ServisUtils from './../../Utils/ServiceUtils'
import { Container, Button, Form, Input, FormGroup, Col } from 'reactstrap'
import { string } from 'prop-types';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductCode: "",
            ProductName: "",
            UnitInStock: "",
            statu: false
        }

        this.InsertProduct = this.InsertProduct.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value  //state i güncelliyor
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    async InsertProduct() {
        debugger;
        let data = {
            "ProductCode": this.state.ProductCode,
            "ProductName": this.state.ProductName,
            "UnitInStock": this.state.UnitInStock
        }
        let url = 'http://localhost:59982/api/Product/add'
        const incomingResponse = await ServisUtils.postRequest(url, data);
        debugger;
        this.setState({ statu: incomingResponse });
        debugger;
        if (incomingResponse.status === 401) {
            this.props.history.push('/');
        }

        if (this.state.statu === false) {
            Swal.fire({
                type: "error",
                title: "Kaydedilemedi",
                text: "Kayıt Başarısız"
            })
        }
    }

    render() {

        return (

            <Form style={{ marginTop: '100px' }} onSubmit={this.handleSubmit}>
                <Col sm={{ size: 'auto' }}>
                    <FormGroup>
                        <Col sm={{ size: 10, offset: 5 }}>
                            <Input
                                name="ProductCode"
                                onChange={this.handleChange}
                                value={this.state.ProductCode}
                                placeholder="Product Code"
                                style={{ width: '260px', height: '38px', backgroundColor: 'aqua' }} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={{ size: 10, offset: 5 }}>
                            <Input
                                name="ProductName"
                                onChange={this.handleChange}
                                value={this.state.ProductName}
                                placeholder="Product Name"
                                style={{ width: '260px', height: '38px', backgroundColor: 'aqua' }} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={{ size: 10, offset: 5 }}>
                            <Input
                                name="UnitInStock"
                                onChange={this.handleChange}
                                value={this.state.UnitInStock}
                                placeholder="Unit In Stock"
                                style={{ width: '260px', height: '38px', backgroundColor: 'aqua' }} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={{ size: 10, offset: 5 }}>
                            <Button
                                color="success"
                                backgroundColor="submit"
                                type="submit"
                                onClick={this.InsertProduct}
                            >
                                Submit</Button> </Col>
                    </FormGroup>
                </Col>
            </Form>


        )
    }

};
