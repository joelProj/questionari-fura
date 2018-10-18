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
        return generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        return generateErrorHTMLOutput(error);
    });   
}

function generateSuccessHTMLOutput(response) {
  return  response.data;
}

function generateErrorHTMLOutput(error) {
  return  error.message;
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

function performPOSTrequest(){
    document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);

function performPostRequest(id, e) {
    var value = document.getElementById('button').value;
    
    axios.post('http://localhost:3000/answers', {
        questionID: id,
        completed: false
    })
    .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
    
    e.preventDefault();

}

function main(){
    var id = GetURLParameter('id');
    writeQuestionTitle(id);
    
    var text = performGetRequestText(id);
    writeQuestionText(text);
    
    
}

