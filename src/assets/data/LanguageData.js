import { v4 as uuidv4 } from 'uuid';
import FrenchFlag from '../images/flags/france.png';
import EnglishFlag from '../images/flags/united-kingdom.png';
import SpainishFlag from '../images/flags/spain.png';

const languages = [
    {
        id: uuidv4(),
        label: "Français",
        test:"",
        score:"",
        level:"Langue natale",
        dateIssue:"",
        periodValidity:"",
        img:FrenchFlag,
    },
    {
        id: uuidv4(),
        label: "Anglais",
        test:"Linguaskill Business",
        level:"B2+",
        score:"172",
        dateIssue:"02/2022",
        periodValidity:"2ans",
        img:EnglishFlag,
    },
    {
        id: uuidv4(),
        label: "Espagnol",
        test:"SIELE",
        level:"B2",
        score:"362",
        dateIssue:"01/2022",
        periodValidity:"5ans",
        img:SpainishFlag,
    },
    
    

]

export default languages;