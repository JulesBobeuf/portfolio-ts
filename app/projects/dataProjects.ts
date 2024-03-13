import { StaticImageData } from "next/image";
import imgSpaceInvaders from "/public/projects/projectCard/SpaceInvaders.png"
import imgfractals from "/public/projects/projectCard/fractals.jpg"
import imgfruitNinja from "/public/projects/projectCard/fruitNinja.png"
import imgMarathon from "/public/projects/projectCard/marathonLogo.png"
import imgMsi from "/public/projects/projectCard/msi.png"
import imgNekleo from "/public/projects/projectCard/nekleo.png"
import imgVlrs from "/public/projects/projectCard/vlrs.png"
import imgFirstWebsite from "/public/projects/projectCard/epee2bois.png"

export interface PropProjectCard {
    title: string; 
    desc:string; 
    img: StaticImageData; 
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
        img: imgSpaceInvaders,
        href: "spaceinvaders",
        technos: ["Java","JavaFX","Gradle"]
    },

    {
        title: "Fractals Generation",
        desc:"Created an application that generates fractals.",
        img: imgfractals,
        href: "fractals" ,
        technos: ["Java","Gradle","Bash"]
    },

    {
        title: "Fruit Ninja",
        desc: "Fruit ninja clone that is adapted to most operating systems.",
        img: imgfruitNinja,
        href: "fruitninja" ,
        technos: ["C#","Unity"]
    },

    {
        title: "La Toile",
        desc: "Programmed a website within 2 days that displays an art gallery.",
        img: imgMarathon,
        href: "marathon" ,
        technos: ["PHP","Laravel","HTML", "CSS"]
    },

    {
        title: "Weather app",
        desc: "Development of a website that displays atmospheric data through an API.",
        img: imgMsi,
        href: "weatherapp" ,
        technos: ["Python","Flask","HTML", "CSS"]
    },

    {
        title: "Stock / Sales management Application",
        desc: "Creation of a stock / sales management app.",
        img: imgNekleo,
        href: "stocksales" ,
        technos: ["Java","JavaFX"]
    },

    {
        title: "Discord bot",
        desc: "Development of a Discord bot that handles community events.",
        img: imgVlrs,
        href: "discordbot" ,
        technos: ["Python","PostgreSQL"]
    },

    {
        title: "My first website",
        desc: "Created a showcase website for an event company.",
        img: imgFirstWebsite,
        href: "firstwebsite",
        technos: ["HTML","CSS"]
    },
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
    },

    {
        title: "La Toile",
        projectType: "University Project",
        nbContributors: "7",
        endDate: "16/12/2022",
        codeLink: "https://github.com/JulesBobeuf/LaToile",
        image1: "/projects/projectArticle/marathonHomepage.png",
        image2: "/projects/projectArticle/marathonPage2.png",
        subtitle1: "Context",
        subtitle2: "Back-end & Design",
        subtitle3: "Final Result",
        text1: "For our PHP Exams, we were coupled with a group of multimedia students to make a website within 34 hours. The default theme was 'Numerical Art', so we chose 'French Numerical Art' for our website. We had to think about everything: The logo, the front/back-end... Our team was made of Aymeric Jakobowski, Thomas Santoro, Clara Amador, Julien Fischer, Louis Legry, Alexandre Feraud and myself.",
        text2: "We, IT Students, started with back-end obviously. We created the CRUD of our canvas and made every feature we were asked to do, like sorting the canvas, the authors, allowing the logged in users to like canvas and so on. Furthermore, every logged in user can leave comments under canvas, and even post theirs in the community room. For the design part, we decided to go fully in and make it obvious that our website was primary destined to the French audience: Our logo contains the French flag in it, and we based our website on the French metro. Indeed, when you get on the homepage, you can see a metro that moves forward, and when you click on 'visit the exhibition' you get to see that metro a bit bigger as well as a few metro stops which lead to a themed room of our exhibition, just like 3D, or AI.",
        text3: "Thanks to the Multimedia team, we got a working website which looks great and contains a beautiful art gallery that follows the themes given. The website was not polished as we only had 34 hours, but the functionalities are there and the core of the design as well. Compared to some other groups, I'm convinced that we did a great job. To finish, I would like to thank my six team mates as it was really hard but we managed to pull through, and I am so proud of the final product.",
        listContributors: [
            {name: "Aymeric Jakobowski", website: "Linkedin", link: "https://www.linkedin.com/in/aymeric-jakobowski/"},
            {name: "Thomas Santoro", website: "Linkedin", link: "https://www.linkedin.com/in/thomas-santoro/"},
            {name: "Julien Fischer", website: "Linkedin", link: "https://www.linkedin.com/in/julienfischer777/"},
            {name: "Clara Amador", website: "Linkedin", link: "https://www.linkedin.com/in/clara-amador-490a91237/"},
            {name: "Louis Legry", website: "Linkedin", link: "https://www.linkedin.com/in/louis-legry-426436239/"},
            {name: "Alexandre Feraud", website: "Linkedin", link: "https://www.linkedin.com/in/alexandre-feraud-a81893143/"},
        ],
        href: "marathon",
    },

    {
        title: "Weather app",
        projectType: "University Project",
        nbContributors: "3",
        endDate: "7/11/2022",
        codeLink: "https://github.com/JulesBobeuf/weather-app",
        image1: "/projects/projectArticle/MSIDiagram.png",
        image2: "/projects/projectArticle/msi.png",
        subtitle1: "Context",
        subtitle2: "Retrieving and displaying data",
        subtitle3: "Final Result",
        text1: "Thomas Santoro, Aymeric Jakobowski and I developed a web application that displays atmospheric data for a selected town. The goal was to collect the data, to store them in a SQLite database and to display them through texts and graphics. In order to do that, we used Flash, a Python Framework.",
        text2: "The first thing we needed to do was to collect the data. For that, we used an API called wttr. (http://wttr.in) We received the data in a list, which after treatment, was sent into the database to store the informations. We fully coded the database with Python. We developed functions that would create and delete the tables, that would insert data, or that would retrieve it. In order to do this, we first thought about how the database would work, before writing the Python code. In order to display the data, we first had to get it from the database. In order to do that, we used SQL queries that were adapted to what the user wanted. We then used HTML templates with a bit of CSS to display it nicely onto the website. For the graphics, we mainly used Matploblib, a python module. To have a user-friendly app, we made the data collect automatic. Indeed, if the program is online, it will automatically retrieve the data for all requested towns every hour, and will store the queries it executes into a logger. This logger allows us to easily keep track about what the program does. It's also a help to find potential problems the application could have to retrieve the data.",
        text3: "As said earlier, the application takes care about everything that's related to its back-end. All the user needs to do is to go on the website and to enter the town he wants to retrieve the data for and a time span. Then, the app will load a new template and will show the retrieved data.",
        listContributors: [
            {name: "Aymeric Jakobowski", website: "Linkedin", link: "https://www.linkedin.com/in/aymeric-jakobowski/"},
            {name: "Thomas Santoro", website: "Linkedin", link: "https://www.linkedin.com/in/thomas-santoro/"}
        ],
        href: "weatherapp",
    },

    {
        title: "Creation of a stock / sales management app.",
        projectType: "University Project",
        nbContributors: "4",
        endDate: "17/06/2022",
        codeLink: "https://github.com/JulesBobeuf/SalesManagement/",
        image1: "/projects/projectArticle/appgvconsole.png",
        image2: "/projects/projectArticle/appgvhomepage.png",
        subtitle1: "Context",
        subtitle2: "Transformation into a GUI",
        subtitle3: "How it works?",
        text1: "Thomas Santoro, Aymeric Jakobowski, Pierre Shreiner and I had to develop a management/sales app that would be suitable for a company. There were four different big parts to do: The clients, articles and stocks parts first, then the lists to keep track of the cart of the buyer. I mainly worked on the last three parts with the help of Pierre Shreiner, one of my mates. The other two, Thomas Santoro and Aymeric Jakobowski, worked on the Client part as well as some management class assignment we had to do.",
        text2: "At this point, we had a console app, but it was not very user friendly. We then logically had to transform it into a Graphic User Interface to improve that. There were multiple views that were all linked together. With the help of buttons and listboxes, we managed to display all the required data and functionalities we programmed earlier.",
        text3: "When you launch the application, you will find yourself in front of a GUI that will let you select which part you would like to access: clients, stocks... Afterwards, you will have menus that will open up, which will let you choose whether if you want to see the current data, if you want to add, update or delete data and so on. You could also select how you would want the data to be sorted. As a whole, the app is quite complete, especially for first year students.",
        listContributors: [
            {name: "Aymeric Jakobowski", website: "Linkedin", link: "https://www.linkedin.com/in/aymeric-jakobowski/"},
            {name: "Thomas Santoro", website: "Linkedin", link: "https://www.linkedin.com/in/thomas-santoro/"},
            {name: "Pierre Shreiner", website: "Linkedin", link: "https://www.linkedin.com/in/pierre-schreiner/"}
        ],
        href: "stocksales",
    },

    {
        title: "Discord bot",
        projectType: "Personal Project",
        nbContributors: "1",
        endDate: "16/2/2022",
        codeLink: "https://github.com/JulesBobeuf/VLRSBot/",
        image1: "/projects/projectArticle/vlrs.png",
        image2: "/projects/projectArticle/vlrslb.png",
        subtitle1: "Context & Working environment",
        subtitle2: "Functionalities",
        subtitle3: "Epilogue",
        text1: "During my first year at university, I had learnt Python and PostgreSQL. While I was in holidays, I wanted to experience a bit and to use what I had learnt at school on a real project. In order to do this project, I had to familiarize myself with the 'psycopg2' python library for the database as well as the 'py-cord' library for discord. The project was not long in itself but it took me a very long time to get each functionality working as there was a lot of bugs related to Python and the database.",
        text2: "The bot's use was to add a currency to a server which you could earn by winning community events. Staff members would give the currency to whichever user won the event with a private command. After earning a good amount, the users could purchase perks within the discord server.",
        text3: "The bot was hosted on a cloud and later on my Raspberry PI. I did not get to use it much, but it still was a great project to work on as it taught me a lot of things. Those ranging from the use of 'async' and 'await' in Python to the use a database in a programming language. I later on learnt those topics at university, and it felt relatively easy for me compared to my classmates as I had already experienced the topics throughout this project.",
        listContributors: [],
        href: "discordbot",
    },

    {
        title: "My first website",
        projectType: "University Project",
        nbContributors: "3",
        endDate: "10/01/2022",
        codeLink: "https://github.com/JulesBobeuf/EventWebsite",
        image1: "/projects/projectArticle/epee2bois.png",
        image2: "/projects/projectArticle/epee2bois2.png",
        subtitle1: "Subject",
        subtitle2: "The making",
        subtitle3: "Final Result",
        text1: "We had to create an event organizer company and to make its website. Logically i'll focus more on the HTML/CSS part as it was my job. Besides that, we had to evaluate nearby market, to find a company name, to draw the logo, to create a graphic chart and so on. We deciced to create an escape game company, which would be specialized in creating completely new escape game for the customers. We also decided to focus mainly in fantasy theme, as it is a fascinating thing to create escape games based on movies, books or on just our thoughts.",
        text2: "Due to the short amount of time we had and the lack of skills we owned, the website could not look as catchy as most of your favorite websites. We also did not learn anything JS nor PHP which limited our options. We had to do it fully in HMTL/CSS. Our website had most likely 2 designs : we had the homepage which was really different from the others. It needed to hit on customers's eyes and to convinced them to buy our product. We opted for a background picture and a few catchy sentences to present our other pages. On the other side, the other pages were quite simple, mainly being purple with text to communicate with our potential customers, while of course following our graphic chart. ",
        text3: "We logically had a quite simple website, but did we really need more? We had 6 pages : The homepage, the contact form, the products page, the about us page and the price page. Our website was fully responsive and comported a navigation bar, a footer and obviously content. It was a really important project for me as it made me like programming website as it was an obscure world for me before. Thanks to my friends, I received many tips that made me improve a lot and which grew my HTML/CSS a few steps ahead. I am really proud of this first Computer science-related project, as I will for sure build more websites, whenever I will get the opportunity.",
        listContributors: [
            {name: "Elsa Logier", website: "Linkedin", link: "https://www.linkedin.com/in/elsa-logier-2bb692254/"},
            {name: "Thomas Santoro", website: "Linkedin", link: "https://www.linkedin.com/in/thomas-santoro/"}
        ],
        href: "firstwebsite",
    },
]
export default listPropProjectCard