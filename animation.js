let turn = 0
let rows = 3
let cols = 3
let won = false

let table = 
[
    [[], [], []],
    [[], [], []],
    [[], [], []]
]

function getvalue(id)
{
    id = parseInt(id)
    let button = document.getElementById(id);
    //increase by 1 the value.
    if(turn==0)
    {   button.value = -0+1 
        turn=1
    }
    else 
    {
        button.value = -0+2
        turn = 0
    }
    button.disabled = true
    if(id+1<3){
        console.log("button values " + button.value)
        table[0][id] = button.value
        console.log(table + "valore piccolino")
    }
    else if(id+6<6){
        console.log(id + "trallala")
        console.log("button values " + button.value)
        table[1][id] = button.value
        console.log(table + "valoregrandicello")
    }
    else{
        console.log("button values " + button.value)
        table[2][id] = button.value
        console.log(table)
    }
    checkwin(won)

}


//reset for another game
function reset()
{
    let list = document.querySelectorAll('.grid-item');
    for(let i = 0; i < list.length; i++)
    {
        list[i].disabled = false;
        list[i].value = 0;
    }

    
}
function checkwin(won){
    let sum = 0
    //check vertically

    for(let i = 0; i < rows; i++)
    {
        for(let j = 0; j < cols; j++)
        {
            sum+=table[i][j]
            console.log(sum)
        }
        if(sum==111) 
        {
            console.log("player 1 won")
            return won = true

        }
        else if (sum==222) 
        {
                console.log("Player 2 won")  
                return won = true
        }
        else sum = 0;
    }
}



document.addEventListener("DOMContentLoaded", () => {
    checkwin(table)
  });