import OffersCards from '../offer-cards';
import { mockMainOffers } from '../../mocks/mock-main-offers';
import { reviews } from '../../mocks/reviews';
import { MainPageProps } from '../main-page/types';

function getOffersCount(count: number): JSX.Element[] {
  const rentOffersBlock: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    rentOffersBlock.push(<OffersCards reviews={reviews} offersCount={1} offers={mockMainOffers} key={i} />);
  }

  return rentOffersBlock;
}

function MainOffersList({offersCount}:MainPageProps ): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {getOffersCount(+offersCount)}
    </div>
  );
}

export default MainOffersList;
