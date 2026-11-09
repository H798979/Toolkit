# Toolkit — 1.4.0

Ein flytjanleg Obsidian-viðbót sem sameinar útlit og virkni úr CSS-snippunum þínum og Top-Level Icon Name Sync. Stillingar og val fyrir skrár vistast í viðbótarmöppunni. Ekki þarf að byggja eða þýða kóðann.

## Setja upp

1. Afþjappaðu `cupertino-toolkit-1.4.0.zip`.
2. Afritaðu möppuna `cupertino-toolkit` í `<safnið þitt>/.obsidian/plugins/`. Ef safnið notar annað stillingamöppuheiti en `.obsidian` skaltu nota það í staðinn.
3. Í Obsidian skaltu fara í **Settings → Community plugins**, endurhlaða viðbótalistanum eða endurræsa Obsidian og virkja **Toolkit**. Community plugins þurfa að vera leyfð.
4. Slökktu á þessum eldri CSS-snippum í **Settings → Appearance → CSS snippets**: `cupertino-sidebar-spacing`, `darker-theme`, `iconic-colored-names`, `pdf-dark-mode` og `sf-pro`.
5. Slökktu á **Top-Level Icon Name Sync**. Ef **Image Dark Toggle** er í safninu skaltu slökkva á því eftir að Toolkit hefur verið virkjað einu sinni; vistað val fyrir myndir og PDF er lesið inn við fyrstu ræsingu Toolkit.
6. Opnaðu **Settings → Toolkit** til að stilla útlitið.

Upprunalegu skránum hefur ekki verið breytt. Þú getur slökkt á Toolkit og kveikt aftur á eldri snippum/viðbótum. Ekki hafa bæði kerfin virk saman meðan þú berð útlitið saman, þar sem eldri CSS-reglur geta yfirskrifað stillingar Toolkit.

## Uppfæra úr eldri útgáfu

Slökktu á Toolkit, afritaðu skrárnar úr nýja pakkanum yfir skrárnar í núverandi `cupertino-toolkit`-möppu og virkjaðu viðbótina aftur. Haltu `data.json`; hún inniheldur stillingarnar þínar. Eldri sameiginlega dimmingarprósentan flyst yfir í bæði ljósu og dökku stillinguna. Sjálfvirkur umsnúningur mynda og myndasmámynda er fjarlægður, líka ef hann var virkur í eldri stillingum. Handvirkt val sem þú hafðir vistað fyrir einstakar myndir varðveitist og má endurstilla undir **Saved image and PDF choices**.

## Academic Notes og full breidd

Opnaðu **Settings → Toolkit → Markdown notes**. Báðir rofar byrja slökktir og vistast sérstaklega í hverju safni.

- **Academic Notes** stækkar skjalatitilinn og fyrirsagnir á stigum H1, H2 og H3 í **Reading view** og **Live Preview**. H1 fær litaða rönd og mildan bakgrunn, H2 fær mjórri rönd og H3 fær þyngra letur. H2 með lit frá **Fast Text Color** fær sama kaflaútlit og H1 og heldur textalitnum sínum.
- **Full-width notes** nýtir breidd glósuflatarins með spássíum þemans, líka þegar **Readable line length** er virkt. Þegar slökkt er á rofanum ræður Obsidian aftur breiddinni.

Útlitið gildir sjálfkrafa um Markdown-glósur í safninu. Í nýrri glósu notarðu `#` fyrir aðalkafla, `##` fyrir undirkafla og `###` fyrir smærri liði. Skráarheitið birtist ef kveikt er á **Settings → Appearance → Show inline title**.

## Nafnalitir og tungumál

Stillingar, hjálpartextar, hnappar, valmyndir og tilkynningar viðbótarinnar eru nú á ensku.

Farðu í **Settings → Toolkit → Folders, file names and links → Color names next to icons** og veldu:

- **Folders only** — lita aðeins möppuheiti.
- **Files only** — lita aðeins skráarheiti.
- **Folders and files** — lita hvort tveggja.
- **Neither** — venjulegur textalitur á báðum.

