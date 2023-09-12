const rockImage = document.getElementById('rock_img');
const paperImage = document.getElementById('paper_img');
const scissorsImage = document.getElementById('scissors_img');
const miSeccion = document.getElementById('miSeccion');
const miSeccion_post = document.getElementById('miSeccion-post')
const play_againbutton = document.getElementById('button_play_again')

function set_choice(option, src){
    option.addEventListener('click', function () {
        let pcInput = '';
        miSeccion.style.display = 'none'
        miSeccion_post.style.display = 'flex'
        const user_input = document.getElementById("user_select")
        user_input.src = src

        const interval = setInterval(function () {
            pcInput = get_random_value();
            show_pc_choice(pcInput);
        }, 100);
        
        setTimeout(async function () {
            clearInterval(interval);
            pcInput = get_random_value();
            show_pc_choice(pcInput);
            play_againbutton.style.display = 'flex';
            play_againbutton.addEventListener('click', function () {
                refresh_page();
            });
            check_winner(src.replace('.', ''), pcInput.replace('.', ''));
        }, 3000);
        
    }) 
}

function check_winner(user_src, pc_src) {
    const tarjeta_user = document.getElementById("tarjeta-user")
    const tarjeta_pc = document.getElementById("tarjeta-pc")
    const user_choice = user_src.split('/').pop().split('.')[0];
    const pc_choice = pc_src.split('/').pop().split('.')[0];
    const say_winner = document.getElementById("say_winner");

    if ((user_choice === 'papel' && pc_choice === 'piedra') || 
        (user_choice === 'piedra' && pc_choice === 'tijera') || 
        (user_choice === 'tijera' && pc_choice === 'papel')) {
        say_winner.textContent = "Gana Usuario"
        tarjeta_user.classList.add("win");
        tarjeta_pc.classList.add("lose");
    } else if (user_choice === pc_choice) {
        say_winner.textContent = "Empate"
        tarjeta_user.classList.add("tie")
        tarjeta_pc.classList.add("tie")
    } else { 
        say_winner.textContent = "Gana Maquina"
        tarjeta_user.classList.add("lose")
        tarjeta_pc.classList.add("win")
    }
}


function refresh_page() {
    location.reload()
}

function get_random_value() {
    const images = [rockImage.src, paperImage.src, scissorsImage.src];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function show_pc_choice(pcInput) {
    const pc_image = document.getElementById('pc_select');
    pc_image.src = pcInput
}

set_choice(rockImage, rockImage.src)
set_choice(paperImage, paperImage.src)
set_choice(scissorsImage, scissorsImage.src)

