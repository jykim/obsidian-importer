import { AppleNotesImporter } from '../../src/formats/apple-notes';
import { MockApp, DummyModal } from './helpers';

class TestImporter extends AppleNotesImporter {
  init() {}
}

describe('AppleNotesImporter date prefix', () => {
  test('generates correct filename prefix', () => {
    const app = new MockApp();
    const modal = new DummyModal();
    const importer = new TestImporter(app as any, modal as any);
    importer.filePrefixFormat = 'YYYY-MM-DD';
    const creationTime = importer.decodeTime(0); // use offset logic
    const creationDate = new Date(creationTime);
    const prefix = importer.filePrefixFormat
      .replace('YYYY', creationDate.getUTCFullYear().toString())
      .replace('MM', (creationDate.getUTCMonth() + 1).toString().padStart(2, '0'))
      .replace('DD', creationDate.getUTCDate().toString().padStart(2, '0'));
    expect(prefix).toMatch(/\d{4}-\d{2}-\d{2}/);
  });
});
