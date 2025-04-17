
   let var_quest = [
    ["Quel joueur a gagné le Ballon d'Or en 2023 ?", "Messi"],
    ["Combien de minutes dure un match de foot ?", "90"],
    ["Combien y a-t-il de mi-temps dans un match ?", "2"],
    ["Quel est le but du jeu au football ?", "Marquer des buts"],
    ["Le football se joue principalement avec les pieds ou les mains ?", "Pieds"],
];


function quiz() {
    let count = 0;

    for (let i = 0; i < 4; i++) {
        const question = var_quest[i][0];
        const repH = var_quest[i][1];
        
        const rep = prompt(question);
        
        if (rep) {
            if (rep.toLowerCase().trim() === repH) {
                alert(" Vrai ");
                count++;
            } else {
                alert("  faux ");
            }
        }
    }

    alert(`🎉 Vous avez répondu correctement à ${count} question`);
}