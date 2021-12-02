function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8s0uhs2gA/model.json',modelready);
}

function modelready()
{
    classifier.classify(gotresults);
}

function gotresults(error,results)
{
    if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;


        document.getElementById("result_label").innerHTML="I Can Hear "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_g+","+random_number_r+","+random_number_b+")";

        img1 = document.getElementById('background 1') ;
        img2 = document.getElementById('dog 2') ;
        img3 = document.getElementById('cat 3') ;
        img4 = document.getElementById('cow 4') ;
        img5 = document.getElementById('lion 5') ;


        if(results[0].label=="Background Noise")
        {
            img1.src="background .gif";
            img2.src="dog.png";
            img3.src="cat.png";
            img4.src="cow.png";
            img5.src="lion.png";
            

        }
 
        else if(results[0].label=="Barking")
        {
            img1.src="background .png";
            img2.src="dog.gif";
            img3.src="cat.png";
            img4.src="cow.png";
            img5.src="lion.png";

        }

       else if(results[0].label=="Meow")
        {
            img1.src="background .png";
            img2.src="dog.png";
            img3.src="cat.gif";
            img4.src="cow.png";
            img5.src="lion.png";

        }

        else if(results[0].label=="Mooo")
        {
            img1.src="background .png";
            img2.src="dog.png";
            img3.src="cat.png";
            img4.src="cow.gif";
            img5.src="lion.png";

        }

        else 
        {
            img1.src="background .png";
            img2.src="dog.png";
            img3.src="cat.png";
            img4.src="cow.png";
            img5.src="lion.gif";
        }



    }
}

