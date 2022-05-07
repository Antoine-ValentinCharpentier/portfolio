import { v4 as uuidv4 } from 'uuid';
import ProjectImg1 from '../images/paysage.png'

const projectsData = [
    {
        id: uuidv4(),
        category: "Site internet",
        listProjects : [
            {
                id: uuidv4(),
                title: "Aliquam dui lectus, posuere id massa",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lorem dignissim, ultricies est a, rhoncus dui. Nam ut eleifend diam, eget pharetra leo. Proin auctor pretium neque ac facilisis. Proin eget sollicitudin mi.",
                techno: [
                    "HTML", "CSS", "PHP", "MySQL"
                ],
                image: ProjectImg1,
                git:"https://github.com/Antoine-ValentinCharpentier/portfolio",
                youtube:"https://www.youtube.com/watch?v=_O-niALU_yI&feature=youtu.be",
            },
            {
                id: uuidv4(),
                title: "Aliquam dui lectus, posuere id massa",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lorem dignissim, ultricies est a, rhoncus dui. Nam ut eleifend diam, eget pharetra leo. Proin auctor pretium neque ac facilisis. Proin eget sollicitudin mi.",
                image: ProjectImg1,
                git:"https://github.com/Antoine-ValentinCharpentier/portfolio",
            },
            {
                id: uuidv4(),
                title: "Aliquam dui lectus, posuere id massa",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lorem dignissim, ultricies est a, rhoncus dui. Nam ut eleifend diam, eget pharetra leo. Proin auctor pretium neque ac facilisis. Proin eget sollicitudin mi.",
                image: ProjectImg1,
                youtube:"https://www.youtube.com/watch?v=_O-niALU_yI&feature=youtu.be",
            },
        ]
    },
    {
        id: uuidv4(),
        category: "POO",
        listProjects : [
            {
                id: uuidv4(),
                title: "Aliquam dui lectus, posuere id massa",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lorem dignissim, ultricies est a, rhoncus dui. Nam ut eleifend diam, eget pharetra leo. Proin auctor pretium neque ac facilisis. Proin eget sollicitudin mi.",
                image: ProjectImg1,
                git:"https://github.com/Antoine-ValentinCharpentier/portfolio",
                youtube:"https://www.youtube.com/watch?v=_O-niALU_yI&feature=youtu.be",
            },
            {
                id: uuidv4(),
                title: "Aliquam dui lectus, posuere id massa",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lorem dignissim, ultricies est a, rhoncus dui. Nam ut eleifend diam, eget pharetra leo. Proin auctor pretium neque ac facilisis. Proin eget sollicitudin mi.",
                image: ProjectImg1,
                git:"https://github.com/Antoine-ValentinCharpentier/portfolio",
            },
            {
                id: uuidv4(),
                title: "Aliquam dui lectus, posuere id massa",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lorem dignissim, ultricies est a, rhoncus dui. Nam ut eleifend diam, eget pharetra leo. Proin auctor pretium neque ac facilisis. Proin eget sollicitudin mi.",
                image: ProjectImg1,
                youtube:"https://www.youtube.com/watch?v=_O-niALU_yI&feature=youtu.be",
            },
        ]
    },
    

]

export default projectsData;