import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const BorrowerForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(0);
  const [hasCollateral, setHasCollateral] = useState('no');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('borrower.submit'));
    navigate('/lender-finder');
  };

  const showUtilityBills = loanAmount <= 10000;
  const showAdditionalBills = loanAmount > 10000 && loanAmount <= 50000;
  const showCollateral = loanAmount > 50000;

  return (
    <Layout>
      <div className="py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {t('borrower.title')}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <Card>
              <CardHeader>
                <CardTitle>{t('borrower.personal')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('borrower.name')}</Label>
                    <Input id="name" placeholder={t('borrower.namePlaceholder')} required />
                  </div>
                  <div>
                    <Label htmlFor="age">{t('borrower.age')}</Label>
                    <Input id="age" type="number" placeholder={t('borrower.agePlaceholder')} required />
                  </div>
                </div>

                <div>
                  <Label>{t('borrower.gender')}</Label>
                  <RadioGroup defaultValue="male" className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">{t('borrower.male')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">{t('borrower.female')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">{t('borrower.other')}</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="address">{t('borrower.address')}</Label>
                  <Textarea id="address" placeholder={t('borrower.addressPlaceholder')} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="occupation">{t('borrower.occupation')}</Label>
                    <Input id="occupation" placeholder={t('borrower.occupationPlaceholder')} required />
                  </div>
                  <div>
                    <Label>{t('borrower.marital')}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('borrower.marital')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">{t('borrower.single')}</SelectItem>
                        <SelectItem value="married">{t('borrower.married')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="incomeSource">{t('borrower.incomeSource')}</Label>
                    <Input id="incomeSource" placeholder={t('borrower.incomeSourcePlaceholder')} required />
                  </div>
                  <div>
                    <Label htmlFor="monthlyIncome">{t('borrower.monthlyIncome')}</Label>
                    <Input id="monthlyIncome" type="number" placeholder={t('borrower.monthlyIncomePlaceholder')} required />
                  </div>
                </div>

                <div>
                  <Label>{t('borrower.earningMember')}</Label>
                  <RadioGroup defaultValue="no" className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="earning-yes" />
                      <Label htmlFor="earning-yes">{t('borrower.yes')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="earning-no" />
                      <Label htmlFor="earning-no">{t('borrower.no')}</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="motherTongue">{t('borrower.motherTongue')}</Label>
                  <Input id="motherTongue" placeholder={t('borrower.motherTonguePlaceholder')} required />
                </div>
              </CardContent>
            </Card>

            {/* Loan Details */}
            <Card>
              <CardHeader>
                <CardTitle>{t('borrower.loanDetails')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="loanAmount">{t('borrower.loanAmount')}</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    placeholder={t('borrower.loanAmountPlaceholder')}
                    required
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                </div>

                <div>
                  <Label>{t('borrower.category')}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t('borrower.categoryPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">{t('borrower.education')}</SelectItem>
                      <SelectItem value="farming">{t('borrower.farming')}</SelectItem>
                      <SelectItem value="household">{t('borrower.household')}</SelectItem>
                      <SelectItem value="business">{t('borrower.business')}</SelectItem>
                      <SelectItem value="others">{t('borrower.others')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="reason">{t('borrower.reason')}</Label>
                  <Textarea id="reason" placeholder={t('borrower.reasonPlaceholder')} required />
                </div>

                {showCollateral && (
                  <div>
                    <Label>{t('borrower.collateral')}</Label>
                    <RadioGroup
                      value={hasCollateral}
                      onValueChange={setHasCollateral}
                      className="flex gap-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="collateral-yes" />
                        <Label htmlFor="collateral-yes">{t('borrower.yes')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="collateral-no" />
                        <Label htmlFor="collateral-no">{t('borrower.no')}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {showCollateral && hasCollateral === 'yes' && (
                  <div>
                    <Label htmlFor="collateralUpload">{t('borrower.collateralUpload')}</Label>
                    <Input id="collateralUpload" type="file" accept="image/*" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Verification Documents */}
            <Card>
              <CardHeader>
                <CardTitle>{t('borrower.verification')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{t('borrower.uploadNote')}</p>

                {showUtilityBills && (
                  <>
                    <div>
                      <Label htmlFor="waterBill">{t('borrower.waterBill')}</Label>
                      <Input id="waterBill" type="file" accept="image/*,application/pdf" />
                    </div>
                    <div>
                      <Label htmlFor="electricityBill">{t('borrower.electricityBill')}</Label>
                      <Input id="electricityBill" type="file" accept="image/*,application/pdf" />
                    </div>
                    <div>
                      <Label htmlFor="gasBill">{t('borrower.gasBill')}</Label>
                      <Input id="gasBill" type="file" accept="image/*,application/pdf" />
                    </div>
                  </>
                )}

                {showAdditionalBills && (
                  <>
                    <div>
                      <Label htmlFor="phoneBill">{t('borrower.phoneBill')}</Label>
                      <Input id="phoneBill" type="file" accept="image/*,application/pdf" />
                    </div>
                    <div>
                      <Label htmlFor="educationBill">{t('borrower.educationBill')}</Label>
                      <Input id="educationBill" type="file" accept="image/*,application/pdf" />
                    </div>
                    <div>
                      <Label htmlFor="agricultureBill">{t('borrower.agricultureBill')}</Label>
                      <Input id="agricultureBill" type="file" accept="image/*,application/pdf" />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Button type="submit" className="w-full" size="lg">
              {t('borrower.submit')}
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BorrowerForm;
