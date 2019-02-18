export const SEARCH = 'SEARCH';

export function searchTasksAction(name) {
  return {
    type: SEARCH,
    name
  }
}