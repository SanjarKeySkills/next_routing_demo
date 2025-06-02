export type WonderImage = {
    id: string;
    name: string;
    src: string;
    // src: StaticImageData;
    author: string;
    location: string;
};

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Ecology one",
        src: "./photos/photo1.png",
        author: "Askat",
        location: "Mramornoe",
    },
    {
        id: "2",
        name: "Ecology two",
        src: "./photos/photo2.png",
        author: "Askat",
        location: "Ak-Zhol",
    },
    {
        id: "3",
        name: "Ecology three",
        src: "./photos/photo3.png",
        author: "Askat",
        location: "Chui",
    },
    {
        id: "4",
        name: "Ecology four",
        src: "./photos/photo4.png",
        author: "Askat",
        location: "Mramornoe",
    },
    {
        id: "5",
        name: "Ecology five",
        src: "./photos/photo5.png",
        author: "Askat",
        location: "Ak-Zhol",
    },
    {
        id: "6",
        name: "Ecology six",
        src: "./photos/photo6.png",
        author: "Askat",
        location: "Frunze",
    },
    {
        id: "7",
        name: "Ecology seven",
        src: "./photos/photo7.png",
        author: "Askat",
        location: "KarlMarx",
    },
];

export default wondersImages;
