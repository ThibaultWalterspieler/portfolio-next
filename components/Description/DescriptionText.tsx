import { FC } from 'react';
import { sanitize } from 'dompurify';
import { Description } from '../../interface/description/description.interface';

const DescriptionText: FC<{ desc: Description }> = ({ desc }) => {
  console.log(sanitize(desc.html));
  return (
    <div
      className='description-wrapper'
      dangerouslySetInnerHTML={{ __html: sanitize(desc.html) }}
    />
  );
};

export default DescriptionText;
