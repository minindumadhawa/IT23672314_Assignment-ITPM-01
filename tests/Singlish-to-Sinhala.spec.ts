import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama sellam karanna yanavaa.');
  await page.getByText('මම සෙල්ලම් කරන්න යනවා.').click();
});

test('Pos_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api sellam karanavaa saha passe nidhaa gannavaa.');
  await page.getByText('අපි සෙල්ලම් කරනවා සහ පස්සෙ නිදා ගන්නවා.').click();
});

test('Pos_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa sellam karanakam mama balan innavaa.');
  await page.getByText('ඔයා සෙල්ලම් කරනකම් මම බලන් ඉන්නවා.').click();
});

test('Pos_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa kohomadha yanne?');
  await page.getByText('ඔයා කොහොමද යන්නෙ?').click();
});

test('Pos_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('issarahata dhuvanna.');
  await page.getByText('ඉස්සරහට දුවන්න.').click();
});

test('Pos_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta yamu.');
  await page.getByText('අපි හෙට යමු.').click();
});

test('Pos_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta dhuvanne naehae.');
  await page.getByText('අපි හෙට දුවන්නෙ නැහැ.').click();
});

test('Pos_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata badaginiyi.');
  await page.getByText('මට බඩගිනියි.').click();
});

test('Pos_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama panthiyee inne.');
  await page.getByText('මම පන්තියේ ඉන්නේ.').click();
});

test('Pos_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karunaakarala mata udhavvak karanna puluvandha?');
  await page.getByText('කරුනාකරල මට උදව්වක් කරන්න පුලුවන්ද?').click();
});

test('Pos_Fun_0011 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ehema karapan.');
  await page.getByText('එහෙම කරපන්.').click();
});

test('Pos_Fun_0012 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ela machan adha hari lassanayi.');
  await page.getByText('එල මචන් අද හරි ලස්සනයි.').click();
});

test('Pos_Fun_0013 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata oona poddak natanna.');
  await page.getByText('මට ඕන පොඩ්ඩක් නටන්න.').click();
});

test('Pos_Fun_0014 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata sindhu kiyanna oonee.');
  await page.getByText('මට සින්දු කියන්න ඕනේ.').click();
});

test('Pos_Fun_0015 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eka eka dheeval hari lassanayi.');
  await page.getByText('එක එක දේවල් හරි ලස්සනයි.').click();
});

test('Pos_Fun_0016 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api iiyee pansal gihillaa gedhara aavaa.');
  await page.getByText('අපි ඊයේ පන්සල් ගිහිල්ලා ගෙදර ආවා.').click();
});

test('Pos_Fun_0017 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta yanavaa.');
  await page.getByText('මම හෙට යනවා.').click();
});

test('Pos_Fun_0018 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaalaa kanavadha?');
  await page.getByText('ඔයාලා කනවද?').click();
});

test('Pos_Fun_0019 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eyaalaa redhi hoodhanavaa.');
  await page.getByText('එයාලා රෙදි හෝදනවා.').click();
});

test('Pos_Fun_0020 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha kandy trip ekak yanavaa.');
  await page.getByText('අද kandy trip එකක් යනවා.').click();
});

test('Pos_Fun_0021 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Images tika whatsapp karanna.');
  await page.getByText('Images ටික whatsapp කරන්න.').click();
});

test('Pos_Fun_0022 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('kadeeta Rs. 500 gevanna thiyanavaa.');
  await page.getByText('කඩේට Rs. 500 ගෙවන්න තියනවා.').click();
});

test('Pos_Fun_0023 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('assignment eka 9.30 PM patan gannavaa.');
  await page.getByText('assignment එක 9.30 PM පටන් ගන්නවා.').click();
});

test('Pos_UI_0024 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suBha udhaeesanak!');
  await page.getByText('සුභ උදෑසනක්!').click();
});


test('Neg_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedharayanavaa');
  await page.getByText('මම ගෙදර යනවා').click();
});

test('Neg_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('elaa machn adha supiriii');
  await page.getByText('එල මච්න් අද සුපිරී').click();
});

test('Neg_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('asdjkl qweoiu zxcmn');
  await page.getByText('No meaningful Sinhala translation').click();
});

test('Neg_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('E110!!!F1');
  await page.getByText('No output or error message').click();
});

test('Neg_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('(Empty input)');
  await page.getByText('No output').click();
});

test('Neg_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('நான் பள்ளிக்குச் செல்கிறேன்.');
  await page.getByText('Incorrect or no Sinhala output').click();
});

test('Neg_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('I am eating rice');
  await page.getByText('Incorrect or partial Sinhala translation').click();
});

test('Neg_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama 😊😊 enavaa 😎');
  await page.getByText('Incorrect or broken output').click();
});

test('Neg_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mmmaaa panti yannvvaa');
  await page.getByText('Incorrect Sinhala conversion').click();
});

test('Neg_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama qwerty dfgh qmyk');
  await page.getByText('No meaningful Sinhala translation').click();
});