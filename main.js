'use strict';

const { Plugin, PluginSettingTab, Setting, Menu, Modal, Notice, TFile, TFolder } = require('obsidian');

// Built from all five supplied Iconic CSS versions. Newest definitions win.
const LEGACY = {"paths":{"Dat 110":"yellow","Dat 110/Arkitektúr":"purple","Dat 110/Arkitektúr/ChordDHT":"red","Dat 110/Arkitektúr/P-S MOM":"cyan","Dat 110/Arkitektúr/Pålitelighet":"blue","Dat 110/Arkitektúr/Replikering":"orange","Dat 110/Hugtök":"cyan","Dat 110/Prosjektene":"red","Dat 110/Sikkerhet":"green","Dat 110/Sikkerhet/Digital Signature":"blue","Dat 110/TCP IP":"blue","Dat 110/TCP IP/1 - Applikasjon":"red","Dat 110/TCP IP/2 - Transport":"orange","Dat 110/TCP IP/3 - Nettverk":"green","Dat 110/TCP IP/3 - Nettverk/Routing":"red","Dat 110/TCP IP/4 - Link":"blue","Dat 110/TCP IP/5 - Fysisk":"purple","Dat 110/Æfingar dæmi":"yellow","Dat 110/Æfingar dæmi/Eksempel dæmi":"cyan","Dat 110/Æfingar dæmi/Gömul eksamen":"orange","Myndir":"cyan","PDF":"red","PDF/Gömul eksamen":"orange","PDF/Gömul eksamen/Claude version":"purple","PDF/Yfirlit yfir spurningar":"green","Templates":"gray","Dat 110/Mikilvægt að muna.md":"yellow","Dat 110/Skoða betur.md":"pink","Dat 110/Arkitektúr/Arkitektúr.md":"purple","Dat 110/Arkitektúr/Distrubution transparency.md":"gray","Dat 110/Arkitektúr/Gjensidig utelukkelse.md":"blue","Dat 110/Arkitektúr/IOT.md":"orange","Dat 110/Arkitektúr/RPC.md":"pink","Dat 110/Arkitektúr/Skytjenester.md":"gray","Dat 110/Arkitektúr/Ustrukturert p2p overley-nettverk.md":"teal","Dat 110/Arkitektúr/ChordDHT/ChordDHT.md":"red","Dat 110/Arkitektúr/ChordDHT/DHT.md":"orange","Dat 110/Arkitektúr/ChordDHT/Fingertabell.md":"blue","Dat 110/Arkitektúr/ChordDHT/Succ()-fallið.md":"green","Dat 110/Arkitektúr/Pålitelighet/Bizantiske enigheten.md":"yellow","Dat 110/Arkitektúr/Pålitelighet/Feiltyper.md":"blue","Dat 110/Arkitektúr/Pålitelighet/Pålitelighet.md":"blue","Dat 110/Arkitektúr/Replikering/Replikering.md":"orange","Dat 110/Arkitektúr/Replikering/Konsistensmodeller.md":"purple","Dat 110/Arkitektúr/Replikering/Primær vs Replikert protokoller.md":"green","Dat 110/Arkitektúr/P-S MOM/Broker.md":"purple","Dat 110/Arkitektúr/P-S MOM/Layer 1 - Applikasjon.md":"red","Dat 110/Arkitektúr/P-S MOM/Layer 2 - Publish-Subscribe MOM.md":"orange","Dat 110/Arkitektúr/P-S MOM/Layer 3 - Socket  prog & RPC.md":"green","Dat 110/Arkitektúr/P-S MOM/P-S MOM.md":"cyan","Dat 110/Hugtök/FIFO rekkefølge.md":"orange","Dat 110/Hugtök/Multi threading í server.md":"green","Dat 110/Hugtök/Threads.md":"purple","Dat 110/Hugtök/Vektorklokke.md":"red","Dat 110/Prosjektene/Prosjekt 1.md":"blue","Dat 110/Prosjektene/Prosjekt 2.md":"green","Dat 110/Prosjektene/Prosjekt 3.md":"orange","Dat 110/Sikkerhet/Digital Signature/Digital Signature.md":"blue","Dat 110/Sikkerhet/Digital Signature/Offentlig nøkkel.md":"orange","Dat 110/Sikkerhet/Digital Signature/Privat Nøkkel.md":"purple","Dat 110/TCP IP/1 - Applikasjon/1 - Applikasjon.md":"red","Dat 110/TCP IP/1 - Applikasjon/DNS.md":"blue","Dat 110/TCP IP/1 - Applikasjon/FTP.md":"green","Dat 110/TCP IP/1 - Applikasjon/HTTP.md":"cyan","Dat 110/TCP IP/1 - Applikasjon/Host.md":"orange","Dat 110/TCP IP/1 - Applikasjon/SMTP.md":"gray","Dat 110/TCP IP/2 - Transport/2 - Transport.md":"orange","Dat 110/TCP IP/2 - Transport/Port nummer.md":"yellow","Dat 110/TCP IP/2 - Transport/TCP.md":"teal","Dat 110/TCP IP/2 - Transport/UDP.md":"gold","Dat 110/TCP IP/3 - Nettverk/3 - Nettverk.md":"green","Dat 110/TCP IP/3 - Nettverk/CIDR Blokk.md":"orange","Dat 110/TCP IP/3 - Nettverk/DHCP.md":"yellow","Dat 110/TCP IP/3 - Nettverk/Forwarding.md":"blue","Dat 110/TCP IP/3 - Nettverk/IP adresse.md":"purple","Dat 110/TCP IP/3 - Nettverk/Rutere.md":"cyan","Dat 110/TCP IP/3 - Nettverk/Routing/Routing.md":"red","Dat 110/TCP IP/3 - Nettverk/Routing/Bellman - Ford.md":"orange","Dat 110/TCP IP/3 - Nettverk/Routing/Djikstas Algoritme.md":"purple","Dat 110/TCP IP/4 - Link/4 - Link.md":"blue","Dat 110/TCP IP/4 - Link/ARP.md":"orange","Dat 110/TCP IP/4 - Link/CSMA.md":"yellow","Dat 110/TCP IP/4 - Link/Ethernet Switch.md":"green","Dat 110/TCP IP/4 - Link/Ethernet frame.md":"purple","Dat 110/TCP IP/4 - Link/MAC adresse.md":"pink","Dat 110/TCP IP/5 - Fysisk/5 - Fysisk.md":"purple","Dat 110/TCP IP/5 - Fysisk/Brodcast link.md":"cyan","Dat 110/Æfingar dæmi/Eksempel dæmi/Ekse -  Transmission.md":"blue","Dat 110/Æfingar dæmi/Eksempel dæmi/Ekse - Broker.md":"purple","Dat 110/Æfingar dæmi/Eksempel dæmi/Ekse - Succ (...).md":"green","Dat 110/Æfingar dæmi/Gömul eksamen/h24.md":"red","Dat 110/Æfingar dæmi/Gömul eksamen/v22.md":"yellow","Dat 110/Æfingar dæmi/Gömul eksamen/v23.md":"purple","Dat 110/Æfingar dæmi/Gömul eksamen/v24.md":"blue","Dat 110/Æfingar dæmi/Gömul eksamen/v25 - Opp  5.md":"green","Templates/Eks-template.md":"gray","PDF/DAT110_Oppgave9_eksamensoversikt.pdf":"blue","PDF/DAT110_gjennomgang.pdf":"red","PDF/Gömul eksamen/22-vår-norsk.pdf":"purple","PDF/Gömul eksamen/v23 - Norsku.md":"purple","PDF/Gömul eksamen/22-vår.pdf":"blue","PDF/Gömul eksamen/22-vår-sensorveiledning.pdf":"green","PDF/Gömul eksamen/23-vår.pdf":"blue","PDF/Gömul eksamen/23-vår_sensorveiledning.pdf":"green","PDF/Gömul eksamen/24-vår.pdf":"blue","PDF/Gömul eksamen/24-vår_sensorveiledning.pdf":"green","PDF/Gömul eksamen/24-høst.pdf":"orange","PDF/Gömul eksamen/24-høst_SensorVeiledning.pdf":"green","PDF/Gömul eksamen/25-høst.pdf":"orange","PDF/Gömul eksamen/25-høst_sensorveiledning.pdf":"green","PDF/Gömul eksamen/Claude version/24v_yfirferd.pdf":"purple","PDF/Yfirlit yfir spurningar/Eksamen_yfirlit.pdf":"blue","PDF/Yfirlit yfir spurningar/Opp_2_Yfirlit.pdf":"cyan","PDF/Yfirlit yfir spurningar/Opp_4_Yfirlit.pdf":"cyan","PDF/Yfirlit yfir spurningar/Opp_5_Yfirlit.pdf":"cyan","PDF/Yfirlit yfir spurningar/Opp_6_Yfirlit.pdf":"cyan","PDF/Yfirlit yfir spurningar/Opp_7_Yfirlit.pdf":"cyan","PDF/Yfirlit yfir spurningar/Opp_10_Yfirlit.pdf":"cyan","Dat 110/TCP IP/1 - Nettverk (Link)":"blue","Dat 110/TCP IP/2 - Internet":"green","Dat 110/TCP IP/2 - Internet/Routing":"red","Dat 110/TCP IP/3 - Transport":"orange","Dat 110/TCP IP/4 - Applikasjon":"red","Dat 110/TCP IP/Extra layer (Fysisk)":"purple","Forlesning":"blue","Forlesning/Del 1":"cyan","Info":"green","Lab":"#FF75C3","PDF/Extra stuff":"purple","PDF/Extra stuff/Yfirlit yfir spurningar":"green","PDF/Prosjekter":"red","Dat 110/Hugtök/Hugtök.md":"cyan","Dat 110/Sikkerhet/Sikkerhet.md":"green","Dat 110/TCP IP/1 - Nettverk (Link)/1 - Nettverk (Link).md":"blue","Dat 110/TCP IP/1 - Nettverk (Link)/ARP.md":"orange","Dat 110/TCP IP/1 - Nettverk (Link)/CSMA.md":"yellow","Dat 110/TCP IP/1 - Nettverk (Link)/Ethernet Switch.md":"green","Dat 110/TCP IP/1 - Nettverk (Link)/Ethernet frame.md":"purple","Dat 110/TCP IP/1 - Nettverk (Link)/MAC adresse.md":"pink","Dat 110/TCP IP/2 - Internet/2 - Internet.md":"green","Dat 110/TCP IP/2 - Internet/CIDR Blokk.md":"orange","Dat 110/TCP IP/2 - Internet/Forwarding.md":"blue","Dat 110/TCP IP/2 - Internet/IP adresse.md":"purple","Dat 110/TCP IP/2 - Internet/Routing/Bellman - Ford.md":"orange","Dat 110/TCP IP/2 - Internet/Routing/Djikstas Algoritme.md":"purple","Dat 110/TCP IP/2 - Internet/Routing/Routing.md":"red","Dat 110/TCP IP/2 - Internet/Rutere.md":"cyan","Dat 110/TCP IP/3 - Transport/3 - Transport.md":"orange","Dat 110/TCP IP/3 - Transport/Port nummer.md":"yellow","Dat 110/TCP IP/3 - Transport/TCP.md":"teal","Dat 110/TCP IP/3 - Transport/UDP.md":"gold","Dat 110/TCP IP/4 - Applikasjon/4 - Applikasjon.md":"red","Dat 110/TCP IP/4 - Applikasjon/DHCP.md":"yellow","Dat 110/TCP IP/4 - Applikasjon/DNS.md":"blue","Dat 110/TCP IP/4 - Applikasjon/FTP.md":"green","Dat 110/TCP IP/4 - Applikasjon/HTTP.md":"cyan","Dat 110/TCP IP/4 - Applikasjon/SMTP.md":"gray","Dat 110/TCP IP/Extra layer (Fysisk)/Brodcast link.md":"cyan","Dat 110/TCP IP/Extra layer (Fysisk)/Extra layer (Fysisk).md":"purple","Dat 110/Æfingar dæmi/Eksempel dæmi/v25 - Opp  5.md":"green","Dat 110/Æfingar dæmi/Gömul eksamen/v25.md":"cyan","Myndir/ClouDNS-TCPIP-5-7.png":"blue","Myndir/Eclipse_PDF_0dQw1cRxQT_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Eclipse_PDF_IXIhcOSc0m_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Eclipse_PDF_yFpaObqInL_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Eclipse_PDF_yfWFSWot3F_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Eclipse_PDF_yjtmKBB8DX_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Gemini_Generated_Image_49htk749htk749ht_upscayl_5x_digital-art-4x.png":"cyan","Myndir/Gemini_Generated_Image_7f7u3z7f7u3z7f7u_upscayl_3x_digital-art-4x.png":"cyan","Myndir/Gemini_Generated_Image_girweogirweogirw_upscayl_5x_digital-art-4x.png":"cyan","Myndir/Myndir.md":"cyan","Myndir/Obsidian_1VBmvD5Oup_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Obsidian_C2FK5LhcIm_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Obsidian_QaHKzbKIo9_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Obsidian_U8vgT2oVNq_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Obsidian_hyKITYBnz9_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Obsidian_vIIpWNYR5n_upscayl_4x_digital-art-4x.png":"cyan","Myndir/One_Photo_Viewer_5kbYt1IdyT_upscayl_5x_digital-art-4x.png":"cyan","Myndir/One_Photo_Viewer_vudjHsUgB5_upscayl_5x_digital-art-4x.png":"cyan","Myndir/PS-MOM_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Pasted image 20260524104628.png":"cyan","Myndir/Pasted image 20260524113321.png":"cyan","Myndir/Pasted image 20260524114412.png":"cyan","Myndir/Pasted image 20260524125300.png":"cyan","Myndir/Pasted image 20260524125635.png":"cyan","Myndir/Pasted image 20260524130601.png":"cyan","Myndir/Pasted image 20260524130910.png":"cyan","Myndir/Pasted image 20260525115551.png":"cyan","Myndir/Pasted image 20260525115811_upscayl_4x_digital-art-4x.png":"cyan","Myndir/Pasted image 20260525142400.png":"cyan","Myndir/Pasted image 20260526090626.png":"cyan","Myndir/Pasted image 20260526104745.png":"cyan","Myndir/Pasted image 20260526104806.png":"cyan","Myndir/Pasted image 20260526112535.png":"cyan","Myndir/Pasted image 20260529073141.png":"cyan","Myndir/Pasted image 20260529150332.png":"cyan","Myndir/claude_5ItYtuG4W4_upscayl_4x_digital-art-4x.png":"cyan","Myndir/claude_KD6S6LgGiE_upscayl_4x_digital-art-4x.png":"cyan","Myndir/inverted.gif":"cyan","Myndir/udp_upscayl_4x_digital-art-4x.png":"cyan","PDF/Extra stuff/DAT110_Oppgave9_eksamensoversikt.pdf":"blue","PDF/Extra stuff/DAT110_gjennomgang.pdf":"red","PDF/Extra stuff/Yfirlit yfir spurningar/Eksamen_yfirlit.pdf":"blue","PDF/Extra stuff/Yfirlit yfir spurningar/Opp_10_Yfirlit.pdf":"cyan","PDF/Extra stuff/Yfirlit yfir spurningar/Opp_2_Yfirlit.pdf":"cyan","PDF/Extra stuff/Yfirlit yfir spurningar/Opp_4_Yfirlit.pdf":"cyan","PDF/Extra stuff/Yfirlit yfir spurningar/Opp_5_Yfirlit.pdf":"cyan","PDF/Extra stuff/Yfirlit yfir spurningar/Opp_6_Yfirlit.pdf":"cyan","PDF/Extra stuff/Yfirlit yfir spurningar/Opp_7_Yfirlit.pdf":"cyan","PDF/Extra stuff/Yfirlit yfir spurningar/Yfirlit yfir spurningar.md":"green","PDF/Gömul eksamen/Claude version/Claude version.md":"purple","PDF/Gömul eksamen/Gömul eksamen.md":"orange","PDF/PDF.md":"red","PDF/Prosjekter/Prosjekt 1.md":"blue","Templates/Templates.md":"gray","web.config":"gray","Eksamen":"#FFD44A","Forelesninger":"#4DA6FF","Hugök":"#FFD44A","Innlevering":"#FF657A","Semester Projects":"#2ED8A3","fonts":"#B9C5D6","ros2_students_25":"#4DA6FF"},"prefixes":{"Myndir/":"cyan"},"links":{"Mikilvægt að muna":"yellow","Skoða betur":"pink","Arkitektúr":"purple","Bizantiske enigheten":"yellow","Gjensidig utelukkelse":"blue","IOT":"orange","RPC":"pink","Skytjenester":"gray","Ustrukturert p2p overley-nettverk":"teal","ChordDHT":"red","DHT":"orange","Fingertabell":"blue","Succ()-fallið":"green","Pålitelighet":"blue","Konsistensmodeller":"purple","Primær vs Replikert protokoller":"green","Broker":"purple","Layer 1 - Applikasjon":"red","Layer 2 - Publish-Subscribe MOM":"orange","Layer 3 - Socket  prog & RPC":"green","P-S MOM":"cyan","Distrubution transparency":"gray","Feiltyper":"blue","FIFO rekkefølge":"orange","Multi threading í server":"green","Replikering":"orange","Threads":"purple","Vektorklokke":"red","Prosjekt 1":"blue","Prosjekt 2":"green","Prosjekt 3":"orange","Digital Signature":"blue","Offentlig nøkkel":"orange","Privat Nøkkel":"purple","1 - Applikasjon":"red","DNS":"blue","FTP":"green","HTTP":"cyan","Host":"orange","SMTP":"gray","2 - Transport":"orange","Port nummer":"yellow","TCP":"teal","UDP":"gold","3 - Nettverk":"green","CIDR Blokk":"orange","DHCP":"yellow","Forwarding":"blue","IP adresse":"purple","Rutere":"cyan","Routing":"red","Bellman - Ford":"orange","Djikstas Algoritme":"purple","4 - Link":"blue","ARP":"orange","CSMA":"yellow","Ethernet Switch":"green","Ethernet frame":"purple","MAC adresse":"pink","5 - Fysisk":"purple","Brodcast link":"cyan","Ekse -  Transmission":"blue","Ekse - Broker":"purple","Ekse - Succ (...)":"green","h24":"red","v22":"yellow","v23":"purple","v24":"blue","v25 - Opp  5":"green","v23 - Norsku":"purple","Eks-template":"gray","Hugtök":"cyan","Sikkerhet":"green","1 - Nettverk (Link)":"blue","2 - Internet":"green","3 - Transport":"orange","4 - Applikasjon":"red","Extra layer (Fysisk)":"purple","v25":"cyan","Myndir":"cyan","Yfirlit yfir spurningar":"green","Claude version":"purple","Gömul eksamen":"orange","PDF":"red","Templates":"gray"}};
const DEFAULTS = Object.freeze({
  sidebar: true, sidebarInset: 8, focusTopFolder: true, compactFileHeader: true,
  darker: true, darkerAmountDark: 30, darkerAmountLight: 30, darkerDark: true, darkerLight: true,
  modalOpacityDark: 65, modalOpacityLight: 85,
  sfPro: true, quotes: true, quoteColor: '#ffffff', quoteBar: '#ffffff',
  math: true, mathScale: 128,
  academicNotes: false, fullWidthNotes: false,
  folderTypography: true, folderSize1: 1.30, folderSize2: 1.04,
  folderSize3: 0.958, folderSize4: 0.921,
  folderWeight1: 700, folderWeight2: 800, folderWeight3: 700, folderWeight4: 700,
  folderColors: true, fileColors: true, linkColors: true, syncIconic: true,
  legacyColors: true, folderMix: 78, fileMix: 60, linkMix: 60, rootExact: true,
  pdfDark: true, pdfInvert: 0.9, pdfContrast: 0.95,
  imageInvert: 0.92, imageContrast: 1,
  navigatorPdf: true,
  webview: true, plateDark: '#e8e8e8', plateLight: '#f5f5f5',
  mediaOverrides: true
});
const RANGES = {
  sidebarInset: [0, 32], darkerAmountDark: [0, 100], darkerAmountLight: [0, 100],
  modalOpacityDark: [0, 100], modalOpacityLight: [0, 100], mathScale: [80, 200],
  folderSize1: [0.5, 2], folderSize2: [0.5, 2], folderSize3: [0.5, 2], folderSize4: [0.5, 2],
  folderWeight1: [100, 900], folderWeight2: [100, 900], folderWeight3: [100, 900], folderWeight4: [100, 900],
  folderMix: [0, 100], fileMix: [0, 100], linkMix: [0, 100],
  pdfInvert: [0, 1], pdfContrast: [0.5, 1.5], imageInvert: [0, 1], imageContrast: [0.5, 1.5]
};
const PALETTE = {
  red: ['--color-red', '#e93147'], orange: ['--color-orange', '#ec7500'],
  yellow: ['--color-yellow', '#e0ac00'], green: ['--color-green', '#08b94e'],
  cyan: ['--color-cyan', '#00bfbc'], blue: ['--color-blue', '#086ddd'],
  purple: ['--color-purple', '#7852ee'], pink: ['--color-pink', '#d53984'],
  gray: ['--color-base-60', '#888888'], emerald: [null, '#4cc38a'],
  gold: [null, '#c9933e'], teal: [null, '#00b386']
};
const IMAGE_EXTS = new Set(['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'avif', 'svg', 'tif', 'tiff']);
const OWN_CLASSES = ['ctk-active', 'ctk-sidebar', 'ctk-darker', 'ctk-darker-dark', 'ctk-darker-light',
  'ctk-sf-pro', 'ctk-quotes', 'ctk-math', 'ctk-typography', 'ctk-pdf-dark', 'ctk-image-dark',
  'ctk-nn-pdf', 'ctk-nn-md', 'ctk-nn-all', 'ctk-webview', 'ctk-svg-plate', 'ctk-overrides', 'ctk-compact-header',
  'ctk-academic-notes', 'ctk-full-width-notes'];
const MEDIA_CLASSES = ['ctk-light', 'ctk-dark', 'ctk-plate', 'ctk-pdf-light', 'ctk-pdf-force-dark', 'ctk-pdf-thumb'];
const COLOR_PROPS = ['--ctk-label-color', '--ctk-link-color'];
const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const plain = value => value && typeof value === 'object' && !Array.isArray(value);
const safeKey = key => typeof key === 'string' && key.length > 0 && key.length < 10000 && !['__proto__', 'constructor', 'prototype'].includes(key);
const extension = path => String(path || '').split('.').pop().toLowerCase();
const validColor = value => typeof value === 'string' && (has(PALETTE, value) || /^#[\da-f]{3}(?:[\da-f]|[\da-f]{3}|[\da-f]{5})?$/i.test(value));
const cssColor = value => has(PALETTE, value) ? (PALETTE[value][0] ? `var(${PALETTE[value][0]}, ${PALETTE[value][1]})` : PALETTE[value][1]) : validColor(value) ? value : null;
const cleanMap = (input, accept) => {
  const result = Object.create(null);
  if (plain(input)) for (const [key, value] of Object.entries(input)) if (safeKey(key) && accept(value)) result[key] = value;
  return result;
};
function normalizeData(input) {
  const raw = plain(input) ? input : {};
  const sourceSettings = plain(raw.settings) ? { ...raw.settings } : {};
  // Upgrade the old shared percentage without re-enabling automatic image filters.
  if (typeof sourceSettings.darkerAmount === 'number' && Number.isFinite(sourceSettings.darkerAmount)) {
    if (!has(sourceSettings, 'darkerAmountDark')) sourceSettings.darkerAmountDark = sourceSettings.darkerAmount;
    if (!has(sourceSettings, 'darkerAmountLight')) sourceSettings.darkerAmountLight = sourceSettings.darkerAmount;
  }
  const settings = { ...DEFAULTS };
  for (const [key, fallback] of Object.entries(DEFAULTS)) {
    const value = sourceSettings[key];
    if (typeof fallback === 'boolean' && typeof value === 'boolean') settings[key] = value;
    else if (typeof fallback === 'number' && typeof value === 'number' && Number.isFinite(value)) {
      const [min, max] = RANGES[key];
      settings[key] = Math.max(min, Math.min(max, value));
    } else if (typeof fallback === 'string' && /^#[\da-f]{6}$/i.test(value || '')) settings[key] = value;
  }
  return { version: 2, settings, colors: cleanMap(raw.colors, validColor),
    images: cleanMap(raw.images, v => ['light', 'dark', 'plate'].includes(v)),
    pdfs: cleanMap(raw.pdfs, v => ['light', 'dark'].includes(v)),
    migrated: raw.migrated === true };
}

module.exports = class CupertinoToolkit extends Plugin {
  async onload() {
    this.stopped = false;
    this.documents = new Map();
    this.folderFocus = new Map();
    this.colorCache = new Map();
    this.dirtyColors = true;
    this.timer = null;
    this.saveQueue = Promise.resolve();
    const saved = await this.loadData();
    this.data = normalizeData(saved);
    if (!saved) {
      await this.importPreviousSettings();
      await this.persist();
    } else if (saved.version !== 2) await this.persist();
    this.addSettingTab(new ToolkitSettings(this.app, this));
    for (const name of ['layout-change', 'active-leaf-change', 'file-open']) {
      this.registerEvent(this.app.workspace.on(name, () => { this.attach(); this.schedule(); }));
    }
    this.registerEvent(this.app.workspace.on('css-change', () => this.schedule(true)));
    this.registerEvent(this.app.workspace.on('window-open', (workspaceWindow, win) => {
      const doc = workspaceWindow?.doc || win?.document;
      if (doc) this.attachDocument(doc);
      this.schedule(true);
    }));
    this.registerEvent(this.app.workspace.on('window-close', (workspaceWindow, win) => {
      this.detachDocument(workspaceWindow?.doc || win?.document);
    }));
    this.registerEvent(this.app.workspace.on('file-menu', (menu, file) => this.fileMenu(menu, file)));
    this.registerEvent(this.app.vault.on('rename', (file, oldPath) => this.renameEntries(file.path, oldPath)));
    this.registerEvent(this.app.vault.on('delete', file => this.deleteEntries(file.path)));
    this.registerEvent(this.app.metadataCache.on('resolved', () => this.schedule(true)));
    this.registerMarkdownPostProcessor((el, ctx) => {
      if (this.stopped) return;
      this.applyImages(el, ctx.sourcePath);
      this.applyLinks(el, ctx.sourcePath);
    });
    this.addCommand({ id: 'refresh', name: 'Refresh appearance and colors', callback: () => this.schedule(true) });
    this.addCommand({ id: 'toggle-pdf', name: 'Toggle PDF dark mode', callback: () => this.update('pdfDark', !this.data.settings.pdfDark) });
    this.addCommand({ id: 'cycle-media', name: 'Cycle appearance of the current image or PDF', checkCallback: checking => {
      const target = this.currentMedia();
      if (!target) return false;
      if (!checking) {
        const state = this.data[target.store][target.key];
        this.setMedia(target.store, target.key, !state ? 'light' : state === 'light' ? 'dark' : null);
      }
      return true;
    }});
    this.addCommand({ id: 'export-settings', name: 'Export settings and colors', callback: () => new TransferModal(this.app, this, false).open() });
    this.addCommand({ id: 'import-settings', name: 'Import settings and colors', callback: () => new TransferModal(this.app, this, true).open() });
    this.app.workspace.onLayoutReady(() => { if (!this.stopped) { this.attach(); this.schedule(true); } });
  }

  persist() {
    const snapshot = JSON.parse(JSON.stringify(this.data));
    this.saveQueue = this.saveQueue.catch(() => {}).then(() => this.saveData(snapshot));
    return this.saveQueue;
  }

  async onExternalSettingsChange() {
    const current = this.data;
    const pendingSave = this.saveQueue;
    await pendingSave.catch(() => {});
    const saved = await this.loadData();
    if (!saved || this.stopped || this.data !== current || this.saveQueue !== pendingSave) return;
    this.data = normalizeData(saved);
    this.schedule(true);
  }

  async update(key, value) {
    return this.updateSettings({ [key]: value });
  }

  async updateSettings(changes) {
    const next = normalizeData({ ...this.data, settings: { ...this.data.settings, ...changes } });
    this.data = next;
    this.schedule(true);
    try { await this.persist(); } catch (error) { this.saveError(error); }
  }

  saveError(error) {
    console.error('Toolkit: could not save settings', error);
    new Notice('Toolkit could not save this change. Check write access to your vault.');
  }

  async readOldData(id) {
    const path = `${this.app.vault.configDir}/plugins/${id}/data.json`;
    try {
      if (await this.app.vault.adapter.exists(path)) {
        const parsed = JSON.parse(await this.app.vault.adapter.read(path));
        return plain(parsed) ? parsed : {};
      }
    } catch (error) { console.warn(`Toolkit: could not read ${id} settings`, error); }
    return {};
  }

  async importPreviousSettings() {
    // Read-only migration, limited to the two companion tools used by the snippets.
    const [style, media] = await Promise.all([this.readOldData('obsidian-style-settings'), this.readOldData('image-dark-toggle')]);
    const settings = { ...this.data.settings };
    const mappings = {
      'sf-pro-quote-tweaks@@sf-pro-enabled': 'sfPro', 'sf-pro-quote-tweaks@@quote-color': 'quoteColor',
      'sf-pro-quote-tweaks@@quote-bar-color': 'quoteBar', 'pdf-dark-mode@@pdf-dark-invert': 'pdfInvert',
      'pdf-dark-mode@@pdf-dark-contrast': 'pdfContrast', 'pdf-dark-mode@@md-img-invert': 'imageInvert',
      'pdf-dark-mode@@md-img-contrast': 'imageContrast',
      'pdf-dark-mode@@md-plate-bg@@dark': 'plateDark', 'pdf-dark-mode@@md-plate-bg@@light': 'plateLight'
    };
    for (const [old, key] of Object.entries(mappings)) if (has(style, old)) settings[key] = style[old];
    this.data = normalizeData({ ...this.data, settings, images: { ...cleanMap(media.images, v => ['light', 'dark'].includes(v)), ...this.data.images },
      pdfs: { ...cleanMap(media.pdfs, v => ['light', 'dark'].includes(v)), ...this.data.pdfs }, migrated: true });
  }

  attach() {
    if (this.stopped) return;
    const docs = new Set([document]);
    this.app.workspace.iterateAllLeaves(leaf => {
      const doc = leaf.view?.containerEl?.ownerDocument;
      if (doc) docs.add(doc);
    });
    for (const doc of docs) this.attachDocument(doc);
    for (const doc of this.documents.keys()) if (doc.defaultView?.closed) this.detachDocument(doc);
  }

  attachDocument(doc) {
    if (this.stopped || !doc?.body || !doc.defaultView || this.documents.has(doc)) return;
    const style = doc.createElement('style');
    style.dataset.cupertinoToolkit = 'settings';
    doc.head.appendChild(style);
    const onContextMenu = event => this.imageMenu(event);
    doc.addEventListener('contextmenu', onContextMenu, true);
    const observer = new doc.defaultView.MutationObserver(records => {
      let dirty = false, changed = false;
      for (const record of records) {
        if (record.target === style || style.contains(record.target)) continue;
        if (record.type === 'attributes') {
          // Ignore only our own attribute changes. External icon/style changes still refresh.
          const element = record.target;
          const before = record.oldValue || '';
          const after = element.getAttribute(record.attributeName) || '';
          if (record.attributeName === 'class') {
            const strip = value => value.split(/\s+/).filter(v => v && !v.startsWith('ctk-')).sort().join(' ');
            if (strip(before) === strip(after)) continue;
          }
          if (record.attributeName === 'style') {
            const strip = value => value.replace(/--ctk-[\w-]+\s*:[^;]*(?:;|$)/g, '').replace(/\s/g, '');
            if (strip(before) === strip(after)) continue;
          }
          dirty = true;
        }
        if (record.type === 'childList' && record.target.closest?.('.iconic-icon, .iconic-sidekick')) dirty = true;
        changed = true;
      }
      if (changed) this.schedule(dirty);
    });
    observer.observe(doc.body, { childList: true, subtree: true, attributes: true, attributeOldValue: true,
      attributeFilter: ['class', 'style', 'data-path', 'data-href', 'src', 'alt'] });
    const themeObserver = new doc.defaultView.MutationObserver(() => this.schedule(true));
    themeObserver.observe(doc.documentElement, { attributes: true, attributeFilter: ['class', 'style'] });
    this.documents.set(doc, { style, observer, themeObserver, onContextMenu });
  }

  detachDocument(doc) {
    const entry = this.documents?.get(doc);
    if (!entry) return;
    entry.observer.disconnect();
    entry.themeObserver.disconnect();
    doc.removeEventListener('contextmenu', entry.onContextMenu, true);
    entry.style.remove();
    this.cleanDocument(doc);
    this.documents.delete(doc);
  }

  schedule(colors = false) {
    if (this.stopped) return;
    this.dirtyColors ||= colors;
    if (this.timer !== null) return;
    this.timer = setTimeout(() => {
      this.timer = null;
      if (!this.stopped) this.refresh();
    }, 80);
  }

  refresh() {
    if (this.stopped) return;
    if (this.dirtyColors) { this.colorCache.clear(); this.dirtyColors = false; }
    this.attach();
    for (const [doc, entry] of this.documents) {
      this.applySettings(doc, entry.style);
      this.applyLabels(doc);
    }
    const explorers = new Set();
    this.app.workspace.iterateAllLeaves(leaf => {
      const view = leaf.view;
      const root = view?.containerEl;
      if (!root) return;
      const type = view.getViewType?.();
      if (type === 'file-explorer' && this.data.settings.focusTopFolder) {
        explorers.add(view);
        this.applyFolderFocus(view);
      }
      const source = view.file?.path || '';
      if (type === 'pdf') this.stampMedia(root, this.data.pdfs[source], true);
      this.applyImages(root, source);
      this.applyLinks(root, source);
    });
    for (const view of this.folderFocus.keys()) if (!explorers.has(view)) this.clearFolderFocus(view);
    for (const doc of this.documents.keys()) {
      for (const root of doc.querySelectorAll('.hover-popover, .modal-container')) {
        this.applyImages(root, this.sourceFor(root));
        this.applyLinks(root, this.sourceFor(root));
      }
      this.applyNavigator(doc);
    }
  }

  applyFolderFocus(view) {
    const tree = view.tree;
    if (!view.ready || !view.fileItems || typeof tree?.applySearchFilter !== 'function') return;
    const root = this.app.vault.getRoot();
    let state = this.folderFocus.get(view);
    if (!state) {
      state = { open: new Set(), folder: null, original: tree.applySearchFilter };
      // Use the explorer's own filter so keyboard navigation and virtual scrolling follow visibility.
      state.filter = function (...args) {
        if (!state.folder || this.filter) return state.original.apply(this, args);
        const path = state.folder.path;
        const previous = this.filter;
        this.filter = item => {
          const file = item.file;
          return !file || file.path === path || file.path.startsWith(path + '/') ||
            (file.parent === root && !(file instanceof TFolder));
        };
        try { return state.original.apply(this, args); }
        finally { this.filter = previous; }
      };
      tree.applySearchFilter = state.filter;
      this.folderFocus.set(view, state);
    }
    const open = new Set(root.children.filter(file =>
      file instanceof TFolder && view.fileItems[file.path]?.collapsed === false));
    const opened = [...open].filter(file => !state.open.has(file));
    const folder = opened.length === 1 ? opened[0] :
      opened.length === 0 && open.has(state.folder) ? state.folder : null;
    state.open = open;
    if (state.folder === folder) return;
    state.folder = folder;
    tree.applySearchFilter();
  }

  clearFolderFocus(view) {
    const state = this.folderFocus.get(view);
    state.folder = null;
    if (view.tree.applySearchFilter === state.filter) view.tree.applySearchFilter = state.original;
    view.tree.applySearchFilter();
    this.folderFocus.delete(view);
  }

  applySettings(doc, style) {
    const s = this.data.settings;
    const toggles = { 'ctk-active': true, 'ctk-sidebar': s.sidebar, 'ctk-darker': s.darker,
      'ctk-compact-header': s.compactFileHeader,
      'ctk-darker-dark': s.darkerDark, 'ctk-darker-light': s.darkerLight, 'ctk-sf-pro': s.sfPro,
      'ctk-quotes': s.quotes, 'ctk-math': s.math, 'ctk-typography': s.folderTypography,
      'ctk-academic-notes': s.academicNotes, 'ctk-full-width-notes': s.fullWidthNotes,
      'ctk-pdf-dark': s.pdfDark, 'ctk-image-dark': false, 'ctk-nn-pdf': s.navigatorPdf,
      'ctk-nn-md': false, 'ctk-nn-all': false, 'ctk-webview': s.webview,
      'ctk-svg-plate': false, 'ctk-overrides': s.mediaOverrides };
    for (const [key, value] of Object.entries(toggles)) if (doc.body.classList.contains(key) !== value) doc.body.classList.toggle(key, value);
    const vars = { 'sidebar-inset': s.sidebarInset + 'px', 'darker-amount': s.darkerAmountDark + '%',
      'modal-opacity': s.modalOpacityDark + '%',
      'quote-color': s.quoteColor, 'quote-bar': s.quoteBar, 'math-scale': s.mathScale + '%',
      'pdf-invert': s.pdfInvert, 'pdf-contrast': s.pdfContrast, 'image-invert': s.imageInvert,
      'image-contrast': s.imageContrast, 'plate-bg': s.plateDark };
    for (let level = 1; level <= 4; level++) {
      vars[`folder-size-${level}`] = s[`folderSize${level}`] + 'em';
      vars[`folder-weight-${level}`] = s[`folderWeight${level}`];
    }
    const css = 'body.ctk-active {' + Object.entries(vars).map(([k, v]) => `--ctk-${k}:${v};`).join('') + '}\n' +
      `body.ctk-active.theme-light {--ctk-plate-bg:${s.plateLight};--ctk-darker-amount:${s.darkerAmountLight}%;--ctk-modal-opacity:${s.modalOpacityLight}%;}`;
    if (style.textContent !== css) style.textContent = css;
  }

  iconicColor(path, folder) {
    if (!this.data.settings.syncIconic) return null;
    const iconic = this.app.plugins?.plugins?.iconic;
    if (!iconic) return null;
    try {
      const item = iconic.getFileItem?.(path);
      const ruling = iconic.ruleManager?.checkRuling?.(folder ? 'folder' : 'file', path);
      return cssColor(ruling?.color || item?.color || iconic.settings?.fileIcons?.[path]?.color);
    } catch (_) { return null; } // Iconic is optional and its API is not public.
  }

  colorFor(path, folder = false) {
    const cacheKey = `${folder ? 'd' : 'f'}:${path}`;
    if (this.colorCache.has(cacheKey)) return this.colorCache.get(cacheKey);
    let color = has(this.data.colors, path) ? cssColor(this.data.colors[path]) : this.iconicColor(path, folder);
    if (!color && this.data.settings.legacyColors) {
      color = cssColor(LEGACY.paths[path]);
      if (!color) {
        const prefix = Object.keys(LEGACY.prefixes).filter(p => path.startsWith(p)).sort((a, b) => b.length - a.length)[0];
        if (prefix) color = cssColor(LEGACY.prefixes[prefix]);
      }
    }
    this.colorCache.set(cacheKey, color || null);
    return color;
  }

  applyLabels(doc) {
    const s = this.data.settings;
    for (const title of doc.querySelectorAll('.nav-folder-title[data-path], .nav-file-title[data-path]')) {
      const folder = title.classList.contains('nav-folder-title');
      const label = title.querySelector(folder ? '.nav-folder-title-content' : '.nav-file-title-content');
      if (!label) continue;
      const path = title.getAttribute('data-path') || '';
      const root = folder && path && !path.includes('/') && !title.parentElement?.classList.contains('mod-root');
      const enabled = folder ? s.folderColors : s.fileColors;
      const vaultTitle = folder && title.parentElement?.classList.contains('mod-root');
      let color = enabled && path && !vaultTitle ? this.colorFor(path, folder) : null;
      // Root labels follow the rendered icon, including custom Iconic CSS rules.
      if (enabled && root && s.syncIconic && !has(this.data.colors, path)) {
        const svg = title.querySelector('.iconic-sidekick .svg-icon, .tree-item-icon.iconic-icon .svg-icon');
        if (svg && !title.querySelector('.iconic-emoji')) {
          const rendered = doc.defaultView.getComputedStyle(svg).color;
          if (rendered && doc.defaultView.CSS.supports('color', rendered)) color = rendered;
        }
      }
      const mixed = color ? root && s.rootExact ? color : `color-mix(in oklab, ${color} ${folder ? s.folderMix : s.fileMix}%, var(--text-normal))` : null;
      this.setColor(label, '--ctk-label-color', 'ctk-colored-label', mixed);
    }
  }

  setColor(el, property, className, value) {
    if (value) {
      if (el.style.getPropertyValue(property) !== value) el.style.setProperty(property, value);
      if (!el.classList.contains(className)) el.classList.add(className);
    } else {
      if (el.style.getPropertyValue(property)) el.style.removeProperty(property);
      if (el.classList.contains(className)) el.classList.remove(className);
    }
  }

  resolveLink(raw, source) {
    if (!raw || /^(?:https?:|data:|mailto:|#)/i.test(raw)) return null;
    const link = raw.split('|')[0].split('#')[0];
    try {
      return this.app.metadataCache.getFirstLinkpathDest(link, source || '') ||
        this.app.vault.getAbstractFileByPath(link);
    } catch (_) { return null; }
  }

  applyLinks(root, source) {
    for (const link of root.querySelectorAll('a.internal-link[data-href], .cm-hmd-internal-link [data-href], .cm-hmd-internal-link[data-href]')) {
      let color = null;
      if (this.data.settings.linkColors) {
        const href = link.getAttribute('data-href') || '';
        const destination = this.resolveLink(href, source);
        if (destination) color = this.colorFor(destination.path, !(destination instanceof TFile));
        // Resolved links always use their actual path, avoiding collisions between same-named notes.
        else if (this.data.settings.legacyColors) color = cssColor(LEGACY.links[href.split('#')[0].split('/').pop()]);
      }
      this.setColor(link, '--ctk-link-color', 'ctk-colored-link', color ? `color-mix(in oklab, ${color} ${this.data.settings.linkMix}%, var(--text-normal))` : null);
    }
  }

  sourceFor(el) {
    const leafEl = el.closest?.('.workspace-leaf');
    let source = '';
    this.app.workspace.iterateAllLeaves(leaf => {
      if (leafEl && (leaf.containerEl === leafEl || (leaf.view?.containerEl && leafEl.contains(leaf.view.containerEl)))) source = leaf.view?.file?.path || '';
    });
    const preview = el.closest?.('.hover-popover');
    return source || preview?.getAttribute('data-path') || '';
  }

  resourceKey(raw) {
    if (!raw) return null;
    if (/^https?:\/\//i.test(raw)) return raw.split('#')[0];
    if (/^data:|^blob:/i.test(raw)) return null;
    if (!/^(app|file|capacitor):/i.test(raw)) {
      try { return decodeURIComponent(raw.split('#')[0].split('?')[0]); } catch (_) { return raw; }
    }
    try {
      const url = new URL(raw);
      let path = decodeURIComponent(url.pathname).replace(/\\/g, '/');
      if (/^\/[a-z]:/i.test(path)) path = path.slice(1);
      const base = this.app.vault.adapter.getBasePath?.().replace(/\\/g, '/').replace(/\/$/, '');
      if (base && path.toLowerCase().startsWith(base.toLowerCase() + '/')) return path.slice(base.length + 1);
      // Mobile resource URLs may not expose a desktop base path. Match vault resource URLs exactly.
      const file = this.app.vault.getFiles().find(file => this.app.vault.getResourcePath(file).split('?')[0] === raw.split('?')[0].split('#')[0]);
      return file?.path || null;
    } catch (_) { return null; }
  }

  imageKey(img, source) {
    const embed = img.closest('.internal-embed[src], .image-embed[src]');
    const embedded = embed?.getAttribute('src');
    if (embedded) {
      const file = this.resolveLink(embedded, source);
      if (file) return file.path;
    }
    const raw = img.getAttribute('src') || img.currentSrc || '';
    const resolved = this.resolveLink(raw, source);
    return resolved?.path || this.resourceKey(raw);
  }

  stampMedia(el, state, pdf = false) {
    const wanted = this.data.settings.mediaOverrides ? state : null;
    const classes = pdf ? { 'ctk-pdf-light': wanted === 'light', 'ctk-pdf-force-dark': wanted === 'dark' } :
      { 'ctk-light': wanted === 'light', 'ctk-dark': wanted === 'dark', 'ctk-plate': wanted === 'plate' };
    for (const [key, value] of Object.entries(classes)) if (el.classList.contains(key) !== value) el.classList.toggle(key, value);
  }

  applyImages(root, source) {
    for (const img of root.querySelectorAll('img:not(.nn-file-thumbnail-img)')) {
      const key = this.imageKey(img, source);
      this.stampMedia(img, key ? this.data.images[key] : null);
    }
    for (const embed of root.querySelectorAll('.pdf-embed[src], .internal-embed[src]')) {
      const file = this.resolveLink(embed.getAttribute('src'), source);
      if (extension(file?.path || embed.getAttribute('src')?.split('#')[0]) === 'pdf') this.stampMedia(embed, this.data.pdfs[file?.path || embed.getAttribute('src').split('#')[0]], true);
      else if (embed.matches('.ctk-pdf-light, .ctk-pdf-force-dark')) this.stampMedia(embed, null, true);
    }
  }

  applyNavigator(doc) {
    for (const row of doc.querySelectorAll('.nn-list-pane [data-path]')) {
      const path = row.getAttribute('data-path') || '';
      const pdf = extension(path) === 'pdf';
      const state = pdf ? this.data.pdfs[path] : IMAGE_EXTS.has(extension(path)) ? this.data.images[path] : null;
      for (const img of row.querySelectorAll('.nn-file-thumbnail-img')) {
        this.stampMedia(img, state);
        if (img.classList.contains('ctk-pdf-thumb') !== pdf) img.classList.toggle('ctk-pdf-thumb', pdf);
      }
    }
  }

  async setMedia(store, key, value) {
    if (!['images', 'pdfs'].includes(store) || !safeKey(key)) return;
    if (value == null) delete this.data[store][key];
    else if ((store === 'images' ? ['light', 'dark', 'plate'] : ['light', 'dark']).includes(value)) this.data[store][key] = value;
    this.schedule();
    try { await this.persist(); } catch (error) { this.saveError(error); }
  }

  currentMedia() {
    const file = this.app.workspace.getActiveFile();
    if (!file) return null;
    return extension(file.path) === 'pdf' ? { store: 'pdfs', key: file.path } : IMAGE_EXTS.has(extension(file.path)) ? { store: 'images', key: file.path } : null;
  }

  mediaMenu(menu, store, key) {
    const state = this.data[store][key] || null;
    const choices = [[null, store === 'images' ? 'Default — original colors' : 'Follow theme', 'contrast'], ['light', 'Original colors', 'sun'], ['dark', 'Dark / inverted', 'moon']];
    if (store === 'images') choices.push(['plate', 'Light background plate', 'square']);
    menu.addSeparator();
    for (const [value, label, icon] of choices) menu.addItem(item => item.setTitle(`Toolkit: ${label}`).setIcon(icon).setChecked(state === value).onClick(() => this.setMedia(store, key, value)));
  }

  fileMenu(menu, file) {
    if (!file?.path) return;
    menu.addItem(item => item.setTitle('Toolkit: choose name color…').setIcon('palette').onClick(() => new PathColorModal(this.app, this, file.path).open()));
    if (file instanceof TFile) {
      const ext = extension(file.path);
      if (ext === 'pdf' || IMAGE_EXTS.has(ext)) this.mediaMenu(menu, ext === 'pdf' ? 'pdfs' : 'images', file.path);
    }
  }

  imageMenu(event) {
    // Obsidian provides file-menu for local images. External and embedded images need a DOM menu.
    const img = event.target?.closest?.('img');
    if (!img || !img.closest('.markdown-preview-view, .markdown-source-view, .image-container, .image-view, .hover-popover, .nn-list-pane')) return;
    const row = img.closest('.nn-list-pane [data-path]');
    const key = row?.getAttribute('data-path') || this.imageKey(img, this.sourceFor(img));
    if (!key) return;
    if (row && extension(key) !== 'pdf' && !IMAGE_EXTS.has(extension(key))) return;
    const store = extension(key) === 'pdf' ? 'pdfs' : 'images';
    event.preventDefault();
    event.stopPropagation();
    const menu = new Menu();
    const file = this.app.vault.getAbstractFileByPath(key);
    if (file instanceof TFile) this.app.workspace.trigger('file-menu', menu, file, 'cupertino-toolkit');
    else this.mediaMenu(menu, store, key);
    menu.addSeparator();
    menu.addItem(item => item.setTitle('Copy image').setIcon('copy').onClick(() => this.copyImage(img)));
    if (file instanceof TFile) {
      if (typeof this.app.openWithDefaultApp === 'function') menu.addItem(item => item.setTitle('Open in default app').setIcon('arrow-up-right').onClick(() => this.app.openWithDefaultApp(file.path)));
      if (typeof this.app.showInFolder === 'function') menu.addItem(item => item.setTitle('Show in system explorer').setIcon('folder-open').onClick(() => this.app.showInFolder(file.path)));
    }
    menu.showAtMouseEvent(event);
  }

  async copyImage(img) {
    try {
      const win = img.ownerDocument.defaultView;
      const canvas = img.ownerDocument.createElement('canvas');
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      if (!blob || !win.ClipboardItem || !win.navigator.clipboard?.write) throw new Error('Image clipboard unavailable');
      await win.navigator.clipboard.write([new win.ClipboardItem({ 'image/png': blob })]);
      new Notice('Image copied.');
    } catch (_) { new Notice('Could not copy this image. Open the original file to copy it.'); }
  }

  async setPathColor(path, value) {
    if (!safeKey(path)) return;
    if (value == null) delete this.data.colors[path];
    else if (validColor(value)) this.data.colors[path] = value;
    this.schedule(true);
    try { await this.persist(); } catch (error) { this.saveError(error); }
  }

  async snapshotIconic() {
    const iconic = this.app.plugins?.plugins?.iconic;
    if (!iconic) { new Notice('Iconic is not enabled. You can still right-click a file or folder to choose a name color.'); return; }
    let count = 0;
    const files = this.app.vault.getAllLoadedFiles();
    for (const file of files) {
      if (!file.path || has(this.data.colors, file.path)) continue;
      try {
        const item = iconic.getFileItem?.(file.path);
        const rule = iconic.ruleManager?.checkRuling?.(file instanceof TFile ? 'file' : 'folder', file.path);
        const color = rule?.color || item?.color || iconic.settings?.fileIcons?.[file.path]?.color;
        if (validColor(color)) { this.data.colors[file.path] = color; count++; }
      } catch (_) { /* Keep independent colors if optional integration changes. */ }
    }
    this.schedule(true);
    try { await this.persist(); new Notice(`${count} colors copied from Iconic. They will now travel with Toolkit.`); } catch (error) { this.saveError(error); }
  }

  renameEntries(newPath, oldPath) {
    let changed = false;
    for (const store of ['colors', 'images', 'pdfs']) {
      const map = this.data[store];
      for (const key of Object.keys(map)) if (key === oldPath || key.startsWith(oldPath + '/')) {
        map[newPath + key.slice(oldPath.length)] = map[key]; delete map[key]; changed = true;
      }
    }
    // Preserve supplied fallback colors when an originally mapped folder/file is renamed.
    if (this.data.settings.legacyColors) for (const [path, color] of Object.entries(LEGACY.paths)) {
      if (path === oldPath || path.startsWith(oldPath + '/')) {
        const destination = newPath + path.slice(oldPath.length);
        if (!has(this.data.colors, destination)) { this.data.colors[destination] = color; changed = true; }
      }
    }
    if (changed) this.persist().catch(error => this.saveError(error));
    this.schedule(true);
  }

  deleteEntries(path) {
    let changed = false;
    for (const store of ['colors', 'images', 'pdfs']) for (const key of Object.keys(this.data[store])) {
      if (key === path || key.startsWith(path + '/')) { delete this.data[store][key]; changed = true; }
    }
    if (changed) this.persist().catch(error => this.saveError(error));
    this.schedule(true);
  }

  cleanDocument(doc) {
    doc.body?.classList.remove(...OWN_CLASSES);
    for (const el of doc.querySelectorAll('.ctk-colored-label, .ctk-colored-link')) {
      el.classList.remove('ctk-colored-label', 'ctk-colored-link');
      for (const property of COLOR_PROPS) el.style.removeProperty(property);
    }
    for (const el of doc.querySelectorAll(MEDIA_CLASSES.map(c => '.' + c).join(','))) el.classList.remove(...MEDIA_CLASSES);
  }

  onunload() {
    this.stopped = true;
    if (this.timer !== null) clearTimeout(this.timer);
    for (const view of this.folderFocus?.keys() || []) this.clearFolderFocus(view);
    for (const doc of this.documents?.keys() || []) this.detachDocument(doc);
    this.colorCache?.clear();
  }
};

class ToolkitSettings extends PluginSettingTab {
  constructor(app, plugin) { super(app, plugin); this.plugin = plugin; }

  display() {
    const { containerEl: el, plugin: p } = this;
    el.empty();
    el.addClass('ctk-settings');
    el.createEl('h2', { text: 'Toolkit' });
    el.createEl('p', { text: 'Customize your vault appearance in one place. Changes apply immediately and are saved with this plugin.' });
    const heading = text => el.createEl('h3', { text });
    const toggle = (key, name, desc) => new Setting(el).setName(name).setDesc(desc || '').addToggle(t => t.setValue(p.data.settings[key]).onChange(v => p.update(key, v)));
    const slider = (key, name, min, max, step, desc) => {
      let range, input;
      const setting = new Setting(el).setName(name).setDesc(desc || '');
      setting.addSlider(t => {
        range = t;
        t.setLimits(min, max, step).setValue(p.data.settings[key]).setDynamicTooltip().onChange(v => {
          input?.setValue(String(v));
          input?.inputEl.removeAttribute('aria-invalid');
          input?.inputEl.setCustomValidity('');
          p.update(key, v);
        });
      }).addText(t => {
        input = t;
        t.setValue(String(p.data.settings[key]));
        t.inputEl.classList.add('ctk-number-input');
        t.inputEl.setAttribute('inputmode', 'decimal');
        t.inputEl.setAttribute('aria-label', name);
        t.inputEl.setAttribute('title', `${min}–${max}`);
        t.onChange(text => {
          const cleaned = text.trim().replace(/%$/, '').trim().replace(',', '.');
          const value = /^\d+(?:\.\d+)?$/.test(cleaned) ? Number(cleaned) : NaN;
          const valid = Number.isFinite(value) && value >= min && value <= max;
          t.inputEl.setAttribute('aria-invalid', String(!valid));
          t.inputEl.setCustomValidity(valid ? '' : `Enter a number from ${min} to ${max}.`);
          if (!valid) return;
          range.setValue(value);
          p.update(key, value);
        });
      });
      return setting;
    };
    const color = (key, name) => new Setting(el).setName(name).addColorPicker(c => c.setValue(p.data.settings[key]).onChange(v => p.update(key, v)));
    heading('Markdown notes');
    toggle('academicNotes', 'Academic Notes', 'Larger titles and headings, with colored section bars in Reading view and Live Preview.');
    toggle('fullWidthNotes', 'Full-width notes', 'Use the available width of the Markdown pane, even when Readable line length is enabled.');
    heading('Sidebar and background');
    toggle('sidebar', 'Cupertino sidebar spacing and ribbon', 'Adjust the left margin when the ribbon is hidden and keep the ribbon above the sidebar when visible.');
    toggle('focusTopFolder', 'Focus on one top-level folder', 'Hide the other top-level folders while you browse. Collapse the focused folder to bring them back.');
    toggle('compactFileHeader', 'Single PDF title', 'Use the tab title and icon as the PDF heading and hide the folder path.');
    slider('sidebarInset', 'Left margin with ribbon hidden', 0, 32, 1, 'Pixels. Desktop only.');
    toggle('darker', 'Darken backgrounds');
    toggle('darkerDark', 'Enable dimming in dark theme');
    slider('darkerAmountDark', 'Dark theme dimming (%)', 0, 100, 0.1, 'Type a percentage or use the slider. 0% = no dimming; 100% = black backgrounds.');
    toggle('darkerLight', 'Enable dimming in light theme');
    slider('darkerAmountLight', 'Light theme dimming (%)', 0, 100, 0.1, 'A separate value for light theme. You can enter 12,5 or 12.5%.');
    slider('modalOpacityDark', 'Dark theme popup opacity (%)', 0, 100, 0.1, '0% = transparent; 100% = opaque. Applies while background dimming is enabled.');
    slider('modalOpacityLight', 'Light theme popup opacity (%)', 0, 100, 0.1);
    heading('Fonts, blockquotes and math');
    toggle('sfPro', 'Use SF Pro and SF Mono', 'These fonts must be installed on your device. Otherwise, system fallback fonts are used.');
    toggle('quotes', 'Custom blockquote colors');
    color('quoteColor', 'Blockquote text color');
    color('quoteBar', 'Blockquote border color');
    toggle('math', 'Resize math formulas');
    slider('mathScale', 'Math size (%)', 80, 200, 1);
    heading('Folders, file names and links');
    toggle('folderTypography', 'Custom folder typography');
    for (let level = 1; level <= 4; level++) {
      slider(`folderSize${level}`, `Font size: folder depth ${level}${level === 4 ? '+' : ''}`, 0.5, 2, 0.001, 'Multiplier of the normal font size.');
      slider(`folderWeight${level}`, `Font weight: folder depth ${level}${level === 4 ? '+' : ''}`, 100, 900, 100);
    }
    new Setting(el).setName('Color names next to icons')
      .setDesc('Choose which names use custom colors in the file explorer. Icon colors and internal link colors are controlled separately.')
      .addDropdown(d => {
        d.addOption('folders', 'Folders only').addOption('files', 'Files only')
          .addOption('both', 'Folders and files').addOption('none', 'Neither');
        const s = p.data.settings;
        d.setValue(s.folderColors ? (s.fileColors ? 'both' : 'folders') : (s.fileColors ? 'files' : 'none'));
        d.selectEl.setAttribute('aria-label', 'Color names next to icons');
        d.onChange(value => p.updateSettings({
          folderColors: value === 'folders' || value === 'both',
          fileColors: value === 'files' || value === 'both'
        }));
      });
    toggle('linkColors', 'Color internal links', 'Applies in Reading view and to rendered links in Live Preview. Notes with the same name use their resolved file paths.');
    toggle('syncIconic', 'Sync with Iconic', 'Follow icon colors when Iconic is enabled. Your custom name colors take priority.');
    toggle('legacyColors', 'Use imported color maps', 'Use the path colors from the original CSS snippets. Disable this in unrelated vaults if matching names should not inherit those colors.');
    toggle('rootExact', 'Use exact colors for top-level folders');
    slider('folderMix', 'Folder color strength (%)', 0, 100, 1);
    slider('fileMix', 'File color strength (%)', 0, 100, 1);
    slider('linkMix', 'Link color strength (%)', 0, 100, 1);
    el.createEl('p', { text: 'Right-click a file or folder → “Toolkit: choose name color…”. These colors also work without Iconic.' });
    new Setting(el).setName('Save Iconic colors in Toolkit').setDesc('Copy current colors for use without Iconic. Existing custom colors are preserved. Copied colors stay fixed until you reset them.').addButton(b => b.setButtonText('Copy colors').onClick(() => p.snapshotIconic()));
    new Setting(el).setName('Custom name colors').setDesc(`${Object.keys(p.data.colors).length} configured paths`).addButton(b => b.setButtonText('View / edit').onClick(() => new ColorListModal(this.app, p).open()));
    heading('PDFs and images');
    toggle('pdfDark', 'PDF dark mode');
    slider('pdfInvert', 'PDF inversion strength', 0, 1, 0.05);
    slider('pdfContrast', 'PDF contrast', 0.5, 1.5, 0.05);
    el.createEl('p', { text: 'Images keep their original colors. Right-click an image and choose “Toolkit: Dark / inverted” or “Light background plate” to change it. Your choice is remembered for that image.' });
    slider('imageInvert', 'Inversion strength for selected images', 0, 1, 0.02, 'Only affects images you explicitly choose to invert.');
    slider('imageContrast', 'Contrast for selected images', 0.5, 1.5, 0.05);
    color('plateDark', 'Plate color in dark theme');
    color('plateLight', 'Plate color in light theme');
    toggle('mediaOverrides', 'Apply saved image and PDF choices', 'Right-click to choose original colors, inversion or a light plate. Per-file choices also apply in light theme.');
    el.createEl('p', { text: 'Use |plate to give an image a light background. Use cssclasses: pdf-no-invert to exempt embedded PDFs. Choices in the context menu take priority.' });
    new Setting(el).setName('Saved image and PDF choices').setDesc(`${Object.keys(p.data.images).length} images, ${Object.keys(p.data.pdfs).length} PDFs`).addButton(b => b.setButtonText('View / reset').onClick(() => new MediaListModal(this.app, p).open()));
    heading('Notebook Navigator and web viewer');
    toggle('navigatorPdf', 'Dark PDF thumbnails in Notebook Navigator');
    toggle('webview', 'Dark web viewer background', 'Style the background around the web viewer. The web page content itself is isolated.');
    heading('Transfer between vaults');
    new Setting(el).setName('Export settings').setDesc('Includes custom colors and saved image/PDF choices.').addButton(b => b.setButtonText('Export').onClick(() => new TransferModal(this.app, p, false).open()));
    new Setting(el).setName('Import settings').setDesc('Review imported settings before applying them. This replaces your current settings.').addButton(b => b.setButtonText('Import').onClick(() => new TransferModal(this.app, p, true).open()));
  }
}

class PathColorModal extends Modal {
  constructor(app, plugin, path) { super(app); this.plugin = plugin; this.path = path; }
  onOpen() {
    const el = this.contentEl;
    el.createEl('h2', { text: 'Name color' });
    el.createEl('p', { text: this.path });
    let value = this.plugin.data.colors[this.path] || 'blue';
    new Setting(el).setName('Theme color').addDropdown(d => {
      for (const key of Object.keys(PALETTE)) d.addOption(key, key);
      d.setValue(has(PALETTE, value) ? value : 'blue').onChange(v => { value = v; });
    });
    new Setting(el).setName('Or choose a custom color').addColorPicker(c => c.setValue(value.startsWith('#') && value.length === 7 ? value : '#4da6ff').onChange(v => { value = v; }));
    new Setting(el).addButton(b => b.setButtonText('Save color').setCta().onClick(async () => { await this.plugin.setPathColor(this.path, value); this.close(); }))
      .addButton(b => b.setButtonText('Follow Iconic / imported map').onClick(async () => { await this.plugin.setPathColor(this.path, null); this.close(); }));
  }
  onClose() { this.contentEl.empty(); }
}

class ColorListModal extends Modal {
  constructor(app, plugin) { super(app); this.plugin = plugin; }
  onOpen() {
    const el = this.contentEl;
    el.empty();
    el.createEl('h2', { text: 'Custom name colors' });
    if (!Object.keys(this.plugin.data.colors).length) el.createEl('p', { text: 'No custom colors yet. Right-click a file or folder to add one.' });
    for (const [path, color] of Object.entries(this.plugin.data.colors)) new Setting(el).setName(path).setDesc(color)
      .addButton(b => b.setButtonText('Edit').onClick(() => new PathColorModal(this.app, this.plugin, path).open()))
      .addButton(b => b.setButtonText('Reset').onClick(async () => { await this.plugin.setPathColor(path, null); this.onOpen(); }));
  }
  onClose() { this.contentEl.empty(); }
}

class MediaListModal extends Modal {
  constructor(app, plugin) { super(app); this.plugin = plugin; }
  onOpen() {
    const el = this.contentEl;
    el.empty();
    el.createEl('h2', { text: 'Saved image and PDF choices' });
    let count = 0;
    for (const store of ['images', 'pdfs']) for (const [key, state] of Object.entries(this.plugin.data[store])) {
      count++;
      new Setting(el).setName(key).setDesc(state).addButton(b => b.setButtonText(store === 'images' ? 'Original colors' : 'Follow theme').onClick(async () => { await this.plugin.setMedia(store, key, null); this.onOpen(); }));
    }
    if (!count) el.createEl('p', { text: 'No per-file choices saved.' });
  }
  onClose() { this.contentEl.empty(); }
}

class TransferModal extends Modal {
  constructor(app, plugin, importing) { super(app); this.plugin = plugin; this.importing = importing; }
  onOpen() {
    const el = this.contentEl;
    el.addClass('ctk-transfer');
    el.createEl('h2', { text: this.importing ? 'Import Toolkit settings' : 'Export Toolkit settings' });
    el.createEl('p', { text: this.importing ? 'Paste JSON exported from Toolkit. Select “Review import”, then “Apply settings”. Export your current settings first if you want to keep a copy.' : 'Copy this text and save it as JSON, or transfer the entire plugin folder, including data.json, between vaults.' });
    const textarea = el.createEl('textarea');
    textarea.setAttribute('aria-label', 'Toolkit settings as JSON');
    textarea.spellcheck = false;
    textarea.value = this.importing ? '' : JSON.stringify({ plugin: 'cupertino-toolkit', ...this.plugin.data }, null, 2);
    const status = el.createEl('p');
    if (this.importing) {
      let candidate = null, reviewed = '';
      let apply;
      textarea.addEventListener('input', () => { candidate = null; apply?.setDisabled(true); status.textContent = ''; });
      new Setting(el).addButton(b => b.setButtonText('Review import').onClick(() => {
        try {
          const raw = JSON.parse(textarea.value);
          if (!plain(raw) || raw.plugin !== 'cupertino-toolkit' || ![1, 2].includes(raw.version) || !plain(raw.settings)) throw new Error('This is not a valid Toolkit export (data version 1 or 2).');
          candidate = normalizeData(raw);
          reviewed = textarea.value;
          status.textContent = `${Object.keys(candidate.colors).length} custom colors, ${Object.keys(candidate.images).length} images and ${Object.keys(candidate.pdfs).length} PDFs. Your current settings will be replaced.`;
          apply.setDisabled(false);
        } catch (error) { candidate = null; status.textContent = error.message; apply.setDisabled(true); }
      })).addButton(b => {
        apply = b;
        b.setButtonText('Apply settings').setCta().setDisabled(true).onClick(async () => {
          if (!candidate || reviewed !== textarea.value) return;
          const previous = this.plugin.data;
          this.plugin.data = candidate;
          try {
            await this.plugin.persist(); this.plugin.schedule(true); this.close(); new Notice('Toolkit settings imported.');
          } catch (error) { this.plugin.data = previous; this.plugin.saveError(error); }
        });
      });
    } else {
      textarea.readOnly = true;
      new Setting(el).addButton(b => b.setButtonText('Copy').setCta().onClick(async () => {
        try { await this.contentEl.ownerDocument.defaultView.navigator.clipboard.writeText(textarea.value); status.textContent = 'Copied.'; }
        catch (_) { textarea.focus(); textarea.select(); status.textContent = 'Text selected. Press Ctrl+C / Cmd+C to copy.'; }
      }));
    }
  }
  onClose() { this.contentEl.empty(); }
}
