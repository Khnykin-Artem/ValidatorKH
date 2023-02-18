function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const checkSpam = function(number) {
    return function(data) {
        let i = 0;
        while(i < data.length) {
            if((Number(number) - 1) == i) {
                const checkStr = (data[i]).toLowerCase();
                if(str.includes('viagra') || str.includes('xxx')) {
                    return true;
                } else {
                    return false;
                };
            };
            ++i;
        };
    }
};



export default checkSpam;