export const GRAPICS_MAP: { title: string; image?: string }[] = [
  {
    title: 'intelligence',
  },
  {
    title: 'wisdom',
  },
  {
    title: 'luck',
  },
  {
    title: 'love',
  },
  {
    title: 'serenity',
  },
  {
    title: 'happiness',
  },
  {
    title: 'money',
  },
];

export const FRENS_MAP: { title: string; image?: string }[] = Array.from(
  Array(128).keys(),
).map((index) => ({
  title: `Fren 00${index}`,
}));
