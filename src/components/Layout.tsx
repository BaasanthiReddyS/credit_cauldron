import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import { Sprout } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-4 md:px-8 shadow-md sticky top-0 bg-white z-50">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              {t('home.title')}
            </span>
          </Link>
          <LanguageToggle />
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="py-4 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.rights')}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t('footer.tagline')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
