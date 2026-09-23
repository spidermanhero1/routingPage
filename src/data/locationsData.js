// Импорт скриншотов локаций (замени пути на актуальные в src/assets)
import loc1 from '../assets/zone3-1.webp';
import loc2 from '../assets/zone3-2.webp';
import loc3 from '../assets/zone3-3.png';

export const getLocations = (t) => [
  {
    id: 'zone3',
    title: t('locations.zone3.title'),
    quote: t('locations.zone3.quote'),
    overview: t('locations.zone3.overview'),
    moreDetails: t('locations.zone3.moreDetails'),
    images: [loc1, loc2, loc3],
  },
  // Будущие локации просто добавляются новым объектом сюда
];