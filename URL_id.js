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
    HTML += `   <!DOCTYPE HTML>     
                <html lang="es">  
                <head>              
                <title>Questionari Fura</title> 
                
                <!-- Our own CSS -->
                <link rel="stylesheet" type="text/css" href="designs.css"> 
                
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                
                <!-- Bootstrap CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 
                <meta charset="UTF-8"> 
                <meta name="description" content="Questionari per l'espectacle"> 
                
                </head> 
                <body>  `
}

function generateQuestionTitle(id){
    HTML += "<h3>Pregunta " + id + "</h3>"
}

function generateQuestionText(text){
    HTML += "<p>" + text + "<p><br><br>";
}

function generateBody2(){
    HTML += ` <table> 
                <form action="http://localhost:3000/answer" method="post" id="formButtons"> `
}


function generateBody1(id, text){ //Generate till the beggining of the form
    HTML += `
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-4">Pregunta ${id} </h1>
            <p class="lead">${text}</p>
            <hr class="my-4">
            <form action="http://localhost:3000/answer" method="post" id="formButtons"> `
}
function generateOptionsButton(options){
    for (var i in options)
        HTML+= `
                
                <button type="button" id="button" class="btn btn-info" onclick="performPostRequest('${options[i]}'); return false;" >${options[i]}</button>
                
                `
}

function generateBody2(){
    HTML += `
            </form> 
        </div>
    </div>`
}
function generateBody(id, text, options){
    generateBody1(id, text);
    generateOptionsButton(options);
    generateBody2();
    
                //<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>


}
function generateEndHTML(questionID){
    //console.log(questionID);
    HTML += ` 
                <br> 
                <br> 
                <br>
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
                <script>
                function performPostRequest(val) {    
                    console.log("VALUE: ",val);
                    axios.post('http://localhost:3000/answer', {
                        id: "${questionID}",
                        value: val
                    }).then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                      //open(location, '_self').close();
                }
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
    generateHeader();
    //generateQuestionTitle(question.id_fura);
    
    //generateQuestionText(question.text);
    
    generateBody(question.id_fura, question.text, question.options);
    //generateOptionsButton(question.options);
    
    generateEndHTML(question.id_fura);
    
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

