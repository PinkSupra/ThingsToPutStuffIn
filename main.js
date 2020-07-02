window.onload=function() {

console.log("poop is long");

}

function mouseover() {

    console.log("mouseover function")

    if (document.getElementById('spantest').innerHTML=="Toyota Supra") {

        document.getElementById('spantest').innerHTML ="Toyota Supra MIV";

    }else  {
        document.getElementById('spantest').innerHTML ="Toyota Supra";


    }

}
