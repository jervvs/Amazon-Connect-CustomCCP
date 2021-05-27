import "amazon-connect-streams";
import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import CCP from "../components/ccp"
import CustomerAttributes from "../components/customerAttributes"
import Logging from "../components/logging"
import CustomerProfilePanel from "../components/customerProfilePanel"

class Main extends Component{
    render(){
        return (
            <Container>
                <h2 style={{textAlign:"center"}}>Custom Contact Control Panel</h2>
                <Row style={{marginTop: 50}}>
                    <Col><CCP/></Col>
                    {/* <Col><CustomerAttributes/></Col>
                    <Col><CustomerProfilePanel/></Col> */}
                </Row>
                <Row style={{marginTop: 50}}>
                    {/* <Col><Logging/></Col> */}
                </Row>
            </Container>
            
        );
    }
}



export default Main;