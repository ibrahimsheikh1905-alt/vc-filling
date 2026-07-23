// Per-state filing turnaround and fee data, broken out by entity type
// (Form an LLC, C Corp, S Corp, Non Profit).
//
// - `weeks` is the STANDARD state filing time in weeks. The Basic and
//   Standard packages use the same `weeks` value (they only differ on
//   which extra features are included, not turnaround time).
// - `premiumDays` is the expedited/Premium turnaround in business days.
// - `stateFee` is the state filing fee in USD.
// - `offered: false` means that state does not offer that entity type
//   (fields are null in that case).
//
// The `llc` and `nonProfit` columns were confirmed against the source table
// and are accurate. `cCorp` and `sCorp` were transcribed from a reference
// spreadsheet screenshot and have not been independently confirmed —
// spot-check those against the source before relying on them for pricing,
// in particular the Washington DC / West Virginia S Corp rows (their weeks
// values differ from their C Corp rows, which may be a genuine state
// difference or a source typo).

export interface EntityFilingInfo {
  weeks: number | null;
  premiumDays: number | null;
  stateFee: number | null;
  offered: boolean;
}

export interface StateEntityFilingData {
  llc: EntityFilingInfo;
  cCorp: EntityFilingInfo;
  sCorp: EntityFilingInfo;
  nonProfit: EntityFilingInfo;
}

const offered = (
  weeks: number,
  premiumDays: number,
  stateFee: number
): EntityFilingInfo => ({ weeks, premiumDays, stateFee, offered: true });

const notOffered = (): EntityFilingInfo => ({
  weeks: null,
  premiumDays: null,
  stateFee: null,
  offered: false,
});

