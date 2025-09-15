import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Brain, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

// todo: remove mock functionality - replace with real scientific assessment
const quizQuestions = [
  {
    id: 1,
    question: "Which type of activities do you find most engaging?",
    options: [
      { id: 'a', text: 'Solving complex mathematical problems', category: 'analytical' },
      { id: 'b', text: 'Helping people with their health issues', category: 'caring' },
      { id: 'c', text: 'Creating and designing new things', category: 'creative' },
      { id: 'd', text: 'Managing and organizing projects', category: 'leadership' }
    ]
  },
  {
    id: 2,
    question: "What kind of work environment appeals to you most?",
    options: [
      { id: 'a', text: 'High-tech laboratories and research facilities', category: 'analytical' },
      { id: 'b', text: 'Hospitals and healthcare settings', category: 'caring' },
      { id: 'c', text: 'Design studios and creative spaces', category: 'creative' },
      { id: 'd', text: 'Corporate offices and boardrooms', category: 'leadership' }
    ]
  },
  {
    id: 3,
    question: "Which subjects did you enjoy most in school?",
    options: [
      { id: 'a', text: 'Mathematics, Physics, and Computer Science', category: 'analytical' },
      { id: 'b', text: 'Biology, Chemistry, and Life Sciences', category: 'caring' },
      { id: 'c', text: 'Arts, Literature, and Design', category: 'creative' },
      { id: 'd', text: 'Economics, Business Studies, and History', category: 'leadership' }
    ]
  },
  {
    id: 4,
    question: "What motivates you most in your career goals?",
    options: [
      { id: 'a', text: 'Solving challenging technical problems', category: 'analytical' },
      { id: 'b', text: 'Making a positive impact on people\'s lives', category: 'caring' },
      { id: 'c', text: 'Expressing creativity and innovation', category: 'creative' },
      { id: 'd', text: 'Leading teams and driving business success', category: 'leadership' }
    ]
  },
  {
    id: 5,
    question: "How do you prefer to spend your free time?",
    options: [
      { id: 'a', text: 'Learning new technologies and programming', category: 'analytical' },
      { id: 'b', text: 'Volunteering for social causes', category: 'caring' },
      { id: 'c', text: 'Pursuing artistic hobbies and crafts', category: 'creative' },
      { id: 'd', text: 'Networking and attending business events', category: 'leadership' }
    ]
  }
];

const careerRecommendations = {
  analytical: {
    title: 'Engineering & Technology',
    description: 'Your analytical mindset and problem-solving skills make you ideal for engineering and technology careers.',
    careers: ['Software Engineer', 'Data Scientist', 'Civil Engineer', 'Research Scientist'],
    colleges: ['IIT Delhi', 'IIT Bombay', 'NIT Trichy', 'IIIT Hyderabad'],
    color: 'bg-blue-500'
  },
  caring: {
    title: 'Healthcare & Life Sciences',
    description: 'Your empathy and desire to help others align perfectly with healthcare and life science careers.',
    careers: ['Doctor', 'Nurse', 'Pharmacist', 'Physiotherapist'],
    colleges: ['AIIMS Delhi', 'PGIMER Chandigarh', 'CMC Vellore', 'JIPMER Puducherry'],
    color: 'bg-green-500'
  },
  creative: {
    title: 'Design & Creative Arts',
    description: 'Your creativity and innovative thinking make you perfect for design and creative careers.',
    careers: ['Graphic Designer', 'Architect', 'Film Director', 'Fashion Designer'],
    colleges: ['NID Ahmedabad', 'NIFT Delhi', 'JJ School of Art', 'Srishti Manipal'],
    color: 'bg-purple-500'
  },
  leadership: {
    title: 'Business & Management',
    description: 'Your leadership qualities and business acumen are ideal for management and entrepreneurship.',
    careers: ['Business Manager', 'Entrepreneur', 'Consultant', 'Marketing Executive'],
    colleges: ['IIM Ahmedabad', 'IIM Bangalore', 'XLRI Jamshedpur', 'FMS Delhi'],
    color: 'bg-orange-500'
  }
};

