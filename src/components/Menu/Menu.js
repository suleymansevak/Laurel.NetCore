import React, { Component } from 'react'
import { Switch, Route, HashRouter, Link, Router, BrowserRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Iconn from './../../Content/Icon/icon.png';





const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1, 
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Menu extends Component {
    constructor(props) {
        super(props);

    }

    // GoHome = () => {
    //     this.props.history.push('/');
    // }

    // GoGetList2 = () => {
    //      this.props.history.push('/GetList2')
    // }

    render() {

        return (

            <div className={this.props.root} >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" className='desktop-only' href="/" style={{ position: "sticky" }}>
                            < img src={Iconn} style={{ position: "sticky", height: 80, width: 80 }} />
                        </IconButton>
                        {/* <Button className='col-md-2' onClick={this.GoHome} style={{ height: 75, color: 'white', fontSize: 20 }}  >HOME</Button>
                        <Button className='col-md-2'onClick={this.GoGetList2} style={{ height: 75, color: 'white', fontSize: 20 }} > CUSTOMERS </Button> */}
                        <Button className='col-md-2' href="/" style={{ height: 75, color: 'white', fontSize: 20, position: "sticky" }}  >HOME</Button>
                        <Button className='col-md-2' href="/GetList2" style={{ height: 75, color: 'white', fontSize: 20, position: "sticky" }} > CUSTOMERS </Button>
                        <Button className='col-md-2' href="/AddProduct" style={{ height: 75, color: 'white', fontSize: 20, position: "sticky" }} > PRODUCTS </Button>
                        <Button className='col-md-2' style={{ height: 75, color: 'white', fontSize: 20, position: "sticky" }} > LOGIN </Button>
                    </Toolbar>
                </AppBar>
            </div>

        )
    }
}


export default withStyles(styles)(Menu);





