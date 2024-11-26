import React from 'react';
import { 
  Dumbbell,
  Heart,
  Trophy,
  Baby,
  Male,
  Female,
  Calendar,
  Mail,
  Phone,
  User,
  ArrowLeft,
  ArrowRight,
  Send,
  Loader,
  CheckCircle
} from 'lucide-react';

export const Icons = {
  dumbbell: (props: React.SVGProps<SVGSVGElement>) => <Dumbbell {...props} />,
  heart: (props: React.SVGProps<SVGSVGElement>) => <Heart {...props} />,
  trophy: (props: React.SVGProps<SVGSVGElement>) => <Trophy {...props} />,
  baby: (props: React.SVGProps<SVGSVGElement>) => <Baby {...props} />,
  male: (props: React.SVGProps<SVGSVGElement>) => <Male {...props} />,
  female: (props: React.SVGProps<SVGSVGElement>) => <Female {...props} />,
  calendar: (props: React.SVGProps<SVGSVGElement>) => <Calendar {...props} />,
  mail: (props: React.SVGProps<SVGSVGElement>) => <Mail {...props} />,
  phone: (props: React.SVGProps<SVGSVGElement>) => <Phone {...props} />,
  user: (props: React.SVGProps<SVGSVGElement>) => <User {...props} />,
  arrowLeft: (props: React.SVGProps<SVGSVGElement>) => <ArrowLeft {...props} />,
  arrowRight: (props: React.SVGProps<SVGSVGElement>) => <ArrowRight {...props} />,
  send: (props: React.SVGProps<SVGSVGElement>) => <Send {...props} />,
  loader: (props: React.SVGProps<SVGSVGElement>) => <Loader {...props} />,
  checkCircle: (props: React.SVGProps<SVGSVGElement>) => <CheckCircle {...props} />
};