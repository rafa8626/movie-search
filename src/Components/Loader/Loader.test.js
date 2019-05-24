import React from 'react';
import 'dotenv/config';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loader from './Loader';

jest.setTimeout(process.env.REACT_APP_JEST_TIMEOUT);
Enzyme.configure({ adapter: new Adapter() });

describe('<Loader />', () => {
    let enzymeWrapper;
    let props;
    beforeAll(() => {
        enzymeWrapper = shallow(<Loader {...props} />);
    });

    it('should render without throwing an error', () => {
        expect(enzymeWrapper).toMatchSnapshot();
    });
});
