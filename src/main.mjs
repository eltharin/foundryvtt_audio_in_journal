

import {JournalEntryPageMusiqueSheet} from "./modules/JournalEntryPageMusiqueSheet.mjs";
import { JournalEntryPageMusiqueDataModel } from "./modules/JournalEntryPageMusiqueDataModel.mjs";


Hooks.on("init", () => {
  Object.assign(CONFIG.JournalEntryPage.dataModels, {
    "musique-journal-page-type.musique": JournalEntryPageMusiqueDataModel
  });

  DocumentSheetConfig.registerSheet(JournalEntryPage, "musique", JournalEntryPageMusiqueSheet, {
    types: ["musique-journal-page-type.musique"],
    makeDefault: true
  });

});