export function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswerChange = (questionId: number, answerId: string) => {
    setAnswers({ ...answers, [questionId]: answerId });
    console.log(`Question ${questionId} answered: ${answerId}`);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      console.log('Quiz completed, calculating results...');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const categoryScores: {[key: string]: number} = {};
    
    Object.entries(answers).forEach(([questionIndex, answerId]) => {
      const question = quizQuestions[parseInt(questionIndex)];
      const selectedOption = question.options.find(opt => opt.id === answerId);
      if (selectedOption) {
        categoryScores[selectedOption.category] = (categoryScores[selectedOption.category] || 0) + 1;
      }
    });

    const topCategory = Object.entries(categoryScores)
      .sort(([,a], [,b]) => b - a)[0];

    return topCategory ? careerRecommendations[topCategory[0] as keyof typeof careerRecommendations] : null;
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const currentQ = quizQuestions[currentQuestion];
  const results = showResults ? calculateResults() : null;

  if (!isStarted) {
    return (
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                Discover Your Ideal Career Path
              </CardTitle>
              <CardDescription className="text-lg">
                Take our scientifically-designed career assessment to discover which fields align 
                with your interests, skills, and personality. Get personalized college and career recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>✓ 5 scientifically-designed questions</div>
                  <div>✓ Personalized career recommendations</div>
                  <div>✓ College suggestions based on results</div>
                  <div>✓ Takes only 3-5 minutes</div>
                </div>
              </div>
              <Button 
                size="lg" 
                onClick={() => setIsStarted(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold hover-elevate active-elevate-2"
                data-testid="button-start-quiz"
              >
                Start Career Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (showResults && results) {
    return (
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                Your Career Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className={`${results.color} text-white p-6 rounded-lg text-center`}>
                <h3 className="text-2xl font-bold mb-2" data-testid="text-recommended-field">
                  {results.title}
                </h3>
                <p className="text-lg opacity-90">{results.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Recommended Careers:</h4>
                  <div className="space-y-2">
                    {results.careers.map((career, index) => (
                      <div 
                        key={index} 
                        className="flex items-center p-3 bg-muted rounded-lg"
                        data-testid={`career-${career.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Top Colleges for You:</h4>
                  <div className="space-y-2">
                    {results.colleges.map((college, index) => (
                      <div 
                        key={index} 
                        className="flex items-center p-3 bg-muted rounded-lg"
                        data-testid={`college-${college.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                        <span>{college}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button 
                  onClick={() => {
                    setIsStarted(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                    setShowResults(false);
                    console.log('Quiz restarted');
                  }}
                  variant="outline"
                  className="mr-4 hover-elevate"
                  data-testid="button-retake-quiz"
                >
                  Retake Quiz
                </Button>
                <Button 
                  onClick={() => console.log('Explore recommended colleges')}
                  className="hover-elevate active-elevate-2"
                  data-testid="button-explore-colleges"
                >
                  Explore These Colleges
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-xl">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </div>
            </div>
            <Progress value={progress} className="mb-6" data-testid="progress-quiz" />
            <CardDescription className="text-lg font-medium text-foreground">
              {currentQ.question}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <RadioGroup
              value={answers[currentQ.id] || ''}
              onValueChange={(value) => handleAnswerChange(currentQ.id, value)}
              className="space-y-3"
            >
              {currentQ.options.map((option) => (
                <div 
                  key={option.id} 
                  className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-accent hover-elevate"
                >
                  <RadioGroupItem 
                    value={option.id} 
                    id={`option-${option.id}`}
                    data-testid={`radio-option-${option.id}`}
                  />
                  <Label 
                    htmlFor={`option-${option.id}`} 
                    className="flex-1 text-base cursor-pointer"
                  >
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex items-center justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="hover-elevate"
                data-testid="button-previous-question"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!answers[currentQ.id]}
                className="hover-elevate active-elevate-2"
                data-testid="button-next-question"
              >
                {currentQuestion === quizQuestions.length - 1 ? 'Get Results' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}