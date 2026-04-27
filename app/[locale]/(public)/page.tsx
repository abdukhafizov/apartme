import {getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">{t('home')}</h1>
      <p className="text-lg">Welcome to SamarkandRent - {t('search')} apartments in Samarkand</p>
    </div>
  );
}