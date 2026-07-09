# Web TODO

- [ ] Fix S-Corp package prefill: ensure packageType persisted in localStorage for OrderSummary
  - [ ] Update `web/app/package-main/page.tsx` handleGetStarted() storage writes for S-Corporation
  - [ ] Ensure both `/form-s-corporation/step-1` and `/form-s-corporation/step-3` get `packageType` + `stateFromStepOne`/`stateName`
  - [ ] Verify OrderSummary uses saved packageType for `/form-s-corporation/step-2` and shows Standard/Basic correctly

