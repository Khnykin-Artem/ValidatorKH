function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const checkCyrillic = function(number) {
    return function() {
        const reg = /[а-яА-ЯЁё]/;

        let i = 0;
        while(i < data.length) {
            if(+(number - 1) === i) {
                return reg.test(data[i]);
            };
            ++i;
        };
    }
};



export default checkCyrillic;