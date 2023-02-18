function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const checkBasename = function(number, basename) {
    return function() {
        var bool;
    
        let i = 0;
        while1: while(i < data.length) {
            if(+(number - 1) === i) {
                basename += "";
                let splitPath = data[i].split('/');
                splitPath.forEach(el => {
                    if(splitPath.indexOf(el) == +(splitPath.length - 1)) {
                        let splitFilename = el.split('.', 2);
                        let baseName = splitFilename[0];
                        if(String(baseName) === String(basename)) {
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



export default checkBasename;