import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ConnectedProps } from 'react-redux';
import { Actions } from '../../types/action-type';
import { changeMainListElement as changeMainListElementState } from '../../store/action';
import { initialState } from '../../store/reducer';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeListElement: changeMainListElementState,
}, dispatch);

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function CitiesList(props: ConnectedComponentProps):JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${initialState.cityName ? 'tabs__item--active' : ''}`} href=" ">
          <span>Paris</span>
        </a>
      </li>
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${initialState.cityName ? 'tabs__item--active' : ''}`} href=" ">
          <span>Cologne</span>
        </a>
      </li>
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${initialState.cityName ? 'tabs__item--active' : ''}`} href=" ">
          <span>Brussels</span>
        </a>
      </li>
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${initialState.cityName ? 'tabs__item--active' : ''}`} href=" ">
          <span>Amsterdam</span>
        </a>
      </li>
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${initialState.cityName ? 'tabs__item--active' : ''}`} href=" ">
          <span>Hamburg</span>
        </a>
      </li>
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${initialState.cityName ? 'tabs__item--active' : ''}`} href=" ">
          <span>Dusseldorf</span>
        </a>
      </li>
    </ul>
  );
}
export default CitiesList;
