import React, { Component } from 'react';
import { Container, Button, Form, Input, FormGroup, Col } from 'reactstrap';
//import {TextInputMask} from 'react-masked-text';
import InputMask from 'react-input-mask';
import * as ServiceUtils from '../../Utils/ServiceUtils';
import Swal from 'sweetalert2';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            UserName: "",
            Password: "",
            Name: "",
            Surname: "",
            Phone: "",
            statu: false
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.InsertUser = this.InsertUser.bind(this);

    }

    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    validateForm() {
        return this.state.UserName.length > 0 &&
            this.state.Password.length > 0 &&
            this.state.Name.length > 0 &&
            this.state.Surname.length > 0 &&
            this.state.Email.length > 0 &&
            this.state.Phone.length > 0
    };

    async  InsertUser() {

        let data = {
            "Email": this.state.Email,
            "UserName": this.state.UserName,
            "Password": this.state.Password,
            "Name": this.state.Name,
            "Surname": this.state.Surname,
            "Phone": this.state.Phone
        }
        const incommingResponse = await ServiceUtils.postRequest('http://localhost:59982/api/User/register', data);
        this.setState({ statu: incommingResponse })

        if (this.state.statu === false) {
            Swal.fire({
                type: "error",
                title: "Kaydedilemedi",
                text: "Kayıt Başarısız"
            })
        }
    }

    render() {
        if (this.state.statu === true) {
            Swal.fire(
                'Kaydedildi',
                'Kaydınız başarılı bir şekilde oluşturuldu',
                'success'
            ).then((result) => {
                if (result.value) {
                    this.props.history.push("/");
                }
            })
        }

        return (
            <Container style={{ backgroundColor: 'gray' }}>
                <div style={{ backgroundColor: 'aqua' }}>
                    <form onSubmit={this.handleSubmit} >

                        <Col sm={{ size: 'auto' }}>
                            <Form style={{ backgroundColor: 'aqua', marginTop: '100px' }}>
                                <FormGroup>
                                    <Col sm={{ size: 10, offset: 5 }}>
                                        <Input
                                            name="Email"
                                            type="email"
                                            onChange={this.handleChange}
                                            value={this.state.Email}
                                            placeholder="Email"
                                            style={{ width: '260px', height: '38px' }} />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={{ size: 10, offset: 5 }}>
                                        <Input
                                            name="Password"
                                            type="password"
                                            value={this.state.Password}
                                            onChange={this.handleChange}
                                            style={{ width: '260px', height: '38px' }}
                                            placeholder="Password" />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={{ size: 10, offset: 5 }}>
                                        <Input
                                            name='UserName'
                                            value={this.state.UserName}
                                            onChange={this.handleChange}
                                            style={{ width: '260px', height: '38px' }}
                                            placeholder='Username' />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={{ size: 10, offset: 5 }}>
                                        <Input
                                            name='Name'
                                            value={this.state.Name}
                                            onChange={this.handleChange}
                                            style={{ width: '260px', height: '38px' }}
                                            placeholder='Name' />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={{ size: 10, offset: 5 }}>
                                        <Input
                                            name='Surname'
                                            value={this.state.Surname}
                                            onChange={this.handleChange}
                                            style={{ width: '260px', height: '38px' }}
                                            placeholder='Surname' />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={{ size: 10, offset: 5 }}>
                                        <InputMask
                                            name='Phone'
                                            mask="0999 999 99 99"
                                            value={this.state.Phone}
                                            onChange={this.handleChange}
                                            style={{ width: '260px', height: '38px' }}
                                            placeholder='Phone' />
                                    </Col>
                                </FormGroup>
                                <Col sm={{ size: 10, offset: 5 }}>
                                    <Button
                                        color="success"
                                        backgroundColor="submit"
                                        type="submit"
                                        onClick={this.InsertUser}
                                    >
                                        Submit</Button> </Col>
                            </Form>
                        </Col>
                    </form>
                </div>
            </Container>

        )
    }
};

