import dayjs from 'dayjs';

/**
 * Return the initials of a string
 */
export function getInitials(name: string) {
  const parts = name.split(' ');
  let initials = '';
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== '') {
      initials += parts[i][0];
    }
  }
  return initials;
}

/**
 * Take a transactions array and divide it by month of the year, return an array
 * of array where each sub array represent a month.
 */
export function chunkTransactionsByMonth(
  transactions: Transaction[]
): Transaction[][] {
  // Sort transactions by creation date
  transactions.sort((a, b) => dayjs(b.created_at).diff(dayjs(a.created_at)));
  console.log(transactions);

  if (!transactions.length) {
    throw new Error("Transactions shouldn't be empty");
  }

  let lastTransactionYear = dayjs(
    transactions[transactions.length - 1].created_at
  ).year();
  let firstTransactionYear = dayjs(transactions[0].created_at).year();

  const output: Transaction[][] = [];
  let chunk: Transaction[] = [];

  // Loop through year
  for (let y = firstTransactionYear; y >= lastTransactionYear; y--) {
    // Loop through month
    for (let m = 0; m < 12; m++) {
      transactions.map((t) => {
        if (
          dayjs(t.created_at).month() === m &&
          dayjs(t.created_at).year() === y
        ) {
          chunk.push(t);
        }
      });
      output.push(chunk);
      chunk = [];
    }
  }

  // Clean array and return
  return output.filter((t) => {
    return t.length > 0;
  });
}
