import config from "../config/config";
import placeholder from "../images/placeholder.jpg";

export const reloadWithTimeout = (timeout) => {
    // setTimeout(() => {
    //       window.location.reload(true);
    //     }, timeout);
    // TASK - decide on reload
    console.log("Set Timeout called");
}

export const redirectToPageWithTimeout = ( href, timeout) => {
    setTimeout(() => {
        window.location.assign(`/cherish-cart-client${href}`);
    }, timeout);
};


export const isLocalEnvironment=()=>{
    if(config.environment==="local")
      return true
    else
      return false
};

export const imagePath = (path) => {
    if(isLocalEnvironment()){
        return placeholder;
    }else {
        return path;
    }
}

export default { reloadWithTimeout, redirectToPageWithTimeout, isLocalEnvironment };