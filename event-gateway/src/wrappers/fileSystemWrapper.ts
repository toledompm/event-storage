import { promises } from 'fs';

const writeFile = async (fileName: string, data: string): Promise<void> => {
  await promises.writeFile(fileName, data);
};

export { writeFile };
