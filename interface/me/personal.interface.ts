import { Company } from '../company/company.interface';
import { Description } from '../description/description.interface';
import { Social } from '../social/social.interface';

export interface Personal {
  id: string;
  firstname: string;
  lastname: string;
  job: string;
  description: Description;
  memberOf: Company[];
  workedFor: Company[];
  social: Social[];
}
