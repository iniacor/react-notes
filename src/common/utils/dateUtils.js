import { format } from 'date-fns';

export function prepareDate(date) {
  return format(date, "MMMM d, yyyy 'at' HH:mm a");
}
