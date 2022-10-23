import { GoogleClientCouldNotBeLoaded } from "../error/GoogleClientCouldNotBeLoaded";

export class GoogleIdentityServiceRepository {

    private readonly clientId: string;
    private google: any;
    private setUpCompleted: boolean;

    constructor(clientId: string) {
        this.setUpCompleted = false;
        this.clientId = clientId;
        this.init();
    }

    private init(): void {

        this.google = (window as any).google;

        if (!this.isClientLibraryAvailable()) {
            throw new GoogleClientCouldNotBeLoaded();
        }

    }

    private isClientLibraryAvailable(): boolean {
        return !!this.google;
    }

    public setUp(
        buttonCustomization: { elementId: string, [key: string]: string },
        onUserAuthenticationSucceeded: (response: any) => void
    ): void {

        this.google.accounts.id.initialize({
            client_id: this.clientId,
            callback: onUserAuthenticationSucceeded
        });

        this.google.accounts.id.renderButton(
            document.getElementById(buttonCustomization.elementId),
            buttonCustomization
        );

    }

}