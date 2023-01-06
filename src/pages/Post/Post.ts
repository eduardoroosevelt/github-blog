import styled from 'styled-components'


export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -88px;
    width: 100%;

`

export const PostContent = styled.div`
    max-width: 864px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 40px 32px;
    gap: 24px;

    color: ${(props) => props.theme['base-text']};
    overflow: visible;

    img{
        width: 100%;
    }
`