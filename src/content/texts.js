// Все тексты сайта, кроме политики (она — в Privacy*.vue). Язык — по адресу:
// `/` — nl, `/en/` — en (D-290: без кук и localStorage).

export const texts = {
  nl: {
    base: '/',
    other: { lang: 'en', label: 'EN', name: 'English' },
    nav: { how: 'Hoe het werkt', privacy: 'Privacy', support: 'Support' },
    storeSoon: 'Binnenkort in de',
    storeBadge: { apple: 'App Store-badge', google: 'Google Play-badge' },
    home: {
      title: 'Ceppty — wat geef je echt uit aan elk product?',
      description:
        'Fotografeer je kassabon van elke winkel. Ceppty leest hem op je telefoon en laat per product zien waar je geld naartoe gaat. Geen account, geen reclame.',
      h1: 'Wat geef je echt uit aan elk product?',
      lead: 'Fotografeer je kassabon — van elke winkel. Ceppty leest hem op je telefoon en laat per product zien waar je geld naartoe gaat.',
      ticks: ['Gratis', 'Geen account', 'Alles op je telefoon'],
      phone: {
        month: 'Deze maand',
        top: 'Top producten',
        items: [
          { name: 'Koffiebonen', times: '6× gekocht' },
          { name: 'Halfvolle melk', times: '9× gekocht' },
          { name: 'Energiedrank', times: '12× gekocht' },
        ],
        button: 'Kassabon fotograferen',
      },
      stepsTitle: 'Zo simpel is het',
      steps: [
        { h: 'Fotografeer je bon', p: 'Van elke winkel. Na het boodschappen doen, in een paar seconden.' },
        { h: 'Ceppty leest elke regel', p: 'Op je telefoon, zonder internet. Producten, prijzen en bonus — netjes op een rij.' },
        { h: 'Zie wat elk product kost', p: 'Per maand, per categorie, per product — en hoe de prijs verandert.' },
      ],
      privacyTitle: 'Jouw bonnen blijven van jou',
      privacyLead: 'Geen account, geen reclame, geen tracking. Alles wordt op je telefoon gelezen en bewaard.',
      privacyPoints: [
        { h: 'Op je telefoon', p: 'Tekst herkennen gebeurt op het toestel zelf.' },
        { h: 'Geen account', p: 'Downloaden en beginnen. Geen e-mail nodig.' },
        { h: 'Foto weg', p: 'De foto wordt verwijderd zodra je de bon bevestigt.' },
        { h: 'Gratis', p: 'Zonder reclame.' },
      ],
      privacyMore: 'Lees de privacyverklaring',
      ahTitle: 'Boodschappen bij Albert Heijn?',
      ahText: 'Deel je digitale kassabonnen (PDF) uit de AH-app ook met Ceppty.',
    },
    privacy: {
      title: 'Privacyverklaring — Ceppty',
      description: 'Ceppty bewaart je kassabonnen op je telefoon. Geen account, geen reclame, geen tracking.',
      eyebrow: 'Privacyverklaring',
      updated: 'Laatst bijgewerkt: 27 september 2026',
      h1: 'Je kassabonnen blijven op je telefoon',
      short:
        'Ceppty bewaart je kassabonnen op je telefoon. Geen account, geen reclame, geen tracking. Er gaat alleen iets naar buiten als jij dat kiest: een rapport over een kassabon die de app niet goed leest, of iets wat je zelf deelt.',
    },
    support: {
      title: 'Support — Ceppty',
      description: 'Vraag, probleem of idee? Mail naar support@ceppty.nl.',
      h1: 'Hoe kunnen we helpen?',
      lead: 'De meeste antwoorden staan hieronder. Kom je er niet uit, mail ons gerust.',
      mailLabel: 'Mail ons',
      mailNote: 'We reageren meestal binnen een paar werkdagen.',
      faqTitle: 'Veelgestelde vragen',
      faq: [
        { q: 'Hoe voeg ik een kassabon toe?', a: 'Tik op „Kassabon fotograferen” en houd de bon plat in beeld. Kassabonnen uit de AH-app deel je via Delen → Ceppty, of je tikt op „Bestanden importeren” en kiest een PDF.' },
        { q: 'Een kassabon is niet goed gelezen', a: 'Open de kassabon en pas de regels aan naast de foto. Met „Rapport versturen” help je ons het lezen te verbeteren.' },
        { q: 'Welke winkels werken?', a: 'Foto’s van papieren kassabonnen van elke winkel. Digitale kassabonnen (PDF) voorlopig alleen uit de Albert Heijn-app.' },
        { q: 'Een product staat in de verkeerde categorie', a: 'Kies een andere categorie bij het product. Dat geldt meteen voor alle kassabonnen met dat product.' },
        { q: 'Hoe exporteer of wis ik mijn gegevens?', a: 'In de app onder „Over Ceppty”: „Exporteren als CSV” of „Alle gegevens wissen”.' },
        { q: 'Kost de app iets?', a: 'Nee. Ceppty is gratis en zonder reclame.' },
      ],
    },
    footer: {
      disclaimer: 'Ceppty is geen app van Albert Heijn en is niet met Albert Heijn verbonden.',
    },
  },
  en: {
    base: '/en/',
    other: { lang: 'nl', label: 'NL', name: 'Nederlands' },
    nav: { how: 'How it works', privacy: 'Privacy', support: 'Support' },
    storeSoon: 'Coming soon to the',
    storeBadge: { apple: 'App Store badge', google: 'Google Play badge' },
    home: {
      title: 'Ceppty — what do you really spend on each product?',
      description:
        'Snap a receipt from any store. Ceppty reads it on your phone and shows where your money goes, product by product. No account, no ads.',
      h1: 'What do you really spend on each product?',
      lead: 'Snap your receipt — from any store. Ceppty reads it on your phone and shows where your money goes, product by product.',
      ticks: ['Free', 'No account', 'Everything on your phone'],
      phone: {
        month: 'This month',
        top: 'Top products',
        items: [
          { name: 'Coffee beans', times: 'bought 6×' },
          { name: 'Semi-skimmed milk', times: 'bought 9×' },
          { name: 'Energy drink', times: 'bought 12×' },
        ],
        button: 'Photograph receipt',
      },
      stepsTitle: 'It’s this simple',
      steps: [
        { h: 'Snap your receipt', p: 'From any store. Right after shopping, in a few seconds.' },
        { h: 'Ceppty reads every line', p: 'On your phone, no internet needed. Products, prices and discounts — neatly lined up.' },
        { h: 'See what each product costs', p: 'Per month, per category, per product — and how the price changes.' },
      ],
      privacyTitle: 'Your receipts stay yours',
      privacyLead: 'No account, no ads, no tracking. Everything is read and stored on your phone.',
      privacyPoints: [
        { h: 'On your phone', p: 'Text recognition happens on the device itself.' },
        { h: 'No account', p: 'Download and start. No e-mail needed.' },
        { h: 'Photo deleted', p: 'The photo is deleted as soon as you confirm the receipt.' },
        { h: 'Free', p: 'No ads.' },
      ],
      privacyMore: 'Read the privacy policy',
      ahTitle: 'Shopping at Albert Heijn?',
      ahText: 'Share your digital receipts (PDF) from the AH app with Ceppty too.',
    },
    privacy: {
      title: 'Privacy policy — Ceppty',
      description: 'Ceppty keeps your receipts on your phone. No account, no ads, no tracking.',
      eyebrow: 'Privacy policy',
      updated: 'Last updated: 27 September 2026',
      h1: 'Your receipts stay on your phone',
      short:
        'Ceppty keeps your receipts on your phone. No account, no ads, no tracking. Data only leaves your phone when you choose to send it: a report about a receipt the app can’t read, or something you share yourself.',
    },
    support: {
      title: 'Support — Ceppty',
      description: 'Question, problem or idea? Email support@ceppty.nl.',
      h1: 'How can we help?',
      lead: 'Most answers are below. Still stuck? Just email us.',
      mailLabel: 'Email us',
      mailNote: 'We usually reply within a few working days.',
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'How do I add a receipt?', a: 'Tap “Photograph receipt” and hold the receipt flat in view. Receipts from the AH app: share them via Share → Ceppty, or tap “Import files” and pick a PDF.' },
        { q: 'A receipt wasn’t read correctly', a: 'Open the receipt and fix the lines right next to the photo. “Send report” helps us improve how receipts are read.' },
        { q: 'Which stores work?', a: 'Photos of paper receipts from any store. Digital receipts (PDF) only from the Albert Heijn app for now.' },
        { q: 'A product is in the wrong category', a: 'Pick another category for the product. It applies right away to every receipt with that product.' },
        { q: 'How do I export or delete my data?', a: 'In the app under “About Ceppty”: “Export as CSV” or “Delete all data”.' },
        { q: 'Does the app cost anything?', a: 'No. Ceppty is free and has no ads.' },
      ],
    },
    footer: {
      disclaimer: 'Ceppty is not an Albert Heijn app and is not affiliated with Albert Heijn.',
    },
  },
}
