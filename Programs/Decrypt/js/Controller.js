window.onload = function(){
    var TextDict = new File_Accessor().readTextFile("http://localhost:5500/dictionnary.txt");
    var comparator = new Dictionnary_Comparator(TextDict);
    var decryptor = new Decrypt_XOR();
    var KeyGenerator = new Key_Generator(4);

    var BrutForce = function() {
        var key = KeyGenerator.Next();
        while(key !== null) {
            console.log(key);
            key = KeyGenerator.Next();
        }
        console.log(KeyGenerator.Next());
    }

    BrutForce();
}




