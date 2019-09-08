import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Alert, Button } from 'reactstrap';
// import '../Loginn.css';
import * as ServiceUtils from '../Utils/ServiceUtils';
import { patch } from 'semver';




export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            statu: false,
            visible: false,
            IsSingUp: false,
            token: ""
        };

        // this.handleChange=this.handleChange.bind(this);
        this.UserCheck = this.UserCheck.bind(this);  //async yapmak icin bind ettik .  "async UserCheck = () => {" olmuyor
        this.SingUp = this.SingUp.bind(this);

    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
    }

    SingUp() {
        this.setState({ IsSingUp: true })
    }


    async UserCheck() {

        debugger;
        let data = {
            "UserName": this.state.email,
            "Password": this.state.password
        }
       
        debugger;
        const incommingResponse = await ServiceUtils.postRequest('http://localhost:59982/api/User/UserCheck', data)
        debugger;
        localStorage.setItem('token',incommingResponse.token)
        this.setState({ statu: incommingResponse.token == null ? false : true, visible: true, token: incommingResponse.token })
    }

    render() {
        debugger;
        if (this.state.statu === true) {

            this.props.history.push({pathname : '/GetList2', data:this.state.token});
            debugger;
        }
        if (this.state.IsSingUp === true) {

            this.props.history.push('/Register');
        }
        return (
            <div>
                <div className="Login" style={{ backgroundColor: 'aqua' }}>
                    <form onSubmit={this.handleSubmit} >
                        <FormGroup controlId="email" bsSize="large" >
                            <FormControl
                                autoFocus type="text"
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                style={{ width: '250px', height: '30px' }}
                                placeholder="Email" />
                        </FormGroup>

                        <FormGroup controlId="password" bsSize="large" >
                            <FormControl
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                style={{ width: '250px', height: '30px' }}
                                placeholder="Password" />
                        </FormGroup>

                        <Button
                            color="success"
                            disabled={!this.validateForm()}
                            type="submit"
                            onClick={this.UserCheck}
                        >
                            Login
                     </Button>
                        {/* <Route path="/GetList2" component={GetList2} /> */}

                        <Button
                            backgroundColor="submit"
                            type="submit"
                            style={{ marginLeft: "20px" }}
                            onClick={this.SingUp}
                        >
                            Sign In
                     </Button>
                    </form>
                </div>

                <div>
                    <Alert color="danger" isOpen={this.state.visible} style={{ textAlign: 'center' }}>Kullanıcı adı veya parola hatalı . Lütfen kontrol edip tekrar deneyin !</Alert>
                </div>
            </div>
        );
    }
};

