// Импорт спрайтов
import heroSprite from '../assets/hero.webp';
import axiomSprite from '../assets/axiom.webp';
export const getCharacters = (t) => [
{
id: 'ivar',
sprite: heroSprite,
name: t('characters.ivar.name'),
age: t('characters.ivar.age'),
faction: t('characters.ivar.faction'),
status: t('characters.ivar.status'),
quote: t('characters.ivar.quote'),
desc: t('characters.ivar.desc'),
moreDesc: t('characters.ivar.moreDesc'),
},
{
id: 'axiom',
sprite: axiomSprite,
name: t('characters.axiom.name'),
age: t('characters.axiom.age'),
faction: t('characters.axiom.faction'),
status: t('characters.axiom.status'),
quote: t('characters.axiom.quote'),
desc: t('characters.axiom.desc'),
moreDesc: t('characters.axiom.moreDesc'),
},
];