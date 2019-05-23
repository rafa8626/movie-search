import React from 'react';

import '../../Utils/JestMocks';
import Loader from './Loader';

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
