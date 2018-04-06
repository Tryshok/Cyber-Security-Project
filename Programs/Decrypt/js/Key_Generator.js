var Key_Generator = function(maxLength) {
    var max = maxLength;
    var actualKey = "";

    this.Next = function() {
        return GetAlphaChar(0);
    }

    var GetAlphaChar = function(depthLevel) {
        //console.log(depthLevel);
        //console.log(actualKey);
        //console.log(actualKey[depthLevel]);
        if(actualKey === null || depthLevel >= max) {
            actualKey = null;
        }
        else if(actualKey[depthLevel] === "" || actualKey[depthLevel] === undefined) {
            actualKey += "a";
            //console.log("-- Step1");
            //console.log(actualKey[depthLevel]);
        }else if(actualKey[depthLevel] === "z") {
            actualKey = actualKey.slice(0, depthLevel) +"a" + actualKey.slice(depthLevel+1);
            GetAlphaChar(depthLevel+1);
            //console.log("-- Step3");
        }else {
            //console.log(actualKey[depthLevel].charCodeAt(0)+1);
            //console.log(String.fromCharCode(actualKey[depthLevel].charCodeAt(0)+1));
            
            actualKey = actualKey.slice(0, depthLevel) + String.fromCharCode(actualKey[depthLevel].charCodeAt(0)+1) + actualKey.slice(depthLevel+1);
            //console.log("-- Step2");
        }
        return actualKey;
    }
}