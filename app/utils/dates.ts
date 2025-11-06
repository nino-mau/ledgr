import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function dateFromNow(date: string) {
  return dayjs(date).fromNow();
}
