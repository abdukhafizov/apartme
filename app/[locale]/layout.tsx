import {NextIntlClientProvider} from 'next-intl';
import QueryProvider from './query-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  await params;
  return (
    <NextIntlClientProvider>
      <QueryProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </QueryProvider>
    </NextIntlClientProvider>
  );
}