var HTML = "";
var titleWithLanguageDic = {
        ca: 'Pregunta',
        es: 'Pregunta',
        en: 'Question',
        pt: 'Questão',
        it: 'Domanda',
        fr: 'Question',
        de: 'Frage',
        ru: 'вопрос',
        ja: '質問',
        zh: '問題',
        
        def: 'Pregunta'
}
var modalSubmitTextWithLanguageDic = {
        ca: ['Gràcies per respondre!', "La teva resposta s'ha emmagatzemat correctament!","Gaudeix dels resultats :)"],
        es: ['Gracias por responder!', "Su respuesta se ha almacenado correctamente!","Disfrute de los resultados :)"],
        en: ['Thanks for answering!', "Your response has been correctly stored!","Enjoy the results :)"],
        pt: ['Obrigado por responder!', "Sua resposta foi armazenada corretamente!", "Aproveite os resultados :)"],
        it: ['Grazie per aver risposto!', "La tua risposta è stata memorizzata correttamente!", "Goditi i risultati :)"],
        fr: ["Merci d'avoir répondu!", "Votre réponse a été correctement stockée!", "Profitez des résultats :)"],
        de: ['Danke für die Beantwortung!', "Ihre Antwort wurde korrekt gespeichert!", "Genießen Sie die Ergebnisse :)"],
        ru: ['Спасибо за ответ!', 'Ваш ответ был правильно сохранен!', 'Наслаждайтесь результатами :)'],
        ja: ['ありがとうございました！', 'あなたの応答は正しく保存されました！', '結果をお楽しみください :)'],
        zh: ['感謝您的回答！', '您的回复已正確存儲！','享受結果 :)'],
        
        def: ['Gracias por responder!', "Su respuesta se ha almacenado correctamente!","Disfrute de los resultats :)"]
}
var modalExpiredTextWithLanguageDic = {
        ca: ['Temps esgotat!',"S'ha excedit el temps de resposta.","Intenta ser més ràpid la pròxima vegada!"],
        es: ['Tiempo agotado!', "Se ha excedido el tiempo de respuesta.", "Intenta ser más rápido la próxima vez!"],
        en: ['Time ran out!', "Response time has been exceeded.", "Try to be faster next time!"],
        pt: ['Tempo esgotou!', "O tempo de resposta foi excedido.", "Tente ser mais rápido da próxima vez!"],
        it: ['Il tempo è scaduto!', "Il tempo di risposta è stato superato.", "Cerca di essere più veloce la prossima volta!"],
        fr: ["Le temps s'est écoulé!", "Le temps de réponse a été dépassé.", "Essayez d'être plus rapide la prochaine fois!"],
        de: ['Die Zeit ist abgelaufen!', 'Die Antwortzeit wurde überschritten.', 'Versuchen Sie das nächste Mal schneller zu sein!'],
        ru: ['Время кончилось!', 'Время отклика превышено', 'Старайтесь быть быстрее в следующий раз!'],
        ja: ['時間がなくなった！', '応答時間を超えました.', '次回より速くしよう！'],
        zh: ['時間用光了！','已超出響應時間.','下次嘗試加快速度！'],
        
        def: ['Tiempo agotado!', "Se ha excedido el tiempo de respuesta.", "Intenta ser más rápido la próxima vez!"]
}
var expiredTextWithLanguageDic = {
        ca: 'CADUCAT',
        es: 'EXPIRADO',
        en: 'EXPIRED',
        pt: 'EXPIROU',
        it: 'SCADUTO',
        fr: 'EXPIRÉ',
        de: 'ABGELAUFEN',
        ru: 'окончившийся',
        ja: '終了しました',
        zh: '結束',
        
        def: 'EXPIRADO'
}


// function GetURLParameter(sParam)
// {
//     var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');
//     for (var i = 0; i < sURLVariables.length; i++) 
//     {
//         var sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] == sParam) 
//         {
//             return sParameterName[1];
//         }
//     }

// }​

// function performGetRequestText(id) {
//     axios.get('http://localhost:3000/questions', {
//         params: {
//             id: id
//         }
//     })
//     .then(function (response) {
//         return [generateSuccessHTMLOutput(response).text, 
//                 generateSuccessHTMLOutput(response).group, 
//                 generateSuccessHTMLOutput(response).options];
//     })
//     .catch(function (error) {
//         return generateErrorHTMLOutput(error);
//     });   
// }

// function performPostRequest(val) {   
//     console.log("VALUE: ",val);
//     axios.post('http://localhost:3000/answers', {
//         id: questionID,
//         completed: false,
//         value: val
//     })
//     .then(function (response) {
//         resultElement.innerHTML = generateSuccessHTMLOutput(response);
//     })
//     .catch(function (error) {
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//     });
// }

