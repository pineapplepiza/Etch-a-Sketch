let gridNumber = 16

const container = document.querySelector('#container');

/* const penButton = document.querySelector("#pen") */

const colorButton = document.querySelector("#randomColor")

const grid = document.querySelector('#grid')

let content = [];

let gridMade = 0

let resized = 0

let previousSize = 16

let color = "blue"

let colorToggle = false

let colorNumber = 0

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function gridMaker(gridNumber) {
    if (gridMade == 0) {
        for (let i = 0; i < (gridNumber * gridNumber); i++) {
            content = document.createElement('div');
            content.classList.add('contentClass');
            /* content.textContent = "." */
            let percent = (100 / gridNumber) + "%"
            content.setAttribute('style',`color: white; flex: 0 0 ${percent};`);
            container.appendChild(content);
        }
        gridMade++
        
    } else {
        // I'm going to remove the grid already made and remake it or make gridMaker = 0 and call it again
        allElements = document.getElementsByClassName("contentClass");
        Array.from(allElements).forEach(element => {
            element.remove()
        })
        for (let i = 0; i < (gridNumber * gridNumber); i++) {
            content = document.createElement('div');
            content.classList.add('contentClass');
            percent = (100 / gridNumber) + "%"
            content.setAttribute('style',`color: white; flex: 0 0 ${percent};`);
            container.appendChild(content);
        }
        resized++
        console.log(resized)
    }
    backgroundChanger(gridNumber);
    console.log(gridMade)
}

gridMaker(gridNumber) 

function backgroundChanger (gridNumber) {

    allContent = document.getElementsByClassName("contentClass");

    let active = false

    container.addEventListener("click", () => {

        /* if(colorToggle == true){
            color = getRandomColor()
        } */

        if (active == true) {
            active = false
            console.log(active)
        } else {
            active = true
            console.log(active)
        }

        Array.from(allContent).forEach(element => {
            element.addEventListener("mouseover", () => {
                if (active == true) {
                    let percento = (100 / gridNumber) + "%" ;
                    if(colorToggle == true){
                        color = getRandomColor()
                        colorNumber++
                    }
                    /* if ((colorNumber % 10 == 0) && (colorToggle == true)) {
                        color = "black"
                    } */
                    element.setAttribute('style',`background: ${color}; flex: 0 0 ${percento};`)
                }
            })
        })
    })
}

grid.addEventListener("click", () => {
    let gridNumba = prompt("Please enter a grid number")

    gridMaker(gridNumba)
})

colorButton.addEventListener("click", () => {
    colorToggle = true
    /* color = getRandomColor() */
})


// *Solved* I believe the problem is that the "." is not allowing the div to be any smaller.
// *Solved* So i need to get rid of it!

// When I make a new grid for the second time the previous one is not deleted.