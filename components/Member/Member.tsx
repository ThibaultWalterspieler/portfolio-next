import { FC } from 'react';
import { Company } from '../../interface/company/company.interface';

const Member: FC<{ companies: Company[] }> = ({ companies }) => {
  return (
    <div className='job-wrapper'>
      <h3>
        Member of
        <br />
      </h3>
      <div className='memberOf-wrapper'>
        {companies.map((company, idx) => (
          <div key={`${company.name}-${idx}`}>
            <a href={company.url} rel='noreferrer' target='_blank'>
              <span
                style={{ color: company.textColor.hex }}
                className='company-name'
              >
                {company.name}
              </span>
            </a>
            {idx < companies.length - 1 && ' && '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
