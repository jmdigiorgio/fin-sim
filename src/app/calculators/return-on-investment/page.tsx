/**
 * Return on Investment Calculator Page
 * 
 * Layout Structure:
 * - PageContainer: Handles full-page layout with sidebar
 * - MainContent: Adapts width based on sidebar state
 * - Box: Main content wrapper with consistent styling
 * 
 * Component Hierarchy:
 * 1. Title: Simple text header for the calculator (0px top, 24px bottom margin)
 * 2. Beta Tag: Indicates development status to users
 * 3. Description: Explains calculator's purpose
 * 
 * Each component is a direct child of Box for proper spacing and alignment.
 */

'use client';

import { SidePanel } from '@/components/layout/SidePanel';
import { useSidePanel } from '@/components/layout/SidePanelContext';
import { BoxTitle } from '@/components/shared/BoxTitle';
import { MetadataTag } from '@/components/shared/MetadataTag';
import { LabelTag } from '@/components/shared/LabelTag';
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { ResultBox } from '@/components/shared/ResultBox';
import { Box } from '@/components/layout/Box';
import { MoneyInput } from '@/components/shared/MoneyInput';
import { PercentageInput } from '@/components/shared/PercentageInput';
import { NumberInput } from '@/components/shared/NumberInput';
import { Dropdown } from '@/components/shared/Dropdown';
import { MenuItem } from '@mui/material';
import { ClearForm } from '@/components/shared/ClearForm';

const PageContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
});

const MainContent = styled('main', {
  shouldForwardProp: (prop) => prop !== 'sidebarWidth',
})<{ sidebarWidth: number }>(({ sidebarWidth }) => ({
  marginLeft: `${sidebarWidth}px`,
  flex: 1,
  padding: '32px',
  transition: 'margin-left 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: `calc(1600px - ${sidebarWidth}px)`,
  width: '100%'
}));

const TitleSection = styled('div')({
  marginBottom: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px'
});

const MetadataSection = styled('div')({
  marginBottom: '24px'
});

const InputSection = styled('div')({
  marginBottom: '12px',
  marginTop: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px'
});

const ResultSection = styled('div')({
  marginBottom: '12px',
  marginTop: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px'
});

const InputsContainer = styled('div')({
  padding: '24px',
  borderRadius: '12px',
  marginTop: '0px'
});

const ResultsContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' 
    ? theme.palette.background.paper
    : theme.palette.grey[200],
  padding: '12px',
  borderRadius: '12px',
  marginTop: '24px'
}));

export default function ReturnOnInvestmentPage() {
  const { isOpen } = useSidePanel();
  const sidebarWidth = isOpen ? 240 : 64;

  return (
    <PageContainer>
      <SidePanel />
      <MainContent sidebarWidth={sidebarWidth}>
        <Box>
          <TitleSection>
            <BoxTitle
              align="left"
              textStyle={{
                size: '24px',
                weight: 600
              }}
            >
              Return on Investment Calculator
            </BoxTitle>
            <ClearForm onClear={() => {}} />
          </TitleSection>

          <MetadataSection>
            <span style={{ marginRight: '8px' }}>
              <MetadataTag 
                label="average return"
                tooltip="Average return on the investment over the duration of the investment period. In reality, returns vary year to year but over time, they average out."
                align="left"
              />
            </span>
            <span style={{ marginRight: '8px' }}>
              <MetadataTag 
                label="adjusted for inflation"
                tooltip="The total value of the investment after the duration of the investment period is also adjusted for inflation."
                align="left"
              />
            </span>
          </MetadataSection>

          <Divider sx={{ my: 1 }} />

          <InputsContainer>
            <InputSection>
              <LabelTag 
                label="Initial Investment:"
                tooltip="A one-time investment made at the beginning of the investment period."
              />
              <MoneyInput value="" onChange={() => {}} />
            </InputSection>
            
            <InputSection>
              <LabelTag 
                label="Recurring Contribution:"
                tooltip="A regular investment made at a fixed interval."
              />
              <MoneyInput value="" onChange={() => {}} />
            </InputSection>

            <InputSection>
              <LabelTag 
                label="Recurring Interval:"
                tooltip="The frequency at which contributions are made."
              />
              <Dropdown value="" onChange={() => {}}>
                <MenuItem value="DAILY">Daily</MenuItem>
                <MenuItem value="WEEKLY">Weekly</MenuItem>
                <MenuItem value="MONTHLY">Monthly</MenuItem>
                <MenuItem value="QUARTERLY">Quarterly</MenuItem>
                <MenuItem value="SEMI_ANNUALLY">Semi-annually</MenuItem>
                <MenuItem value="ANNUALLY">Annually</MenuItem>
              </Dropdown>
            </InputSection>

            <InputSection>
              <LabelTag 
                label="Annual Increase:"
                tooltip="The amount you increase your investment contributions each year."
              />
              <MoneyInput value="" onChange={() => {}} />
            </InputSection>

            <InputSection>
              <LabelTag 
                label="Return Rate:"
                tooltip="The annual rate of return for the investment."
              />
              <PercentageInput value="" onChange={() => {}} />
            </InputSection>

            <InputSection>
              <LabelTag 
                label="Investment Duration:"
                tooltip="The total duration of the investment period in years."
              />
              <NumberInput value="" onChange={() => {}} />
            </InputSection>

            <InputSection>
              <LabelTag 
                label="Inflation Rate:"
                tooltip="The annual rate of inflation."
              />
              <PercentageInput value="" onChange={() => {}} />
            </InputSection>
          </InputsContainer>

          <Divider sx={{ my: 1 }} />

          <ResultsContainer>
            <ResultSection>
              <LabelTag 
                label="Total Invested:"
                tooltip="The total amount invested over the duration of the investment period."
              />
              <ResultBox type="neutral">
                $0
              </ResultBox>
            </ResultSection>

            <ResultSection>
              <LabelTag 
                label="Total Return:"
                tooltip="The total return on the investment over the duration of the investment period."
              />
              <ResultBox type="neutral">
                $0
              </ResultBox>
            </ResultSection>

            <ResultSection>
              <LabelTag 
                label="Total Value:"
                tooltip="The total value of the investment after the duration of the investment period."
              />
              <ResultBox type="neutral">
                $0
              </ResultBox>
            </ResultSection>

            <ResultSection>
              <LabelTag 
                label="Adjusted for Inflation:"
                tooltip="The total value of the investment after the duration of the investment period, adjusted for inflation."
              />
              <ResultBox type="neutral">
                $0
              </ResultBox>
            </ResultSection>

            <ResultSection>
              <LabelTag 
                label="Savings Alternative:"
                tooltip="What your money would be worth if you'd saved it instead of investing."
              />
              <ResultBox type="neutral">
                $0
              </ResultBox>
            </ResultSection>
          </ResultsContainer>
        </Box>
      </MainContent>
    </PageContainer>
  );
}