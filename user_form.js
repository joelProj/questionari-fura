var HTML;

var titleWithLanguageDic = {
        ca: 'Benvingut!',
        es: 'Bienvenido!',
        en: 'Welcome!',
        pt: 'Bem vinda!',
        it: 'Benvenuto!',
        fr: 'Bienvenue!',
        de: 'Willkommen',
        ru: 'Добро пожаловать!',
        ja: 'ようこそ！',
        zh: '歡迎！',
        
        def: 'Bienvenido!'
}

var hintWithLanguageDic = {
        ca: "Introdueixi el seu codi d'usuari",
        es: 'Introduzca su código de usuario',
        en: 'Enter your user code',
        pt: "Digite seu código de usuário",
        it: 'Inserisci il tuo codice utente',
        fr: "Entrez votre code d'utilisateur",
        de: 'Geben Sie Ihren Benutzercode ein',
        ru: 'Введите код пользователя',
        ja: 'ユーザーコードを入力してください',
        zh: '輸入您的用戶代碼',
        
        def: 'Introduzca su código de usuario'
}

var neverShareWithLanguageDic = {
        ca: "Mai no compartirem el vostre nom d'usuari amb cap altra persona.",
        es: 'Nunca compartiremos tu nombre de usuario con nadie más.',
        en: "We'll never share your username with anyone else.",
        pt: 'Nós nunca vamos compartilhar seu nome de usuário com mais ninguém.',
        it: 'Non condivideremo mai il tuo nome utente con nessun altro.',
        fr: "Nous ne partagerons jamais votre nom d'utilisateur avec qui que ce soit.",
        de: 'Wir geben Ihren Benutzernamen niemals an Dritte weiter.',
        ru: 'Мы никогда не будем делиться вашим именем пользователя с кем-либо еще.',
        ja: '私たちは他の誰ともあなたのユーザー名を共有しません.',
        zh: '我們絕不會與其他任何人分享您的用戶名.',
        
        def: 'Pregunta'
}
var buttonSubmitWithLanguageDic = {
        ca: 'Enviar',
        es: 'Enviar',
        en: 'Submit',
        pt: 'Enviar',
        it: 'Sottoscrivi',
        fr: 'Submit',
        de: 'Einreichen',
        ru: 'Отправить',
        ja: '提出する',
        zh: '提交',
        
        def: 'Enviar'
}

function generateHeader(){
    HTML += `   <!DOCTYPE HTML>     
                <html lang="es">  
                <head>              
                <title>Questionari Inicial</title> 
                
                <!-- Our own CSS (doesnt work)-->
                <link rel="stylesheet" type="text/css" href="designs.css"> 
                
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
                <!-- Bootstrap CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 
                <meta charset="UTF-8"> 
                <meta name="description" content="Questionari per l'espectacle"> 
                
                <!-- Our own CSS (work) -->
                <style>
                body{
                    
                    background: url('https://www.conclusion.com.ar/wp-content/uploads/2015/10/espectaculos.jpg') no-repeat center center fixed;

                    background-size: cover; // for IE9+, Safari 4.1+, Chrome 3.0+, Firefox 3.6+ 
                    -webkit-background-size: cover; // for Safari 3.0 - 4.0 , Chrome 1.0 - 3.0 
                    -moz-background-size: cover; // optional for Firefox 3.6 
                    -o-background-size: cover; // for Opera 9.5 
                    margin: 0; // to remove the default white margin of body 
                    padding: 0; // to remove the default white margin of body 
                    overflow: hidden;
                    
                    /*background-color: #FFDEC7 !important;*/
                }
                .container-fluid {
                    //background-color:#40FF6161 !important;
                    //background-color:#33777777 !important;
                    background:linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.9),rgba(0,0,0,0) ) !important;
                    text-align: center;
                }
                .top-buffer {
                    margin-top:20px; 
                }
               
                div.title_header{
                    color:white;
                    font-size: 15px;
                }
                div.text_header{
                    color:white;
                    font-size: 30px;
                }
                button.button_size{
                    padding: 10px 20px;
                    font-size: 20px;
                    border-radius: 10px;
                }
                p.timer_display{
                    font-size: 30px;
                }
                @media (min-width: 576px) {                    
                    div.title_header{
                        color:white;
                        font-size: 20px;
                    }
                    div.text_header{
                        color:white;
                        font-size: 40px;
                    } 
                    button.button_size{
                        padding: 10px 20px;
                        font-size: 20px;
                        border-radius: 10px;
                    }
                    p.timer_display{
                        font-size: 40px;
                    }
                }

                @media (min-width: 768px) { 
                    div.title_header{
                        color:white;
                        font-size: 25px;
                    }
                    div.text_header{
                        color:white;
                        font-size: 50px;
                    }
                    button.button_size{
                        padding: 10px 20px;
                        font-size: 20px;
                        border-radius: 10px;
                    }
                    p.timer_display{
                        font-size: 50px;
                    }
                }

                @media (min-width: 992px) { 
                    div.title_header{
                        font-size: 30px;
                        color: white;
                    }
                    div.text_header{
                        font-size: 60px;
                        color: white;
                    }
                    button.button_size{
                        padding: 10px 20px;
                        font-size: 20px;
                        border-radius: 10px;
                    }
                    p.timer_display{
                        font-size: 60px;
                    }
                }

                @media (min-width: 1200px) { 
                    div.title_header{
                        color:white;
                        font-size: 35px;
                    }
                    div.text_header{
                        color:white;
                        font-size: 70px;
                    }
                    button.button_size{
                        padding: 10px 20px;
                        font-size: 20px;
                        border-radius: 10px;
                    }
                    p.timer_display{
                        font-size: 70px;
                    }
                }
                
                </style>
                </head> 
                <body>  `
}

