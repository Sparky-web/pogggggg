import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";

import lol from "./audio/Fuck you.mp3"
import lol1 from "./audio/Ass we can.mp3"
import lol2 from "./audio/Sorry.mp3"
import lol3 from "./audio/Thank you sir.mp3"

const audios = [lol, lol1, lol2, lol3]

const playRandom = () => {
    const item = getRandom(audios)
    new Audio(item).play()
}

const getRandom = (array) => array[Math.floor(Math.random()*array.length)];

const images = [
    "https://c.tenor.com/gYS26y8Rj8AAAAAC/gachi-gachimuchi.gif",
    "https://c.tenor.com/P4sNoxkUSbEAAAAM/billy-herrington-gachi.gif",
    "https://c.tenor.com/bB0sNG4Q7U8AAAAM/billy-gachimuchi.gif",
    "https://thumbs.gfycat.com/PastelGleamingKookaburra-max-1mb.gif"
]

function App() {
    const [fistingCount, setFistingCount] = useState(0)
    const [suckCount, setSuckCount] = useState(0)
    const [image, setImage] = useState(getRandom(images))

    const increment = () => {
        setImage(getRandom(images))
        playRandom()
        localStorage.setItem("suckDick", suckCount + 1)
        setSuckCount(suckCount + 1)
    }
    const increment1 = () => {
        setImage(getRandom(images))
        playRandom()
        localStorage.setItem("fistingAnal", fistingCount + 1)
        setFistingCount(fistingCount + 1)
    }

    useEffect(() => {
        setFistingCount(+localStorage.getItem("fistingAnal"))
        setSuckCount(+localStorage.getItem("suckDick"))
    }, [])


    return (
        <div className={"bg"} style={{backgroundImage: `url("${image}")`}}>
            <Helmet>
                <title>Gachinator</title>
                <link rel="icon" type="image/gif" href="https://c.tenor.com/3CrIwgbopCUAAAAM/billy-gachi.gif" sizes="16x16" />
            </Helmet>

            <button className={"fisting"} onClick={increment1}>
                Сделать <span className="pogg">♂fisting ass♂</span>
            </button>
            <h1>Вы {fistingCount} раз сделали <span className="pogg">♂fisting ass♂</span></h1>

            <br/>

            <button className={"suck"} onClick={increment}>
                <span className="pogg">♂Suck dick♂</span>
            </button>
            <h1>Вы {suckCount} раз <span className="pogg">♂sucked dick♂</span></h1>
        </div>
);
}

export default App;
