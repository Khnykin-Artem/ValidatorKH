function returnFunction(bool = null) {
    return bool;
};

//--------------------------------------

const staticCheckBasename = function(data, basename) {
    var bool;

    basename += "";
    let splitPath = data.split('/');
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



export default staticCheckBasename;