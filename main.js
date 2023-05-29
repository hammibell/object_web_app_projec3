function setup(){
    canvas = createCanvas(600, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 550);
    video.hide();

    
}

function start(){
    cocossd = ml5.objectDetecter("cocossd", modelLoaded);
    document.getElementById("status_of_model").innerHTML = "Status: Detecting Objects";

    user_input = document.getElementById("user_object_name").value;

    input = document.getElementById("user_object_name").value;



}

function modelLoaded(){
    console.log("Model is loaded!");
    status
}