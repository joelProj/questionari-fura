var HTML;

var questionID;

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}​

function performGetRequestText(id) {
    axios.get('http://localhost:3000/questions', {
        params: {
            id: id
        }
    })
    .then(function (response) {
        return [generateSuccessHTMLOutput(response).text, 
                generateSuccessHTMLOutput(response).group, 
                generateSuccessHTMLOutput(response).options];
    })
    .catch(function (error) {
        return generateErrorHTMLOutput(error);
    });   
}

function performPostRequest() {
    var value = document.getElementById('button').value;
    
    axios.post('http://localhost:3000/answers', {
        id: questionID,
        completed: false
    })
    .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
}

function generateHeader(){
    HTML += "   <!DOCTYPE HTML>     \
                <html lang=\"es\">  \
                <head>              \
                <title>Questionari Fura</title> \
                <meta charset=\"UTF-8\"> \
                <meta name=\"description\" content=\"Questionari per l'espectacle\"> \
                </head> \
                <body> \
                <script src=\"URL_id.js\"></script> \
                <div class=\"barra-lateral\" id=\"question\">";
}

function generateQuestionTitle(id){
    HTML += "<h3>Pregunta " + id + "</h3>"
}

function generateQuestionText(text){
    HTML += "<p>" + text + "<p><br><br>";
}

function generateBody(){
    HTML += "   </div> \
                <script> \
                    main() \
                </script> \
                \
                <table> \
                    <form action=\"http://localhost:3000/answer\" method=\"post\" id=\"formButtons\">";
}

function generateOptionsButton(options){
    for i in options:
        HTML+= "<input type=\"button\" id=\"button\" onclick=\"performPOSTrequest()\" value=\"" + i + "\">"
}

function generateEndHTML(){
    HTML += "   </form> \
                </table> \
                \
                <br> \
                <br> \
                <br> \
                </form> \
                </body> \
                </html>"
}


function generateWebpage(question){
    generateHeader();
    
    //questionID = getURLParameter('id');
    generateQuestionTitle(question.id);
    
    generateQuestionText(question.text);
    
    generateBody();
    generateOptionsButton(question.options);
    
    generateEndHTML();
    
    return HMTL;
}

function generateSuccessHTMLOutput(response) {
  return  response.data;
}

function generateErrorHTMLOutput(error) {
  return  error.message;
}

