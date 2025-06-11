class TFile { constructor(path) { this.path = path; this.stat = { mtime: Date.now(), ctime: Date.now() }; } }
class TFolder { constructor(path) { this.path = path; } }
class Vault {
  constructor() { this.files = new Map(); }
  getAbstractFileByPath(path) { return this.files.get(path) || null; }
  async create(path, content) { const f = new TFile(path); this.files.set(path, f); return f; }
}
class Setting {
  setName() { return this; }
  setDesc() { return this; }
  addText() { return this; }
  addToggle() { return this; }
  addDropdown() { return this; }
}
class Notice { constructor(msg) { this.msg = msg; } }
const Platform = { isMacOS: true, isDesktop: true, isDesktopApp: false };
module.exports = { TFile, TFolder, Vault, Setting, Notice, Platform };
