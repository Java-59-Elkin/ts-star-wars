import Navigation from "./Navigation.tsx";
import {characters} from "../utils/constants.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const Header = () => {
  const {hero} = useContext(SWContext);
  const {flagHero} = useContext(SWContext);

    return (flagHero === true) ? (
            <header className={'rounded-t-2xl bg-grey-color'}>
                <Navigation/>
                <h1 className="text-center text-3xl py-6">{characters[hero].name}</h1>
            </header>
        ) :
        <header className={'rounded-t-2xl bg-grey-color'}>
            <Navigation/>
            <h1 className="text-center text-3xl py-6">Wrong character</h1>
        </header>
        ;

};

export default Header;