Valið tekur gildi strax og vistast. Táknalitirnir sjálfir breytast ekki við þetta val. **Color internal links** stjórnar áfram litum tengla í glósum sérstaklega. Eldri aðskildu rofarnir fyrir möppu- og skráarliti færast sjálfkrafa yfir í samsvarandi val.

## Skrifa inn prósentur

Undir **Sidebar and background** eru sérstakir reitir fyrir dimmingu í ljósu og dökku þema. Skrifaðu t.d. `35`, `12,5` eða `12.5%`. Bæði talnareitur og sleði uppfæra útlitið strax og vista gildið. Leyfilegt bil er 0–100%; 0% gefur grunnlitina án dimmingar og 100% gerir bakgrunninn svartan. Þú getur líka stillt ógegnsæi sprettiglugga fyrir hvort þema: 0% er gegnsætt, 100% alveg ógegnsætt. Aðrir tölusleðar hafa einnig innsláttarreit. Ógild eða tóm gildi breyta ekki síðustu gildu stillingu.

## Það sem fylgir

| Hluti | Virkni |
| --- | --- |
| Cupertino-hliðarstika | Rétt vinstri bil þegar táknastika er falin, og rétt röðun laga fyrir eldri og nýrri táknastiku. Stillanleg spássía. |
| Dekkra þema | 30% dimming sjálfgefið. Sérstakar prósentur 0–100% fyrir ljóst og dökkt þema, talnareitir og sleðar. Stillanlegt ógegnsæi sprettiglugga. |
| Letur | SF Pro í viðmóti og texta og SF Mono í kóða, með staðgengilsletri ef leturgerðirnar eru ekki uppsettar. |
| Tilvitnanir | Stillanlegur litur texta og vinstri línu. Sjálfgefið hvítt eins og í upprunalega snippinu. |
| Stærðfræði | 128% formúlustærð sjálfgefið, stillanleg 80–200%. |
| Möppuheiti | Stærð og leturþyngd eftir dýpt: 1,30 / 1,04 / 0,958 / 0,921 em, og 700 / 800 / 700 / 700. Efsta stigið tekur mið af virka Top-Level Icon Name Sync-útlitinu. |
| Litir | Lituð möppu- og skráarheiti og innri tenglar. Blandað við venjulegan textalit: 78% möppur, 60% skrár og tenglar. Efstu möppur geta fylgt nákvæmum táknalit. |
| PDF | Umsnúningur, litblær, birtuskil, smámyndir, rammi, skuggi og textaval í dökku þema. |
| Myndir í glósum | Upprunalegir litir sjálfgefið. Handvirkur umsnúningur eða bakgrunnsplata fyrir valda mynd. Stillanlegur styrkur og birtuskil handvalinna mynda. |
| Vistað myndaval | Hægrismellsval fyrir upprunalega liti, dökka birtingu eða bakgrunnsplötu; valið helst eftir endurræsingu. |
| Notebook Navigator | Myndasmámyndir halda upprunalegum litum. Handvirkt val fylgir myndskrám. Sérstök stilling fyrir dökkar PDF-smámyndir. |
| Vefskoðari | Dökkur bakgrunnur utan um webview til að draga úr hvítum glömpum. |
| Flutningur | Útflutningur og innflutningur á stillingum, eigin litum og mynd-/PDF-vali. |

## Litir án Iconic

Hægrismelltu á skrá eða möppu og veldu **Toolkit: choose name color…**. Þú getur valið þemalit eða nákvæman lit. Val þitt hefur forgang og liturinn gildir líka á innri tengla að viðkomandi skrá.

Innfluttu CSS-litakortin fylgja í pakkanum. Nýjasta CSS-skráin hefur forgang þegar útgáfum ber ekki saman. Sérstakar eldri slóðir og tenglanöfn eru varðveitt úr afritunum. Eldri þéttari möppustærðir má endurskapa með stærðarstillingunum; úreltum stærðarreglum er ekki staflað ofan á núverandi útlit.

Í ótengdu safni geturðu slökkt á **Use imported color maps** og valið þína eigin liti. Litakortin miða við hlutfallslegar slóðir innan safns, ekki `D:`-drif eða ákveðna vél. Þau búa ekki til skrár og færa ekki glósur milli safna.

