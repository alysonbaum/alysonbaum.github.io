function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function cipher(key) {
    var plaintext = document.getElementById("chinput").value.toUpperCase();
    var ciphertext="";
    for (var i =0; i< plaintext.length; i++) {
        var cher = plaintext.charCodeAt(i);
        if (64 < cher && cher < 92) {
            cher = (cher - 65 + key)%26 + 65;
            ciphertext += String.fromCharCode(cher);
        } else {
            ciphertext += String.fromCharCode(cher);
        }
    }
 document.getElementById("output").innerHTML=ciphertext;
}
