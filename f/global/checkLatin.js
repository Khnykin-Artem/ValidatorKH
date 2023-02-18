function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const checkLatin = function(number) {
    return function(data) {
        const reg = /[A-Za-z]/;

        let i = 0;
        while(i < data.length) {
            if(+(number - 1) == +i) {
                return reg.test(data[i]);
            };
            ++i;
        };
    }
};



export default checkLatin;