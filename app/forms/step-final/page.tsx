import React from 'react'
import StepFinal from './FinalStep';

// Map of service types to their starting form paths
const serviceFormPaths: Record<string, string> = {
  'form-llc': '/form-a-llc/step-1',
  'form-c-corporation': '/form-c-corporation/step-1',
  'form-s-corporation': '/form-s-corporation/step-1',
  'amendment': '/amendment/step-1',
  'annual-report': '/annual-report/step-1',
  'business-license': '/business-license/step-1',
  'cert-good-standing': '/cert-good-standing/step-1',
  'change-agent': '/change-agent/step-1',
  'dissolution': '/dissolution/step-1',
  'ein-form': '/ein-form/step-1',
  'fake-name': '/fictitious-business-name/step-1',
  'foreign-qualification': '/foreign-qualification/step-1',
  'kit-info': '/kit-info/step-1',
  'registered-agent': '/registered-agent/step-1',
  'reinstatement': '/reinstatement/step-1',
  'trademark': '/trademark/step-1',
  'virtual-address': '/virtual-address/step-1',
};

const page = () => {
  // Try to get from headers first
  let pathname = '/form-a-llc/step-1'; // Default fallback
  
  // This is a client-side page, but we can check the serviceType from localStorage
  // Since this runs on server first, we'll pass undefined and let client handle it
  
  return (
    <StepFinal referrer={pathname} />
  )
}

export default page
