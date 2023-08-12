function setup(){

    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500)
    canvas.position(500,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(results);
    }
}

function draw(){
    background('#5DBB63')
}