Ef Iconic er virkt les Toolkit liti tákna og reglna úr því. Hnappurinn **Copy colors** vistar núverandi Iconic-liti í Toolkit áður en þú flytur á tæki án Iconic. Þessi afrituðu litagildi eru þá fastir eigin litir; **Follow Iconic / imported map** í litavalinu fjarlægir slíkt val fyrir viðkomandi slóð. Toolkit teiknar ekki sjálft Iconic-tákn og flytur ekki táknasafn eða reglur Iconic.

Röð lita: eigið val í Toolkit → Iconic ef virkt → innflutta litakortið. Efsta möppustigið getur lesið lit beint af sýnilegu Iconic-tákni. Skrár með sama stutta heiti fá réttan lit eftir raunverulegri áfangaslóð tengils. Tenglar sem hafa ekki enn áfangaskrá geta notað innflutt tenglanöfn til vara.

## Undanþágur fyrir myndir og PDF

Myndir birtast í upprunalegum litum þar til þú velur sjálfur breytingu fyrir viðkomandi mynd. Hægrismelltu og veldu **Toolkit: Dark / inverted** eða **Light background plate**. Til að fara aftur í upprunalega birtingu velurðu **Default — original colors**. Umsnúningsstyrkur og birtuskil í stillingum eiga aðeins við handvaldar myndir. Fyrir PDF gildir áfram sjálfvirkur umsnúningur í dökku þema þegar PDF-rofi er virkur. Vistað val fyrir einstaka skrá hefur forgang og getur gilt líka í ljósu þema.

- Eldri `no-invert` merkingar mega vera áfram; upprunalegir litir eru nú sjálfgefnir fyrir allar myndir.
- `![[mynd.png|plate]]` velur ljósa plötu undir myndina í dökku þema.
- `cssclasses: pdf-no-invert` undanþiggur innfelld PDF-skjöl.
- Myndir inni í Mermaid, Excalidraw og Canvas fá ekki sjálfvirkan umsnúning ofan á eigið þema.
- Hægrismelltu á PDF-skrá eða skráarflipa til að velja **Follow theme**, **Original colors** eða **Dark / inverted**.
- Í stillingum geturðu skoðað og endurstillt vistað mynd-/PDF-val. Nafnabreytingar og færslur innan safns uppfæra eigin liti og sérval með skránni.

Vefmyndir eru auðkenndar með myndslóðinni. Skrár innan safns nota hlutfallslega slóð. Tímabundnar `blob:`-slóðir og innfelld `data:`-gögn eru ekki geymd sem varanlegt myndaval. Þessar myndir halda upprunalegri birtingu.

## Flytja á milli safna eða tækja

**Auðveldast:** lokaðu Obsidian eða slökktu á Toolkit og afritaðu alla `cupertino-toolkit`-möppuna, þar með talið `data.json`, í viðbótamöppu nýja safnsins. `data.json` verður til við fyrstu virkjun. Virkjaðu svo Toolkit í nýja safninu. ZIP-skráin inniheldur upphafspakkann; breytingar sem þú gerir síðar vistast ekki sjálfkrafa aftur í ZIP-skrána.

**Aðeins stillingar:** veldu **Export** í Toolkit, afritaðu JSON-textann og notaðu **Import** í hinu safninu. Þar er forskoðun áður en þú velur **Apply settings**. Innflutningur skiptir út núverandi Toolkit-stillingum, eigin litum og mynd-/PDF-vali. Flyttu núverandi stillingar út fyrst ef þú vilt geyma þær.

Litir og myndaval sem vísa í einstakar skrár fylgja sömu hlutfallslegu slóðum. Öðruvísi möppuskipan þarf nýtt litaval. Almennar útlitsstillingar virka óháð nöfnum skráa.

## Innflutningur úr fyrra kerfi

Við fyrstu ræsingu, ef `data.json` fyrir Toolkit er ekki þegar til, eru viðeigandi gildi lesin úr **Style Settings** og mynd-/PDF-val úr **Image Dark Toggle** ef þau finnast í safninu. Aðrar Style Settings-stillingar, til dæmis fyrirsagnastílar úr Minimal, eru ekki hluti af þessum snippum og eru ekki fluttar inn. Engu er breytt í stillingaskrám eldri viðbóta.

