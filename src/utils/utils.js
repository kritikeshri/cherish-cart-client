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

export default { reloadWithTimeout, redirectToPageWithTimeout };