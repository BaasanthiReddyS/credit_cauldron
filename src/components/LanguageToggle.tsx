import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'kn' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'kn';

  return (
    <div className="flex items-center gap-1 bg-muted/30 rounded-lg p-1">
      <Button
        onClick={() => i18n.changeLanguage('en')}
        variant={currentLang === 'en' ? 'default' : 'ghost'}
        size="sm"
        className="h-8 px-3 text-xs font-semibold"
      >
        EN
      </Button>
      <Button
        onClick={() => i18n.changeLanguage('kn')}
        variant={currentLang === 'kn' ? 'default' : 'ghost'}
        size="sm"
        className="h-8 px-3 text-xs font-semibold font-kannada"
      >
        ಕನ್ನಡ
      </Button>
    </div>
  );
};

export default LanguageToggle;
