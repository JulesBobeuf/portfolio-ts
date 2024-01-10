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
        title: "Space Invaders Game",
        desc: "Made a space invaders game with multiple game levels.",
        imgUrl: "/projects/projectCard/SpaceInvaders.png",
        href: "spaceinvaders",
        technos: ["Java","JavaFX","Gradle"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        imgUrl: "/projects/projectCard/fractals.jpg",
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fruit Ninja",
        desc: "Fruit ninja clone that is adapted to most operating systems.",
        imgUrl: "/projects/projectArticle/fruitNinja.png",
        href: "fruitninja" ,
        technos: ["C#","Unity"]
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
        title: "Space Invaders Game",
        projectType: "University Project",
        nbContributors: "4",
        endDate: "15/01/2023",
        codeLink: "https://github.com/JulesBobeuf/SpaceInvaders/",
        image1: "/projects/projectArticle/spaceinvaders1.png",
        image2: "/projects/projectArticle/spaceinvaders2.png",
        subtitle1: "Context",
        subtitle2: "Features",
        subtitle3:"Final Product",
        text1: "During the Quality Development course we were taught how to program more efficiently. One of the topics was design patterns, and what would be a better way to implement them than a video game? We did not start the project from scratch. Instead, we were provided with most of the graphic user interface as well as a few classes and the controller. Next, we had to implement functionalities. Some were in the original game while others were created as a result of our own imagination. Additionally, we were tasked with learning the design patterns along the way and implementing them effectively.",
        text2: "There are many features in our game. The aliens first move from left to right, and will change directions at different times. They have the ability to shoot when the setting is enabled, and are also able to change their attack strategy from time to time. Some aliens will also have multiple lives to enhance their ability to survive hits. The player has a 1/5 chance to release a stronger bullet when shooting, which causes more damage to the aliens. Whenever the player hits a shot, they will be invincible for a certain amount of time. The player can also place walls using the up arrow key as well as throwing bombs using the bottom arrow. These bombs need to be hit by a bullet in order to detonate. Finally, some bonuses will randomly drop throughout the game, giving the player extra health.",
        text3: "Our game is composed of four levels ranked from easiest to hardest. The functionalities listed above are all available in at least one level. The first one is extremely easy whereas the last one is almost impossible. On a personal note, I loved to work on this project, and I'm very proud of the final result. I learnt a lot while working towards this project and will definitely be reusing this knowledge often.",
        listContributors: [
            {name: "Aymeric Jakobowski", website: "Linkedin", link: "https://www.linkedin.com/in/aymeric-jakobowski/"},
            {name: "Thomas Santoro", website: "Linkedin", link: "https://www.linkedin.com/in/thomas-santoro/"},
            {name: "Pierre Shreiner", website: "Linkedin", link: "https://www.linkedin.com/in/pierre-schreiner/"}
        ],
        href: "spaceinvaders",
    },

    {
        title: "Fractals Generation",
        projectType: "University Project",
        nbContributors: "3",
        endDate: "28/10/2022",
        codeLink: "https://github.com/JulesBobeuf/Fractals",
        image1: "/projects/projectArticle/juliaCyan.jpg",
        image2: "/projects/projectArticle/tapisDeSierpinski.jpg",
        subtitle1: "Beginning",
        subtitle2: "Creating the images",
        subtitle3: "Final Result",
        text1: "In the Quality Development course during our third semester, we focused on improving the clarity of our code. During the course we discussed design patterns, and our goal was to be able to implement them within our programs. Initially, we had to code the mathematical formulas in Java. It was relatively unproblematic except for the few design patterns we had to use, such as an iterator for example. The biggest issue we faced was regarding Sierpinspki fractals as we needed to use recursivity. Eventually, Aymeric made it for us. My responsibility was to code the complex points and their representation in plans, as this is what we used to represent the fractals.",
        text2: "To generate the fractals, we needed to create graphic representation for them. We made classes that would do this for us, using a few adaptors as well as a builder to do that. After launching the program, we receive an image saved at the root of the project with the specified name.",
        text3: "In the end we had two ways of creating the fractals: either using a test class or using bash programs made for each fractal. The user had the ability to choose the colours the fractal would have, the zoom, the size of the image and a multitude of other parameters which made every new picture wonderfully exceptional. It was a very difficult project, with its ups and downs (like me being sick and having fever for the whole week), but we made it, and that's what matters.",
        listContributors: [
            {name: "Aymeric Jakobowski", website: "Linkedin", link: "https://www.linkedin.com/in/aymeric-jakobowski/"},
            {name: "Thomas Santoro", website: "Linkedin", link: "https://www.linkedin.com/in/thomas-santoro/"}
        ],
        href: "fractals",
    },

    {
        title: "Fruit Ninja",
        projectType: "Udemy Project",
        nbContributors: "1",
        endDate: "21/01/2023",
        codeLink: "https://github.com/JulesBobeuf/FruitNinja/",
        image1: "/projects/projectArticle/fruitN.png",
        image2: "/projects/projectArticle/fruitNinjaEnd.png",
        subtitle1: "Starters",
        subtitle2: "Spawners",
        subtitle3: "Final Result",
        text1: "While i was enjoying what I was taught at university, I decided to learn skills on my own as well to grow my skills. I bought Udemy courses to help me in this goal as those were the best option for me. One of the courses I bought made us program a Fruit Ninja clone with Unity, which is where this project comes from. First things first, I had to deal with the assets within the game. I was given blender files for each fruit as well as the bomb. I programmed the class for them as well as prefabs : I gave them a RigidBody 2D as well as a 2D Collider in order to slice them later on. I could now re-use the same fruits over and over again. I also made the code for the bombs in order in for them to stop the game if the user interacts with them. Then, I made a blade which was set on the user's mouse which I got to work with a simple RigidBody 2D / Collider setup and a Trail Renderer to display the blade with a great animation. Thanks to some back-end scripts to handle the game, I already had most of it working.",
        text2: "For the user to play the game indefinitely, I needed to implement spawners for the game to be infinite. I made that functionality by using simple GameObjects and a lot of back-end code. Every X amount of frame, a spawner is going to spawn an object and throw it at a random speed. This ensures the user that the game will continue on and on, till he hits a bomb.",
        text3: "I now have a Fruit Ninja game that works on all platforms thanks to Unity! It possesses all basics features: a score and a high score, a menu, multiple fruits that all give a different number of points... This project was a really fun one to work on. It taught me a lot about Unity and C#, and definitely makes me want to do more projects.", 
        listContributors: [],
        href: "fruitninja",
    }
]
export default listPropProjectCard