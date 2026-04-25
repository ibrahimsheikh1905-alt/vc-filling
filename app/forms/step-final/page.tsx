import { headers } from 'next/headers';
import React from 'react'
import StepFinal from './FinalStep';

const page = () => {
  const headersList = headers();
  const referer = headersList.get('referer');
  const pathname = referer ? new URL(referer).pathname : 'No referer';
  
  return (
    <StepFinal referrer={pathname} />
  )
}

export default page
