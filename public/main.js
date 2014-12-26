var openprofile = function(){
  document.getElementById("main").style.display = "none";
  document.getElementById("mobileprofile").style.display = "inline";
  }

var closeprofile = function(){
  document.getElementById("mobileprofile").style.display = "none";
  document.getElementById("main").style.display = "inline";
  }

var linkhover = function(){
  documentgetElementById("raritealink").style.color = "#b4b4b4";
  }

var radjective = function(){
  var adnumber = adjectives.length;
  var radjective = Math.floor(Math.random() * adnumber); 
  var adjective = adjectives[radjective];
  console.log('Random adjective: ', adjective);
  return(adjective);
  }

var rnoun = function(){
  var nounnumber = nouns.length;
  var rnoun = Math.floor(Math.random() * nounnumber);
  var noun = nouns[rnoun];
  console.log('Random noun: ', noun);
  return(noun);
  }

var settext = function(n, a){
  console.log('settext');
  document.getElementById("varline1").setAttribute("value", a);
  document.getElementById("varline2").setAttribute("value", n);
  console.log("textset");
  }
var init = function(){
  var words = QueryString;
//  console.log(
  if(words['noun'] && words['adjective']){
    document.getElementById("varline1").value = words['adjective'];
    document.getElementById("varline2").value = words['noun'];
  } else {
    var adjective = radjective();
    var noun = rnoun();
  }
  
  settext(noun, adjective);
  document.getElementById("isay").play();
}

var read = function(){
  var words = QueryString;
  var querystart = document.URL.indexOf("?");
  var rooturl = document.URL.substring(0, querystart);
  document.getElementById("isay").play();
  var fullnewurl = rooturl + "?adjective=" + document.getElementById("varline1").value + "&noun=" + document.getElementById("varline2").value;
  console.log(fullnewurl);
  location.assign(fullnewurl);
  document.getElementById("shareicon").style.display = "inline";
  }

var setquery = function(){
  var words = QueryString;
  var querystart = document.URL.indexOf("?");
  var rooturl = document.URL.substring(0, querystart);
  var fullnewurl = rooturl + "?adjective=" + document.getElementById("varline1").value + "&noun=" + document.getElementById("varline2").value;
  console.log(fullnewurl);
  location.assign(fullnewurl);
  }

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
    
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
      // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
  return query_string;
} ();

var playmusic = function(){
        document.getElementById("music").play();
        }
      var sayad = function(){
        var adjective = document.getElementById("varline1").value;
        
        var msg = new SpeechSynthesisUtterance(adjective);
        window.speechSynthesis.speak(msg);
        
        setTimeout(function(){ document.getElementById("yousay").play(); }, 1500);
        }
      
      var repeatwords = function(){
        var adjective = document.getElementById("varline1").value;
        var noun = document.getElementById("varline2").value;
        
        var msg = new SpeechSynthesisUtterance(adjective);
        window.speechSynthesis.speak(msg);
        var msg = new SpeechSynthesisUtterance(noun);
        window.speechSynthesis.speak(msg);
        var msg = new SpeechSynthesisUtterance(adjective);
        window.speechSynthesis.speak(msg);
        var msg = new SpeechSynthesisUtterance(noun);
        window.speechSynthesis.speak(msg);
        }
      
      var saynoun = function(){
        var noun = document.getElementById("varline2").value;
        var msg = new SpeechSynthesisUtterance(noun);
        window.speechSynthesis.speak(msg);
        setTimeout(function(){ repeatwords(); }, 400);
        }
      
      var copyurl = function() {
        var querystart = document.URL.indexOf("?");
        var rooturl = document.URL.substring(0, querystart);
        var fullurl = rooturl + "?adjective=" + document.getElementById("varline1").value + "&noun=" + document.getElementById("varline2").value;
        /*document.getElementById("shareicon").style.display = "none";
        document.getElementById("share").style.width = "400px";
        document.getElementById("copyablelink").style.opacity = "1";
        document.getElementById("copyablelink").value = fullurl;*/
        prompt("Here is the link to your USaidIt", document.URL);
        }