function genWeb(question){
    console.log("Received: ", question);
    var html = `<!DOCTYPE HTML>
    <html lang="es">
    <head>
      <title>Título de la página…</title>
      <meta charset="UTF-8">
      <meta name="description" content="Descripción de la página…">
    </head>
    <body>
      <script src="URL_id.js"></script>
      <div class=”barra-lateral” id="question">
        <h3>Pregunta 1</h3>
        <p>${question.text}</p>
        <br>
        <br>
      </div>
      
      <table>
        <form method="post" id="formButtons">
          <input type="button" id='button' value=${question.options[0]}>
          <input type="button" id='button' onclick='performPOSTrequest()' value=${question.options[1]}>
        </form> 
      </table>  
    </body>
    </html>`;
    return html;
}

module.exports = {
    genWeb
};