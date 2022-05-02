import { v4 as uuidv4 } from 'uuid';

const educations = [
    {
        id: uuidv4(),
        company: "Université de Technologie de Troyes",
        city: "Troyes",
        desc: "Diplôme d'ingénieur en Informatique et Systèmes d'information",
        date: "2021-2024",
    },
    {
        id: uuidv4(),
        company: "Université de Technologie de Troyes",
        city: "Troyes",
        desc: "Classe préparatoire intégrée",
        date: "2019-2021",
    },
    {
        id: uuidv4(),
        company: "Lycée Sainte Croix-Saint Euverte",
        city: "Orléans",
        desc: "Baccalauréat général, Scientifique option science de l'ingénieur, spécialité informatique et science du numérique",
        date: "2016-2019",
    }

]

export default educations;