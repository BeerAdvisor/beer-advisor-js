import styled from 'styled-components';

export const StepCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 220px;
    background-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.textColor};
    border-radius: 36px;
    box-shadow: 2.6px 3.1px 10.3px 0.7px rgba(0, 0, 0, 0.1);
    padding: 20px 30px;
    margin 0 20px;
`;