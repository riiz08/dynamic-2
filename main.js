fm = document.getElementById('inputValue').value;

function update() {
  v = document.getElementById('inputValue').value;
  c = document.getElementById('selection').value;
  
  //Change Background Color
  if (c === 'background-color' ) {
    document.getElementById('targetObject1').style.backgroundColor = v;
  }
  
  //Change Text Color
  if ( c === 'color') {
    document.getElementById('targetObject2').style.color = v;
  }
  
  
  //Change Text Size 
  if (c === 'font-size') {
    document.getElementById('targetObject2').style.fontSize = v+'px';
  }
  
  
  //Change Font Style 
  if (c === 'font-family') {
    document.getElementById('myLink').href = 'https://fonts.googleapis.com/css?family=' + v + '&display=swap'
    document.getElementById('targetObject2').style.fontFamily = v;
  }
  
  
  //Change Width Content
  if (c === 'width') {
    document.getElementById('targetObject1').style.width = v+'px';
  }
  
  
  //Change Height Content 
  if (c === 'height') {
    document.getElementById('targetObject1').style.height = v+'px';
  }
  
  //No Value Alert 
  if (v === '') {
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Value cannot be empty!'
});
  }
  
  //No Select Alert  
  if (c === '') {
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Option cannot be empty'
});
  }
}