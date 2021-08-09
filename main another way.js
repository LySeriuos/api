function getData(cb) { /*cb-call back*/

    var xhr = new XMLHttpRequest();

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function(){
   
  if (this.readyState == 4 && this.status == 200) {  
           cb(JSON.parse(this.responseText));
  }  
};
}

function printDataToConsole(data){
   console.log(data);
}


/*So when this runs, what it will do is pass itself in as a function.
That function will be executed here with this as the data argument.*/
getData(printDataToConsole)

