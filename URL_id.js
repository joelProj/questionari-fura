var HTML = "";

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

function performPostRequest(val) {   
    console.log("VALUE: ",val);
    axios.post('http://localhost:3000/answers', {
        id: questionID,
        completed: false,
        value: val
    })
    .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
}

function generateHeader(){
    HTML += `   <!DOCTYPE HTML>     \
                <html lang=\"es\">  \
                <head>              \
                <title>Questionari Fura</title> \
                <meta charset=\"UTF-8\"> \
                <meta name=\"description\" content=\"Questionari per l'espectacle\"> \
                </head> \
                <body> \
                <div class=\"barra-lateral\" id=\"question\">`;
}

function generateQuestionTitle(id){
    HTML += "<h3>Pregunta " + id + "</h3>"
}

function generateQuestionText(text){
    HTML += "<p>" + text + "<p><br><br>";
}

function generateBody(){
    HTML += "   </div> \
                \
                <table> \
                    <form action=\"http://localhost:3000/answer\" method=\"post\" id=\"formButtons\">";
}

function generateOptionsButton(options){
    for (var i in options)
        HTML+= `<button type="button" id="button" onclick="performPostRequest('${options[i]}'); return false;" >${options[i]}</button>`
}

function generateEndHTML(questionID){
    //console.log(questionID);
    HTML += `   </form> 
                </table> \
                \
                <br> \
                <br> \
                <br> \
                </form> \
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script> \
                <script>
                function performPostRequest(val) {    
                    console.log("VALUE: ",val);
                    axios.post('http://localhost:3000/answer', {
                        id: ${questionID},
                        completed: false,
                        value: val
                    }).then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                      //open(location, '_self').close();
                }
                </script>\
                </body> \
                </html>`
}


function generateWebpage(question){
    HTML = ""; //reset webpage in every get
    generateHeader();
    //console.log(question.id)
    questionID = question.id;
    generateQuestionTitle(question.id);
    
    generateQuestionText(question.text);
    
    generateBody();
    generateOptionsButton(question.options);
    
    generateEndHTML(question.id);
    
    return HTML;
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

