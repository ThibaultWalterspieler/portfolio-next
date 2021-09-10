import { FC } from 'react';

const Header: FC = () => {
  return (
    <header>
      <h1 className='fullname'>
        <span className='firstname'>Thibault</span>
        <span className='lastname'>Walterspieler</span>
      </h1>
      <h2 className='job'>Fullstack dev in Paris</h2>
    </header>
  );
};

export default Header;
