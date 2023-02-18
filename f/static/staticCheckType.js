function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const staticCheckType = function(data, type) {
    if(typeof (data) === type) {
        return Boolean(' ');
    } else {
        return Boolean('');
    };
};



export default staticCheckType;