noseX=0;
noseY=0;
function preload()
{
clown_nose=loadImage('https://postimg.cc/w1gHxYDf');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose X="+results[0].noseX-10);
        console.log("nose Y="+results[0].noseY-10);
    }
}

function modelLoaded()
{
    console.log("poseNet is intialised");
}s
function draw()
{
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,20);
    image(clown_noseX,noseY,30,30);
}
function take_snapshot()
{
    save('my_Filter_Image.png');
}
