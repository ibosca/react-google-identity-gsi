import {useEffect, useState} from "react";
import { GoogleIdentityServiceRepository } from "../../repository/GoogleIdentityServiceRepository";

const useGoogle = (clientId: string): GoogleIdentityServiceRepository | undefined => {

    const [google, setGoogle] = useState<GoogleIdentityServiceRepository|undefined>();

    useEffect(() => {

        const repository = () => {
            try {
                return new GoogleIdentityServiceRepository(clientId);
            }  catch (e) {
                return undefined;
            }
        };

        window.addEventListener('load', () => {
            setGoogle(repository());
        });

        if (!(google instanceof GoogleIdentityServiceRepository)) {
            setGoogle(repository());
        }

    }, [clientId, google]);

    return google;

}


export default useGoogle;

