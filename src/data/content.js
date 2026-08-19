import {
  Activity,
  ShieldCheck,
  CalendarCheck,
  Pill,
  Globe2,
  Sparkles,
  HeartPulse,
  GraduationCap,
  Stethoscope,
  Phone,
  UserRound,
  LineChart,
} from 'lucide-react'

// Small feature cards in the bottom row of the benefits section
export const smallFeatures = [
  {
    icon: Pill,
    title: 'Online Prescription Services',
    description: 'Facilitate easy ordering',
  },
  {
    icon: Globe2,
    title: 'Online global service',
    description: 'We provide from any country',
  },
]

// Consultants grid
export const consultants = [
  {
    name: 'Miles',
    role: 'Medical Specialist',
    description:
      'Offer programs focused on preventive care, nutrition, exercise and wellness.',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=320&q=70',
  },
  {
    name: 'Nguyen',
    role: 'General Physician',
    description:
      'Offer programs focused on preventive care, nutrition, exercise and wellness.',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=320&q=70',
  },
  {
    name: 'Flores',
    role: 'Senior Cardiologist',
    description:
      'Offer programs focused on preventive care, nutrition, exercise and wellness.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=320&q=70',
  },
]

// Additional medical features list
export const additionalFeatures = [
  { icon: HeartPulse, label: 'Personalized Health Assessment' },
  { icon: UserRound, label: 'Patient Education' },
  { icon: Pill, label: 'Integration with Pharmacy Services' },
  { icon: Stethoscope, label: 'Virtual Health Assistant' },
  { icon: Phone, label: 'Emergency Contact Feature' },
  { icon: Activity, label: 'Health Tracking' },
]

// Trusted-by company logos (rendered as wordmarks so no external assets needed)
export const companyLogos = [
  'HealthX',
  'Pulse',
  'Fluxo',
  'Aluxe',
  'Bmart',
  'Vixel',
  'Prisly',
  'Onelab',
]

// Icons re-exported for the two large benefit cards
export const benefitIcons = {
  app: Activity,
  messaging: ShieldCheck,
  dashboard: CalendarCheck,
  explore: Sparkles,
  chart: LineChart,
  learn: GraduationCap,
}
