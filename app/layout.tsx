import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { adoptWebsiteId, googleAnalyticsId, hotjarId, hotjarVersion } from "@/config/config.env";
import WhatsappButton from "@/components/ui/whatsappButton";


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

const FrankRuhlLibre = localFont({
  src: "./fonts/frank-ruhl-libre/FrankRuhlLibre-VariableFont_wght.ttf",
  variable: "--font-frank-ruhl-libre",
  weight: "100 900",
});




export const metadata: Metadata = {
  title: "Magda Simoni Nutricionista - Emagrecimento, Saúde Digestiva e Autoimunidade",
  description: "Magda Simoni, nutricionista especializada em emagrecimento consciente, doenças autoimunes e disfunções gastrointestinais. Cuide da sua saúde com uma abordagem integral e personalizada.",
  keywords: "Magda Simoni nutricionista, emagrecimento consciente, saúde digestiva, doenças autoimunes, nutrição personalizada, bem-estar, autocuidado, saúde intestinal, consulta de nutrição, dieta saudável, Santa Catarina",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/img/favicon/favicon.ico" />
        {/* Adopt Tracking Code */}
        {adoptWebsiteId && (
          <>
            <meta name="adopt-website-id" content={adoptWebsiteId} />
            <Script
              src={`//tag.goadopt.io/injector.js?website_code=${adoptWebsiteId}`}
              className="adopt-injector"
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${FrankRuhlLibre.variable} antialiased`}
      >
        {children}

        {/* Google Tag Manager */}
        {googleAnalyticsId && (
          <GoogleAnalytics gaId={googleAnalyticsId || ""} />
        )}

        <WhatsappButton />

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
