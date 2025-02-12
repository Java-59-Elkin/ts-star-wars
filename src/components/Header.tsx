import Navigation from "./Navigation.tsx";

import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useEffect, useState} from "react";

const Header = () => {
    const [hero, setHero] = useState<string | undefined>();
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (characters[heroId]) {
            setHero(characters[heroId].name);
        }
    }, []);

    return (
        <header className={'rounded-t-2xl bg-grey-color'}>
            <Navigation />
            <h1 className="text-center text-3xl py-6">{hero}</h1>
        </header>
    );

};

export default Header;