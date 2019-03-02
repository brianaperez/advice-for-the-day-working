// JavaScript File
let request = new XMLHttpRequest();
let url ="https://api.adviceslip.com/advice";
request.open("GET",url, true);

request.onload = function(){
    //Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response);
    let advice = document.getElementById('advice');
    
    if(request.status >=200 && request.status < 400){
        console.log('data',data)
        advice.innerHTML = data["slip"].advice;
        
    }
};

request.send();
