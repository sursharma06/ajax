var request = new XMLHttpRequest(); //XMLHttpRequest this is xhr to autofill

request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    var response = JSON.parse(request.responseText);
    var newStr = '';
    for (var i = 0; i < response.data.children.length; i++) {
      document.querySelector('body').innerHTML = response.data.children[i].data.title;
      console.log(response.data.children[i].data.title);
      document.querySelector('body').innerHTML = newStr += response.data.children[i].data.title;
    }

    //document.querySelector('body').innerHTML = response.data.children.data.title;

    //console.log(response.data.children[0].data.title);
  }
};

request.open('GET', 'https://www.reddit.com/r/starwars.json');

request.send();
