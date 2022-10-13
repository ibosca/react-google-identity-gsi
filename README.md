# Google Identity: Google Sign In for React

A simple library for getting the Google Login in your React project with ease.

## Installation

```bash
$ npm install @ibosca/react-google-identity-gsi
```

## Getting started

First, we need to [load the client library](https://developers.google.com/identity/gsi/web/guides/client-library).    
To do so, place the following snippet in you `public/index.html` header:

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

With the client library loaded, we are ready to display our [Google Personalized button](https://developers.google.com/identity/gsi/web/guides/personalized-button).   
In the desired location, add the following snippet:

```jsx
<GooglePersonalizedLoginButton
    clientId={googleClientId}
    buttonCustomization={buttonCustomization}
    onUserAuthenticationSucceeded={onUserAuthenticatedWithGoogle}
/>
```




### `clientId` 
The clientId for your application provided by Google.
More information on how to get it [here](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid).

### `buttonCustomization`
This property allows you to customize the look and feel of the button.    
Check [this](https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration) for the full list of attributes.
An example of this property:

```typescript
const buttonCustomization = {
    locale: 'en',
    text: 'continue_with',
    size: 'large',
    width: '300',
};
```

### `onUserAuthenticationSucceeded`
This property allows you to pass a callback for executing some code after the users has granted your app to access their Google profile. 
An example of this property:    

```typescript
const onUserAuthenticatedWithGoogle = (data: any) => {
    console.log(data);
};
```

Here you can decode the JWT token for showing the user information, or even send the token to a back-end app for exchange the Google token for a specific token of your app.