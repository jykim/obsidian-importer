import { AppleNotesImporter } from '../../src/formats/apple-notes';
import { MockApp, DummyModal, MockFolder } from './helpers';

class TestImporter extends AppleNotesImporter {
  init() {}
}

describe('AppleNotesImporter duplicate handling', () => {
  test('skip and import-updated return existing file', async () => {
    const app = new MockApp();
    const modal = new DummyModal();
    const importer = new TestImporter(app as any, modal as any);
    importer.duplicateHandling = 'skip' as any;
    const folder = new MockFolder('/folder');
    const existing = await app.vault.create('/folder/test.md', '');

    const resultSkip = await importer.saveAsMarkdownFile(folder as any, 'test.md', '');
    expect(resultSkip).toBe(existing);

    importer.duplicateHandling = 'import-updated' as any;
    const resultUpdate = await importer.saveAsMarkdownFile(folder as any, 'test.md', '');
    expect(resultUpdate).toBe(existing);
  });
});