export const entityFilingData: Record<string, StateEntityFilingData> = {
  Alabama: {
    llc: offered(3, 2, 236),
    cCorp: offered(3, 1, 236),
    sCorp: offered(3, 1, 236),
    nonProfit: offered(4, 1, 236),
  },
  Alaska: {
    llc: offered(3, 1, 250),
    cCorp: offered(3, 1, 250),
    sCorp: offered(3, 1, 250),
    nonProfit: offered(3, 1, 50),
  },
  Arizona: {
    llc: offered(4, 1, 87),
    cCorp: offered(4, 4, 98),
    sCorp: offered(4, 4, 98),
    nonProfit: offered(6, 5, 77),
  },
  Arkansas: {
    llc: offered(3, 6, 45),
    cCorp: offered(3, 3, 45),
    sCorp: offered(3, 3, 45),
    nonProfit: offered(3, 5, 45),
  },
  California: {
    llc: offered(4, 3, 75),
    cCorp: offered(3, 3, 105),
    sCorp: offered(3, 3, 105),
    nonProfit: offered(4, 5, 35),
  },
  Colorado: {
    llc: offered(3, 1, 50),
    cCorp: offered(3, 1, 50),
    sCorp: offered(3, 1, 50),
    nonProfit: offered(3, 1, 50),
  },
  Connecticut: {
    llc: offered(3, 3, 120),
    cCorp: offered(3, 2, 250),
    sCorp: offered(3, 2, 250),
    nonProfit: offered(3, 2, 50),
  },
  Delaware: {
    llc: offered(6, 9, 143),
    cCorp: offered(6, 12, 142),
    sCorp: offered(6, 12, 142),
    nonProfit: offered(6, 12, 151),
  },
  Florida: {
    llc: offered(3, 6, 125),
    cCorp: offered(3, 7, 70),
    sCorp: offered(3, 7, 70),
    nonProfit: offered(6, 6, 79),
  },
  Georgia: {
    llc: offered(4, 6, 110),
    cCorp: offered(4, 3, 110),
    sCorp: offered(4, 3, 110),
    nonProfit: offered(4, 3, 110),
  },
  Hawaii: {
    llc: offered(12, 40, 51),
    cCorp: offered(12, 40, 51),
    sCorp: offered(12, 40, 51),
    nonProfit: offered(12, 40, 26),
  },
  Idaho: {
    llc: offered(6, 2, 100),
    cCorp: offered(6, 4, 100),
    sCorp: offered(6, 4, 100),
    nonProfit: offered(6, 5, 31),
  },
  Illinois: {
    llc: offered(3, 1, 154),
    cCorp: offered(3, 1, 154),
    sCorp: offered(3, 1, 154),
    nonProfit: offered(3, 2, 52),
  },
  Indiana: {
    llc: offered(3, 2, 98),
    cCorp: offered(3, 1, 98),
    sCorp: offered(3, 1, 98),
    nonProfit: offered(3, 3, 31),
  },
  Iowa: {
    llc: offered(3, 2, 50),
    cCorp: offered(3, 1, 50),
    sCorp: offered(3, 1, 50),
    nonProfit: offered(3, 3, 20),
  },
  Kansas: {
    llc: offered(3, 1, 160),
    cCorp: offered(3, 1, 85),
    sCorp: offered(3, 1, 85),
    nonProfit: offered(3, 1, 20),
  },
  Kentucky: {
    llc: offered(3, 1, 40),
    cCorp: offered(3, 1, 55),
    sCorp: offered(3, 1, 55),
    nonProfit: offered(3, 2, 8),
  },
  Louisiana: {
    llc: offered(4, 3, 105),
    cCorp: notOffered(),
    sCorp: notOffered(),
    nonProfit: offered(4, 6, 80),
  },
  Maine: {
    llc: offered(9, 5, 175),
    cCorp: offered(9, 6, 145),
    sCorp: offered(9, 6, 145),
    nonProfit: offered(10, 6, 40),
  },
  Maryland: {
    llc: offered(5, 8, 197),
    cCorp: offered(5, 10, 218),
    sCorp: offered(5, 10, 218),
    nonProfit: offered(5, 10, 270),
  },
  Massachusetts: {
    llc: offered(3, 1, 520),
    cCorp: offered(4, 1, 265),
    sCorp: offered(4, 1, 265),
    nonProfit: offered(3, 2, 41),
  },
  Michigan: {
    llc: offered(4, 3, 50),
    cCorp: offered(3, 3, 60),
    sCorp: offered(3, 3, 60),
    nonProfit: offered(4, 5, 20),
  },
  Minnesota: {
    llc: offered(3, 1, 155),
    cCorp: offered(3, 1, 155),
    sCorp: offered(3, 1, 155),
    nonProfit: offered(3, 1, 90),
  },
  Mississippi: {
    llc: offered(3, 1, 54),
    cCorp: offered(3, 1, 54),
    sCorp: offered(3, 1, 54),
    nonProfit: offered(3, 2, 54),
  },
  Missouri: {
    llc: offered(3, 1, 52),
    cCorp: offered(3, 1, 60),
    sCorp: offered(3, 1, 60),
    nonProfit: offered(3, 3, 26),
  },
  Montana: {
    llc: offered(3, 2, 35),
    cCorp: offered(3, 2, 35),
    sCorp: offered(3, 2, 35),
    nonProfit: offered(3, 3, 20),
  },
  Nebraska: {
    llc: offered(3, 4, 103),
    cCorp: offered(3, 4, 103),
    sCorp: offered(3, 4, 103),
    nonProfit: offered(4, 5, 27),
  },
  Nevada: {
    llc: offered(3, 1, 436),
    cCorp: offered(3, 1, 744),
    sCorp: offered(3, 1, 744),
    nonProfit: offered(3, 1, 103),
  },
  "New Hampshire": {
    llc: offered(6, 13, 102),
    cCorp: offered(3, 11, 125),
    sCorp: offered(3, 11, 125),
    nonProfit: offered(6, 19, 27),
  },
  "New Jersey": {
    llc: offered(3, 1, 110),
    cCorp: offered(3, 2, 110),
    sCorp: offered(3, 2, 110),
    nonProfit: offered(3, 1, 60),
  },
  "New Mexico": {
    llc: offered(3, 12, 52),
    cCorp: offered(3, 13, 102),
    sCorp: offered(3, 13, 102),
    nonProfit: offered(7, 8, 27),
  },
  "New York": {
    llc: offered(3, 1, 205),
    cCorp: offered(4, 12, 130),
    sCorp: offered(4, 13, 130),
    nonProfit: notOffered(),
  },
  "North Carolina": {
    llc: offered(4, 11, 128),
    cCorp: offered(4, 12, 128),
    sCorp: offered(4, 12, 128),
    nonProfit: offered(4, 9, 63),
  },
  "North Dakota": {
    llc: offered(3, 4, 135),
    cCorp: offered(4, 4, 100),
    sCorp: offered(4, 4, 100),
    nonProfit: offered(3, 6, 40),
  },
  Ohio: {
    llc: offered(4, 5, 99),
    cCorp: offered(3, 1, 99),
    sCorp: offered(3, 1, 99),
    nonProfit: offered(4, 3, 99),
  },
  Oklahoma: {
    llc: offered(3, 1, 104),
    cCorp: offered(3, 2, 104),
    sCorp: offered(3, 2, 104),
    nonProfit: offered(3, 2, 26),
  },
  Oregon: {
    llc: offered(3, 2, 100),
    cCorp: offered(3, 2, 100),
    sCorp: offered(3, 2, 100),
    nonProfit: offered(3, 2, 50),
  },
  Pennsylvania: {
    llc: offered(3, 2, 125),
    cCorp: offered(3, 2, 125),
    sCorp: offered(3, 2, 125),
    nonProfit: offered(4, 7, 125),
  },
  "Rhode Island": {
    llc: offered(3, 1, 156),
    cCorp: offered(3, 1, 238),
    sCorp: offered(3, 1, 238),
    nonProfit: offered(3, 2, 38),
  },
  "South Carolina": {
    llc: offered(3, 2, 132),
    cCorp: offered(5, 12, 325),
    sCorp: offered(5, 12, 325),
    nonProfit: offered(3, 2, 45),
  },
  "South Dakota": {
    llc: offered(3, 3, 154),
    cCorp: offered(3, 13, 154),
    sCorp: offered(3, 13, 154),
    nonProfit: offered(5, 1, 31),
  },
  Tennessee: {
    llc: offered(3, 1, 299),
    cCorp: offered(3, 1, 100),
    sCorp: offered(3, 1, 100),
    nonProfit: offered(3, 4, 103),
  },
  Texas: {
    llc: offered(4, 2, 300),
    cCorp: offered(3, 2, 300),
    sCorp: offered(3, 2, 300),
    nonProfit: offered(4, 3, 25),
  },
  Utah: {
    llc: offered(5, 2, 59),
    cCorp: offered(5, 3, 59),
    sCorp: offered(5, 3, 59),
    nonProfit: offered(5, 6, 59),
  },
  Vermont: {
    llc: offered(3, 2, 155),
    cCorp: offered(3, 3, 155),
    sCorp: offered(3, 3, 155),
    nonProfit: offered(3, 3, 155),
  },
  Virginia: {
    llc: offered(3, 1, 100),
    cCorp: offered(3, 1, 75),
    sCorp: offered(3, 1, 75),
    nonProfit: offered(3, 2, 175),
  },
  Washington: {
    llc: offered(4, 3, 200),
    cCorp: offered(3, 3, 200),
    sCorp: offered(3, 3, 200),
    nonProfit: offered(4, 5, 60),
  },
  "Washington Dc": {
    llc: offered(3, 3, 99),
    cCorp: offered(3, 13, 99),
    sCorp: offered(13, 13, 99),
    nonProfit: offered(3, 4, 80),
  },
  "West Virginia": {
    llc: offered(6, 4, 100),
    cCorp: offered(3, 1, 100),
    sCorp: offered(6, 13, 100),
    nonProfit: offered(6, 9, 25),
  },
  Wisconsin: {
    llc: offered(3, 1, 130),
    cCorp: offered(3, 1, 100),
    sCorp: offered(3, 1, 100),
    nonProfit: offered(5, 4, 35),
  },
  Wyoming: {
    llc: offered(3, 1, 104),
    cCorp: offered(3, 1, 100),
    sCorp: offered(3, 1, 100),
    nonProfit: offered(3, 1, 53),
  },
};

export type EntityKind = "llc" | "cCorp" | "sCorp" | "nonProfit";

export const getEntityFilingInfo = (
  state: string,
  entity: EntityKind
): EntityFilingInfo | null => {
  const normalized = state?.trim();
  if (!normalized) return null;

  const key = Object.keys(entityFilingData).find(
    (k) => k.toLowerCase() === normalized.toLowerCase()
  );

  if (!key) return null;
  return entityFilingData[key][entity];
};
