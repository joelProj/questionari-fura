var HTML;

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

function generateBody(){ //Generate till the beggining of the form
    HTML += `
    <div class="container">
    <form>
        <div class="form-group">
            <div class="text_header" for="inputUserName" align="center">Welcome!</div>
            <input type="text" class="form-control" id="inputUserName" aria-describedby="Input username" placeholder="Enter your username"
                onkeyup="enableButton(document.getElementById('inputUserName').value)">
            <small id="emailHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
        </div>
        <div class="row-fluid justify-content-center">
            <div class="col align-self-center">
                <button id="buttonSubmit" type="button" class="btn btn-primary" disabled onclick="performPostRequest(document.getElementById('inputUserName').value)">Submit</button>
            </div>
        </div>
    </form>
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

function generateForm(){
    HTML = ""; //reset webpage in every get
    generateHeader();
    
    generateBody();
    
    generateEndHTML();

    return HTML;
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
