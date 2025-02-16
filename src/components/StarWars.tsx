import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {heroWrapper} from "./hoc/heroWrapper";


const StarWars = () => {

    return (
        <Text>{starWarsInfo}</Text>
    );
};

export default heroWrapper(StarWars);