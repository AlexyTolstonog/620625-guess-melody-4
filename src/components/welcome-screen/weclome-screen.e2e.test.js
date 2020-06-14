import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`button shoud passed`, () => {
  const onWelcomeButtonClick = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen gameTime={3} errorCount={5} onWelcomeButtonClick={onWelcomeButtonClick} />);
  const welcomeButton = welcomeScreen.find(`button.welcome__button`);
  welcomeButton.simulate(`click`);
  expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
});
