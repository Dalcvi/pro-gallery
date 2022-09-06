import { expect } from 'chai';
import { addMigratedOptions } from '../src/core/helpers/optionsConverter';
import GALLERY_CONSTS from '../src/common/constants';

describe('optionsUtils', () => {
  it('should create a nested object out of a flat object', () => {
    const actual = addMigratedOptions(input());
    expect(actual).to.deep.equal(expected());
  });
  it('should run fast', () => {
    const data = input();
    const hrstart = process.hrtime();
    const actual = addMigratedOptions(data);
    const hrend = process.hrtime(hrstart);
    const currentExecutionTime = 2821646;
    // const refactorImprovment = 5;
    const refactorImprovment = 1; // THIS IS BECAUSE OF CI MACHINES SLOW RUNTIME
    expect(hrend[1]).to.be.lessThan(currentExecutionTime / refactorImprovment);
    expect(actual).to.deep.equal(expected());
  });
});

function input() {
  return {
    layoutParams_gallerySpacing: 0,
    layoutParams_cropRatio: 1,
    isRTL: false,
    isVertical: false,
    minItemSize: 120,
    groupSize: 3,
    chooseBestGroup: true,
    groupTypes: '1,2h,2v,3t,3b,3l,3r',
    cubeImages: false,
    cubeType: 'fill',
    smartCrop: false,
    fullscreen: true,
    videoLoop: true,
    videoSound: false,
    videoPlay: 'hover',
    videoSpeed: 1,
    numberOfImagesPerRow: 3,
    collageDensity: 0.8,
    galleryTextAlign: 'center',
    imageMargin: 10,
    fixedColumns: 0,
    forceFullStrips: false,
    showArrows: true,
    hasThumbnails: false,
    galleryThumbnailsAlignment: 'bottom',
    gridStyle: 0,
    titlePlacement: 'SHOW_ON_HOVER',
    hoveringBehaviour: 'APPEARS',
    isAutoSlideshow: false,
    slideshowLoop: false,
    playButtonForAutoSlideShow: false,
    pauseAutoSlideshowOnHover: true,
    allowSlideshowCounter: false,
    autoSlideshowInterval: 4,
    arrowsSize: 23,
    slideshowInfoSize: 200,
    imageLoadingMode: 'COLOR',
    scrollAnimation: 'NO_EFFECT',
    exitScrollAnimation: 'NO_EFFECT',
    overlayAnimation: 'NO_EFFECT',
    imageHoverAnimation: 'NO_EFFECT',
    itemBorderWidth: 0,
    itemBorderRadius: 0,
    itemEnableShadow: false,
    itemShadowBlur: 20,
    loadMoreAmount: 'all',
    itemShadowDirection: 135,
    itemShadowSize: 10,
    imageInfoType: 'NO_BACKGROUND',
    textBoxBorderRadius: 0,
    textBoxBorderWidth: 0,
    textBoxHeight: 0,
    textImageSpace: 10,
    scrollDirection: 0,
    slideAnimation: 'SCROLL',
    autoSlideshowType: 'interval',
    autoSlideshowContinuousSpeed: 50,
    gotStyleParams: true,
    selectedLayout: 0,
    allowSocial: true,
    allowDownload: false,
    allowTitle: true,
    allowDescription: false,
    loveButton: true,
    loveCounter: true,
    showVideoPlayButton: false,
    gallerySliderImageRatio: 1.7777777777777777,
    galleryImageRatio: 2,
    collageAmount: 0.8,
    floatingImages: 0,
    viewMode: 'preview',
    galleryHorizontalAlign: 'center',
    galleryVerticalAlign: 'center',
    enableInfiniteScroll: true,
    itemClick: 'expand',
    thumbnailSpacings: 0,
    mobilePanorama: false,
    arrowsPadding: 23,
    imageLoadingWithColorMode: 'PICKED_COLOR',
    imageRatioType: 'FIXED',
    numberOfDisplayedItems: 3,
    expandAnimation: 'NO_EFFECT',
    itemBorderColor_themeName: 'color_15',
    itemBorderColor_value: 'rgba(0,0,0,1)',
    itemShadowOpacityAndColor_value: 'rgba(0,0,0,0.2)',
    itemShadowOpacityAndColor_themeName: 'color_15',
    textBoxBorderColor_themeName: 'color_15',
    textBoxBorderColor_value: 'rgba(0,0,0,1)',
    titleDescriptionSpace: 6,
    textsVerticalPadding: 0,
    textsHorizontalPadding: 0,
    textBoxFillColor_themeName: 'color_12',
    textBoxFillColor_value: 'rgba(232,230,230,1)',
    alwaysShowHover: false,
    previewHover: false,
    calculateTextBoxHeightMode: 'MANUAL',
    jsonStyleParams: '',
    designedPresetId: -1,
    galleryLayoutType: 'custom',
    allowOverlayGradient: false,
    overlayGradientDegrees: 180,
    shouldIndexDirectShareLinkInSEO: false,
    slideTransition: 'cubic-bezier(0.46,0.1,0.25,1)',
    slideDuration: 400,
    overlayType: 0,
    overlayPosition: 'LEFT',
    overlaySize: 100,
    overlayPadding: 0,
    overlaySizeType: 'PERCENT',
    arrowsVerticalPosition: 'ITEM_CENTER',
    galleryLayout: 0,
    thumbnailSize: 120,
    useCustomButton: false,
    customButtonText: 'Click here',
    isStoreGallery: false,
    isInAdi: false,
    allowContextMenu: false,
    gallerySize: 30,
    itemOpacity_themeName: 'color_15',
    itemOpacity_value: 'rgba(0,0,0,0.6)',
    itemFont_family: 'proxima-n-w01-reg',
    itemFont_displayName: 'Heading 5',
    itemFont_style_bold: false,
    itemFont_style_italic: false,
    itemFont_style_underline: false,
    itemFont_size: 22,
    itemFont_preset: 'Custom',
    itemFont_editorKey: 'font_5',
    itemFont_fontStyleParam: true,
    itemFont_value:
      'font:normal normal normal 22px/27px proxima-n-w01-reg,sans-serif;',
    itemFontSlideshow_family: 'proxima-n-w01-reg',
    itemFontSlideshow_displayName: 'Heading 5',
    itemFontSlideshow_style_bold: false,
    itemFontSlideshow_style_italic: false,
    itemFontSlideshow_style_underline: false,
    itemFontSlideshow_size: 22,
    itemFontSlideshow_preset: 'Custom',
    itemFontSlideshow_editorKey: 'font_5',
    itemFontSlideshow_fontStyleParam: true,
    itemFontSlideshow_value:
      'font:normal normal normal 22px/27px proxima-n-w01-reg,sans-serif;',
    itemDescriptionFontSlideshow_family: 'proxima-n-w01-reg',
    itemDescriptionFontSlideshow_displayName: 'Paragraph 2',
    itemDescriptionFontSlideshow_style_bold: false,
    itemDescriptionFontSlideshow_style_italic: false,
    itemDescriptionFontSlideshow_style_underline: false,
    itemDescriptionFontSlideshow_size: 15,
    itemDescriptionFontSlideshow_preset: 'Custom',
    itemDescriptionFontSlideshow_editorKey: 'font_8',
    itemDescriptionFontSlideshow_fontStyleParam: true,
    itemDescriptionFontSlideshow_value:
      'font:normal normal normal 15px/18px proxima-n-w01-reg,sans-serif;',
    itemDescriptionFont_family: 'proxima-n-w01-reg',
    itemDescriptionFont_displayName: 'Paragraph 2',
    itemDescriptionFont_style_bold: false,
    itemDescriptionFont_style_italic: false,
    itemDescriptionFont_style_underline: false,
    itemDescriptionFont_size: 15,
    itemDescriptionFont_preset: 'Custom',
    itemDescriptionFont_editorKey: 'font_8',
    itemDescriptionFont_fontStyleParam: true,
    itemDescriptionFont_value:
      'font:normal normal normal 15px/18px proxima-n-w01-reg,sans-serif;',
    itemFontColor_themeName: 'color_11',
    itemFontColor_value: 'rgba(255,255,255,1)',
    itemFontColorSlideshow_themeName: 'color_15',
    itemFontColorSlideshow_value: 'rgba(0,0,0,1)',
    itemDescriptionFontColor_themeName: 'color_11',
    itemDescriptionFontColor_value: 'rgba(255,255,255,1)',
    itemDescriptionFontColorSlideshow_themeName: 'color_15',
    itemDescriptionFontColorSlideshow_value: 'rgba(0,0,0,1)',
    loadMoreButtonFont_family: 'proxima-n-w01-reg,sans-serif',
    loadMoreButtonFont_displayName: 'Paragraph 2',
    loadMoreButtonFont_style_bold: false,
    loadMoreButtonFont_style_italic: false,
    loadMoreButtonFont_style_underline: false,
    loadMoreButtonFont_size: 15,
    loadMoreButtonFont_preset: 'Body-M',
    loadMoreButtonFont_editorKey: 'font_8',
    loadMoreButtonFont_fontStyleParam: true,
    loadMoreButtonFont_value:
      'font:normal normal normal 15px/1.4em proxima-n-w01-reg,sans-serif;',
    loadMoreButtonFontColor_themeName: 'color_15',
    loadMoreButtonFontColor_value: 'rgba(0,0,0,1)',
    loadMoreButtonColor_themeName: 'color_11',
    loadMoreButtonColor_value: 'rgba(255,255,255,1)',
    loadMoreButtonBorderColor_themeName: 'color_15',
    loadMoreButtonBorderColor_value: 'rgba(0,0,0,1)',
    customButtonFontForHover_family: 'proxima-n-w01-reg',
    customButtonFontForHover_displayName: 'Paragraph 2',
    customButtonFontForHover_style_bold: false,
    customButtonFontForHover_style_italic: false,
    customButtonFontForHover_style_underline: false,
    customButtonFontForHover_size: 15,
    customButtonFontForHover_preset: 'Custom',
    customButtonFontForHover_editorKey: 'font_8',
    customButtonFontForHover_fontStyleParam: true,
    customButtonFontForHover_value:
      'font:normal normal normal 15px/18px proxima-n-w01-reg,sans-serif;',
    customButtonFontColorForHover_themeName: 'color_15',
    customButtonFontColorForHover_value: 'rgba(0,0,0,1)',
    externalCustomButtonColor_themeName: 'color_18',
    externalCustomButtonColor_value: 'rgba(56,74,211,0)',
    externalCustomButtonBorderColor_themeName: 'color_15',
    externalCustomButtonBorderColor_value: 'rgba(0,0,0,1)',
    customButtonFont_family: 'proxima-n-w01-reg',
    customButtonFont_displayName: 'Paragraph 2',
    customButtonFont_style_bold: false,
    customButtonFont_style_italic: false,
    customButtonFont_style_underline: false,
    customButtonFont_size: 15,
    customButtonFont_preset: 'Custom',
    customButtonFont_editorKey: 'font_8',
    customButtonFont_fontStyleParam: true,
    customButtonFont_value:
      'font:normal normal normal 15px/18px proxima-n-w01-reg,sans-serif;',
    customButtonFontColor_themeName: 'color_11',
    customButtonFontColor_value: 'rgba(255,255,255,1)',
    customButtonColor_themeName: 'color_11',
    customButtonColor_value: 'rgba(255,255,255,0)',
    customButtonBorderColor_themeName: 'color_11',
    customButtonBorderColor_value: 'rgba(255,255,255,1)',
    sharpParams_quality: 90,
    sharpParams_usm: {},
    arrowsColor_themeName: 'color_11',
    arrowsColor_value: 'rgba(255,255,255,1)',
    oneColorAnimationColor_themeName: 'color_11',
    oneColorAnimationColor_value: 'rgba(255,255,255,1)',
    responsive: false,
    targetItemSize: 650,
    enableScroll: true,
    cropOnlyFill: false,
    layoutParams_navigationArrows_type: GALLERY_CONSTS.arrowsType.DEFAULT_ARROW,
    layoutParams_navigationArrows_container_type:
      GALLERY_CONSTS.arrowsContainerStyleType.SHADOW,
    layoutParams_navigationArrows_container_backgroundColor: 'rgba(0,0,0,0)',
    layoutParams_navigationArrows_container_borderRadius: 0,
  };
}

