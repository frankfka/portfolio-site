import { ReactNode } from 'react';

export interface ExperienceItem {
  id: string;
  roleName: string;
  org: string;
  startDate: string;
  endDate: string;
  description: ReactNode;
}
