import { ExperienceAccordion } from '@/app/experience/components/ExperienceAccordion';
import { EXPERIENCE_ITEMS } from '@/app/experience/experienceItems';

export default function Experience() {
  return (
    <main className="flex flex-col pb-8 pt-32">
      <ExperienceAccordion items={EXPERIENCE_ITEMS} />
    </main>
  );
}
