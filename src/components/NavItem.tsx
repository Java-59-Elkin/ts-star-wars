import Button from "./ui/Button.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface Props {
    itemTitle: string;
}

const NavItem = ({itemTitle}: Props) => {
    const {changePage} = useContext(SWContext);
    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    );
};

export default NavItem;

