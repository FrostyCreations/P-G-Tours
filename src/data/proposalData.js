// Generalized data architecture 
// Easily swap out the whole 'sections' array for any new client layout

import brandLaunchImg from '../assets/pexels-photo-1450360.jpeg';
import logoImg from '../assets/PG Tour.png';

export const proposalData = {
  client: {
    "name": "P&G Lodge",
    "logoText": "P&G",
    "logoUrl": "/p-g-lodge-logo.png"
  },
  agency: {
    "name": "Big On Digital",
    "contactEmail": "hello@bigondigital.com"
  },
  hero: {
    "badge": "PNG Tours",
    "title": "Brand Launch & Marketing Strategy Proposal",
    "subtitle": "Curated experiences for travellers seeking coastal escapes.",
    "heroVideoUrl": "/aerial-view-of-boat-near-beach-mozambique-2026-01-23-00-24-55-utc.mp4"
  },
  sections: [
    {
      type: 'ExecutiveSummary',
      id: 'intro',
      data: {
        title: "Introduction",
        price: "R 5,000",
        quoteUrl: "#",
        content: "PNG Tours is a new travel brand with the advantage of owning its own lodge in Mozambique and operating dedicated shuttle transport.\n\nThis creates a strong foundation for curated travel experiences designed for South African travellers seeking coastal escapes and unique holiday experiences.\n\nThe objective of this proposal is to launch PNG Tours professionally, position the lodge as a desirable destination, and create the marketing infrastructure required to generate consistent tour enquiries.\n\nThe initial focus will be Mozambique lodge packages, allowing the brand to establish credibility and operational momentum before expanding into additional tours across Southern Africa.",
        image1: "/Mozambique/beautiful-sunset-on-the-beach-in-watamu-blue-bay-2026-01-09-14-26-51-utc.jpg",
        image2: "/Mozambique/crystal-clear-emerald-ocean-water-2026-01-13-18-42-34-utc.jpg"
      }
    },
    {
      type: 'PerformanceOverview',
      id: 'strategy',
      data: {
        title: "Strategy Approach",
        metrics: [
          {
            "label": "Establish the brand identity, website, content structure and marketing channels.",
            "value": "Phase 1",
            "trend": "Launch"
          },
          {
            "label": "Once packages gain traction, expand the brand's reach and further offerings.",
            "value": "Phase 2",
            "trend": "Growth"
          }
        ],
        imageUrl: "/cheerful-men-toasting.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: 'phase1-header',
      data: {
        eyebrow: "Phase 1 Strategy",
        title: "Brand Launch & Digital Foundations",
        description: "This phase focuses on establishing the brand and generating enquiries.\n\n We will build the identity, website, content structure and marketing channels required to begin generating robust leads.",
        imagePosition: "left",
        imageUrl: "/Mozambique/aerial-view-of-the-sailboat-on-blue-sea-empty-whi-2026-03-16-00-58-36-utc.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: 'brand-visual',
      data: {
        eyebrow: "1. Brand Visual Guide",
        title: "Establishing the Aesthetic",
        price: "R 15,000",
        quoteUrl: "#",
        description: "A strong brand identity ensures PNG Tours presents a consistent and professional image across all marketing channels. \n\nWe recommend positioning the brand with the 'Explorer' as the primary archetype and 'Jester' as the secondary. \n\nThis keeps the travel and adventure elements strong, while the Jester supports the fun and energetic personality the owners naturally bring. \n\nThis avoids placing the brand in a highly competitive luxury positioning too early, opting instead for authentic and relatable engagement.",
        imagePosition: "right",
        imageStyle: "cover",
        imageUrl: "/Mozambique/png_tours_brand_visual_guide.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'brand-materials',
      data: {
        eyebrow: "2. Brand Materials",
        title: "Professional Collateral",
        price: "R 5,000",
        quoteUrl: "#",
        description: "Professional brand materials help position PNG Tours as a credible and well-established travel provider. \n\nThis includes items such as logo redevelopment,quotes, invoices and business cards, ensuring the business presents itself professionally when communicating with travellers and partners.",
        imagePosition: "left",
        imageUrl: "/Mozambique/front-view-of-a-group-of-multi-ethnic-friends-walk-2026-01-09-09-46-11-utc.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: 'foundational-content',
      data: {
        eyebrow: "3. Foundational Content",
        title: "Building the Media Library",
        price: "R 18,000",
        quoteUrl: "#",
        description: "Travel marketing is highly visual.\n\n As PNG Tours currently does not have sufficient content for marketing, a dedicated content shoot at the lodge is required. \n\nThis shoot will build a professional media library capturing high-quality photography and video of: lodge imagery, surrounding destinations, activities and experiences, and the branded bus. \n\nThis content is essential for fueling the website, social media, and advertising campaigns.",
        imagePosition: "right",
        imageUrl: "/Mozambique/foundational_content_creation.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'package-design',
      data: {
        eyebrow: "4. Travel Package Design",
        title: "Structuring the Experience",
        price: "R 8,000",
        quoteUrl: "#",
        description: "Clear and well-structured travel packages are essential for successful tour marketing. \n\nPackages will be designed to clearly communicate the experience, itinerary, inclusions and value of each trip, making them easy for potential travellers to understand and book. \n\nThese packages will also be designed into digital brochures and marketing materials that can be shared across marketing channels.",
        imagePosition: "left",
        imageUrl: "/Mozambique/crystal-clear-emerald-ocean-water-2026-01-13-18-42-34-utc.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: 'website-design',
      data: {
        eyebrow: "5. Website Design",
        title: "Central Digital Platform",
        price: "R 25,000",
        quoteUrl: "#",
        description: "The website will serve as the central platform for the PNG Tours brand. \n\nIt will showcase the lodge experience, present travel packages clearly, and provide visitors with an easy way to enquire about tours.\n\n A well-designed travel website builds credibility and allows marketing campaigns to direct interested travellers to a professional online presence. \n\nBasic SEO optimisation will ensure the website is structured correctly for search visibility.",
        imagePosition: "right",
        imageUrl: "/Mozambique/png_tours_website_mockup.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'website-tracking',
      data: {
        eyebrow: "6. Website Tracking",
        title: "Data-Driven Insights",
        price: "R 4,000",
        quoteUrl: "#",
        description: "Tracking tools will be implemented to monitor website activity and marketing performance. \n\nThis allows the business to understand how visitors discover the brand, which packages attract interest, and where enquiries originate, enabling future marketing decisions to be guided by real data.",
        imagePosition: "left",
        imageUrl: "/Mozambique/travel_analytics_dashboard.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-optimisation',
      data: {
        eyebrow: "7. Social Media Channel Optimisation",
        title: "Refining Your Digital Footprint",
        price: "R 6,500",
        quoteUrl: "#",
        description: "Social media is one of the most influential discovery channels in travel. \n\nExisting platforms will be refined and aligned with the new brand positioning so that profiles, imagery and messaging clearly communicate the PNG Tours experience. \n\nThese channels will serve as an ongoing platform to showcase the lodge, destinations and travel experiences.",
        imagePosition: "right",
        imageUrl: "/Mozambique/front-view-of-a-group-of-multi-ethnic-friends-walk-2026-01-09-09-46-11-utc.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: 'content-planning',
      data: {
        eyebrow: "8. Content Planning",
        title: "Consistent Online Presence",
        price: "R 5,000",
        quoteUrl: "#",
        description: "Consistency is essential when building a new travel brand.\n\n A structured content calendar will guide the creation and scheduling of posts, ensuring the brand maintains an active presence online while highlighting the lodge experience and travel packages.",
        imagePosition: "left",
        imageUrl: "/Mozambique/kids-running-at-the-beach-2026-01-09-12-26-55-utc.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-content-creation',
      data: {
        eyebrow: "9. Social Media Content Creation",
        title: "High-Quality Visual Storytelling",
        price: "R 10,000 /mo",
        quoteUrl: "#",
        description: "Travel marketing relies heavily on high-quality visuals. For Phase 1, our design responsibilities include the creation of the Visual Guide, Brand Materials, Travel Package Designs, and weekly social media post design (4 posts per month). \n\nThese posts will focus on showcasing the lodge, surrounding destinations, and travel experiences while concurrently supporting our broader advertising campaigns.",
        imagePosition: "right",
        imageUrl: "/Mozambique/mixed-race-friends-doing-barbecue-and-drinking-alc-2026-01-09-08-35-38-utc.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-management',
      data: {
        eyebrow: "10. Social Media Management",
        title: "Active Community Engagement",
        price: "R 8,500 /mo",
        quoteUrl: "#",
        description: "Effective social media requires more than posting content. \n\nEach platform will be optimised to ensure profiles, messaging and visuals align with the PNG Tours brand while supporting marketing campaigns. \n\nOngoing management will focus on community engagement, responding to enquiries, monitoring performance and refining content per platform to ensure the brand remains active, visible and responsive to potential travellers.",
        imagePosition: "left",
        imageUrl: "/Mozambique/laughing-at-piggyback-having-fun-at-beach-2026-01-05-05-24-21-utc.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: 'ad-setup',
      data: {
        eyebrow: "11. Advertising Setup",
        title: "Targeted Infrastructure",
        price: "R 6,000",
        quoteUrl: "#",
        description: "Advertising platforms will be configured to allow targeted marketing campaigns. \n\nThis setup enables the business to promote travel packages to audiences most likely to be interested in Mozambique travel experiences.",
        imagePosition: "right",
        imageUrl: "/Mozambique/luxury_travel_ad_campaign.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'ad-management',
      data: {
        eyebrow: "12. Advertising Management",
        title: "Optimized Campaigns",
        price: "R 9,000 /mo",
        quoteUrl: "#",
        description: "Advertising campaigns will be used to generate enquiries and promote specific travel packages. \n\nCampaigns will be monitored and optimised to ensure advertising spend produces measurable interest and leads.",
        imagePosition: "left",
        imageUrl: "/PG Lead.png"
      }
    },
    {
      type: 'AchievementsList',
      id: 'phase2',
      data: {
        title: "PHASE 2: Future Expansion",
        subtitle: "Once the Mozambican lodge packages are performing successfully, additional marketing initiatives will be introduced.",
        badge: "Growth",
        visualTitle: "Expansion Plan",
        visualText: "Unlocking Scale",
        points: [
          "Tour overview video production",
          "Google advertising campaigns",
          "Competitor and market analysis",
          "Company Profile & Letterhead",
          "Expanded travel package offerings",
          "Website expansion and additional destination pages",
          "Social landing page development",
          "SEO blog strategy",
          "Listings and travel directory citations",
          "Email marketing funnels & Automation",
          "WhatsApp enquiry automation"
        ]
      }
    },
    {
      type: 'FeatureSection',
      id: 'about-aliecia',
      data: {
        eyebrow: "About",
        title: "Aliecia Kapp",
        description: "A results-driven, energetic and dedicated Direct Sales Executive with a proven track record of success. Able to quickly adapt and overcome challenges to deliver results that exceed company expectations whilst ensuring customer needs are met effectively. Possesses excellent communication skills and the ability to lead, motivate and influence effectively at all levels within an organisation using effective negotiation techniques and problem solving approaches along with the necessary tenacity and enthusiasm required for success in order to achieve targets and goals. I am looking for a new opportunity within a challenging business environment where my skills will add significant value by creating a mutually beneficial relationship.",
        imagePosition: "right",
        imageUrl: "/aliecia-kapp.jpg"
      }
    },
    {
      type: 'AboutCompany',
      id: 'about',
      data: {
        logoImage: "/big-on-digital-logo.png",
        linkUrl: "https://www.bigondigital.co.za"
      }
    },
    {
      type: 'FinalCTA',
      id: 'nextsteps',
      data: {
        title: "Next Steps",
        thankYou: "Review and approve the proposal. Finalise package structures and pricing. Begin development of brand and digital platforms. Launch initial marketing activity.",
        buttonText: "View Quotes and Approve"
      }
    }
  ]
};
