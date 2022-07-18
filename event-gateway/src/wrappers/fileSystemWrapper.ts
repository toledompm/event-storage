import { promises } from 'fs';

export const writeFile = async (fileName: string, data: string): Promise<void> => {
  await promises.writeFile(fileName, data);
}
