import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const features = [
    t('about.feature1'),
    t('about.feature2'),
    t('about.feature3'),
    t('about.feature4'),
  ];

  return (
    <Layout>
      <div className="py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {t('about.title')}
          </h1>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                {t('about.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">{t('about.mission')}</h2>
              <p className="text-lg leading-relaxed">
                {t('about.missionText')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">{t('about.features')}</h2>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
