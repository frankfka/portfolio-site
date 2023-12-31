'use client';

import { ExperienceItem } from '@/app/experience/types';
import { WithClassnames } from '@/lib/types/UtilityTypes';

import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

interface Props extends WithClassnames {
  items: ExperienceItem[];
}

export function ExperienceAccordion({ items, className }: Props) {
  const [selectedItem, setSelectedItem] = useState<string>('');

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
        const Icon = isActive ? MdRemove : MdAdd;

        return (
          <Accordion.Item
            value={item.id}
            key={item.id}
            className="border-b-accent/40 border-b"
          >
            {/*Trigger button*/}
            <Accordion.Header asChild>
              <Accordion.Trigger className="flex w-full items-center justify-between py-4">
                <span className="text-text-primary text-4xl font-bold">
                  {item.roleName}{' '}
                  <span className="text-text-secondary">@ {item.org}</span>
                </span>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={isActive ? 'open' : 'closed'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Icon className="text-accent h-9 w-auto" />
                  </motion.div>
                </AnimatePresence>
              </Accordion.Trigger>
            </Accordion.Header>
            {/*Content*/}
            <Accordion.Content forceMount asChild>
              <motion.div
                // With forceMount, the content is always mounted, so without hiding overflow, the content prevents
                // subsequent accordion trigger buttons from being clicked
                className="overflow-hidden"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  height: isActive ? 'auto' : 0,
                }}
              >
                <div className="text-text-secondary flex flex-col gap-y-2 pb-4">
                  <span className="italic">
                    {item.startDate} - {item.endDate}
                  </span>
                  {item.description}
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
