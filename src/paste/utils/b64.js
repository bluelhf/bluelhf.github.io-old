const _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function unpad(input) {
    if (_keyStr.indexOf(input.slice(-1)) == 64)
        return input.substring(0, input.length - 1);

    return input;
}

export async function decode(input) {
    input = unpad(input);
    input = unpad(input);

    var bytes = parseInt((input.length / 4) * 3, 10);
    
    var out = new Uint8Array(bytes);
    let chars = []; let enc = [];

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    
    let j = 0;
    for (let i = 0; i < bytes; i += 3) {	
        //get the 3 octects in 4 ascii chars
        enc[0] = _keyStr.indexOf(input.charAt(j++));
        enc[1] = _keyStr.indexOf(input.charAt(j++));
        enc[2] = _keyStr.indexOf(input.charAt(j++));
        enc[3] = _keyStr.indexOf(input.charAt(j++));

        chars[0] =  (enc[0]       << 2) | (enc[1] >> 4);
        chars[1] = ((enc[1] & 15) << 4) | (enc[2] >> 2);
        chars[2] = ((enc[2] &  3) << 6) |  enc[3];

        out[i] = chars[0];			
        if (enc[2] != 64) out[i+1] = chars[1];
        if (enc[3] != 64) out[i+2] = chars[2];
    }

    return out;	
}

export async function encode(input) {
    // Use a FileReader to generate a base64 data URI
    const base64url = await new Promise((r) => {
        const reader = new FileReader();
        reader.onload = () => r(reader.result);
        reader.readAsDataURL(new Blob([input]));
    });

    /*
    The result looks like 
    "data:application/octet-stream;base64,<your base64 data>", 
    so we split off the beginning:
    */
    return base64url.split(",", 2)[1];
}