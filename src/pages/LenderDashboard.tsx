import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { toast } from 'sonner';
import { MapPin, FileText } from 'lucide-react';

const LenderDashboard = () => {
  const { t } = useTranslation();

  // Mock borrower data
  const applications = [
    {
      id: 1,
      name: 'Manjunath Gowda',
      location: 'Mandya',
      amount: 25000,
      purpose: 'Farming',
      fairScore: 'Pending',
      proofs: ['Water Bill', 'Phone Bill'],
      rate: 12.5,
      status: 'pending',
    },
    {
      id: 2,
      name: 'Suma Devi',
      location: 'Hassan',
      amount: 15000,
      purpose: 'Education',
      fairScore: 'Pending',
      proofs: ['Electricity Bill', 'Education Bill'],
      rate: 15.0,
      status: 'pending',
    },
  ];

  const handleAccept = (id: number, name: string) => {
    toast.success(`Accepted loan application from ${name}`);
  };

  const handleDecline = (id: number, name: string) => {
    toast.error(`Declined loan application from ${name}`);
  };

  return (
    <Layout>
      <div className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {t('lenderDashboard.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('lenderDashboard.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {applications.map((app) => (
              <Card key={app.id} className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{app.name}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{app.location}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-lg font-semibold">
                      ₹{app.amount.toLocaleString()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {t('lenderDashboard.purpose')}
                      </div>
                      <div className="font-medium">{app.purpose}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {t('lenderDashboard.fairScore')}
                      </div>
                      <div className="font-medium">{app.fairScore}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {t('lenderDashboard.rate')}
                      </div>
                      <div className="font-medium text-primary">{app.rate}%</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {t('lenderDashboard.proofs')}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {app.proofs.map((proof, idx) => (
                        <Badge key={idx} variant="outline" className="gap-1">
                          <FileText className="h-3 w-3" />
                          {proof}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={() => handleAccept(app.id, app.name)}
                      className="flex-1"
                    >
                      {t('lenderDashboard.accept')}
                    </Button>
                    <Button
                      onClick={() => handleDecline(app.id, app.name)}
                      variant="destructive"
                      className="flex-1"
                    >
                      {t('lenderDashboard.decline')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LenderDashboard;
