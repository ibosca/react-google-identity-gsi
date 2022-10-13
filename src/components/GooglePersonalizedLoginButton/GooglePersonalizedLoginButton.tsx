import GooglePersonalizedLoginButtonProps from "./GooglePersonalizedLoginButtonProps";
import {useGoogle} from "../../hooks";
import {useEffect} from "react";

function GooglePersonalizedLoginButton(props: GooglePersonalizedLoginButtonProps) {

    const elementId = 'react-google-identity-gsi-element';

    const loginSetup = (google: any) => {
        loginInit(google);
        renderLoginButton(google);
    };

    const loginInit = (google: any) => {
        google.accounts.id.initialize({
            client_id: props.clientId,
            callback: props.onUserAuthenticationSucceeded
        });
    };

    const renderLoginButton = (google: any) => {
        google.accounts.id.renderButton(
            document.getElementById(elementId),
            props.buttonCustomization
        );
    };

    const callback = useGoogle(loginSetup);

    useEffect(() => {
        callback();
    });

    return (<div id={elementId}/>);
}

export default GooglePersonalizedLoginButton;