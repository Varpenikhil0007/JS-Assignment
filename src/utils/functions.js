export const check_for_soup = (cartItems) => {
  let i = 0;
  const len = cartItems.length;
  while (i < len) {
    if (cartItems[i].id === 4) return true;
    i++;
  }
  return false;
};

export const check_for_bread = (cartItems) => {
  let i = 0;
  const len = cartItems.length;
  while (i < len) {
    if (cartItems[i].id === 1) return true;
    i++;
  }
  return false;
};

// returns the savings on an item if offer applicable
export const check_for_offers = (item, itemPrice, isSoupPresent) => {
  // buy 1 get 1 free on cheese!
  // buy a soup and get bread for half the price!
  // get 1/3rd off on butter!
  let saving = 0;
  switch (item.id) {
    case 1:
      // Bread
      if (isSoupPresent) saving = itemPrice / 2;
      break;
    // case 5:
    //   // Butter
    //   saving = itemPrice / 3;
    //   break;
    default:
      saving = 0;
      break;
  }
  const offer_id = item.offer_id;
  if (offer_id) {
    switch (offer_id) {
      case "1":
        saving = itemPrice / 3;
        break;
      case "2":
        saving = itemPrice / 2;
        break;
      default:
        saving = 0;
        break;
    }
  }
  return saving;
};
