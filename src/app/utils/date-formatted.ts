const MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const WEEKDAYS = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

class FormattedDate{
    private date: Date;
    
    constructor(){
        this.date = new Date();
    }

    weekday(){
        return WEEKDAYS[this.date.getDay()];
    }

    day(){
        const DAY = this.date.getDate();
        return DAY < 10 ? `0${DAY}` : DAY;
    }

    month(){
        return MONTHS[this.date.getMonth()];
    }

    year(){
        return this.date.getFullYear();
    }
}

export function getFormattedCurrentDate(){
    const date = new FormattedDate();
    return `${date.weekday()}, ${date.day()} de ${date.month()} de ${date.year()}`;
}