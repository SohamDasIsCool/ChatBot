var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if(Content=="hello"){
        speak1();
    }
    if(Content=="what is your name"){
        speak2();
    }
    if(Content=="how old are you" || Content=="what is your age"){
        speak3();
    }
    if(Content=="describe yourself"){
        speak4();
    }
}
function speak1() {
    var synth=window.speechSynthesis;
    speak_data="Hi! Nice to meet you";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    document.getElementById("say").innerHTML='Say "What is your name?" or "What is your age?" or"Describe yourself!" '
}

function speak2() {
    var synth=window.speechSynthesis;
    speak_data="My Name Is soham das.";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function speak3() {
    var synth=window.speechSynthesis;
    speak_data="I am 11 years old!" ;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function speak4() {
    var synth=window.speechSynthesis;
    speak_data="My name is Soham das! I am cool and daniel is dumb!" ;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}