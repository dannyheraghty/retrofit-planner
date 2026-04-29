const faqJsonLd = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best first home energy upgrade in Ireland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most Irish homes, reducing heat loss through insulation and draught-proofing is the best first step. This improves comfort and ensures later upgrades like heat pumps are sized correctly."
      }
    },
    {
      "@type": "Question",
      "name": "Should I install a heat pump before insulation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, insulation should usually come first. Installing a heat pump before improving insulation can lead to higher costs and inefficient system sizing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get SEAI grants for multiple upgrades?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many SEAI grants can be combined across insulation, heating, and solar upgrades, depending on eligibility and your home's upgrade plan."
      }
    },
    {
      "@type": "Question",
      "name": "What order should home energy upgrades be done?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical order is insulation first, then ventilation, followed by heating upgrades like heat pumps, and finally solar PV if suitable."
      }
    }
  ]
}`;

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
    </>
  );
}

