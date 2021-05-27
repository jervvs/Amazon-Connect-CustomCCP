import React, {Component} from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table'

window.myCPP = window.myCPP || {};
const lily = window.connect;

class CustomerAttributes extends Component{
    componentDidMount(){
      lily.contact(this.subscribeToContactEvents);
    }

    subscribeToContactEvents(contact) {
      window.myCPP.contact = contact;
      this.updateContactAttribute(contact.getAttributes());    
      contact.onEnded(this.clearContactAttribute);
    }

    updateContactAttribute(msg){
      var tableRef = document.getElementById('attributesTable').getElementsByTagName('tbody')[0];      
      for (var key in msg) {
        if (msg.hasOwnProperty(key)) {
          var row = tableRef.insertRow(tableRef.rows.length);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = key;
          cell2.innerHTML = msg[key]['value'];
        }
      }
    }
    
    clearContactAttribute(){
      var old_tbody= document.getElementById('attributesTable').getElementsByTagName('tbody')[0];
      var new_tbody = document.createElement('tbody');    
      old_tbody.parentNode.replaceChild(new_tbody, old_tbody);     
    }
    
    
    render(){
        return(
          <Container>
            <h2 style={{textAlign:"center"}}>Contact Details</h2>
            <Table id="attributesTable">
              <thead>
                <tr>
                    <th>Attribute Name </th>
                    <th>Attribute Value </th>
                </tr>
              </thead>
              <tbody>
                    <tr><td></td><td></td></tr>
              </tbody>
            </Table>
          </Container>
        );
    }
}

export default CustomerAttributes

