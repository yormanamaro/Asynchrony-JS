let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', url_api, true);
      xhttp.onreadystatechange = (() => {
        if (xhttp.readyState === 4) {
           (xhttp.status === 200)
            ? resolve(JSON.parse(xhttp.responseText))  //  utilizando las collback para las logicas
            : reject(new Error('Error', url_api))
                



                if (xhttp.status === 200) {
                    Callback(null, JSON.parse(xhttp.responseText));    // utilizando promesas 
                } else {
                    const error = new Error('Error + url_api');
                    return Callback(error, null)
                }
            }
        }
    })
}