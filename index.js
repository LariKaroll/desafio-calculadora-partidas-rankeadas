const prompt = require('readline-sync')
let contador = 0

function getSaldoRank(getWin,getLoss){
    return getWin-getLoss
}

function condicaoRank(getWin){
    if(getWin <= 10){
        return "Ferro"
    }else if(getWin > 10 && getWin <= 20 ){
        return "Bronze"
    }else if(getWin > 20 && getWin <= 50 ){
        return "Prata"
    }else if(getWin > 50 && getWin <= 80 ){
        return "Ouro"
    }else if(getWin > 80 && getWin <= 90 ){
        return "Diamante"
    }else if(getWin > 90 && getWin <= 100 ){
        return "Lendário"
    }else{
        return "Imortal"
    }
}

