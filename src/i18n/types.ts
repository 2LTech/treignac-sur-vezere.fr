/**
 * Dictionary shape shared by every locale.
 * Holds all the user-facing UI strings of the site.
 */
export interface Dictionary {
  metadata: {
    title: string
    description: string
  }
  nav: {
    home: string
    activites: string
    locations: string
    liens: string
  }
  language: {
    label: string
  }
  footer: {
    legal: string
    rights: string
    designedWith: string
    by: string
    heartAlt: string
  }
  home: {
    heroAlt: string
    tags: {
      correze: string
      nouvelleAquitaine: string
    }
    title: string
    heroText: string
    exploreActivities: string
    seeLocations: string
    highlights: {
      label: string
      value: string
      detail: string
    }[]
    introTitlePrefix: string
    introTitleSuffix: string
    introParagraph: string
    locationPill: string
    cards: {
      title: string
      text: string
    }[]
    source: string
  }
  activites: {
    addUsPrefix: string
    addUsLink: string
    addUsSuffix: string
    tooltips: {
      adresse: string
      randonnee: string
      gastronomie: string
      exterieur: string
      sante: string
      'bien-etre': string
    }
  }
  locations: {
    cardTitle: string
    cardDescription: string
    openListing: string
  }
  escale: {
    title: string
    paragraphs: string[]
    airbnbView: string
    airbnbSummary: string
  }
  legal: {
    edition: {
      title: string
      intro: string
      ownerLabel: string
      contactLabel: string
      addressLabel: string
      companyIdLabel: string
      sirenLabel: string
      postalAddressLabel: string
      publicationDirectorLabel: string
      hostLabel: string
    }
    ip: {
      title: string
      attributionLink: string
      paragraphs: string[]
    }
    liability: {
      title: string
      paragraphs: string[]
    }
    cnil: {
      title: string
      paragraph: string
    }
    cookies: {
      title: string
      paragraphs: string[]
    }
    law: {
      title: string
      paragraph: string
    }
  }
}
