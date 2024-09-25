import { v4 as uuidv4 } from 'uuid';

const works = [
    {
        id: uuidv4(),
        company: "Aubay - Ingénieur Logiciel/IA (Stage)",
        city: "Boulogne-Billancourt",
        desc: "Développement d'une application web pour la génération automatique d'états de l'art basée sur des techniques avancées de traitement du langage naturel (NLP). L'application commence par collecter un ensemble d'articles scientifiques pertinents en lien avec le sujet de l'état de l'art. Ensuite, elle filtre et sélectionne uniquement des articles de qualité, puis les regroupe par sous-thèmes à l'aide du topic modeling. Chaque article est ensuite résumé de manière automatique. Une fois l'état de l'art généré, l'application permet à l'utilisateur de poser des questions, tant sur un article spécifique que sur l'ensemble des articles traités. Ce projet a été développé avec les technologies suivantes : PyTorch, Hugging Face, LangChain, Docker, React, FastAPI et PostgreSQL.",
        date: "05 fev. 2024 - 05 août. 2024",
    },
    {
        id: uuidv4(),
        company: "Consignity - Développeur Web JavaScript (Stage)",
        city: "Troyes",
        desc: "Contribution au développement d'une plateforme SaaS interagissant avec de l'électronique pour visualiser les données collectées. Développer une bibliothèque JS pour animer des SVG en fonction des données des capteurs (SCADA). Les animations sont configurable par le client. Ajout/correction/optimisation de fonctionnalités (React, ExpressJS,NestJS, MongoDB, InfluxDB, Websocket, RabbitMQ, CSS). Mise en place d'une architecture orientée messages (RabbitMQ).",
        date: "01 août. 2022 - 13 janv. 2023",
    },
    // {
    //     id: uuidv4(),
    //     company: "BCL DECOR - Stage ouvrier",
    //     city: "Orléans",
    //     desc: "Au cours de ce stage, différentes tâches m'ont été attribuées telles que la réception de marchandises, le contrôle de celles-ci, la préparation de commandes, ainsi que la mise en rayon de marchandises.",
    //     date: "15 janv. 2021 - 15 févr. 2021",
    // },
    // {
    //     id: uuidv4(),
    //     company: "Wheel Free - Stage d'observation",
    //     city: "Saint-Jean-le-Blanc",
    //     desc: "Au cours de ce stage, différentes tâches m'ont été attribuées telles que le diagnostic de l'état de vélos, la réparation de ces derniers, gestion de stock.",
    //     date: "déc. 2015",
    // }

]

export default works;