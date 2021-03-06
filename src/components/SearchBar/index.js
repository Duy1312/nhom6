import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types"
import searchIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const inital = useRef(true);

    

    useEffect(() => {
        if(inital.current){
            inital.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);
        return () => clearTimeout(timer);

    },[setSearchTerm, state]);


    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search" />
                <input type="text" placeholder="Search" onChange={event => setState(event.currentTarget.value)} 
                value={state}
                />
            </Content>
        </Wrapper>
    )


}

SearchBar.propTypes = {
    callback: PropTypes.func,
}
export default SearchBar;