function generateBody(title,hint,neverShare,buttonSubmit){ //Generate till the beggining of the form
    HTML += `
    <div class="container-fluid">
    <div class="row">
    <div class="col-12 offset-0 d-flex justify-content-center">
        <form class="w-75 mt-3">
            <div class="form-group">
                <div class="text_header" for="inputUserName" text-center>${title}</div>
                <input type="text" class="form-control" id="inputUserName" aria-describedby="Input username" placeholder="${hint}"
                    onkeyup="enableButton(document.getElementById('inputUserName').value)">
                <small id="emailHelp" class="form-text text-muted">${neverShare}</small>
            </div>
            <button id="buttonSubmit" type="button" class="btn btn-primary" disabled onclick="performPostRequest(document.getElementById('inputUserName').value)">
            ${buttonSubmit}</button>
        </form>
    </div>
    </div>    
    </div>
    `
}

function generateEndHTML(){
    //console.log(questionID);
    HTML += ` 

    <br> 
    <br> 
    <br>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
    <script>
    /////////////////////////////// POST SCRIPTS /////////////////////////////
    function performPostRequest(val) {    
        var url_temp = window.location.href;
        var url_end = url_temp.substr(0, url_temp.indexOf('/',10));
        
        axios.post(url_end + '/user_ids', {
            username: val
        }).then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    function enableButton(text){
        console.log(text)
        if (text == ''){ //disable button
            document.getElementById('buttonSubmit').disabled = true;
            console.log(document.getElementById('buttonSubmit').value)
        }
        else{
            document.getElementById('buttonSubmit').disabled = false;
            console.log('enabled')
        }
    }

    </script>
    
    <!-- Bootstrap JSs --> 
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body> 
    </html>`
}

function generateForm(question){
    HTML = ""; //reset webpage in every get
    var titleText = computeTitleTextDependingOnLang(question.language)
    var hintText = computeHintTextDependingOnLang(question.language)
    var neverShareText= computeNeverShareTextDependingOnLang(question.language)
    var buttonSubmitText = computeButtonSubmitTextDependingOnLang(question.language)
    
    generateHeader();
    
    generateBody(titleText,hintText,neverShareText,buttonSubmitText);
    
    generateEndHTML();

    return HTML;
}
function computeTitleTextDependingOnLang(lang){
    if (!(lang in titleWithLanguageDic))
        return titleWithLanguageDic['def'];
    else
        return titleWithLanguageDic[lang];
}
function computeHintTextDependingOnLang(lang){
    if (!(lang in hintWithLanguageDic))
        return hintWithLanguageDic['def'];
    else
        return hintWithLanguageDic[lang];
}
function computeNeverShareTextDependingOnLang(lang){
    if (!(lang in neverShareWithLanguageDic))
        return neverShareWithLanguageDic['def'];
    else
        return neverShareWithLanguageDic[lang];
}
function computeButtonSubmitTextDependingOnLang(lang){
    if (!(lang in buttonSubmitWithLanguageDic))
        return buttonSubmitWithLanguageDic['def'];
    else
        return buttonSubmitWithLanguageDic[lang];
}

function generateSuccessHTMLOutput(response) {
  return  response.data;
}

function generateErrorHTMLOutput(error) {
  return  error.message;
}

module.exports = {
    generateForm
}
