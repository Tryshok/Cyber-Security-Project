var File_Accessor = function(){
    this.readTextFile = function(fileUrl) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", fileUrl, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    console.log(allText.slice('\n'));
                    return allText;
                }
            }
        }
        rawFile.send(null);
    }
}