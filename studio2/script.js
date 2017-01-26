// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;

    //define the process function
    function processForm(){
      // stores adj1 variable
      var adj1 = document.f.adj1.value;

      //stores adj2 variable
      var adj2 = document.f.adj2.value;

      //stores verb1
      var verb1 = document.f.verb1.value;

      //stores verb 2
      var verb2 = document.f.verb2.value;

      //stores adverb1
      var adverb1 = document.f.adverb1.value;

      //stores adverb2
      var adverb2 = document.f.adverb2.value;

      //points messages
      var myAdj1 = document.getElementByID(myAdj1);
      myVerb1.innerHTML = 'too ' + adj1;

      var myVerb1 = document.getElementByID(myVerb1);
      myVerb1.innerHTML = 'so ' + verb1;



      //prevent page from reloading
      return false;
    }

}
