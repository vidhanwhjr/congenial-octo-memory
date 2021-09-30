function START_DETECTION(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CqqbZutG-/model.json', model8765);
}

function model8765(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        var random_number_R = Math.floor(Math.random()*255);
        var random_number_G = Math.floor(Math.random()*255);
        var random_number_B = Math.floor(Math.random()*255);

        document.getElementById("DS").innerHTML = "I can hear-  " + results[0].label;
        document.getElementById("ACC").innerHTML = "Accuracy-  " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("DS").style.color = "rgb("+random_number_R+","+random_number_G+","+random_number_B+")";
        document.getElementById("ACC").style.color = "rgb("+random_number_R+","+random_number_G+","+random_number_B+")";
        
        var img = document.getElementById("Alien_1");
        var img2 = document.getElementById("Alien_2");
        var img3 = document.getElementById("Alien_3");
        var img4 = document.getElementById("Alien_4");

        if(results[0].label == "Background Noise" ){
            img.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "make obnoxious noises"){
            img.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Alarm"){
            img.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else{
                img.src = "aliens-01.png";
                img2.src = "aliens-02.png";
                img3.src = "aliens-03.png";
                img4.src = "aliens-04.gif";
            
        } 
    }
}

