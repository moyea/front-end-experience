//生成指定长度随机字符串,默认为32位
function randomString(len) {
    len = len || 32;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var maxPos = chars.length;
    var randomStr = '';
    for (var i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return randomStr;
}


