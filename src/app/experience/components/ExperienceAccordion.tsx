'use client';

import { ExperienceItem } from '@/app/experience/types';
import { WithClassnames } from '@/lib/types/UtilityTypes';

import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';

interface Props extends WithClassnames {
  items: ExperienceItem[];
}

export function ExperienceAccordion({ items, className }: Props) {
  const [selectedItem, setSelectedItem] = useState<string>();
  return (
    <Accordion.Root
      value={selectedItem}
      onValueChange={setSelectedItem}
      type="single"
      collapsible
      className={className}
    >
      {items.map((item) => {
        const isActive = selectedItem === item.id;
        const Icon = isActive ? FaMinus : FaPlus;

        return (
          <Accordion.Item value={item.id} key={item.id}>
            <Accordion.Header>
              <Accordion.Trigger className="flex items-center justify-between">
                <span className="text-text-primary text-4xl">
                  {item.roleName}{' '}
                  <span className="text-text-secondary">@ {item.org}</span>
                </span>
                <Icon className="text-accent" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="text-text-secondary flex flex-col gap-y-2">
              <div className="italic">
                {item.startDate} <FaArrowRight /> {item.endDate}
              </div>
              {item.description}
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
