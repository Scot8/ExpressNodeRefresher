var sendObj = {
    method: "get"
};

function logResponse(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result){
    result.json().then(logResponse)
}

fetch("http://localhost:3000/handlesum?counter=100", sendObj).then(callbackFn)