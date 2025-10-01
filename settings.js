const btnStart = document.getElementById('submit');



const rbt2teams = document.getElementById('rbt2teams');
const rbt3teams = document.getElementById('rbt3teams');
const rbt4teams = document.getElementById('rbt4teams');

const txtTeamName3 = document.getElementById('teamName3');
const txtTeamName4 = document.getElementById('teamName4');

rbt2teams.addEventListener('click', toggleTeamNameInputs);
rbt3teams.addEventListener('click', toggleTeamNameInputs);
rbt4teams.addEventListener('click', toggleTeamNameInputs);

function toggleTeamNameInputs() {
    txtTeamName3.style.display = 'none';
    txtTeamName4.style.display = 'none';
    
    if(rbt3teams.checked) {
        txtTeamName3.style.display = 'block';
    }
    if(rbt4teams.checked) {
        txtTeamName3.style.display = 'block';
        txtTeamName4.style.display = 'block';
        console.log("holfedsa");

    }
}
