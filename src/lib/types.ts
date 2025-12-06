// Tipos do aplicativo de corrida

export interface Treino {
  id: string;
  titulo: string;
  descricao: string;
  tipo: 'corrida' | 'caminhada' | 'intervalo';
  distancia?: number; // em km
  duracao?: number; // em minutos
  nivel: 'iniciante' | 'intermediario';
  concluido: boolean;
  data?: string;
}

export interface Corrida {
  id: string;
  data: string;
  distancia: number; // em km
  tempo: number; // em minutos
  pace: string; // formato "5:30 min/km"
  fonte: 'manual' | 'strava';
  notas?: string;
}

export interface Exercicio {
  id: string;
  nome: string;
  descricao: string;
  repeticoes: string;
  categoria: 'pernas' | 'core' | 'alongamento';
  videoUrl?: string;
  concluido: boolean;
}

export interface EstatisticasSemana {
  distanciaTotal: number;
  paceMedio: string;
  treinosConcluidos: number;
  tempoTotal: number; // em minutos
}

// Tipos para o Quiz de Onboarding
export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'single' | 'multiple';
  options: QuizOption[];
}

export interface QuizAnswers {
  [questionId: number]: string[];
}

export interface UserProfile {
  experiencia: string;
  objetivo: string;
  diasPorSemana: string;
  tempoPorTreino: string;
  lesoes: string;
  idade: string;
  outrasAtividades: string[];
  condicionamento: string;
  horarioPreferido: string;
  localTreino: string;
}
