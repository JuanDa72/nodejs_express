let inter_miami=11
let fc_dallas=11

function resultado(equipo1: number, equipo2: number): string {
    if (equipo1 > equipo2) {
        return "Gana el equipo 1";
    } else if (equipo1 < equipo2) {
        return "Gana el equipo 2";
    } else {
        return "Empate";
    }
}