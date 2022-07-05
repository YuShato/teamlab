import { useEffect, useRef, useState } from "react";
import {
    WidthWrapper,
    Container,
    SearchInput,
    IconRightArrow,
    IconMagnifyingGlass,
} from "./styles";

const Search = () => {
    const targetRef = useRef(null);
    const [ isHovered, setIsHovered ] = useState(false);
    const [ isFocused, setIsFocused ] = useState(false);
    const showSearchInput = isHovered || isFocused;

    useEffect(() => {
        targetRef.current.value = "";
    }, [ showSearchInput ]);

    return (
        <WidthWrapper>
            <Container
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                hover={showSearchInput}
            >
                <SearchInput ref={targetRef} showSearchInput={showSearchInput} />
                {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
            </Container>
        </WidthWrapper>
    );
};

export default Search;