import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { MapPin, Percent } from 'lucide-react';
import { toast } from 'sonner';

const LenderFinder = () => {
  const { t } = useTranslation();

  // Mock lender data
  const lenders = [
    { id: 1, name: 'Ramesh Kumar', location: 'Mysuru', rate: 12.5 },
    { id: 2, name: 'Lakshmi Devi', location: 'Mandya', rate: 15.0 },
    { id: 3, name: 'Prakash Rao', location: 'Tumkur', rate: 11.8 },
    { id: 4, name: 'Anitha Shetty', location: 'Hassan', rate: 18.0 },
    { id: 5, name: 'Suresh Gowda', location: 'Chikmagalur', rate: 14.2 },
  ];

  const handleSelect = (lender: typeof lenders[0]) => {
    toast.success(
      t('lenderFinder.confirmMsg', { name: lender.name, rate: lender.rate })
    );
  };

  return (
    <Layout>
      <div className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {t('lenderFinder.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('lenderFinder.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lenders.map((lender) => (
              <Card key={lender.id} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{lender.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{lender.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Percent className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {lender.rate}%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t('lenderFinder.perAnnum')}
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleSelect(lender)}
                    className="w-full"
                  >
                    {t('lenderFinder.select')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LenderFinder;
