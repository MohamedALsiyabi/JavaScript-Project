const canvas = document.getElementById("pixelCanvas");// to control pixel canvas
const size = document.getElementById("sizePicker");// to control the Size

size.addEventListener('submit', function() {
  function makeGrid() {  //makeGrid function start
    const theHeight = document.getElementById("inputHeight").value;  //to get the hieght value
    const theWidth = document.getElementById("inputWidth").value;   //to get the width value
    canvas.innerText = "";

    for (let height = 0; height < theHeight; ++height) {  //Loop to build the hieght of the pixel art maker
      const row = canvas.insertRow(-1);

      let width = 0;
      while ( width < theWidth) {  //to build the width of the pixel art maker
        const cell = row.insertCell(-1);
        cell.addEventListener('click', function () {  //to change the color
          const color = document.getElementById("colorPicker").value
          cell.bgColor = color;
        });
        ; ++width
      }
      ++height;  //hight increment
    }

    event.preventDefault();
  } //end of makeGridfunction
  makeGrid();  //call makeGrid
});  //end of code
