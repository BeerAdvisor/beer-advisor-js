import React from 'react';
import styled from 'styled-components';
import SvgIcon from '@material-ui/core/SvgIcon';

const CompareArrowsStyled = styled(SvgIcon)`
    font-size: 1.3rem;
    width: unset;
`;

export const CompareArrows = (props: {}) => (
    <CompareArrowsStyled {...props}>
        <path d="M6.92115 9.35835C7.1316 9.56521 7.24869 9.84051 7.24869 10.1345C7.24869 10.4269 7.13318 10.7022 6.92115 10.9106L3.8704 13.9077C3.80869 13.9684 3.72641 13.9995 3.64571 13.9995C3.6378 13.9995 3.62988 13.9995 3.62355 13.9995C3.53653 14.0042 3.44475 13.9762 3.37671 13.9093L0.325962 10.909C0.115511 10.7022 0 10.4269 0 10.1329C0 9.84051 0.115511 9.56521 0.325962 9.35679C0.536413 9.14993 0.816486 9.03484 1.11555 9.03484C1.41303 9.03484 1.6931 9.14838 1.90513 9.35679L2.51592 9.96027V1.09013C2.51592 0.489761 3.01277 0.00138253 3.62355 0.00138253C4.23434 0.00138253 4.73119 0.489761 4.73119 1.09013V9.96027L5.34355 9.35835C5.55401 9.15149 5.83408 9.03639 6.13314 9.03639C6.43062 9.03639 6.7107 9.15149 6.92115 9.35835ZM12.934 3.09186L9.88328 0.093148C9.82315 0.0340448 9.74246 0.00138253 9.65859 0.00138253C9.6491 -0.00172816 9.64435 0.00138253 9.63644 0.00138253C9.62853 0.00138253 9.61903 -0.00172816 9.61429 0.00138253C9.53042 0.00138253 9.44972 0.0340448 9.39118 0.093148L6.33885 3.09186C5.9037 3.51958 5.9037 4.21482 6.33885 4.64254C6.5493 4.8494 6.82937 4.96294 7.12843 4.96294C7.42591 4.96294 7.70599 4.8494 7.91802 4.64254L8.5288 4.04062V12.9108C8.5288 13.5111 9.02566 13.9995 9.63644 13.9995C10.2472 13.9995 10.7441 13.5111 10.7441 12.9108V4.04062L11.3564 4.64254C11.5669 4.8494 11.847 4.96294 12.146 4.96294C12.4435 4.96294 12.7236 4.8494 12.9356 4.64254C13.1461 4.43568 13.2632 4.16038 13.2632 3.86642C13.2616 3.57401 13.1445 3.29872 12.934 3.09186Z" />
    </CompareArrowsStyled>
);

export default CompareArrows;
