import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { googleAnalyticsId, hotjarId, hotjarVersion } from "@/config/config.env";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Web Design System",
  description: "Um sistema de design moderno para construção de websites e aplicações web responsivas com Next.js.",
  icons: {
    icon: '/img/favicon/favicon.ico', // Caminho para o favicon no diretório /public
  },
  openGraph: {
    title: 'Web Design System',
    locale: 'pt-BR',
    description: 'O Web Design System oferece uma base sólida de componentes reutilizáveis e boas práticas para criar interfaces de usuário modernas, acessíveis e escaláveis em Next.js.',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/img/favicon/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Google Tag Manager */}
        {googleAnalyticsId && (
          <GoogleAnalytics gaId={googleAnalyticsId || ""} />
        )}

        {/* Hotjar Tracking Code */}
        {hotjarId && hotjarVersion && (
          <Script
            id="hotjar"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                        (function(h,o,t,j,a,r){
                          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                          h._hjSettings={hjid:${hotjarId || '0'},hjsv:${hotjarVersion || '0'}};
                          a=o.getElementsByTagName('head')[0];
                          r=o.createElement('script');r.async=1;
                          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                          a.appendChild(r);
                        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                      `,
            }}
          />
        )}
        <script src="https://static.elfsight.com/platform/platform.js" async></script>

      </body>
    </html>
  );
}
