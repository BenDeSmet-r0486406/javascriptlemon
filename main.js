let color = "red";
let drawGrid = document.getElementById("grid");
drawGrid.onload = clickableGrid();


function changeColor(id){
    let colorCell = document.getElementById(id)
    if(colorCell.getAttribute("bgcolor") === "white"){
        console.log(color);
        colorCell.setAttribute("bgcolor", color);
    } else {
        colorCell.setAttribute("bgcolor", "white");
    }
}

function clickableGrid(){
    console.log("in clickable grid");
    let i=0;
    let grid = document.createElement('table');
    grid.setAttribute("height", "100vw");
    let rows = grid
    console.log(rows);
    grid.className = 'grid';
    for (let r=0; r < 999; ++r){
      let tr =document.createElement('tr');
      grid.appendChild(tr);
      for (let c=0; c < 100; ++c){
        let cell = document.createElement('td');
        cell.id=i++;
        cell.className = "cell";
        cell.setAttribute("bgcolor", "white");
        cell.onclick = function() {changeColor(cell.getAttribute("id"))};
        cell.addEventListener("contextmenu", e => {
            e.preventDefault();
            
            $(document).bind("contextmenu",function(e){
                e.preventDefault();
                console.log(e.pageX + "," + e.pageY);
                $("#cntnr").css("left",e.pageX);
                $("#cntnr").css("top",e.pageY);
               // $("#cntnr").hide(100);        
                $("#cntnr").fadeIn(200,startFocusOut());      
              });
              
              function startFocusOut(){
                $(document).on("click",function(){
                $("#cntnr").hide();        
                $(document).off("click");
                });
              }
              
              $("#items > li").click(function(){
              $("#op").text("You have selected "+$(this).text());
              });


          });
        tr.appendChild(cell);
      }
    }
    drawGrid.appendChild(grid)
  }

  function newColor(newColor){
      color = newColor;
  }