function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const staticCheckExtname = function(data, extname) {
    extname += "";
    let splitPath = data.split('/');
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



export default staticCheckExtname;