export interface Stackoverflow {
  items?: StackUserItem[] | null;
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
export interface StackUserItem {
  badge_counts: BadgeCounts;
  collectives?: Collectives[] | null;
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: string;
  user_id: number;
  location: string;
  website_url: string;
  link: string;
  profile_image: string;
  display_name: string;
}
export interface BadgeCounts {
  bronze: number;
  silver: number;
  gold: number;
}
export interface Collectives {
  collective: Collective;
  role: string;
}
export interface Collective {
  tags?: string[] | null;
  external_links?: ExternalLinks[] | null;
  description: string;
  link: string;
  name: string;
  slug: string;
}
export interface ExternalLinks {
  type: string;
  link: string;
}
