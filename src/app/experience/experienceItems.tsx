import { ExperienceItem } from '@/app/experience/types';

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'vertex',
    roleName: 'head of eng',
    org: 'vertex',
    startDate: 'June 2021',
    endDate: 'Present',
    description: 'Building the Vertex Protocol.',
  },
  {
    id: 'shopify',
    roleName: 'mobile',
    org: 'shopify',
    startDate: 'June 2021',
    endDate: 'Sept 2023',
    description: (
      <>
        <p>
          As an iOS developer intern on the Core Mobile team at Shopify, I
          played an integral part in ensuring the present and future success of
          the Shopify iOS application. Our team is responsible for the
          foundational components of the Shopify mobile app, such as the UI
          design components and application networking.
        </p>
        <ul className="list-inside list-disc">
          <li>
            Responsible for the implementation of a thread-safe websocket client
            for Shopify Mobile
          </li>
          <li>
            Helped to explore the integration of React Native workflows within
            our Swift iOS codebase
          </li>
          <li>
            Ensured the success of our application with routine bug fixes and
            the management of our app release process
          </li>
        </ul>
      </>
    ),
  },
];
