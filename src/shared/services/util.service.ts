class UtilService {
  isNullOrEmpty = (text?: string): boolean =>
    typeof text === 'undefined' || text === null || text.replaceAll(' ', '').length === 0;

  randomId = (): string =>
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substring(0, 5);

  removeDuplicates = <T>(array: T[]): T[] =>
    array.filter((item, index, self) => self.indexOf(item) === index);
}

export const utilService = new UtilService();