function generateHeader(){
    HTML += `   <!DOCTYPE HTML>     
                <html lang="es">  
                <head>              
                <title>Questionari Fura</title> 
                
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
                .jumbotron {
                    //background-color:#40FF6161 !important;
                    //background-color:#33777777 !important;
                    background:linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.9),rgba(0,0,0,0) ) !important;
                    text-align: center;
                    margin-bottom: 0px
                    
                    /*  100% — FF level of transparency
                        95% — F2
                        90% — E6
                        85% — D9
                        80% — CC
                        75% — BF
                        70% — B3
                        65% — A6
                        60% — 99
                        55% — 8C
                        50% — 80
                        45% — 73
                        40% — 66
                        35% — 59
                        30% — 4D
                        25% — 40
                        20% — 33
                        15% — 26
                        10% — 1A
                        5% — 0D
                        0% — 00
                        */
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

function generateBody1(title, id, text){ //Generate till the beggining of the form
    HTML += `
    
    <div class="jumbotron">
        <div class="container">
            <div class="title_header">${title} ${id} </div>
            <div class="text_header">${text}</div>
            
            <hr class="my-4"> <!-- Line separating text from answers -->
            
            <div class="row">
            `
}
function generateOptionsButton(options){
    for (var i in options)
        HTML+= `
                <div class="col-12 offset-0 top-buffer justify-content-center">
                    <button type="button" id="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#mymodal" onclick="performPostRequest(\`${options[i]}\`); return false;" >${options[i]}</button>
                </div>
                `
}

function generateBody2(){
    HTML += `
            </div>
        </div>
    </div>
    
    <p class='timer_display' id='timer_display' align='right' margin-right='155px' style='color:white; margin-right: 30px'></p>
    `
}
function generateBody(title, id, text, options){
    generateBody1(title, id, text);
    generateOptionsButton(options);
    generateBody2();
}

function generateEndHTML(modalSubmit, modalExpired, questionID, timeout, group, expiredText){
    HTML += ` 
                <!-- Modal -->
                <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                                    data-backdrop="static" data-keyboard="false">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">${modalSubmit[0]}</h5>
                      </div>
                      <div class="modal-body">
                        ${modalSubmit[1]} <br> ${modalSubmit[2]}
                      </div>
                      <div class="modal-footer">
                            <!-- empty on purpose -->
                      </div>
                    </div>
                  </div>
                </div>


                <!-- Modal Timeout-->
                <div class="modal fade" id="modal-timeout" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                                    data-backdrop="static" data-keyboard="false">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">${modalExpired[0]}</h5>
                      </div>
                      <div class="modal-body">
                        ${modalExpired[1]} <br> ${modalExpired[2]}
                      </div>
                      <div class="modal-footer">
                            <!-- empty on purpose -->
                      </div>
                    </div>
                  </div>
                </div>
                <br> 
                <br> 
                <br>
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
                <script>
                var timer = setTimeout(function(){$('#modal-timeout').modal('show')}, ${timeout}*1000);
                var remaining_time = ${timeout};
                var interval;
                
                /////////////////////////////// POST SCRIPTS /////////////////////////////
                function performPostRequest(val) {    
                    // Stop timer and updating timer
                    clearTimeout(timer); timer = 0;
                    clearInterval(interval); interval = 0;
                    
                    console.log("VALUE: ",val);
                    var url_temp = window.location.href;
                    var url_end = url_temp.substr(0, url_temp.indexOf('/',10));
                    
                    axios.post(url_end + '/answer', {
                        id: "${questionID}",
                        group: "${group}",
                        value: val
                    }).then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                      //open(location, '_self').close();
                }

                
                ///////////////////////////// TIMER SCRIPT ///////////////////////////
                document.getElementById("timer_display").innerHTML = remaining_time + "s ";
                --remaining_time;
                
                // Update the count down every 1 second
                interval = setInterval(function() {
                    document.getElementById("timer_display").innerHTML = remaining_time + "s ";
                    --remaining_time;
                     
                    if (remaining_time < 0) {
                        document.getElementById("timer_display").innerHTML = "${expiredText}";
                        clearInterval(interval); interval = 0;
                    }
                }, 1000);
                </script>
                
                
                <!-- Bootstrap JSs --> 
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                </body> 
                </html>`
}

function generateWebpage(question){
    HTML = ""; //reset webpage in every get
    var titleText = computeTitleTextDependingOnLang(question.language)
    var modalSubmitText = computeModalSubmitTextDependingOnLang(question.language)
    var modalExpiredText = computeModalExpiredTextDependingOnLang(question.language)
    var expiredText = computeExpiredTextDependingOnLang(question.language)
    
    generateHeader();
    
    generateBody(titleText, 
                 question.id_fura, 
                 question.text, 
                 question.answers);
    
    generateEndHTML(modalSubmitText, modalExpiredText, question.id_fura, question.timer, question.group, expiredText);
    
    return HTML;
}

function computeTitleTextDependingOnLang(lang){
    if (!(lang in titleWithLanguageDic))
        return titleWithLanguageDic['def'];
    else
        return titleWithLanguageDic[lang];
}
function computeModalSubmitTextDependingOnLang(lang){
    if (!(lang in modalSubmitTextWithLanguageDic))
        return modalSubmitTextWithLanguageDic['def'];
    else
        return modalSubmitTextWithLanguageDic[lang];
}
function computeModalExpiredTextDependingOnLang(lang){
    if (!(lang in modalExpiredTextWithLanguageDic))
        return modalExpiredTextWithLanguageDic['def'];
    else
        return modalExpiredTextWithLanguageDic[lang];
}
function computeExpiredTextDependingOnLang(lang){
    if (!(lang in expiredTextWithLanguageDic))
        return expiredTextWithLanguageDic['def'];
    else
        return expiredTextWithLanguageDic[lang];
}

function generateSuccessHTMLOutput(response) {
  return  response.data;
}

function generateErrorHTMLOutput(error) {
  return  error.message;
}

module.exports = {
    generateWebpage
}

