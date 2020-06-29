import React from 'react';

import { StyledDraft } from './Draft';

const Draft = ({ mdx }) => {
  return (
    <StyledDraft>
      <span className='draftMessage'>DRAFT - WORK IN PROGRESS</span>
    </StyledDraft>
  );
};

export default Draft;
