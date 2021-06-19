export function str2ab(str:string) {
    var array = new Uint8Array(str.length);
    for(var i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
    }
    return array.buffer;
}