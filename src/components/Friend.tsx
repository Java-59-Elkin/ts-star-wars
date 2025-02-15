import {characters} from "../utils/constants.ts";

interface Props {
    friend: string,
    pos: number
}

const Friend = ({friend, pos}: Props) => {
    let styles = "w-full";
    if (pos === 7) {
        styles += ' rounded-bl-2xl'
    }
    if (pos === 9) {
        styles += ' rounded-br-2xl'
    }
    return (
        <img className={styles} src={characters[friend].img} alt={characters[friend].name}/>
    );
};

export default Friend;