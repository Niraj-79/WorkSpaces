fetch('https:www.google.com')
.then(res => res.text())
.then(data => console.log(data));