var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();
/*Now what that means really is that we can actually remove our setData function.


/*function setData(jsonData){
    data = jsonData;*/

    /*console.log(data) 
   
}*/  /*everything for our function can end up in the SetData function*/

xhr.onreadystatechange = function(){
    /*console.log(this.readyState);*/
     /*And this will happen every single time the function is called, not just when the readyState is equal to 4 and the status is equal to 200.*/
  if (this.readyState == 4 && this.status == 200) {  
      
      /* console.log(data); this gets data fine but it is in function and can make problems later */
      /*setData(JSON.parse(this.responseText));*/
      /*And we can go back to the previous code that we had here, which was "data = JSON.parse(this.responseText)".*/
      data = JSON.parse(this.responseText);
  }  
};
/*one of the problems with having to set timeouts in our code is that we'd have to tell our system to wait every time we wanted something to happen.
And it could take different amounts of time depending on different circumstances, such as network speed.*/

setTimeout(function(){ /*The setTimeout function takes two parameters. The first is a callback function.*/
    console.log(data);
}, 500); /*And the second argument is a parameter in milliseconds, the time in milliseconds that we want our program to wait for.*/
/*This gives our "onreadystatechange" function plenty of time to reach a ready state of 4.*/

/*And at its simplest, that's what a callback is: a function that's passed as a parameter to another function and executed inside that function.*/