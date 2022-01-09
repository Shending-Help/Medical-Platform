const logbtn = {
    logedIn: {
        btnTxt: 'Log Out',
        btnPath: '/'
    }, logedOut: {
        btnTxt: 'Log in',
        btnPath: '/sign'
    }
};

export const LOGbtn = (logStatus) => {
    return { btnPath: logbtn[logStatus].btnTxt, btnTxt: logbtn[logStatus].btnTxt };
}
