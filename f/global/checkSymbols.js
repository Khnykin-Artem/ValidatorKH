function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const checkSymbols = function(number, strict, ...symbols) {
    return function(data) {
        var bool = false;
        var test1 = new Array();
        var test2 = new Array();
    
        let i = 0;
        while(i < data.length) {
            if(+(number - 1) === Number(i)) {
                symbols.forEach((el) => {
                    if(strict == true) {
                        const testText = (data[i]).split(String(el), 2);
                        if(testText[1] === undefined) {
                            test2.push(false);
                            bool = false;
                        } else {
                            test2.push(true);
                            if(+(symbols.indexOf(el)) === Number(+(symbols.length) - 1)) {
                                if(!!(test2.every(function(e) {return e === true})) !== false) {
                                    bool = true;
                                };								
                            };
                        };
                    } else if(strict == false) {
                        const testText = (data[i]).split(el);
                        if(testText[1] === undefined) {
                            test1.push(false);
                            if(+(symbols.indexOf(el)) === Number(+(symbols.length) - 1)) {
                                if(+(test1.findIndex(function(e) {return e === true})) !== -1) {
                                    bool = true;
                                };
                            };
                        } else {
                            test1.push(true);
                            if(+(symbols.indexOf(el)) === Number(+(symbols.length) - 1)) {
                                if(+(test1.findIndex(function(e) {return e === true})) !== -1) {
                                    bool = true;
                                };
                            };							
                        };
                    };
                });
                return returnFunction(bool);
            };
            i++;
        };
    }
};



export default checkSymbols;