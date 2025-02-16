import { useParams } from "react-router";
import { characters, defaultHero } from "../../utils/constants.ts";
import React, {useContext, useEffect} from "react";
import {SWContext} from "../../utils/context.ts";
import ErrorPage from "../ErrorPage.tsx";

export const heroWrapper = (WrappedComponent: React.FunctionComponent) => {
    return (props: any) => {
        const {heroId = defaultHero} = useParams();
        const {changeHero} = useContext(SWContext);
        const {changeFlagHero} = useContext(SWContext);

        useEffect(() => {
            if (!characters[heroId]) {
                changeFlagHero(false);
                return;
            }
                changeHero(heroId);
        }, [heroId]);


        return characters[heroId] ? (
            <WrappedComponent heroId={heroId} {...props} />
        ) : <ErrorPage/>;
    }
}