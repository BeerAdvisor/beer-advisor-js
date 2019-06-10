import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Fade } from '@material-ui/core';

import { Query, GET_BEER_INFO } from '../../graphql';
import { DescriptionCard, AvailabilityCard, CommentCard } from '../../components';
import { beer, suggestChange } from '../../@types';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';
import { SortingLink } from '../../components/ui/AvailabilityCard/AvailabilityCard';
import { SuggestChange } from '../../forms/SuggestChange';
import { VerticalFlexBoxWithMargin } from '../../commonStyles';
import { CommentsBox } from '../../components/ui/CommentsBox/CommentsBox';

import { BeerDescriptionCardContainer, BeerDescriptionChildrenWrapper } from './style';
import { SUGGEST_BEER_CHANGE_QUERY } from './graphql';

const CommentProps = {
    author: 'Anatoly',
    comment: 'Show comment',
};

const CommentProps2 = {
    author: 'Vasily',
    comment: 'Very long repetative comment to be sure that line clap works. Very long. Very long repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works.  repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works. Very long repetative comment to be sure that line clap works',
};

export interface BeerDescriptionCardProps extends RouteComponentProps {
    beerId: string;
}
export const BeerDescriptionCard = ({
    beerId,
    history,
    ...other
}: BeerDescriptionCardProps) => {
    const [selected, setSelected] = useState(0);
    const [beerEditMode, setBeerEditMode] = useState(false);

    const handleSetBeerEditMode = useCallback(
        () => setBeerEditMode(editMode => !editMode),
        []
    );
    const handleSorting = useCallback(
        () => setSelected(s => (s === 0 ? 1 : 0)),
        []
    );
    const handleShowAllBars = useCallback(
        () => history.push(`/form/beers/${beerId}`),
        []
    );

    const sortingLinks: SortingLink[] = [
        { name: 'Cost', handler: handleSorting, selected: selected === 0 },
        { name: 'Distance', handler: handleSorting, selected: selected === 1 },
    ];

    return (
        <Query query={GET_BEER_INFO} variables={{ beerId }}>
            {({ data }: GuaranteedQueryResult<beer>) => (
                <BeerDescriptionCardContainer>
                    <Fade in={!beerEditMode}>
                    {!beerEditMode ? (
                            <BeerDescriptionChildrenWrapper>
                                <DescriptionCard
                                    onChangeSuggest={handleSetBeerEditMode}
                                    beer={data.beer}
                                    {...other}
                                />
                            </BeerDescriptionChildrenWrapper>
                    ) : <div />}
                    </Fade>
                    <Fade in={beerEditMode}>
                    {beerEditMode ? (
                        <Query query={SUGGEST_BEER_CHANGE_QUERY}>
                            {({
                                data: { beerTypes: beerTypesData, breweries },
                            }: GuaranteedQueryResult<suggestChange>) => (
                            <BeerDescriptionChildrenWrapper>
                                <SuggestChange
                                    beerTypes={beerTypesData}
                                    breweries={breweries}
                                    beer={data.beer}
                                    onClear={handleSetBeerEditMode}
                                    {...other}
                                />
                            </BeerDescriptionChildrenWrapper>
                            )}
                        </Query>
                    ): <div />}
                    </Fade>
                    <VerticalFlexBoxWithMargin>
                        <AvailabilityCard
                            buttonClick={handleShowAllBars}
                            sortingLinks={sortingLinks}
                        />
                        <CommentsBox>
                            <CommentCard {...CommentProps} />
                            <CommentCard {...CommentProps2} />
                        </CommentsBox>
                    </VerticalFlexBoxWithMargin>
                </BeerDescriptionCardContainer>
            )}
        </Query>
    );
};

export default BeerDescriptionCard;
