/*import {createHash} from "crypto"
export function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}*/
//console.log(hash("hola"))
export function hash(string) {
    var hashVal = 0;
    if (string.length == 0) return hashVal;
    for (var i = 0; i < string.length; i++) {
        var char = string.charCodeAt(i);
        hashVal = ((hashVal << 5) - hashVal) + char;
        hashVal = hashVal & hashVal;
    }
    return hashVal;
}
// var input_str = "I am converting string to hash.";
// console.log("Input String: " + input_str);
// console.log("Hash Value: " + hash(input_str));