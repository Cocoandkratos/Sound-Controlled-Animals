function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8s0uhs2gA/model.json',modelready);
}

function modelready()
{
    classifier.classify(gotresults);
}

function gotresults()
{
    console.log("gotresults");
}