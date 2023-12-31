import { ExperienceAccordion } from '@/app/experience/components/ExperienceAccordion';
import { EXPERIENCE_ITEMS } from '@/app/experience/experienceItems';

export default function Experience() {
  return (
    <main className="flex w-full flex-col pb-4 pt-16 lg:pb-8 lg:pt-32">
      <ExperienceAccordion items={EXPERIENCE_ITEMS} />
    </main>
  );
}
