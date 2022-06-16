import React from 'react'
import styled from 'styled-components'
import Search from './Search'

const Header = () => {
  return (
    <HeaderWrapper>
        <Search/>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
    grid-area: head;
   background-color:  var(--white);
   box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);

`

export default Header