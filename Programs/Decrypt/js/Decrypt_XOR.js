var Decrypt_XOR = function() {

    var key = "";

    this.SetKey = function(newKey) {
        key = newKey;
    }

    this.decrypt = function(text) {
        var decMsg = "";
        for(var i=0; i<text.length; i++){
            decMsg = this.XOR(text[i], key[i % key.length]);
        }
        return decMsg;
    }

    this.XOR = function(char, key) {
        return char ^ key;
    }

};