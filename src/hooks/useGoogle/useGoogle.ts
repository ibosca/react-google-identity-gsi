import {useState} from "react";

const useGoogle = (
    callback: (google: any) => void,
): (() => void) => {

    const [google, setGoogle] = useState();

    window.onload = () => setGoogle((window as any).google);

    return (() => {

        if (!google) {
            setGoogle((window as any).google)
        }

        if (!google) {
            return;
        }

        callback(google);
    });
};


export default useGoogle;

