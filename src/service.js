function fetchTranslate(lang,text){
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?${lang}=en-es&format=text&key=trnsl.1.1.20200205T233005Z.5e79d21d43eacfa9.ecbd7346e852b59ea0cda1c23c191dd957b75ae4&${text}`
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data =>{
        var lang = data.body.lang;
        var text = data.body.text;
        var text_translate = data.body.text_translate;
    })        
    .catch(err => {
        throw(`Sorry an error ocurred. ${err}`);
    })
}
