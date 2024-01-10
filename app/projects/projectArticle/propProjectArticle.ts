export interface Contributor {
    name: string;
    link: string;
}

interface PropProjectArticle {
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
};

export default PropProjectArticle;