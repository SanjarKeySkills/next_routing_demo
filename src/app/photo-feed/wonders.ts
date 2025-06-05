import photo1 from "./photos/photo1.png";
import photo2 from "./photos/photo2.png";
import photo3 from "./photos/photo3.png";
import photo4 from "./photos/photo4.png";
import photo5 from "./photos/photo5.png";
import photo6 from "./photos/photo6.png";
import photo7 from "./photos/photo7.png";

import { StaticImageData } from "next/image";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    author: string;
    location: string;
};

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Ecology one",
        src: photo1,
        author: "Askat",
        location: "Mramornoe",
    },
    {
        id: "2",
        name: "Ecology two",
        src: photo2,
        author: "Askat",
        location: "Ak-Zhol",
    },
    {
        id: "3",
        name: "Ecology three",
        src: photo3,
        author: "Askat",
        location: "Chui",
    },
    {
        id: "4",
        name: "Ecology four",
        src: photo4,
        author: "Askat",
        location: "Mramornoe",
    },
    {
        id: "5",
        name: "Ecology five",
        src: photo5,
        author: "Askat",
        location: "Ak-Zhol",
    },
    {
        id: "6",
        name: "Ecology six",
        src: photo6,
        author: "Askat",
        location: "Frunze",
    },
    {
        id: "7",
        name: "Ecology seven",
        src: photo7,
        author: "Askat",
        location: "KarlMarx",
    },
];

export default wondersImages;
