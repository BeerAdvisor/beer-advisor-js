import styled from '../../../styled-components';

export const AvailabilityCardWrapper = styled.div`
    max-width: 49rem;
    height: fit-content;
    width: 100%;
    background-color: ${props => props.theme.palette.light};
    border-radius: ${props => props.theme.borderRadius}
    padding: 2rem 3rem;
    box-shadow: ${props => props.theme.surfaces.shadow_1};

    box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
    max-width: 15rem;
    width: 100%;
    margin: 0 auto;
`;

export interface SortingLinkProps {
    selected?: boolean;
}
export const SortingLink = styled.div<SortingLinkProps>`
    margin-left: .35rem;
    color: ${props => props.selected ? props.theme.palette.dark : props.theme.palette.secondary.main};
    text-decoration: ${props => props.selected ? 'none' : 'underline'};
    cursor: ${props => props.selected ? 'initial' : 'pointer'};
    font-weight: bold;
`;

export const CarouselWrapper = styled.div`
    width: 100%;
    margin: 0px -2rem;
`;

export const SortingLinksWrapper = styled.div`
    display: flex;
    font-size: .78rem;
`;
