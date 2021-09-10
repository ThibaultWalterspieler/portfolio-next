import { FC } from 'react';
import Link from 'next/link';

const companies = [
  {
    name: 'WeAreStudio99',
    link: 'https://github.com/WeAreStudio99/',
    color: '#FFD576',
  },
  {
    name: 'Blacksmith',
    link: 'https://www.blacksmith.studio/',
    color: '#ADB0FF',
  },
];

const Member: FC = () => {
  return (
    <div className='job-wrapper'>
      <h3>
        Member of
        <br />
      </h3>
      {companies.map((company, idx) => (
        <>
          <a
            href={company.link}
            key={`${company.name}-${idx}`}
            rel='noreferrer'
            target='_blank'
          >
            <span style={{ color: company.color }} className='company-name'>
              {company.name}
            </span>
          </a>
          {idx < companies.length - 1 && ' && '}
        </>
      ))}
    </div>
  );
};

export default Member;
