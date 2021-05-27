import "amazon-connect-streams";
import React, {Component} from "react";

// To replace Instance Name
const ccpUrl = "https://customccplabjerv.my.connect.aws/connect/ccp#";
const lily = window.connect;
class CCP extends Component{
    constructor(){
        super()
        this.ccpURL = ccpUrl
        this.iFrameTemplate = `<iframe src="${
            this.ccpURL
        }" frameBorder="0" style="width: 100%; height: 100%;"></iframe>`;
    }

    componentDidMount(){
        if (!lily.core.initialized){
            lily.core.initCCP(document.getElementById("ccpContainer"), {
                ccpUrl: ccpUrl,        
                loginPopup: true,
                loginPopupAutoClose: true,        
                softphone: {
                    allowFramedSoftphone: true
                },
                pageOptions:{
                    enableAudioDeviceSettings: false
                }
            });
        } else{
            this.implementIframe();
        }
    }

    implementIframe() {
        let el = document.getElementById("ccpContainer");
        el.innerHTML = this.iFrameTemplate;
    }

    render(){
        return(
            <div id="ccpContainer" style={{width: 320, height:460}}/>
        );
        
    }
}

export default CCP;