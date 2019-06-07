import React from 'react';
import 'dotenv/config';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './Search';
import props from './Search.props';

jest.setTimeout(process.env.REACT_APP_JEST_TIMEOUT);
Enzyme.configure({ adapter: new Adapter() });

describe('<Search />', () => {
    let enzymeWrapper;
    beforeAll(() => {
        enzymeWrapper = shallow(<Search {...props} />);
    });

    it('should render without throwing an error', () => {
        expect(enzymeWrapper).toMatchSnapshot();
    });
});
