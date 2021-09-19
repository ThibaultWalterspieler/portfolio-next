import { sanitize } from 'dompurify';
import { FC, useEffect, useState } from 'react';
import { Description } from '../../interface/description/description.interface';

interface Variable {
  [key: string]: string;
}

const DescriptionText: FC<{
  desc: Description;
  variables: Variable;
}> = ({ desc, variables }) => {
  const [description, setDescription] = useState('');

  const injectVariableInDescription = (
    description: string,
    variables: Variable
  ) => {
    var rgx = new RegExp(Object.keys(variables).join('|'), 'gi');
    setDescription(description.replace(rgx, (matched) => variables[matched]));
  };

  useEffect(() => {
    injectVariableInDescription(desc.html, variables);
  }, [desc, variables]);

  return (
    <>
      <div
        className='description__wrapper'
        dangerouslySetInnerHTML={{ __html: sanitize(description) }}
      ></div>
    </>
  );
};

export default DescriptionText;
