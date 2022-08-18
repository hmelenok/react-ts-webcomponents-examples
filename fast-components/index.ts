import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastAccordionItem,
  fastAccordion,
} from '@microsoft/fast-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

export const FastCard = wrap(fastCard());
export const FastButton = wrap(fastButton());
export const FastAccordeon = wrap(fastAccordion());
export const FastAccordeonItem = wrap(fastAccordionItem());
