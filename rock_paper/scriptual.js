

let game_array = document.querySelector('.game_array');
let triangle = document.getElementById('triangle')

game_array.addEventListener('click',(e)=>{


    const clicked = e.target;
    clicked.classList.add('player_pos')

    array_img = Array.from(game_array.children);

    const comp_choice = array_img[Math.floor(Math.random()*array_img.length)];
    comp_choice.classList.add('comp_pos');
 

    array_img.forEach(child =>{
        if (child != clicked && child!=comp_choice){
            child.style.display = 'none';
        }
    })

    triangle.style.display = 'none';


})


// rules popup 
function popup(){ 
let rule_btn = document.getElementById('rule_btn');
let rules = document.querySelector('.rules');
let close = document.getElementById('close');

    rule_btn.addEventListener('click',()=>{  
         rules.classList.toggle('show');
        
    })

    close.addEventListener('click',() =>{
        rules.classList.remove('show');
    })


}
popup()



