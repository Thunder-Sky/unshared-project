function fukugou(text){
    var itemt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var item = "abcdefghijklmnopqrstuvwxyz1234567890:/#?`_.".split("");
    var text = text.split("");
    text.map(function(value, number) {
        text[number] = item[itemt.indexOf(value)];
    });
    return text.toString().replace(/,/g, "");
}


var param = new URLSearchParams(new URL(location.href).search);

if(param.get("find") == "1") {
    /* これはプロジェクトを共有したい人の処理 */
    var htmls = document.getElementById("urls");
    var url = location.origin + location.pathname;
    var res = param.get("id");
    htmls.innerHTML = `<p>このURLをコピーして送ろう</p><input type="text" value="${url}?id=${res}&find=2">`
}
else {
    /* これはプロジェクトを見た人の処理 */
    var htmls = document.getElementById("urls");
    htmls.innerHTML = `<p>現在リダイレクト中です...しばらくお待ちください....</p>`;
    console.log(fukugou(param.get("id")));
}
