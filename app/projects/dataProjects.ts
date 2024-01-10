export interface PropProjectCard {
    title: string; 
    desc:string; 
    imgUrl: string; 
    href: string; 
    technos: string[];
}

export interface Contributor {
    name: string;
    website: string;
    link: string;
}

export interface PropProjectArticle {
    title: string;
    projectType: string;
    nbContributors: string;
    endDate: string;
    codeLink: string;
    image1: string;
    image2: string;
    subtitle1: string
    subtitle2: string
    subtitle3: string
    text1: string;
    text2: string;
    text3: string;
    listContributors: Contributor[];
    href: string; /* used to make the mapping */
};

const listPropProjectCard: PropProjectCard[] = [
    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    }
]

export const listPropProjectArticle: PropProjectArticle[] = [
    {
        title: "Fractals Generation",
        projectType: "University Project",
        nbContributors: "3",
        endDate: "University Project",
        codeLink: "https://github.com/JulesBobeuf/Fractals",
        image1: "/projects/projectArticle/juliaCyan.jpg",
        image2: "/projects/projectArticle/tapisDeSierpinski.jpg",
        subtitle1: "Beginning",
        subtitle2: "Creating the images",
        subtitle3: "Final Result",
        text1: "Initially, we had to code the mathematical formulas in Java. It was relatively unproblematic except for the few design patterns we had to use, such as an iterator for example. The biggest issue we faced was regarding Sierpinspki fractals as we needed to use recursivity. Eventually, Aymeric made it for us. My responsibility was to code the complex points and their representation in plans, as this is what we used to represent the fractals.",
        text2: "To generate the fractals, we needed to create graphic representation for them. We made classes that would do this for us, using a few adaptors as well as a builder to do that. After launching the program, we receive an image saved at the root of the project with the specified name.",
        text3: "In the end we had two ways of creating the fractals: either using a test class or using bash programs made for each fractal. The user had the ability to choose the colours the fractal would have, the zoom, the size of the image and a multitude of other parameters which made every new picture wonderfully exceptional. It was a very difficult project, with its ups and downs (like me being sick and having fever for the whole week), but we made it, and that's what matters.",
        listContributors: [
            {name: "Aymeric Jakobowski", website: "Linkedin", link: "https://www.linkedin.com/in/aymeric-jakobowski/"},
            {name: "Thomas Santoro", website: "Linkedin", link: "https://www.linkedin.com/in/thomas-santoro/"}
        ],
        href: "fractals",
    }
]
export default listPropProjectCard