export class MockTFile {
  path: string;
  stat: { mtime: number };
  constructor(path: string, mtime = Date.now()) {
    this.path = path;
    this.stat = { mtime };
  }
}

export class MockFolder {
  path: string;
  constructor(path: string) { this.path = path; }
}

export class MockVault {
  files = new Map<string, MockTFile>();
  getAbstractFileByPath(path: string): MockTFile | null {
    return this.files.get(path) || null;
  }
  async create(path: string, content: string): Promise<MockTFile> {
    const file = new MockTFile(path);
    this.files.set(path, file);
    return file;
  }
}

export class MockFileManager {
  constructor(private vault: MockVault) {}
  async createNewMarkdownFile(folder: MockFolder, name: string, content: string) {
    return this.vault.create(`${folder.path}/${name}`, content);
  }
}

export class MockApp {
  vault: MockVault;
  fileManager: MockFileManager;
  constructor() {
    this.vault = new MockVault();
    this.fileManager = new MockFileManager(this.vault);
  }
}

export class DummyModal {
  plugin = { registerAuthCallback() {} };
  contentEl: HTMLElement = {} as HTMLElement;
}
