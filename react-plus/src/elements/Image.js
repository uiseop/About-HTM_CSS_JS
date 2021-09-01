import styled from 'styled-components'
import React from 'react'

const Image = (props) => {
    const {shape, src, size} = props

    const styles = {
        src:src,
        size:size
    }

    if(shape === "circle"){
        return(
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === 'rectangle'){
        return(
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }
    return(
        <React.Fragment>

        </React.Fragment>
    )
}

Image.defaultProps = {
    shape : "circle",
    src : "http://dh.aks.ac.kr/Edu/wiki/images/b/b7/%ED%95%91%EA%B5%AC.jpg",
    size : 36,
}

const AspectOutter = styled.div`
    width: 100%;
    min-width : 250px;
`

const AspectInner = styled.div`
    position : relative;
    padding-top : 75%;
    overflow : hidden;
    background-image : url("${(props) => props.src}");
`

const ImageCircle = styled.div`
    --size : ${(props) => props.size}px;
    width : var(--size);
    height : var(--size);
    border-radius : var(--size);

    background-image : url("${(props) => props.src}");
    background-size : cover;
    margin : 4px;
`

export default Image