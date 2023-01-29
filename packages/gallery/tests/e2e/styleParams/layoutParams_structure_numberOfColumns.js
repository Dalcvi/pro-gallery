import { GALLERY_CONSTS, optionsMap } from 'pro-gallery-lib';
import GalleryDriver from '../../drivers/pptrDriver';
import { toMatchImageSnapshot } from '../../drivers/matchers';

expect.extend({ toMatchImageSnapshot });

describe('layoutParams_structure_numberOfColumns - e2e', () => {
  let driver;

  beforeAll(async () => {
    driver = new GalleryDriver();
    await driver.openPage();
  });

  afterAll(async () => {
    await driver.closePage();
  });
  it('should set 1 images per a row', async () => {
    await driver.navigate({
      [optionsMap.layoutParams.structure.galleryLayout]:
        GALLERY_CONSTS[optionsMap.layoutParams.structure.galleryLayout].GRID,
      [optionsMap.layoutParams.structure.numberOfColumns]: 1,
      [optionsMap.layoutParams.structure.responsiveMode]:
        GALLERY_CONSTS[optionsMap.layoutParams.structure.responsiveMode]
          .SET_ITEMS_PER_ROW,
      [optionsMap.layoutParams.structure.scrollDirection]:
        GALLERY_CONSTS[optionsMap.layoutParams.structure.scrollDirection]
          .VERTICAL,
    });
    await driver.waitFor.hookToBeVisible('item-container');
    await driver.waitFor.timer(200);
    const page = await driver.grab.partialScreenshot();
    expect(page).toMatchImageSnapshot();
  });
  // it('should set 2 images per a row', async () => {
  //   await driver.navigate({
  //    [optionsMap.layoutParams.structure.galleryLayout]: GALLERY_CONSTS[optionsMap.layoutParams.structure.galleryLayout].GRID,
  //     [optionsMap.layoutParams.structure.numberOfColumns]:2,
  //     [optionsMap.layoutParams.structure.responsiveMode]: GALLERY_CONSTS[optionsMap.layoutParams.structure.responsiveMode].SET_ITEMS_PER_ROW,
  //     [optionsMap.layoutParams.structure.scrollDirection]: GALLERY_CONSTS[optionsMap.layoutParams.structure.scrollDirection].VERTICAL,
  //   });
  //   await driver.waitFor.hookToBeVisible('item-container');
  //   await driver.waitFor.timer(200);
  //   const page = await driver.grab.elemScreenshot('.pro-gallery');
  //   expect(page).toMatchImageSnapshot();
  // });
  it('should set 3 images per a row', async () => {
    await driver.navigate({
      [optionsMap.layoutParams.structure.galleryLayout]:
        GALLERY_CONSTS[optionsMap.layoutParams.structure.galleryLayout].GRID,
      [optionsMap.layoutParams.structure.numberOfColumns]: 3,
      [optionsMap.layoutParams.structure.responsiveMode]:
        GALLERY_CONSTS[optionsMap.layoutParams.structure.responsiveMode]
          .SET_ITEMS_PER_ROW,
      [optionsMap.layoutParams.structure.scrollDirection]:
        GALLERY_CONSTS[optionsMap.layoutParams.structure.scrollDirection]
          .VERTICAL,
    });
    await driver.waitFor.hookToBeVisible('item-container');
    await driver.waitFor.timer(200);
    const page = await driver.grab.elemScreenshot('.pro-gallery');
    expect(page).toMatchImageSnapshot();
  });
});