## Samhæfni og takmörk

- Krefst Obsidian 1.5.0 eða nýrra. Kóðinn notar ekki Node-/Electron-einingar og er ekki merktur eingöngu fyrir tölvur. Viðmótsprófanir voru gerðar í Chromium með hermdu Obsidian-viðmóti; hvorki raunveruleg Obsidian-ræsing né farsímaprófun hefur verið framkvæmd.
- Cupertino, Iconic, Notebook Navigator og Style Settings eru ekki nauðsynleg til að nota grunnaðgerðir Toolkit. Samþætting á aðeins við þegar samsvarandi viðbót er til staðar. Cupertino-þemað sjálft fylgir ekki.
- SF Pro og SF Mono-leturskrár fylgja ekki. Þú þarft að hafa leturgerðirnar uppsettar eða halda eigin leturhleðslu virkri. Leturstillingin notar staðgengilsletur þegar þess þarf.
- Nýja viðbótin varðveitir hvítan tilvitnanalit úr snippinu. Veldu dekkri lit eða slökktu á sérlituðum tilvitnunum ef þú notar ljóst þema og textinn sést illa.
- Vefsíður inni í einangruðum webview-glugga fá ekki sjálfkrafa dökkt innihald frá CSS utan hans. Hér er aðeins umgjörðin löguð, eins og í upprunalega snippinu.
- PDF-umsnúningur getur breytt litum í skjölum; veldu upprunalega liti fyrir þau PDF-skjöl sem þú vilt skoða óbreytt.
- Litasamstilling við Iconic notar varða aðgangspunkta úr núverandi viðbótinni og getur þurft aðlögun ef innri uppbygging Iconic breytist. Eigið litaval og innfluttu kortin halda áfram að virka.
- Toolkit breytir aðeins birtingu og eigin stillingaskrá. Það breytir ekki glósutexta, myndum eða PDF-skrám og sendir engin gögn á netið.

## Skipanir

Í skipanavalmyndinni má leita að **Toolkit** til að endurnýja útlit/liti, kveikja eða slökkva á PDF-dimmingunni, skipta handvirkt um birtingu núverandi myndar/PDF og flytja inn eða út stillingar.

## Prófun pakkans

Útgáfa 1.2.0 stóðst 20 prófunarflokka í Chrome/Chromium með hermdu Obsidian-viðmóti, án JavaScript-villna. Prófað var meðal annars að útlitsstillingar virki, litir samnefndra tengla haldist aðskildir, vistað mynd-/PDF-val hafi réttan forgang, færslur skráa uppfæri stillingar, innflutningur sé yfirfarinn og slökkt viðbót fjarlægi eigin útlitsbreytingar. JavaScript-málskipun var einnig yfirfarin. Prófanirnar staðfesta ekki endanlegt útlit með þinni uppsetningu af Cupertino eða öðrum viðbótum í raunverulegu Obsidian.

Innfluttu kortin varðveita 223 skráar-/möppuslóðir, eina slóðaforskeytisreglu og 85 tenglanöfn úr núverandi CSS og afritunum.

## Skrár pakkans

- `main.js`: viðbótin, stillingaviðmót, litakort og vistun.
- `manifest.json`: upplýsingar fyrir Obsidian.
- `styles.css`: sameinaðar útlitsreglur.
- `versions.json`: lágmarksútgáfa Obsidian.
- `README-IS.md`: þessar leiðbeiningar.
- `data.json`: verður til við fyrstu ræsingu; afritaðu hana með þegar þú flytur eigin stillingar.

Byggt á þínum snippum og Top-Level Icon Name Sync (upprunalega merkt „Claudian“). Vistuð mynd-/PDF-valhegðun var samhæfð við Image Dark Toggle sem snippið vísaði í.

Opinberar heimildir fyrir viðbótaviðmótið: [Obsidian API og pakkaskipan](https://github.com/obsidianmd/obsidian-api), [lífsferill viðbóta](https://docs.obsidian.md/Plugins/Guides/Manage+plugin+lifecycle), [stillingaviðmót](https://docs.obsidian.md/Plugins/User+interface/Settings), [samhengisvalmyndir](https://docs.obsidian.md/Plugins/User+interface/Context+menus).
