import fs from 'fs/promises';
import { Person } from '../models/person';

export const loadData = async (fileName: string): Promise<Person[]> => {
    const tableData: string = await fs.readFile(`src/resources/${fileName}.json`, 'utf8');
    return JSON.parse(tableData);
};
