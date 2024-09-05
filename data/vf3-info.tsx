import { IVehicleInfo } from '../types/common';

export const VF_3_IMAGE_PATH =
  'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/v1724461203377/ldp-all-cars/360/VF3/exterior';

export const getVF3ImagePath = (colorId: string, imageIndex: number): string => {
  return `${VF_3_IMAGE_PATH}/${colorId}/F${imageIndex}.png`;
};
// "181U/F{imageIndex}.png",
export const VF_3_INFO_LIST: IVehicleInfo[] = [
  {
    id: '181U',
    name: 'Summer Yellow',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf22e2e6c/reserves/VF3/icon/icon-4.png',
  },
  {
    id: 'CE1X',
    name: 'Iris Berry',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw2f514793/reserves/VF3/icon/icon.png',
  },
  {
    id: '1821',
    name: 'Rose Pink',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4bd690fe/reserves/VF3/icon/icon-1.png',
  },
  {
    id: 'CE1V',
    name: 'Zenith Grey',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw90015c16/reserves/VF3/icon/icon-2.png',
  },
  {
    id: 'CE1J',
    name: 'Electric Blue',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw7dc1ef3c/reserves/VF3/icon/icon-3.png',
  },
  {
    id: 'CE1M',
    name: 'Crimson Red',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw3dbfa02e/reserves/VF3/icon/icon-5.png',
  },

  {
    id: '181Y',
    name: 'Aquatic Azure',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw10bdaab2/reserves/VF3/icon/icon-6.png',
  },
  {
    id: 'CE1W',
    name: 'Urban Mint',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwc4c49c12/reserves/VF3/icon/icon-7.png',
  },
  {
    id: 'CE18',
    name: 'Infinity Blanc',
    iconPath: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw9cf7173e/reserves/VF3/icon/icon-8.png',
  },
];
