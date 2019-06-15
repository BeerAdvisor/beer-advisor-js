import styled from '../../styled-components';
import { SMALL_BP_DOWN } from '../../theme';

export const BeerDescriptionCardContainer = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    ${SMALL_BP_DOWN} {
        flex-direction: column;
        padding: 0 1rem;
        &>* {
            margin-bottom: 1rem;
        }
    }
`;

export const BeerDescriptionChildrenWrapper = styled.div`
    margin-left: 3rem;
    margin-right: 1rem;
    width: 100%;
    ${SMALL_BP_DOWN} {
        margin-left: 0;
        margin-right: 0;
    }
`;
