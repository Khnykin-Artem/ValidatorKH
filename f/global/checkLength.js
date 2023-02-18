function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const checkLength = function(number, min, max) {
    return function(data) {
        let i = 0;
        while(i < data.length) {
            if((+number - 1) === i) {
                if(Number(String(data[i])?.length) >= Number(min)) {
                    if(Number(String(data[i])?.length) <= Number(max)) {
                        return true;
                    } else {
                        return !1
                    };
                } else {
                    return !!0;
                };
            };
            i++;
        };
    }
};



export default checkLength;