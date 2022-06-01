function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Jj7yD6vH8/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('Cat Meowing');
        img1 = document.getElementById('Cow Mooing');
        img2 = document.getElementById('Dog Barking');
        img3 = document.getElementById('Lion Roaring');

        if (results[0].label == "Cat Meowing") {
            img.src = 'Cat Meowing.gif';
            img1.src = 'Cow Mooing.jpg';
            img2.src = 'Dog Barking.jpg';
            img3.src = 'Lion Roaring.jpg';
        } else if (results[0].label == "Cow Mooing") {
            img.src = 'Cat Meowing.jpg';
            img1.src = 'Cow Mooing.gif';
            img2.src = 'Dog Barking.jpg';
            img3.src = 'Lion Roaring.jpg';
        }
        else if (results[0].label == "Dog Barking") {
            img.src = 'Cat Meowing.jpg';
            img1.src = 'Cow Mooing.jpg';
            img2.src = 'Dog Barking.gif';
            img3.src = 'Lion Roaring.jpg';
    }else{
        img.src = 'Cat Meowing.jpg';
            img1.src = 'Cow Mooing.jpg';
            img2.src = 'Dog Barking.jpg';
            img3.src = 'Lion Roaring.gif';
    }

    }
}