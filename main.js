LeftwristX = 0;
RightwristX = 0;
Difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is inittialised');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
                LeftwristX = results[0].pose.leftWrist.x;
                RightwristX = results[0].pose.rightWrist.x;
                Difference = floor(LeftwristX - RightwristX);
                console.log("Left wrist x = "+LeftwristX+" right wrist x = "+RightwristX+" and the difference is "+Difference);
        }
    }

function draw(){
    background('#B3FFB3');
    textSize(Difference);
    fill("#D81159");
    text('Ananya', 50, 400);
}
