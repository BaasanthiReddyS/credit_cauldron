import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'kn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="gap-2 font-medium"
    >
      <Languages className="h-4 w-4" />
      {i18n.language === 'en' ? 'ಕನ್ನಡ' : 'English'}
    </Button>
  );
};

export default LanguageToggle;
