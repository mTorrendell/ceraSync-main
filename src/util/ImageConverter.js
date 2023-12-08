
function imageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => 
            resolve(`data:${file.type};base64,${reader.result.split(",")[1]}`);
        reader.onerror = (err) => 
            reject(err);
        reader.readAsDataURL(file);
    });
}

function base64ToImage(b64Str) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload =  ()    => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = b64Str;
    });
}

export {imageToBase64, base64ToImage};