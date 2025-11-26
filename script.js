rocket_list = []; 

class Rocket {
    constructor(id,status,curr_loc,st,et,speed) {
        this.id = id ;
        this.status = status ;
        this.curr_loc = curr_loc ;
        this.st = st ;
        this.et = et ;
        this.speed = speed ;
    }
}


function createRocket(){
    let table = document.querySelector(".rocket-table tbody");

    table.innerHTML += ``;
}
let addButton = document.querySelector(".add-button");

addEventListener(() => createRocket(),addButton);