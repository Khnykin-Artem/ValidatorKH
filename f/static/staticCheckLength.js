function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const staticCheckLength = function(data, min, max) {
    if(Number(String(data)?.length) >= Number(min)) {
        if(Number(String(data)?.length) <= Number(max)) {
            return true;
        } else {
            return !1
        };
    } else {
        return !!0;
    };
};



export default staticCheckLength;