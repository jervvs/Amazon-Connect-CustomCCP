import React, {Component} from "react";
import { Container } from "react-bootstrap";

window.myCPP = window.myCPP || {};
const lily = window.connect;
// To replace with the actual link
const ITSMBaseURL = "https://www.something.com/"

class CustomerProfilePanel extends Component{
    componentDidMount(){
        lily.contact(this.getCustomerProfileURL);
    }

    getCustomerProfileURL(contact){
        var contactId = contact.getContactId();
        var src =  ITSMBaseURL + contactId
        document.getElementById("customerProfile").src = src
        document.getElementById("contactIDHeader").innerHTML = "Contact Tickets: " + contactId
    }

    render(){
        return(
            <Container>
                <h3 id="contactIDHeader">Contact Tickets: </h3>
                <iframe title="customerProfile" id="customerProfile" height="400" width ="320" src=""></iframe>
            </Container>
        );
    }

}

export default CustomerProfilePanel