function expected() {
  return {
    gotStyleParams: true,
    selectedLayout: 0,
    allowSocial: true,
    allowDownload: false,
    allowTitle: true,
    allowDescription: false,
    loveButton: true,
    loveCounter: true,
    showVideoPlayButton: false,
    gallerySliderImageRatio: 1.7777777777777777,
    galleryImageRatio: 2,
    collageAmount: 0.8,
    floatingImages: 0,
    viewMode: 'preview',
    galleryHorizontalAlign: 'center',
    galleryVerticalAlign: 'center',
    mobilePanorama: false,
    imageLoadingWithColorMode: 'PICKED_COLOR',
    imageRatioType: 'FIXED',
    numberOfDisplayedItems: 3,
    expandAnimation: 'NO_EFFECT',
    itemBorderColor_themeName: 'color_15',
    itemBorderColor_value: 'rgba(0,0,0,1)',
    itemShadowOpacityAndColor_value: 'rgba(0,0,0,0.2)',
    itemShadowOpacityAndColor_themeName: 'color_15',
    textBoxBorderColor_themeName: 'color_15',
    textBoxBorderColor_value: 'rgba(0,0,0,1)',
    titleDescriptionSpace: 6,
    textsVerticalPadding: 0,
    textsHorizontalPadding: 0,
    textBoxFillColor_themeName: 'color_12',
    textBoxFillColor_value: 'rgba(232,230,230,1)',
    alwaysShowHover: false,
    previewHover: false,
    calculateTextBoxHeightMode: 'MANUAL',
    jsonStyleParams: '',
    designedPresetId: -1,
    galleryLayoutType: 'custom',
    allowOverlayGradient: false,
    overlayGradientDegrees: 180,
    slideDuration: 400,
    overlayType: 0,
    useCustomButton: false,
    customButtonText: 'Click here',
    isStoreGallery: false,
    isInAdi: false,
    itemOpacity_themeName: 'color_15',
    itemOpacity_value: 'rgba(0,0,0,0.6)',
    itemFont_family: 'proxima-n-w01-reg',
    itemFont_displayName: 'Heading 5',
    itemFont_style_bold: false,
    itemFont_style_italic: false,
    itemFont_style_underline: false,
    itemFont_size: 22,
    itemFont_preset: 'Custom',
    itemFont_editorKey: 'font_5',
    itemFont_fontStyleParam: true,
    itemFont_value:
      'font:normal normal normal 22px/27px proxima-n-w01-reg,sans-serif;',
    itemFontSlideshow_family: 'proxima-n-w01-reg',
    itemFontSlideshow_displayName: 'Heading 5',
    itemFontSlideshow_style_bold: false,
    itemFontSlideshow_style_italic: false,
    itemFontSlideshow_style_underline: false,
    itemFontSlideshow_size: 22,
    itemFontSlideshow_preset: 'Custom',
    itemFontSlideshow_editorKey: 'font_5',
    itemFontSlideshow_fontStyleParam: true,
    itemFontSlideshow_value:
      'font:normal normal normal 22px/27px proxima-n-w01-reg,sans-serif;',
    itemDescriptionFontSlideshow_family: 'proxima-n-w01-reg',
    itemDescriptionFontSlideshow_displayName: 'Paragraph 2',
    itemDescriptionFontSlideshow_style_bold: false,
    itemDescriptionFontSlideshow_style_italic: false,
    itemDescriptionFontSlideshow_style_underline: false,
    itemDescriptionFontSlideshow_size: 15,
    itemDescriptionFontSlideshow_preset: 'Custom',
    itemDescriptionFontSlideshow_editorKey: 'font_8',
    itemDescriptionFontSlideshow_fontStyleParam: true,
    itemDescriptionFontSlideshow_value:
      'font:normal normal normal 15px/18px proxima-n-w01-reg,sans-serif;',
    itemDescriptionFont_family: 'proxima-n-w01-reg',
    itemDescriptionFont_displayName: 'Paragraph 2',
    itemDescriptionFont_style_bold: false,
    itemDescriptionFont_style_italic: false,
    itemDescriptionFont_style_underline: false,
    itemDescriptionFont_size: 15,
    itemDescriptionFont_preset: 'Custom',
    itemDescriptionFont_editorKey: 'font_8',
    itemDescriptionFont_fontStyleParam: true,
    itemDescriptionFont_value:
      'font:normal normal normal 15px/18px proxima-n-w01-reg,sans-serif;',
    itemFontColor_themeName: 'color_11',
    itemFontColor_value: 'rgba(255,255,255,1)',
    itemFontColorSlideshow_themeName: 'color_15',
    itemFontColorSlideshow_value: 'rgba(0,0,0,1)',
    itemDescriptionFontColor_themeName: 'color_11',
    itemDescriptionFontColor_value: 'rgba(255,255,255,1)',
    itemDescriptionFontColorSlideshow_themeName: 'color_15',
    itemDescriptionFontColorSlideshow_value: 'rgba(0,0,0,1)',
    loadMoreButtonFont_family: 'proxima-n-w01-reg,sans-serif',
    loadMoreButtonFont_displayName: 'Paragraph 2',
    loadMoreButtonFont_style_bold: false,
    loadMoreButtonFont_style_italic: false,
    loadMoreButtonFont_style_underline: false,
    loadMoreButtonFont_size: 15,
    loadMoreButtonFont_preset: 'Body-M',
    loadMoreButtonFont_editorKey: 'font_8',
    loadMoreButtonFont_fontStyleParam: true,
    loadMoreButtonFont_value:
      'font:normal normal normal 15px/1.4em proxima-n-w01-reg,sans-serif;',
    loadMoreButtonFontColor_themeName: 'color_15',
    loadMoreButtonFontColor_value: 'rgba(0,0,0,1)',
    loadMoreButtonColor_themeName: 'color_11',
    loadMoreButtonColor_value: 'rgba(255,255,255,1)',
    loadMoreButtonBorderColor_themeName: 'color_15',
    loadMoreButtonBorderColor_value: 'rgba(0,0,0,1)',
    customButtonFontForHover_family: 'proxima-n-w01-reg',
    customButtonFontForHover_displayName: 'Paragraph 2',
    customButtonFontForHover_style_bold: false,
    customButtonFontForHover_style_italic: false,
    customButtonFontForHover_style_underline: false,
    customButtonFontForHover_size: 15,
    customButtonFontForHover_preset: 'Custom',
    customButtonFontForHover_editorKey: 'font_8',
    customButtonFontForHover_fontStyleParam: true,
    customButtonFontForHover_value:
      'font:normal normal normal 15px/18px proxima-n-w01-reg,sans-serif;',
    customButtonFontColorForHover_themeName: 'color_15',
    customButtonFontColorForHover_value: 'rgba(0,0,0,1)',
    externalCustomButtonColor_themeName: 'color_18',
    externalCustomButtonColor_value: 'rgba(56,74,211,0)',
    externalCustomButtonBorderColor_themeName: 'color_15',
    externalCustomButtonBorderColor_value: 'rgba(0,0,0,1)',
    customButtonFont_family: 'proxima-n-w01-reg',
    customButtonFont_displayName: 'Paragraph 2',
    customButtonFont_style_bold: false,
    customButtonFont_style_italic: false,
    customButtonFont_style_underline: false,
    customButtonFont_size: 15,
    customButtonFont_preset: 'Custom',
    customButtonFont_editorKey: 'font_8',
    customButtonFont_fontStyleParam: true,
    customButtonFont_value:
      'font:normal normal normal 15px/18px proxima-n-w01-reg,sans-serif;',
    customButtonFontColor_themeName: 'color_11',
    customButtonFontColor_value: 'rgba(255,255,255,1)',
    customButtonColor_themeName: 'color_11',
    customButtonColor_value: 'rgba(255,255,255,0)',
    customButtonBorderColor_themeName: 'color_11',
    customButtonBorderColor_value: 'rgba(255,255,255,1)',
    sharpParams_quality: 90,
    sharpParams_usm: {},
    arrowsColor_themeName: 'color_11',
    arrowsColor_value: 'rgba(255,255,255,1)',
    oneColorAnimationColor_themeName: 'color_11',
    oneColorAnimationColor_value: 'rgba(255,255,255,1)',
    responsive: false,
    targetItemSize: 650,
    layoutParams_structure_galleryLayout: 0,
    layoutParams_structure_itemSpacing: 10,
    layoutParams_crop_enable: false,
    layoutParams_crop_enableSmartCrop: false,
    layoutParams_crop_cropOnlyFill: false,
    layoutParams_targetItemSize_minimum: 120,
    layoutParams_groups_density: 0.8,
    layoutParams_groups_groupByOrientation: true,
    layoutParams_groups_groupSize: 3,
    layoutParams_thumbnails_enable: false,
    layoutParams_thumbnails_spacing: 0,
    layoutParams_thumbnails_size: 120,
    layoutParams_navigationArrows_enable: true,
    layoutParams_navigationArrows_padding: 23,
    layoutParams_navigationArrows_verticalAlignment: 'ITEM_CENTER',
    layoutParams_navigationArrows_size: 23,
    layoutParams_navigationArrows_type: GALLERY_CONSTS.arrowsType.DEFAULT_ARROW,
    layoutParams_navigationArrows_container_type:
      GALLERY_CONSTS.arrowsContainerStyleType.SHADOW,
    layoutParams_navigationArrows_container_backgroundColor: 'rgba(0,0,0,0)',
    layoutParams_navigationArrows_container_borderRadius: 0,
    layoutParams_info_layout: 'NO_BACKGROUND',
    layoutParams_info_spacing: 10,
    layoutParams_info_border_width: 0,
    layoutParams_info_border_radius: 0,
    layoutParams_thumbnails_alignment: 'BOTTOM',
    layoutParams_structure_scrollDirection: 'VERTICAL',
    layoutParams_structure_layoutOrientation: 'HORIZONTAL',
    layoutParams_groups_allowedGroupTypes: [
      '1',
      '2h',
      '2v',
      '3t',
      '3b',
      '3l',
      '3r',
    ],
    layoutParams_structure_numberOfColumns: 3,
    layoutParams_crop_ratios: [1],
    layoutParams_crop_method: 'FILL',
    layoutParams_structure_responsiveMode: 'FIT_TO_SCREEN',
    layoutParams_info_height: 0,
    behaviourParams_item_video_loop: true,
    behaviourParams_item_video_enablePlayButton: false,
    behaviourParams_item_overlay_hoverAnimation: 'NO_EFFECT',
    behaviourParams_item_overlay_position: 'LEFT',
    behaviourParams_item_overlay_size: 100,
    behaviourParams_item_overlay_sizeUnits: 'PERCENT',
    behaviourParams_item_overlay_padding: 0,
    behaviourParams_item_content_hoverAnimation: 'NO_EFFECT',
    behaviourParams_item_content_loader: 'COLOR',
    behaviourParams_gallery_scrollAnimation: 'NO_EFFECT',
    behaviourParams_gallery_enableIndexingShareLinks: false,
    behaviourParams_gallery_horizontal_slideAnimation: 'SCROLL',
    behaviourParams_gallery_horizontal_slideTransition:
      'cubic-bezier(0.46,0.1,0.25,1)',
    behaviourParams_gallery_horizontal_loop: false,
    behaviourParams_gallery_horizontal_autoSlide_interval: 4,
    behaviourParams_gallery_horizontal_autoSlide_pauseOnHover: true,
    behaviourParams_gallery_horizontal_autoSlide_speed: 50,
    behaviourParams_gallery_horizontal_slideshowInfo_enableCounter: false,
    behaviourParams_gallery_horizontal_slideshowInfo_enablePlayButton: false,
    behaviourParams_gallery_vertical_loadMore_enable: false,
    behaviourParams_gallery_blockContextMenu: true,
    behaviourParams_gallery_horizontal_blockScroll: false,
    behaviourParams_item_clickAction: 'ACTION',
    behaviourParams_item_video_playTrigger: 'HOVER',
    behaviourParams_item_video_volume: 0,
    behaviourParams_item_video_speed: 1,
    behaviourParams_item_overlay_hoveringBehaviour: 'APPEARS',
    layoutParams_info_placement: 'OVERLAY',
    behaviourParams_gallery_layoutDirection: 'LEFT_TO_RIGHT',
    behaviourParams_gallery_vertical_loadMore_amount: 'ALL',
    behaviourParams_gallery_horizontal_autoSlide_behaviour: 'OFF',
    behaviourParams_gallery_horizontal_slideshowInfo_buttonsAlignment: 'CENTER',
    stylingParams_itemShadowBlur: 20,
    stylingParams_itemShadowDirection: 135,
    stylingParams_itemShadowSize: 10,
    stylingParams_itemEnableShadow: false,
    stylingParams_itemBorderRadius: 0,
    stylingParams_itemBorderWidth: 0,
    layoutParams_gallerySpacing: 0,
    layoutParams_cropRatio: 1,
    isRTL: false,
    isVertical: false,
    minItemSize: 120,
    groupSize: 3,
    chooseBestGroup: true,
    groupTypes: '1,2h,2v,3t,3b,3l,3r',
    cubeImages: false,
    cubeType: 'fill',
    smartCrop: false,
    fullscreen: true,
    videoLoop: true,
    videoSound: false,
    videoPlay: 'hover',
    videoSpeed: 1,
    numberOfImagesPerRow: 3,
    collageDensity: 0.8,
    galleryTextAlign: 'center',
    imageMargin: 10,
    fixedColumns: 0,
    forceFullStrips: false,
    showArrows: true,
    hasThumbnails: false,
    galleryThumbnailsAlignment: 'bottom',
    gridStyle: 0,
    titlePlacement: 'SHOW_ON_HOVER',
    hoveringBehaviour: 'APPEARS',
    isAutoSlideshow: false,
    slideshowLoop: false,
    playButtonForAutoSlideShow: false,
    pauseAutoSlideshowOnHover: true,
    allowSlideshowCounter: false,
    autoSlideshowInterval: 4,
    arrowsSize: 23,
    slideshowInfoSize: 200,
    imageLoadingMode: 'COLOR',
    scrollAnimation: 'NO_EFFECT',
    exitScrollAnimation: 'NO_EFFECT',
    overlayAnimation: 'NO_EFFECT',
    imageHoverAnimation: 'NO_EFFECT',
    itemBorderWidth: 0,
    itemBorderRadius: 0,
    itemEnableShadow: false,
    itemShadowBlur: 20,
    loadMoreAmount: 'all',
    itemShadowDirection: 135,
    itemShadowSize: 10,
    imageInfoType: 'NO_BACKGROUND',
    textBoxBorderRadius: 0,
    textBoxBorderWidth: 0,
    textBoxHeight: 0,
    textImageSpace: 10,
    scrollDirection: 0,
    slideAnimation: 'SCROLL',
    autoSlideshowType: 'interval',
    autoSlideshowContinuousSpeed: 50,
    enableInfiniteScroll: true,
    itemClick: 'expand',
    thumbnailSpacings: 0,
    arrowsPadding: 23,
    shouldIndexDirectShareLinkInSEO: false,
    slideTransition: 'cubic-bezier(0.46,0.1,0.25,1)',
    overlayPosition: 'LEFT',
    overlaySize: 100,
    overlayPadding: 0,
    overlaySizeType: 'PERCENT',
    arrowsVerticalPosition: 'ITEM_CENTER',
    galleryLayout: 0,
    thumbnailSize: 120,
    allowContextMenu: false,
    gallerySize: 30,
    enableScroll: true,
    cropOnlyFill: false,
  };
}
