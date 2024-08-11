
import styled from "styled-components";

export const HomeContainer = styled.main`
    height:100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
         align-items: center;
         gap: 3.5rem;
    }
`


export const BaseCountdownButton = styled.button`
    width: 100%;
    border: 0px;
    padding: 1rem;
    border-radius: 8px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    
    cursor: pointer;

    background: ${props => props.theme['green-500']};
    color: ${props => props.theme['green-100']};

    &:disabled{
        opacity:0,7;
        cursor:not-allowed;
    }

    &:not (:disabled) :hover {
    background: ${props => props.theme['green-700']}};

`
export const StartCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme['green-100']};


`

export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme['red-500']};
    color: ${props => props.theme['red-00']};

`