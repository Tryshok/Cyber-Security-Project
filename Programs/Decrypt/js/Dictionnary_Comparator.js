var Dictionnary_Comparator = function(arrDict) {
    var dict = arrDict;

    this.compare = function(text) {
        var contained = false;
        var compteur = 0;
        while(compteur < dict.length) {
            if(text.indexOf(dict[compteur]) !== -1 )
                return true;
            compteur++;
        }
        return false;
    }
}