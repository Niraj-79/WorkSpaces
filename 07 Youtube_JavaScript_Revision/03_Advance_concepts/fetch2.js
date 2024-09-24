async function fetchData() {
  let res = await fetch('https:www.google.com');
  let data = await res.text();
  console.log(data);
}