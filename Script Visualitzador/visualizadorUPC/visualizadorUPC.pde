JSONObject json;
JSONArray options;

int totalScore = 0;
ArrayList<Integer> rects = new ArrayList<Integer>();
int cont = 0;

int startDraw = 0;
int rectWidth = 110;  // 55
int rectSpace = 160;  // 80

int lastKeyNumber = -1;
int JSONindex = 0;

color red_pastel = color(255,120,120);
color green_pastel = color(120,255,150);
color blue_pastel = color(120,225,255);
color yellow_pastel = color(255,255,150);
color purple_pastel = color(116,94,160);
color orange_pastel = color(255,130,50);

color[] clist  = {red_pastel, green_pastel, blue_pastel, yellow_pastel, purple_pastel, orange_pastel};
String baseURL = "http://quiz.iglor.es/question/score/";
String[] idQuestions = {"1","upcflash","upcmusica","upccolors","upcbarrets","upcnext"};

void setup() {
  frameRate(5);  // if seems slow, increase FPS
  background(0);
  //size(1024,768);
  fullScreen();
}

void draw() {
  // Empty screen
  background(0);
  fill(255);
  // Empty variables
  rects.clear();
  cont = 0;
  totalScore = 0;
  
  // Get and Parse JSON data
  if (lastKeyNumber >= 0 && lastKeyNumber<idQuestions.length) {
    JSONindex = lastKeyNumber;
  }
  json = loadJSONObject(baseURL+idQuestions[JSONindex]);
  //println(json);
  
  // Compute total score
  options = json.getJSONArray("answers");
  startDraw = options.size()*(rectWidth+rectSpace);
  for (int i = 0; i < options.size(); i++) {
    // Compute sum of participation
    totalScore += options.getJSONObject(i).getInt("score");
    // Add a rectangle with value score
    rects.add(options.getJSONObject(i).getInt("score"));
  }
  
  // Print rectangles of each option
  textSize(60);
  textAlign(CENTER, CENTER);
  text(json.getString("text"), width/2, height/4);
  for (Integer ele : rects) {
    fill(clist[cont % clist.length]);  // Set fill color: index with mod to avoid wrong indexs
    
    // Print rectangle
    float rectXPosition = width/2 - startDraw/2 + cont*(rectWidth + rectSpace) + (rectWidth/2) ;
    float rectYPosition = height*3/4;
    float rectHeight = (totalScore==0) ? 0 : -1*map(ele, 0, totalScore, 0, height*3/8);  // Conditional to avoid map error with empty question
    rect(rectXPosition, rectYPosition, rectWidth, rectHeight);
    textSize(32);
    fill(255);
    
    // Print answer text
    String textValue = options.getJSONObject(cont).getString("value");
    text(textValue, rectXPosition + rectWidth/2, rectYPosition+40);  // (+40) to center the text on X axis
    
    // Print answer number value on top of rectangle
    text(ele, rectXPosition + rectWidth/2, rectYPosition + rectHeight - 40);  // (+rectHeight -40) to place it on top of the rectangle on Y axis
    cont++;
  }
  
}


// Change between graphics when number key is pressed
void keyPressed() {
  // Pressed Number 0-9 (ASCCI 48 - 57)
  if (keyCode >= java.awt.event.KeyEvent.VK_0 && keyCode <= java.awt.event.KeyEvent.VK_9) {
    lastKeyNumber = (keyCode - java.awt.event.KeyEvent.VK_0);
    redraw();  // just in case
  }
  
  // Pressed Numpad Number 0-9 (ASCII 96-105)
  if (keyCode >= java.awt.event.KeyEvent.VK_NUMPAD0 && keyCode <= java.awt.event.KeyEvent.VK_NUMPAD9) {
    lastKeyNumber = (keyCode - java.awt.event.KeyEvent.VK_NUMPAD0);
    redraw();  // just in case
  }
  //println(lastKeyNumber);
}
