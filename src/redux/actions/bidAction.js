export function raice(priceNow) {
  return {
    type: 'RAICE_BID',
    raice: priceNow + 50,
  };
}

