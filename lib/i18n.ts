import {notFound} from 'next/navigation';

import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config

const locales = ['ru', 'en', 'uz'];

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale = await locale;
  if (!resolvedLocale || !locales.includes(resolvedLocale)) notFound();

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});