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
      'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&crop=faces&w=480&h=360&q=75',
  },
  {
    name: 'Nguyen',
    role: 'General Physician',
    description:
      'Offer programs focused on preventive care, nutrition, exercise and wellness.',
    image:
      'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&crop=faces&w=480&h=360&q=75',
  },
  {
    name: 'Flores',
    role: 'Senior Cardiologist',
    description:
      'Offer programs focused on preventive care, nutrition, exercise and wellness.',
    image:
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&crop=faces&w=480&h=360&q=75',
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
