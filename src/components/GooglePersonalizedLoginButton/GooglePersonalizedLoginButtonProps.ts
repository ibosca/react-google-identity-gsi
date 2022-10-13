
interface GooglePersonalizedLoginButtonProps {
    clientId: string,
    buttonCustomization: { [key: string]: string },
    onUserAuthenticationSucceeded: (response: any) => void
}

export default GooglePersonalizedLoginButtonProps;