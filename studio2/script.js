// JavaScript Document
console.log('reading js');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;

    //define the process function
    function processForm() {
        console.log('process');

        // stores adj variable
        var adj = document.f.adj.value;
        console.log('adj is ' + adj);

        //writes message for adj
        var myAdj = document.getElementById('myAdj');
        myAdj.innerHTML = 'much ' + adj;

        //stores adj2 variable
        var adj2 = document.f.adj2.value;
        console.log('adj2 is ' + adj2);

        //writes message for adj2
        var myAdj2 = document.getElementById('myAdj2');
        myAdj2.innerHTML = 'so ' + adj2;

        //stores adv variable
        var adv = document.f.adv.value;
        console.log('adv is ' + adv);

        //writes message for adv
        var myAdv = document.getElementById('myAdv');
        myAdv.innerHTML = 'such ' + adv;

        //stores noun variable
        var noun = document.f.noun.value;
        console.log('noun is ' + noun);

        //writes message for noun
        var myNoun = document.getElementById('myNoun');
        myNoun.innerHTML = 'wow very ' + noun;

        //store verb variable
        var verb = document.f.verb.value;
        console.log('verb is ' + verb);

        //writes message for verb
        var myNoun = document.getElementById('myVerb');
        myVerb.innerHTML = 'many ' + verb;

        //prevent page from reloading
        return false;
    }

});
