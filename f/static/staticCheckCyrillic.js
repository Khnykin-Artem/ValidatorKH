function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const staticCheckCyrillic = function(data) {
    const reg = /[а-яА-ЯЁё]/;
    return reg.test(data);
};



export default staticCheckCyrillic;