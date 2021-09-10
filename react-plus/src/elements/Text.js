import React from 'react'
import { flushSync } from 'react-dom'
import styled from 'styled-components'

const Text = (props) => {
    const {bold, color, size, children, margin} = props

    const styles = {bold:bold, color:color, size:size, margin:margin}
    return(
        <P {...styles}>
            {children}
        </P>
    )
}

Text.defaultProps = {
    bold : false,
    color : '#222831',
    size : '14px',
    children : null,
    margin : false,
}

const P = styled.p`
color : ${(props) => props.color};
font-size : ${(props) => props.size};
font-weight : ${(props) => props.bold?"bold":"400"};
margin : ${(props) => props.margin? props.margin : ''};
display : inline;
white-space : nowrap;
`

export default Text