import { formatDate } from './format-date';

describe('formatDate', () => {
  it('should format a date string in Portuguese', () => {
    const dateString = '2023-10-20T12:48:16.652Z';

    const formattedDate = formatDate(dateString);

    expect(formattedDate).toEqual('20 de outubro de 2023');
  });

  it('should format a utc date string in Portuguese', () => {
    const dateString = '2023-10-04 12:04:39';

    const formattedDate = formatDate(dateString);

    expect(formattedDate).toEqual('4 de outubro de 2023');
  });
});
