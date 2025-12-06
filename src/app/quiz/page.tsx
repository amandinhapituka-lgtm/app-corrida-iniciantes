'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { QuizQuestion, QuizAnswers } from '@/lib/types';

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é o seu nível de experiência com corrida?',
    type: 'single',
    options: [
      { value: 'nunca_corri', label: 'Nunca corri antes' },
      { value: 'iniciante', label: 'Já corri algumas vezes, mas não regularmente' },
      { value: 'intermediario', label: 'Corro regularmente há alguns meses' },
      { value: 'avancado', label: 'Corro há mais de 1 ano' },
    ],
  },
  {
    id: 2,
    question: 'Qual é o seu principal objetivo?',
    type: 'single',
    options: [
      { value: 'comecar', label: 'Começar a correr do zero' },
      { value: 'perder_peso', label: 'Perder peso e melhorar saúde' },
      { value: 'resistencia', label: 'Aumentar resistência' },
      { value: '5k', label: 'Completar uma corrida de 5km' },
      { value: '10k', label: 'Completar uma corrida de 10km' },
    ],
  },
  {
    id: 3,
    question: 'Quantos dias por semana você pode treinar?',
    type: 'single',
    options: [
      { value: '2', label: '2 dias por semana' },
      { value: '3', label: '3 dias por semana' },
      { value: '4', label: '4 dias por semana' },
      { value: '5+', label: '5 ou mais dias por semana' },
    ],
  },
  {
    id: 4,
    question: 'Quanto tempo você tem disponível para cada treino?',
    type: 'single',
    options: [
      { value: '20', label: 'Até 20 minutos' },
      { value: '30', label: 'Até 30 minutos' },
      { value: '45', label: 'Até 45 minutos' },
      { value: '60+', label: '1 hora ou mais' },
    ],
  },
  {
    id: 5,
    question: 'Você tem alguma lesão ou condição física que devemos considerar?',
    type: 'single',
    options: [
      { value: 'nao', label: 'Não, estou saudável' },
      { value: 'joelho', label: 'Problemas nos joelhos' },
      { value: 'tornozelo', label: 'Problemas nos tornozelos' },
      { value: 'costas', label: 'Problemas nas costas' },
      { value: 'outro', label: 'Outra condição' },
    ],
  },
  {
    id: 6,
    question: 'Qual é a sua idade?',
    type: 'single',
    options: [
      { value: '18-25', label: '18-25 anos' },
      { value: '26-35', label: '26-35 anos' },
      { value: '36-45', label: '36-45 anos' },
      { value: '46-55', label: '46-55 anos' },
      { value: '56+', label: '56+ anos' },
    ],
  },
  {
    id: 7,
    question: 'Você pratica outras atividades físicas?',
    type: 'multiple',
    options: [
      { value: 'academia', label: 'Musculação/Academia' },
      { value: 'natacao', label: 'Natação' },
      { value: 'ciclismo', label: 'Ciclismo' },
      { value: 'yoga', label: 'Yoga/Pilates' },
      { value: 'nenhuma', label: 'Nenhuma outra atividade' },
    ],
  },
  {
    id: 8,
    question: 'Qual é o seu nível de condicionamento físico atual?',
    type: 'single',
    options: [
      { value: 'sedentario', label: 'Sedentário - pouca ou nenhuma atividade' },
      { value: 'leve', label: 'Leve - atividade ocasional' },
      { value: 'moderado', label: 'Moderado - atividade regular' },
      { value: 'ativo', label: 'Ativo - treino frequente' },
    ],
  },
  {
    id: 9,
    question: 'Qual é o seu horário preferido para treinar?',
    type: 'single',
    options: [
      { value: 'manha', label: 'Manhã (6h - 9h)' },
      { value: 'tarde', label: 'Tarde (12h - 15h)' },
      { value: 'final_tarde', label: 'Final da tarde (16h - 18h)' },
      { value: 'noite', label: 'Noite (19h - 21h)' },
    ],
  },
  {
    id: 10,
    question: 'Você tem acesso a uma academia ou prefere treinar ao ar livre?',
    type: 'single',
    options: [
      { value: 'ar_livre', label: 'Prefiro ao ar livre' },
      { value: 'academia', label: 'Prefiro academia' },
      { value: 'ambos', label: 'Ambos' },
      { value: 'casa', label: 'Prefiro treinar em casa' },
    ],
  },
];

// Helper para storage seguro
const safeStorage = {
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.warn('Storage not available:', e);
      return false;
    }
  },
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn('Storage not available:', e);
      return null;
    }
  }
};

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleOptionSelect = (value: string) => {
    if (question.type === 'single') {
      setSelectedOptions([value]);
    } else {
      if (value === 'nenhuma') {
        setSelectedOptions(['nenhuma']);
      } else {
        const filtered = selectedOptions.filter(opt => opt !== 'nenhuma');
        if (selectedOptions.includes(value)) {
          setSelectedOptions(filtered.filter(opt => opt !== value));
        } else {
          setSelectedOptions([...filtered, value]);
        }
      }
    }
  };

  const handleNext = () => {
    // Salvar resposta
    const updatedAnswers = {
      ...answers,
      [question.id]: selectedOptions,
    };
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptions([]);
    } else {
      // Finalizar quiz - salvar de forma segura
      try {
        safeStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers));
        safeStorage.setItem('quizCompleted', 'true');
        
        // Redirecionar após pequeno delay
        setTimeout(() => {
          router.push('/dashboard');
        }, 100);
      } catch (error) {
        console.error('Erro ao salvar respostas:', error);
        // Mesmo com erro, redireciona
        router.push('/dashboard');
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = answers[questions[currentQuestion - 1].id] || [];
      setSelectedOptions(previousAnswer);
    }
  };

  const isAnswered = selectedOptions.length > 0;

  // Previne hydration mismatch
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Vamos Personalizar Seu Treino 🎯
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Responda algumas perguntas para criarmos o plano perfeito para você
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-6 sm:p-8 mb-6 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  selectedOptions.includes(option.value)
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-500'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedOptions.includes(option.value)
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {selectedOptions.includes(option.value) && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {question.type === 'multiple' && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              💡 Você pode selecionar múltiplas opções
            </p>
          )}
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            variant="outline"
            className="flex-1"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
