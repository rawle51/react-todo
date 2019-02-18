export const REORDER = "REORDER";

export function reorderAction(list) {
  return {
    type: REORDER,
    list
  }
}