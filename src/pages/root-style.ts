import styled from 'styled-components'

export const RootContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    max-height: 296px;

    margin: 0 auto;
`

export const RootContent = styled.div`
    background: ${(props) => props.theme['base-background']};
    

`