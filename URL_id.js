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

function writeQuestionTitle(id){
    var titleDiv = document.getElementById('question');
    
    titleDiv.innerHTML = '<h3>Pregunta ' + id + '</h3>'
}

function writeQuestionText(text){
    var titleDiv = document.getElementById('question');
    
    titleDiv.innerHTML += '<p>' + text + '<p>'+
                          '<br><br>';
}
function writeOptionsButton(options){
    var form = document.getElementById('formButtons');
    
    form.innerHTML = "";
    
    for i in options:
        form.innerHTML+= "<input type=\"button\" id=\"button\" onclick=\"performPOSTrequest()\" value=\"" + i + "\">"
    
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

function main(){
    questionID = GetURLParameter('id');
    writeQuestionTitle(questionID);
    
    var parameters = performGetRequestText(questionID);
    writeQuestionText(parameters[0]);
    writeOptionsButton(parameters[2]);
}

function generateSuccessHTMLOutput(response) {
  return  response.data;
}

function generateErrorHTMLOutput(error) {
  return  error.message;
}

