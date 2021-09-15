import { FC } from 'react';

const Header: FC<{ firstname: string; lastname: string; job: string }> = ({
  job,
  firstname,
  lastname,
}) => {
  return (
    <header>
      <h1 className='fullname'>
        <span className='firstname'>{firstname}</span>
        <span className='lastname'>{lastname}</span>
      </h1>
      <h2 className='job'>{job} in Paris</h2>
    </header>
  );
};

export default Header;
