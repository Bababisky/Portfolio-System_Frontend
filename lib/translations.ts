/**
 * Translations for Thai and English
 */

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    solutionsProduct: 'Solutions & Product',
    aboutUs: 'About us',
    language: 'Language',
    
    // Hero
    heroTitle1: 'YOUR',
    heroTitle2: 'VALUABLE',
    heroTitle3: 'PARTNER',
    heroSubtitle: 'Responding to business needs of all industries. Both in the public and private sectors, To effectively drive towards the goals and Business changes in the digital age.',
    
    // Solutions & Product
    solutionsTitle: 'Solutions & Product',
    
    // Best of Product
    bestOfProduct: 'Best of Product',
    
    // Subsidiaries
    subsidiariesTitle: 'Our Subsidiaries & World Class Partnership',
    ourSubsidiaries: 'Our Subsidiaries',
    worldClassPartnership: 'World Class Partnership',
    
    // Footer
    menu: 'Menu',
    follow: 'Follow',
    
    // Common
    readMore: 'Read more',
    tag: 'Tag',
  },
  th: {
    // Navigation
    home: 'หน้าแรก',
    solutionsProduct: 'โซลูชัน & โปรดักส์',
    aboutUs: 'เกี่ยวกับเรา',
    language: 'ภาษา',
    
    // Hero
    heroTitle1: 'YOUR',
    heroTitle2: 'VALUABLE',
    heroTitle3: 'PARTNER',
    heroSubtitle: 'ตอบสนองความต้องการทางธุรกิจของทุกอุตสาหกรรม ทั้งภาครัฐ และเอกชน เพื่อขับเคลื่อนไปสู่เป้าหมายและการเปลี่ยนแปลงทางธุรกิจในยุค Digital อย่างมีประสิทธิภาพ',
    
    // Solutions & Product
    solutionsTitle: 'โปรดักส์ & โซลูชัน ของเรา',
    
    // Best of Product
    bestOfProduct: 'อุตสาหกรรม',
    
    // Subsidiaries
    subsidiariesTitle: 'บริษัทในเครือและพันธมิตรระดับโลก',
    ourSubsidiaries: 'บริษัทในเครือ',
    worldClassPartnership: 'พันธมิตรระดับโลก',
    
    // Footer
    menu: 'เมนู',
    follow: 'ติดตาม',
    
    // Common
    readMore: 'อ่านเพิ่มเติม',
    tag: 'แท็ก',
  }
};

export type Language = 'en' | 'th';
export type TranslationKey = keyof typeof translations.en;
