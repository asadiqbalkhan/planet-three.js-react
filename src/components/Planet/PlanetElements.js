import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: fixed;
    z-index: 1;
`

export const PlanetBg = styled.canvas`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
`

export const PlanetContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
`