// Generalized data architecture 
// Easily swap out the whole 'sections' array for any new client layout

import brandLaunchImg from '../assets/pexels-photo-1450360.jpeg';
import logoImg from '../assets/PG Tour.png';

export const proposalData = {
  client: {
    name: "P&G Tours",
    logoText: "P&G",
    logoUrl: logoImg
  },
  agency: {
    name: "Big On Digital",
    contactEmail: "hello@bigondigital.com"
  },
  hero: {
    badge: "PNG Tours",
    title: "Brand Launch & Marketing Strategy Proposal",
    subtitle: "Curated experiences for travellers seeking coastal escapes."
  },
  sections: [
    {
      type: 'ExecutiveSummary',
      id: "intro",
      data: {
        title: "1. Introduction",
        content: "PNG Tours is a new travel brand with the advantage of owning its own lodge in Mozambique and operating dedicated shuttle transport. This creates a strong foundation for curated travel experiences designed for South African travellers seeking coastal escapes and unique holiday experiences. The objective of this proposal is to launch PNG Tours professionally, position the lodge as a desirable destination, and create the marketing infrastructure required to generate consistent tour enquiries. The initial focus will be Mozambique lodge packages, allowing the brand to establish credibility and operational momentum before expanding into additional tours across Southern Africa.",
        image1: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Resort/Hotel overview
        image2: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Close up resort detail
      }
    },
    {
      type: 'PerformanceOverview',
      id: "strategy",
      data: {
        title: "2. Strategy Approach",
        metrics: [
          { label: "Establish the brand identity, website, content structure and marketing channels.", value: "Phase 1", trend: "Launch" },
          { label: "Once packages gain traction, expand the brand's reach and further offerings.", value: "Phase 2", trend: "Growth" }
        ]
      }
    },
    {
      type: 'FeatureSection',
      id: "phase1-header",
      data: {
        eyebrow: "Phase 1 Strategy",
        title: "Brand Launch & Digital Foundations",
        description: "This phase focuses on establishing the brand and generating enquiries. We will build the identity, website, content structure and marketing channels required to begin generating robust leads.",
        imagePosition: 'left',
        imageUrl: brandLaunchImg // Tropical beach view
      }
    },
    {
      type: 'FeatureSection',
      id: "brand-visual",
      data: {
        eyebrow: "3. Brand Visual Guide",
        title: "Establishing the Aesthetic",
        description: "A strong brand identity ensures PNG Tours presents a consistent and professional image across all marketing channels. We recommend positioning the brand with the 'Explorer' as the primary archetype and 'Jester' as the secondary. This keeps the travel and adventure elements strong, while the Jester supports the fun and energetic personality the owners naturally bring. This avoids placing the brand in a highly competitive luxury positioning too early, opting instead for authentic and relatable engagement.",
        imagePosition: 'right',
        imageUrl: "https://iconicfox.com.au/wp-content/uploads/2018/05/iconic-fox-Atchetypes-12-jungian-map.jpg"
      }
    },
    {
      type: 'FeatureSection',
      id: "brand-materials",
      data: {
        eyebrow: "4. Brand Materials",
        title: "Professional Collateral",
        description: "Professional brand materials help position PNG Tours as a credible and well-established travel provider. This includes items such as quotes, invoices and business cards, ensuring the business presents itself professionally when communicating with travellers and partners.",
        imagePosition: 'left',
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      type: 'FeatureSection',
      id: "foundational-content",
      data: {
        eyebrow: "5. Foundational Content",
        title: "Building the Media Library",
        description: "Travel marketing is highly visual. As PNG Tours currently does not have sufficient content for marketing, a dedicated content shoot at the lodge is required. This shoot will build a professional media library capturing high-quality photography and video of: lodge imagery, surrounding destinations, activities and experiences, and the branded bus. This content is essential for fueling the website, social media, and advertising campaigns.",
        imagePosition: 'right',
        imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop" // Safari/Lodge Activity Context
      }
    },
    {
      type: 'FeatureSection',
      id: "package-design",
      data: {
        eyebrow: "6. Travel Package Design",
        title: "Structuring the Experience",
        description: "Clear and well-structured travel packages are essential for successful tour marketing. Packages will be designed to clearly communicate the experience, itinerary, inclusions and value of each trip, making them easy for potential travellers to understand and book. These packages will also be designed into digital brochures and marketing materials that can be shared across marketing channels.",
        imagePosition: 'left',
        imageUrl: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=1976&auto=format&fit=crop" // Destination/Off-road Context
      }
    },
    {
      type: 'FeatureSection',
      id: "website-design",
      data: {
        eyebrow: "7. Website Design",
        title: "Central Digital Platform",
        description: "The website will serve as the central platform for the PNG Tours brand. It will showcase the lodge experience, present travel packages clearly, and provide visitors with an easy way to enquire about tours. A well-designed travel website builds credibility and allows marketing campaigns to direct interested travellers to a professional online presence. Basic SEO optimisation will ensure the website is structured correctly for search visibility.",
        imagePosition: 'right',
        imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
      }
    },
    {
      type: 'FeatureSection',
      id: "website-tracking",
      data: {
        eyebrow: "8. Website Tracking",
        title: "Data-Driven Insights",
        description: "Tracking tools will be implemented to monitor website activity and marketing performance. This allows the business to understand how visitors discover the brand, which packages attract interest, and where enquiries originate, enabling future marketing decisions to be guided by real data.",
        imagePosition: 'left',
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      type: 'FeatureSection',
      id: "social-optimisation",
      data: {
        eyebrow: "9. Social Media Channel Optimisation",
        title: "Refining Your Digital Footprint",
        description: "Social media is one of the most influential discovery channels in travel. Existing platforms will be refined and aligned with the new brand positioning so that profiles, imagery and messaging clearly communicate the PNG Tours experience. These channels will serve as an ongoing platform to showcase the lodge, destinations and travel experiences.",
        imagePosition: 'right',
        imageUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      type: 'FeatureSection',
      id: "content-planning",
      data: {
        eyebrow: "10. Content Planning",
        title: "Consistent Online Presence",
        description: "Consistency is essential when building a new travel brand. A structured content calendar will guide the creation and scheduling of posts, ensuring the brand maintains an active presence online while highlighting the lodge experience and travel packages.",
        imagePosition: 'left',
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
      }
    },
    {
      type: 'FeatureSection',
      id: "social-content-creation",
      data: {
        eyebrow: "11. Social Media Content Creation",
        title: "High-Quality Visual Storytelling",
        description: "Travel marketing relies heavily on high-quality visuals. For Phase 1, our design responsibilities include the creation of the Visual Guide, Brand Materials, Travel Package Designs, and weekly social media post design (4 posts per month). These posts will focus on showcasing the lodge, surrounding destinations, and travel experiences while concurrently supporting our broader advertising campaigns.",
        imagePosition: 'right',
        imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" // Group travel activity/bus stand-in
      }
    },
    {
      type: 'FeatureSection',
      id: "social-management",
      data: {
        eyebrow: "12. Social Media Management",
        title: "Active Community Engagement",
        description: "Effective social media requires more than posting content. Each platform will be optimised to ensure profiles, messaging and visuals align with the PNG Tours brand while supporting marketing campaigns. Ongoing management will focus on community engagement, responding to enquiries, monitoring performance and refining content per platform to ensure the brand remains active, visible and responsive to potential travellers.",
        imagePosition: 'left',
        imageUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop"
      }
    },
    {
      type: 'FeatureSection',
      id: "ad-setup",
      data: {
        eyebrow: "13. Advertising Setup",
        title: "Targeted Infrastructure",
        description: "Advertising platforms will be configured to allow targeted marketing campaigns. This setup enables the business to promote travel packages to audiences most likely to be interested in Mozambique travel experiences.",
        imagePosition: 'right',
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      }
    },
    {
      type: 'FeatureSection',
      id: "ad-management",
      data: {
        eyebrow: "14. Advertising Management",
        title: "Optimized Campaigns",
        description: "Advertising campaigns will be used to generate enquiries and promote specific travel packages. Campaigns will be monitored and optimised to ensure advertising spend produces measurable interest and leads.",
        imagePosition: 'left',
        imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      type: 'AchievementsList',
      id: "phase2",
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
      type: 'AboutCompany',
      id: "about",
      data: {
        title: "ABOUT BIG ON DIGITAL",
        member1Image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop", // Placeholder Francois image
        member1Name: "Francois Theron",
        member2Image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop", // Placeholder Dominique image
        member2Name: "Dominique Munro",
        paragraphs: [
          "Big On Digital is a boutique digital marketing agency offering expert, end-to-end marketing services to both small businesses and large corporations. With over two decades of combined industry experience, our team specialises in social media, branding, web development, and digital strategy that help clients grow their reach and strengthen their brand presence.",
          "We believe in the power of creativity, strategy, and innovation to transform businesses. Every project is approached with purpose and precision, combining design, technology, and storytelling to deliver meaningful results.",
          "Our team brings a dynamic mix of talent and insight, ensuring each brand we work with receives customised, high-impact digital solutions that drive measurable success."
        ],
        footerText: "At Big On Digital, we don't just build brands, we bring visions to life."
      }
    },
    {
      type: 'FinalCTA',
      id: "nextsteps",
      data: {
        title: "Next Steps",
        thankYou: "Review and approve the proposal. Finalise package structures and pricing. Begin development of brand and digital platforms. Launch initial marketing activity.",
        buttonText: "Approve Proposal"
      }
    }
  ]
};
