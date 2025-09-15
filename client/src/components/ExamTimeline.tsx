import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';

// todo: remove mock functionality - replace with real data
const upcomingExams = [
  {
    name: 'JEE Advanced 2025',
    date: '2025-05-25',
    applicationDeadline: '2025-04-15',
    status: 'upcoming',
    category: 'Engineering',
    description: 'Joint Entrance Examination for IITs and other top engineering colleges',
    applyUrl: 'https://jeeadv.ac.in',
  },
  {
    name: 'NEET 2025',
    date: '2025-05-05',
    applicationDeadline: '2025-03-20',
    status: 'registration-open',
    category: 'Medical',
    description: 'National Eligibility cum Entrance Test for medical courses',
    applyUrl: 'https://neet.nta.nic.in',
  },
  {
    name: 'CLAT 2025',
    date: '2025-12-01',
    applicationDeadline: '2025-10-15',
    status: 'upcoming',
    category: 'Law',
    description: 'Common Law Admission Test for law programs',
    applyUrl: 'https://clat.ac.in',
  },
  {
    name: 'CAT 2024',
    date: '2024-11-24',
    applicationDeadline: '2024-09-20',
    status: 'completed',
    category: 'Management',
    description: 'Common Admission Test for MBA programs',
    applyUrl: 'https://iimcat.ac.in',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'registration-open':
      return 'bg-green-500';
    case 'upcoming':
      return 'bg-blue-500';
    case 'deadline-near':
      return 'bg-yellow-500';
    case 'completed':
      return 'bg-gray-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'registration-open':
      return <CheckCircle className="w-4 h-4" />;
    case 'upcoming':
      return <Calendar className="w-4 h-4" />;
    case 'deadline-near':
      return <AlertTriangle className="w-4 h-4" />;
    case 'completed':
      return <Clock className="w-4 h-4" />;
    default:
      return <Calendar className="w-4 h-4" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'registration-open':
      return 'Registration Open';
    case 'upcoming':
      return 'Upcoming';
    case 'deadline-near':
      return 'Deadline Near';
    case 'completed':
      return 'Completed';
    default:
      return 'Unknown';
  }
};

export function ExamTimeline() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntil = (dateString: string) => {
    const examDate = new Date(dateString);
    const today = new Date();
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Entrance Exams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with important exam dates and never miss application deadlines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {upcomingExams.map((exam, index) => {
            const daysUntil = getDaysUntil(exam.date);
            const isDeadlineNear = getDaysUntil(exam.applicationDeadline) <= 7 && getDaysUntil(exam.applicationDeadline) > 0;
            const actualStatus = isDeadlineNear ? 'deadline-near' : exam.status;

            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-200"
                data-testid={`card-exam-${exam.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold mb-2">{exam.name}</CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          data-testid={`badge-category-${exam.category.toLowerCase()}`}
                        >
                          {exam.category}
                        </Badge>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-white text-xs ${getStatusColor(actualStatus)}`}>
                          {getStatusIcon(actualStatus)}
                          <span data-testid={`status-${actualStatus}`}>
                            {getStatusText(actualStatus)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription>{exam.description}</CardDescription>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Exam Date:</span>
                      <span className="font-medium" data-testid="text-exam-date">
                        {formatDate(exam.date)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Application Deadline:</span>
                      <span 
                        className={`font-medium ${isDeadlineNear ? 'text-yellow-600 dark:text-yellow-400' : ''}`}
                        data-testid="text-application-deadline"
                      >
                        {formatDate(exam.applicationDeadline)}
                      </span>
                    </div>

                    {exam.status !== 'completed' && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Days Remaining:</span>
                        <span 
                          className={`font-medium ${daysUntil <= 30 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}
                          data-testid="text-days-remaining"
                        >
                          {daysUntil > 0 ? `${daysUntil} days` : 'Exam completed'}
                        </span>
                      </div>
                    )}
                  </div>

                  {exam.status !== 'completed' && (
                    <Button 
                      onClick={() => window.open(exam.applyUrl, '_blank')}
                      className="w-full mt-4 hover-elevate active-elevate-2"
                      data-testid={`button-apply-${exam.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {exam.status === 'registration-open' ? 'Apply Now' : 'Learn More'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}