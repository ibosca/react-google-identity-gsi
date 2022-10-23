import GooglePersonalizedLoginButtonProps from "./GooglePersonalizedLoginButtonProps";
import {useEffect} from "react";
import { useGoogle } from "../../hooks";
import { GoogleIdentityServiceRepository } from "../../repository/GoogleIdentityServiceRepository";

function GooglePersonalizedLoginButton(props: GooglePersonalizedLoginButtonProps) {

    const elementId = 'react-google-identity-gsi-element';
    const google = useGoogle(props.clientId);

    useEffect(() => {
        if (!(google instanceof GoogleIdentityServiceRepository)) {
            return;
        }

        const buttonConfig = {elementId, ...props.buttonCustomization}
        google.setUp(buttonConfig, props.onUserAuthenticationSucceeded)

    }, [google, props])

    return (<div id={elementId} style={{minHeight: '40px'}}/>);
}

export default GooglePersonalizedLoginButton;