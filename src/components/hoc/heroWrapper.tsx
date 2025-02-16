import { useParams } from "react-router";
import { characters, defaultHero } from "../../utils/constants.ts";
import {FC, useContext, useEffect} from "react";
import {SWContext} from "../../utils/context.ts";
import ErrorPage from "../ErrorPage.tsx";

export const heroWrapper = (WrappedComponent: FC<never>) => props => {
        const {heroId = defaultHero} = useParams();
        const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (!characters[heroId]) {
            return
        }
        changeHero(heroId);
    }, [heroId]);


    return characters[heroId] ? (
        <WrappedComponent heroId={heroId} {...props} />
    ) : <ErrorPage/>;
}