export const FILTER = "FILTER";

export function filterAction(filter) {
  return {
    type: FILTER,
    filter
  }
}
