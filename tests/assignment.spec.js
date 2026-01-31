import { test, expect } from '@playwright/test';

const INPUT_SELECTOR = 'textarea[placeholder="Type in Singlish..."]'; 
const OUTPUT_SELECTOR = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap';

test.describe('Assignment 1 - 24 Pos, 10 Neg, 1 UI', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // ==========================================
  // POSITIVE TEST CASES (24 Scenarios)
  // ==========================================

  test('Pos_01: Convert a short daily greeting phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama panthi yanavaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම පන්ති යනවා');
  });

  test('Pos_02: Convert a complex sentence with time and conditions', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('machan adha vahinna vagee needha? mn hithanne adha 3.00 p.m vithara vahi. ehema unoth adha mata panthi enna vena ekak naehae.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මචන් අද වහින්න වගේ නේද? ම්න් හිතන්නෙ අද 3.00 p.m විතර වහි. එහෙම උනොත් අද මට පන්ති එන්න වෙන එකක් නැහැ.');
  });

  test('Pos_03: Convert a short request phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata help ekak karanna puLuvandha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට help එකක් කරන්න පුළුවන්ද?');
  });

  test('Pos_04: Convert a long narrative paragraph', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('giya sathiyee api kandy giya. udhenma nagitala train ekee yanna kiyala hithuve, eth kattiya godak hitiya. e nisa api bus ekee yanna theeranaya kara. kandy gihin api dhaladhaa maligaava vadhinna giya. havasata hoDHAta vaessaa, eth api perahaera balanna kandy lake eka gaavata giyaa. harima lassanayi.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ගිය සතියේ අපි kandy ගිය. උදෙන්ම නගිටල train එකේ යන්න කියල හිතුවෙ, එත් කට්ටිය ගොඩක් හිටිය. එ නිස අපි bus එකේ යන්න තේරනය කර. kandy ගිහින් අපි දලදා මලිගාව වදින්න ගිය. හවසට හොඳට වැස්සා, එත් අපි පෙරහැර බලන්න kandy lake එක ගාවට ගියා. හරිම ලස්සනයි.');
  });

  test('Pos_05: Convert a seasonal greeting with an exclamation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('suba aluth avurudhdhak!');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('සුබ අලුත් අවුරුද්දක්!');
  });

  test('Pos_06: Convert a negative statement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama passee katha karannam');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම පස්සේ කත කරන්නම්');
  });

  test('Pos_07: formal expression', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama oyaata adharee naee');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ඔයාට අදරේ නෑ');
  });

  test('Pos_08: Convert a repeated short imperative phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('inna inna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඉන්න ඉන්න');
  });

  test('Pos_09: Convert a formal request for information', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('karuNaakaralaa mata oyaagee ID eka dhenna check karanna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('කරුණාකරලා මට ඔයාගේ ID එක දෙන්න check කරන්න');
  });

  test('Pos_10: Convert a sentence describing a physical state', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata mahansiyi');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට මහන්සියි');
  });

  test('Pos_11: Convert a short daily greeting phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama gedhara yanavaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ගෙදර යනවා');
  });

  test('Pos_12: Convert a long string without spaces', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mamakalaikmanataennam');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මමකලෛක්මනටැන්නම්');
  });

  test('Pos_13: Convert a sentence with social media/tech terms', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('magee photo tika whatsapp eken share karanna puluvandha');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මගේ photo ටික whatsapp එකෙන් share කරන්න පුලුවන්ද');
  });

  test('Pos_14: Informal Slang', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('machan mata podi support ekak ooni.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මචන් මට පොඩි support එකක් ඕනි.');
  });

  test('Pos_15: Slang and colloquial phrasing', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mokakdha ban kivva velaavata vaedak karanna purudhu veyanko');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මොකක්ද බන් කිව්ව වෙලාවට වැඩක් කරන්න පුරුදු වෙයන්කො');
  });

  test('Pos_16: Convert a sentence with currency and numbers', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('me sapaththu dhekee gaana Rs.3500');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මෙ සපත්තු දෙකේ ගාන Rs.3500');
  });

  test('Pos_17: Convert a sentence with technical hardware acronyms', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    const text = 'adha mama CPU,GPU dhekama salli dhiilaa gannavaa';
    await inputBox.fill(text);
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අද මම CPU,GPU දෙකම සල්ලි දීලා ගන්නවා');
  });

  test('Pos_18: Convert a professional request with web links/proper nouns', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('CV ekee oyaagee LinkedIn link ekath dhaalaa evanna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('CV එකේ ඔයාගේ LinkedIn link එකත් දාලා එවන්න');
  });

  test('Pos_19: negative expression', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama eeka karanna kamathi naee');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ඒක කරන්න කමති නෑ');
  });

  test('Pos_20: Convert a commercial sentence with units and numbers', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mee haal gooniyee bara 80Kg.ee hindhaa mama oyaata meekata vattamak dhaalaa dhennam');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මේ හාල් ගෝනියේ බර 80Kg.ඒ හින්දා මම ඔයාට මේකට වට්ටමක් දාලා දෙන්නම්');
  });

  test('Pos_21: Convert an interrogative (question) sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('aeyi oyaa mata baninnee');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඇයි ඔයා මට බනින්නේ');
  });

  test('Pos_22: simple sentences', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('bidhuNu kalee dhiya nosaelee');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('බිදුණු කලේ දිය නොසැලේ');
  });

  test('Pos_23: Response', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ov, eeka niyamayi.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔව්, ඒක නියමයි.');
  });

  test('Pos_24: Abbreviation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('HR department eken mata call karaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('HR department එකෙන් මට call කරා.');
  });


  // NEGATIVE TEST CASES (10 Scenarios)

  test('Neg_01: Missing spaces (Stress Test', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mamagedharayanavaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ගෙදර යනවා');
  });

  test('Neg_02: Extreme word joining', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('matapaankannaoonee');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මටපාන්කන්න ඕනේ');
  });

  test('Neg_03: Slang with excessive punctuation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ela machan! supiri!!');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('එල මචන්!  සුපිරි!!');
  });

  test('Neg_04: Complex sentence with typos', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama sunaQQgu vunee maarga thadhabadhaya nisaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ප්‍රමාද වුනේ මාර්ග තදබදය නිසා.');
  });

  test('Neg_05: Mixed characters (Numeric + Text)', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('Rs. 5343 kaeema kanna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('Rs. 5343 කෑම කන්න');
  });

  test('Neg_06: Improper casing in English terms', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('zOOM mEEting ekak');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('Zoom මීටින් එකක්');
  });

  test('Neg_07: Non-standard phonetic spelling', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('appatasiri, mata beheth bonna amathaka vunaa kiyahankoo.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අප්පටසිරි, මට බෙහෙත් බොන්න අමතක වුනා කියහන්කෝ.');
  });

  test('Neg_08: Ambiguous informal command', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කෝ බං.');
  });

  test('Neg_09: Sentence with excessive line breaks', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api passee \n\n kathaa karamu.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි පස්සේ කතා කරමු.');
  });

  test('Neg_10: Multiple spaces between words', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama gedhara yanavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ගෙදර යනවා');
  });

  // ==========================================
  // UI TEST SCENARIO (1 Scenario)
  // ==========================================

  test('UI_01: Sinhala output updates in real-time', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    // Typing character by character to check reactivity
    await inputBox.pressSequentially('api heta America yanavaa', { delay: 100 });
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toBeEmpty();
    await expect(outputBox).toContainText('අපි හෙට America යනවා');
  });

});