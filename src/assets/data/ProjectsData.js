import { v4 as uuidv4 } from 'uuid';

import PortfolioImg from '../images/projects/portfolio.png';
import CoursesImg from '../images/projects/courses.png';
import VaccinsImg from '../images/projects/vaccins.png';
import HypixelImg from '../images/projects/hypixel.png';
import TintinImg from '../images/projects/tintin.png';
import DashboardImg from '../images/projects/dashboard.png';

import WHImg from '../images/projects/WitchHunt.png';
import PokemonImg from '../images/projects/pokemon.png';
import MinecraftImg from '../images/projects/minecraft.jpg';
import SteganoImg from '../images/projects/stegano.jpg';
import TaquinImg from '../images/projects/taquin2.png';
import ClashImg from '../images/projects/clash.png';
import DeImg from '../images/projects/de.jpg';
import ScrapingImg from '../images/projects/scraping.webp';
import UpdateImg from '../images/projects/update.png';
import EchecImg from '../images/projects/echec.png';

const projectsData = [
    {
        id: uuidv4(),
        category: "Site internet",
        listProjects : [
            {
                id: uuidv4(),
                title: "Portfolio",
                desc: "Réalisation d'un portfolio retraçant mon parcours académique, professionnel, les différents projets que j'ai réalisés (personnel et académique). Nous pouvons également y retrouver certaines de mes compétences et les langues que je parle. De plus, dans ce portfolio, nous pouvons y retrouver l'ensemble des informations afin de me contacter ainsi qu'un formulaire de contact qui m'envoie un e-mail grâce à EmailJS. Il s'agit d'un projet personnel.",
                techno: [
                    "React", "CSS", "EmailJS", 
                ],
                image: PortfolioImg,
                git:"https://github.com/Antoine-ValentinCharpentier/portfolio",
                youtube:"",
            },
            {
                id: uuidv4(),
                title: "Liste de courses",
                desc: "Site web permettant à ses utilisateurs de renseigner les produits qu'ils veulent acheter. Il a donc pour rôle celui d'une liste de courses. Différents profils peuvent être utilisés en même temps. Ce site web, intègre une fonctionnalité de sauvegarde des produits. Ainsi, l'utilisateur peut créer des produits (nom, remarques, images,...) pour les ajouter par la suite dans la liste de courses. De plus, il peut modifier/supprimer un produit qu'il a créé au préalable. Il s'agit d'un projet personnel.",
                techno: [
                    "HTML", "CSS", "PHP","JS","MySQL","MVC"
                ],
                image: CoursesImg,
                git:"https://github.com/Antoine-ValentinCharpentier/liste-de-course",
                youtube:"https://www.youtube.com/watch?v=_O-niALU_yI&feature=youtu.be",
            },
            {
                id: uuidv4(),
                title: "Gestion d’un centre de vaccination",
                desc: "Site web permettant de gérer un ensemble de centres de vaccination. Différentes fonctionnalités y sont présentes comme l'ajout d'un nouveau vaccin, centre, patient, réapprovisionnement de dose de vaccins aux centres, consultations du nombre d'injections administrées à un patient, récapitulatif des stocks de chaque centre, quelques statistiques, ... Il s'agit d'un projet académique.",
                techno: [
                    "HTML", "CSS", "PHP","MySQL","Bootstrap","MVC"
                ],
                image: VaccinsImg,
                git:"https://github.com/Antoine-ValentinCharpentier/LO07---Gestion-Centres-COVID",
                youtube:"",
            },
            {
                id: uuidv4(),
                title: "Filtrage dynamique de données",
                desc: "Site qui réalise un filtrage dynamique d’un ensemble d’images, de texte et de vidéo selon des paramètres renseignés par l’utilisateur. Il s'agit d'un projet personnel.",
                techno: [
                    "React", "CSS",
                ],
                image: HypixelImg,
                git:"https://gitlab.com/antoinevalentin.charpentier/fan-website-hypixel-skyblock",
                youtube:"https://www.youtube.com/watch?v=eCzL1QRJuOc",
            },
            {
                id: uuidv4(),
                title: "Les aventures de tintin",
                desc: "Site web ayant pour vocation de regrouper les fans de la série de bande dessinée « Les Aventures de Tintin ». Présence d’un système de connexion, forum, chat en temps réel. Il s'agit à l'origine d'un mini-projet académique (2h) qui est devenu par la suite un projet personnel.",
                techno: [
                    "HTML", "CSS", "PHP","MySQL","JS",
                ],
                image: TintinImg,
                git:"https://github.com/Antoine-ValentinCharpentier/tintin",
                youtube:"https://www.youtube.com/watch?v=up8kdRT7T2M&t=180s",
            },
            {
                id: uuidv4(),
                title: "Dashboard",
                desc: "Site web ayant pour vocation de modifier un ensemble d'information (prix d'une boutique,...) d'un serveur de mini jeu Minecraft. De plus, sur ce site, nous pouvons y retrouver un ensemble d'informations portant sur le serveur. Il s'agit d'un projet personnel réalisé en binôme.",
                techno: [
                    "HTML", "CSS", "PHP","MySQL",
                ],
                image: DashboardImg,
                git:"",
                youtube:"",
            },
        ]
    },
    {
        id: uuidv4(),
        category: "POO",
        listProjects : [
            {
                id: uuidv4(),
                title: "Jeu de cartes avec effets et IA (Witch Hunt)",
                desc: "Ce projet académique se décompose en deux parties : la conception UML du jeu puis son implémentation en Java & Swing. Il s'agit d'un jeu de cartes qui comporte chacune différents types d'effets. Durant une partie de Witch Hunt entre 3 et 6 joueurs s'opposent, avec la possibilité d'affronter des intelligences artificielles qui ont recours à différentes stratégies. Deux interfaces peuvent être utilisées en même temps afin d'y jouer : graphique, terminale. Génération d'une javadoc. Il s'agit d'un projet académique.",
                techno: [
                    "Java","Swing","MVC","Patron stratégie", "Patron observateur", "Singleton",  
                ],
                image: WHImg,
                git:"https://gitlab.com/antoinevalentin.charpentier/witch-hunt",
                youtube:"https://www.youtube.com/watch?v=_DYTCVfbkPY",
            },
            {
                id: uuidv4(),
                title: "Jeu pokémon aléatoire",
                desc: "Élaboration en Python & Pygame d'un remake du célèbre jeu Pokémon. La différence de ce jeu réside sur le fait que toute la carte où se déplace le joueur est générée totalement aléatoirement. Si on réalise deux parties de ce jeu, on n'aura pas la même carte, ni accès aux même Pokémon. La génération de la carte repose sur la génération d'un labyrinthe dont on a retiré les intersections. De plus, la difficulté du jeu s'adapte en fonction du niveau du joueur. Il s'agit à l'origine d'un projet académique en binôme, qui est devenu par la suite un projet personnel.",
                techno: [
                    "Python","Pygame",
                ],
                image: PokemonImg,
                git:"",
                youtube:"",
            },
            {
                id: uuidv4(),
                title: "Jeu d'échec",
                desc: "Réalisation d'un jeu d'échec en Java & JavaFX. Deux joueurs peuvent s'affronter autour d'une partie d'échec. Tour à tour, ils s'échangent la main. Le programme indique la position des pions sélectionnés et où ils peuvent être déplacés. Il s'agit d'un projet personnel.",
                techno: [
                    "Java","JavaFX",
                ],
                image: EchecImg,
                git:"",
                youtube:"",
            },
            {
                id: uuidv4(),
                title: "Plugins Minecraft",
                desc: "Réalisation de nombreux plugins pour un serveur de mini-jeux Minecraft. J'ai eu l'occasion de participer à l'élaboration de plugins pour l'administrtaion du serveur,  d'élaboration de mini-jeux/jeux (FK,Faction, PvpBox, ...), gestion d'une boutique, ... Projets réalisés en groupe de 3 personnes durant notre temps libre.",
                techno: [
                    "Java", "Spigot", 
                ],
                image: MinecraftImg,
                git:"",
                youtube:"",
            },
            
        ]
    },
    {
        id: uuidv4(),
        category: "Programmation impérative",
        listProjects : [
            {
                id: uuidv4(),
                title: "Stéganographie",
                desc: "Implémentation de trois méthodes de stéganographie en C. Cacher un quelconque document dans une image au format ppm et pgm. La première méthode consiste à cacher chaque bit du document dans chaque LSB des pixels de l'image dans l'ordre. La deuxième méthode est une variante de la première, mais avec un ordre de parcours généré à partir d'une clé renseignée par l'utilisateur. La troisième méthode à recours à la matrice de Hamming afin de réduire drastiquement le nombre de modifications à effectuer et donc augmenter l'imperceptibilité. Il s'agit d'un projet académique.",
                techno: [
                    "C", 
                ],
                image: SteganoImg,
                git:"https://gitlab.com/antoinevalentin.charpentier/stegano",
                youtube:"",
            },
            {
                id: uuidv4(),
                title: "Jeu du taquin",
                desc: "Implémentation en C du jeu du taquin dans une interface de type terminal. J'ai mélangé la grille du taquin jusqu'à ce qu'il soit réalisable, puis l'utilisateur peut déplacer les cases à l'aide du clavier jusqu'à ce qu'il soit terminé. Il s'agit d'un projet académique.",
                techno: [
                    "C",
                ],
                image: TaquinImg,
                git:"",
                youtube:"",
            },
            
        ]
    },
    {
        id: uuidv4(),
        category: "IHM",
        listProjects : [
            {
                id: uuidv4(),
                title: "Interface d'un jeu vidéo",
                desc: "Élaboration sous Figma de l'interface d'un jeu vidéo. Dans ce jeu, s'affrontent deux joueurs, chacun dispose d'un certain nombre de points à distribuer à des soldats. Les soldats sont distribués sur différentes zones et s'affrontent par la suite. Il y a également possibilité de déplacer ou non des soldats d'un site à un autre. Il s'agit d'un projet pédagogique réalisé en binôme.",
                techno: [
                    "Figma", 
                ],
                image: ClashImg,
                git:"",
                youtube:"",
            },
            {
                id: uuidv4(),
                title: "Dé sonore",
                desc: "Réalisation d’un dé sonore & lumineux afin de traiter la notion d'inclusivité des personnes malvoyantes dans une partie de dés parmi des personnes n'ayant pas de problème de vision. Chaque face ne possède pas de valeur attribuée par défaut. Toutes les faces du dé possèdent la même valeur. Lorsque le dé n'est plus en mouvement, un nombre aléatoire est généré (entre 1 et 6) puis affiché sur les faces du dé par l'intermédiaire de NeoPixel avec des couleurs différentes en fonctions du nombre obtenu. Par la suite, le dé émet par l'intermédiaire d'un haut-parleur la valeur du dé. Le système à recours à une carte Arduino. Il s'agit d'un projet académique, réalisé en groupe de 4 personnes.",
                techno: [
                    "Arduino Nano", "Neopixel", "DFPLayer", "Haut-Parleur", "Centrale inertielle",
                ],
                image: DeImg,
                git:"https://github.com/AVCharpentier/IF37-De-Sonore",
                youtube:"https://www.youtube.com/watch?v=Osne34Zu9Q8",
            },
            
        ]
    },
    {
        id: uuidv4(),
        category: "Autres",
        listProjects : [
            {
                id: uuidv4(),
                title: "Web Scraping",
                desc: "Récupération d'un ensemble de conversations Messenger à l'aide d'une technique d'extraction du contenu de sites Web à base de Selenium et de Python. Puis, exportation des données collectées au format JSON.  Il s'agit d'un projet personnel.",
                techno: [
                    "Python", "Selenium","JSON"
                ],
                image: ScrapingImg,
                git:"",
                youtube:"",
            },  
            {
                id: uuidv4(),
                title: "Administration d'un serveur de mini-jeux",
                desc: "Avec des amis, nous avons administré un serveur de mini-jeux Minecraft durant 3 ans : Update. J'ai eu l'occasion de participer à la réflexion de concepts que nous avons proposés, au développement, à l'élaboration de réflexion stratégiques, et au le déploiement du serveur, ...",
                image: UpdateImg,
                git:"",
                youtube:"",
            },            
        ]
    },
    

]

export default projectsData;