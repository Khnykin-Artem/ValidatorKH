function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const checkType = function(number, type) {
    return function(data) {
        let i = 0;
        while(i < data.length) {
            if(Number(number - 1) === i) {
                if(typeof (data[i]) === type) {
                    return Boolean(' ');
                } else {
                    return Boolean('');
                };
            };
            i++;
        };
    }
};



export default checkType;