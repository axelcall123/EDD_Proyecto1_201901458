
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
export function ordenAlfa(str1,str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let arr1=str1.split("")
    let arr2 = str2.split("")
    var tamMe=0
    //mayor tam
    if(arr1.length<arr2.length){
        tamMe = arr1.length
    }else{
        tamMe = arr2.length
    }
    for(var i=0;i<tamMe;i++){
        let rest = arr1[i].charCodeAt(0) - arr2[i].charCodeAt(0)//si a[141]-b[142]=-1 || b[142]-a[141]=1
        if(rest<0){//es mayor str1
            return {may:str1,men:str2,stru:1,strd:0}
        }else if(rest>0){//es mayor str2
            return { may: str2, men: str1,stru:0,strd:1}
        }
    }
    //si llego al final[]
    if(tamMe==arr1.length){//mayor arr2
        return { may: str1, men: str2,stru:1,strd:0}
    }else{//mayor arr1
        return { may: str2, men: str1,stru:0,strd:1}
    }
}
const delay = ms => new Promise(res => setTimeout(res, ms));
export const funcAsync = async (tiempo) => {
    //ESPERA
    /*await delay(5000);
    console.log("Waited 5s");*/
    await delay(tiempo);
};
