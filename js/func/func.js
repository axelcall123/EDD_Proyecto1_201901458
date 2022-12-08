
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

const delay = ms => new Promise(res => setTimeout(res, ms));
export const funcAsync = async (tiempo) => {
    //ESPERA
    /*await delay(5000);
    console.log("Waited 5s");*/
    await delay(tiempo);
};
