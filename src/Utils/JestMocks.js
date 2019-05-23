/* eslint-disable arrow-body-style */
import 'dotenv/config';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.setTimeout(process.env.REACT_APP_JEST_TIMEOUT);
Enzyme.configure({ adapter: new Adapter() });

// global mocks since JSDom does not support this
window.matchMedia = { matches: false, addListener: () => { }, removeListener: () => { } };
window.testWidth = 768;
window.open = () => { };
location.reload = () => { };
document.querySelector = () => ({ getBoundingClientRect: () => 100, click: () => { } });
document.getElementById = () => ({ getBoundingClientRect: () => 100, click: () => { }, scrollIntoView: () => {} });

Element.prototype.getBoundingClientRect = jest.fn(() => ({
    width: 1,
    height: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
}));
