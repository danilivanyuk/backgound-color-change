const color_changer = document.getElementById('change_color').addEventListener('click', () =>{
  const body = document.body;
  body.style.backgroundColor = `rgb(${Math.floor(Math.random()*400)}, ${Math.floor(Math.random()*400)}, ${Math.floor(Math.random()*400)})`;
  console.log(Math.floor(Math.random()*400));
});