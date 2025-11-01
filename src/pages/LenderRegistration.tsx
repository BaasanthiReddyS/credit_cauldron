import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const LenderRegistration = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const rate = Number(formData.get('interestRate'));

    if (rate > 20) {
      toast.error('Interest rate cannot exceed 20% per annum');
      return;
    }

    toast.success(t('lenderReg.success'));
    navigate('/lender-dashboard');
  };

  return (
    <Layout>
      <div className="py-8 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {t('lenderReg.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('lenderReg.subtitle')}
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('lenderReg.name')}</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="age">{t('lenderReg.age')}</Label>
                    <Input id="age" name="age" type="number" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">{t('lenderReg.address')}</Label>
                  <Input id="address" name="address" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="incomeSource">{t('lenderReg.incomeSource')}</Label>
                    <Input id="incomeSource" name="incomeSource" required />
                  </div>
                  <div>
                    <Label htmlFor="monthlyIncome">{t('lenderReg.monthlyIncome')}</Label>
                    <Input id="monthlyIncome" name="monthlyIncome" type="number" required />
                  </div>
                </div>

                <div>
                  <Label>{t('lenderReg.taxpayer')}</Label>
                  <RadioGroup defaultValue="no" name="taxpayer" className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="taxpayer-yes" />
                      <Label htmlFor="taxpayer-yes">{t('lenderReg.yes')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="taxpayer-no" />
                      <Label htmlFor="taxpayer-no">{t('lenderReg.no')}</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="invoice">{t('lenderReg.invoice')}</Label>
                  <Input id="invoice" name="invoice" type="file" accept="image/*,application/pdf" />
                </div>

                <div>
                  <Label htmlFor="interestRate">{t('lenderReg.interestRate')}</Label>
                  <Input
                    id="interestRate"
                    name="interestRate"
                    type="number"
                    step="0.1"
                    max="20"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  {t('lenderReg.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LenderRegistration;
