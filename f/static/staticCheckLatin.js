function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const staticCheckLatin = function(data) {
    const reg = /[A-Za-z]/;
    return reg.test(data);
};



export default staticCheckLatin;