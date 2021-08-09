const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) { 

    var xhr = new XMLHttpRequest();

xhr.open("GET", baseURL + type + "/");
xhr.send();

xhr.onreadystatechange = function(){
   
  if (this.readyState == 4 && this.status == 200) {  
           cb(JSON.parse(this.responseText));
  }  
};
}

function getTableHeaders (obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);
    });
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");
    //el.innerHTML = ""; /*So that will clear it every time the button is clicked.*/
   
    getData(type, function(data) {
        data = data.results;
        /*document.getElementById("data").innerHTML = data.results; /*to reach data from the array named "results"*/
        var tableHeaders =  getTableHeaders(data[0]);

        data.forEach(function(item) {
             var dataRow = [];

             Object.keys(item).forEach(function(key){
                 var rowData = item[key].toString();
                 var truncatedData = rowData.substring(0, 15)
                dataRow.push(`<td>${truncatedData}</td>`); //And what we do is we have {$item}, and then we pass in [key] as the index, so this will actually get us the data that's in each individual key. Rather than just the key name itself, we'll get the value.
             });
          tableRows.push(`<tr>${dataRow}</tr>`);
            });
            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    
    });
}
