import { FC } from 'react';
import { Company } from '../../interface/company/company.interface';
import SVGRender from '../SVG/SVGRender';

const WorkedFor: FC<{ companies: Company[] }> = ({ companies }) => {
  return (
    <div className={'worked-for__wrapper'}>
      <h3>Worked for :</h3>
      <div className='logos__wrapper'>
        {companies.map((company, idx) => (
          <>
            {company.logo && company.logo.url && (
              <div
                className='logo__wrapper'
                key={`${company.id}-worked_for-${idx}`}
              >
                <a href={company.url} target='_blank' rel='noreferrer'>
                  <SVGRender url={company.logo.url} color={'#fff'} />
                </a>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default WorkedFor;
