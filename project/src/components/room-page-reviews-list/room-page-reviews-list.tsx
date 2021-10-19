import RoomPageReviewsListItems from '../room-page-reviews-list-items/room-page-reviews-list-items';

function RoomPageReviewsList():JSX.Element {
  return (
    <ul className="reviews__list">
      <RoomPageReviewsListItems />
    </ul>
  );
}

export default RoomPageReviewsList;
