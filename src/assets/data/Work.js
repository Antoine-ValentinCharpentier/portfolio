import { v4 as uuidv4 } from 'uuid';

const works = [
    {
        id: uuidv4(),
        company: "BCL DECOR - Stage ouvrier",
        city: "Orléans",
        desc: "Au cours de ce stage, différentes tâches m’ont été attribuées telles que la réception de marchandises, le contrôle de celles-ci, la préparation de commandes, ainsi que la mise en rayon de marchandises.",
        date: "15 janv. 2021 - 15 févr. 2021",
    },
    {
        id: uuidv4(),
        company: "Wheel Free - Stage d'observation",
        city: "Saint-Jean-le-Blanc",
        desc: "Au cours de ce stage, différentes tâches m’ont été attribuées telles que le diagnostic de l'état de vélos, la réparation de ces derniers, gestion de stock.",
        date: "déc. 2015",
    }

]

export default works;