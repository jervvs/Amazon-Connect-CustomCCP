import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";

window.myCPP = window.myCPP || {};
const lily = window.connect;

class Logging extends Component{
    componentDidMount(){
        lily.contact(this.subscribeToContactEvents);
        lily.agent(this.subscribeToAgentEvents);
    }

    subscribeToContactEvents(contact) {
        this.logInfoMsg("Subscribing to events for contact");
        if (contact.getActiveInitialConnection() 
            && contact.getActiveInitialConnection().getEndpoint()) {
            this.logInfoMsg("New contact is from " + contact.getActiveInitialConnection().getEndpoint().phoneNumber);
        } else {
            this.logInfoMsg("This is an existing contact for this agent");
        }
        this.logInfoMsg("Contact is from queue " + contact.getQueue().name);
        this.logInfoMsg("Contact attributes are " + JSON.stringify(contact.getAttributes()));
        contact.onIncoming(this.handleContactIncoming);
        contact.onAccepted(this.handleContactAccepted);
        contact.onConnected(this.handleContactConnected);
        contact.onEnded(this.handleContactEnded);
    }

    handleContactIncoming(contact) {
        if (contact) {
            this.logInfoEvent("[contact.onIncoming] Contact is incoming. Contact state is " + contact.getStatus().type);
        } else {
            this.logInfoEvent("[contact.onIncoming] Contact is incoming. Null contact passed to event handler");
        }
    }

    handleContactAccepted(contact) {
        if (contact) {
            this.logInfoEvent("[contact.onAccepted] Contact accepted by agent. Contact state is " + contact.getStatus().type);
        } else {
            this.logInfoEvent("[contact.onAccepted] Contact accepted by agent. Null contact passed to event handler");
        }
    }

    handleContactConnected(contact) {
        if (contact) {
            this.logInfoEvent("[contact.onConnected] Contact connected to agent. Contact state is " + contact.getStatus().type);
        } else {
            this.logInfoEvent("[contact.onConnected] Contact connected to agent. Null contact passed to event handler");
        }
    }

    handleContactEnded(contact) {
        if (contact) {
            this.logInfoEvent("[contact.onEnded] Contact has ended. Contact state is " + contact.getStatus().type);
        } else {
            this.logInfoEvent("[contact.onEnded] Contact has ended. Null contact passed to event handler");
        }
    }

    subscribeToAgentEvents(agent) {
        this.logInfoMsg("Subscribing to events for agent " + agent.getName());
        this.logInfoMsg("Agent is currently in status of " + agent.getStatus().name);
        agent.onRefresh(this.handleAgentRefresh);
        agent.onRoutable(this.handleAgentRoutable);
        agent.onNotRoutable(this.handleAgentNotRoutable);
        agent.onOffline(this.handleAgentOffline);
    }

    handleAgentRefresh(agent) {
        this.logInfoEvent("[agent.onRefresh] Agent data refreshed. Agent status is " + agent.getStatus().name);
    }

    handleAgentRoutable(agent) {
        this.logInfoEvent("[agent.onRoutable] Agent is routable. Agent status is " + agent.getStatus().name);
    }

    handleAgentNotRoutable(agent) {
        this.logInfoEvent("[agent.onNotRoutable] Agent is online, but not routable. Agent status is " + agent.getStatus().name);
    }

    handleAgentOffline(agent) {
        this.logInfoEvent("[agent.onOffline] Agent is offline. Agent status is " + agent.getStatus().name);
    }

    logMsgToScreen(msg) {
        document.getElementById('logMsgs').innerHTML = '<div>' + new Date().toLocaleTimeString() + ' ' + msg + '</div>' + document.getElementById('logMsgs').innerHTML;
    }

    logEventToScreen(msg) {
        document.getElementById('eventMsgs').innerHTML = '<div>' + new Date().toLocaleTimeString() + ' ' + msg + '</div>' + document.getElementById('eventMsgs').innerHTML;
    }

    logInfoMsg(msg) {
        lily.getLog().info(msg);
        this.logMsgToScreen(msg);
    }

    logInfoEvent(eventMsg) {
        lily.getLog().info(eventMsg);
        this.logEventToScreen(eventMsg);
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2>Log Messages</h2>
                            <div id="logMsgs" style={{height:465}}></div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Event Messages</h2>
                            <div id="eventMsgs" style={{height:465}}></div>
                        </div>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Logging