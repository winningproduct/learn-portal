import React from 'react';

import { StyledDraft } from './styles/Draft';

const Draft = ({ mdx }) => {
  return (
    <StyledDraft>
      <span class='draftMessage'>DRAFT - WORK IN PROGRESS</span>
    </StyledDraft>
  );
};

export default Draft;
