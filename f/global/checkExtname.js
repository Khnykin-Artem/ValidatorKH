function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const checkExtname = function(number, extname) {
    return function(data) {
        var bool;
    
        let i = 0;
        while(i < data.length) {
            if(+(number - 1) === Number(i)) {
                extname += "";
                let splitPath = data[i].split('/');
                splitPath.forEach(el => {
                    if(splitPath.indexOf(el) == +(splitPath.length - 1)) {
                        let splitFilename = el.split('.', 2);
                        let extName = splitFilename[1];
                        if(String(extName) === String(extname)) {
                            bool = true;
                        } else {
                            bool = false;
                        };
                    };
                });
                return returnFunction(bool);
            };
            i++;
        };
    }
};



export default checkExtname;