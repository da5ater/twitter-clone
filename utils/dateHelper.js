const months = [
  { Value: 1, Name: 'January' },
  { Value: 2, Name: 'February' },
  { Value: 3, Name: 'March' },
  { Value: 4, Name: 'April' },
  { Value: 5, Name: 'May' },
  { Value: 6, Name: 'June' },
  { Value: 7, Name: 'July' },
  { Value: 8, Name: 'August' },
  { Value: 9, Name: 'September' },
  { Value: 10, Name: 'October' },
  { Value: 11, Name: 'November' },
  { Value: 12, Name: 'December' },
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);

let datepayload = { months, days, years };

module.exports.datepayload = datepayload;
