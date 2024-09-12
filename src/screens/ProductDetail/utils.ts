import {Product} from '../../types';

const isSelected = (favItem: Product[], productId: string) => {
  const favItemIds = favItem.map(item => item.id);
  return favItemIds.includes(productId);
};

export {isSelected};
