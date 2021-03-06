import { Link as RouterLink } from 'react-router-dom';

import styled, { css } from '../../../../styled-components';

export const Link = styled(RouterLink)`
    text-decoration: none;
    cursor: inherit;
    color: inherit;
`;

export const BeerLink = styled(RouterLink)`
    cursor: pointer;
    color: ${props => props.theme.palette.primary.main};
`;

export const BarLink = styled(RouterLink)`
    cursor: pointer;
    color: ${props => props.theme.palette.secondary.main};
`;

const BOLD_LINK_CSS = css`
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    text-decoration: none;
    text-transform: capitalize;

    & :hover{
        text-decoration: underline;
    }
`;

export const BeerLinkBold = styled(BeerLink)`
    ${BOLD_LINK_CSS}
    cursor: pointer;
    color: ${props => props.theme.palette.primary.main};
`;

export const BarLinkBold = styled(BarLink)`
    ${BOLD_LINK_CSS}
    cursor: pointer;
    color: ${props => props.theme.palette.secondary.main};
`;

export default Link;
