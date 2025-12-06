'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, Calendar, TrendingUp, Dumbbell, Play, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Helper para storage seguro
const safeStorage = {
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn('Storage not available:', e);
      return null;
    }
  }
};

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [stats] = useState({
    distanciaSemana: 12.5,
    paceMedio: '6:15 min/km',
    treinosConcluidos: 3,
    proximoTreino: 'Corrida Contínua Curta',
  });

  useEffect(() => {
    setIsMounted(true);
    
    // Verificar se o quiz foi completado (apenas no cliente)
    const checkQuizCompletion = () => {
      try {
        const quizCompleted = safeStorage.getItem('quizCompleted');
        if (!quizCompleted) {
          router.push('/quiz');
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Erro ao verificar quiz:', error);
        setIsLoading(false);
      }
    };

    // Pequeno delay para garantir que o localStorage está disponível
    const timer = setTimeout(checkQuizCompletion, 100);
    return () => clearTimeout(timer);
  }, [router]);

  // Previne hydration mismatch
  if (!isMounted || isLoading) {
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
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Bem-vindo ao RunStart! 👟
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Seu companheiro para começar a correr com segurança
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-8 h-8 opacity-80" />
            <span className="text-sm font-medium opacity-90">Esta Semana</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.distanciaSemana} km</div>
          <div className="text-sm opacity-90">Distância total</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 opacity-80" />
            <span className="text-sm font-medium opacity-90">Pace Médio</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.paceMedio}</div>
          <div className="text-sm opacity-90">Por quilômetro</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="w-8 h-8 opacity-80" />
            <span className="text-sm font-medium opacity-90">Treinos</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.treinosConcluidos}</div>
          <div className="text-sm opacity-90">Concluídos</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-8 h-8 opacity-80" />
            <span className="text-sm font-medium opacity-90">Próximo</span>
          </div>
          <div className="text-lg font-bold mb-1 line-clamp-2">{stats.proximoTreino}</div>
          <div className="text-sm opacity-90">Treino agendado</div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Play className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Começar Treino
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Escolha um treino personalizado e comece sua jornada
              </p>
              <Link href="/treinos">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Ver Treinos
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Activity className="w-6 h-6 text-green-600 dark:text-green-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Registrar Corrida
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Adicione sua corrida manualmente ou sincronize com Strava
              </p>
              <Link href="/corridas">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                  Adicionar Corrida
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Dumbbell className="w-6 h-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Fortalecimento
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Exercícios essenciais para prevenir lesões e melhorar performance
          </p>
          <Link href="/fortalecimento">
            <Button variant="outline" className="w-full sm:w-auto">
              Ver Exercícios
            </Button>
          </Link>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Seu Progresso
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Acompanhe sua evolução com métricas simples e motivadoras
          </p>
          <Link href="/progresso">
            <Button variant="outline" className="w-full sm:w-auto">
              Ver Estatísticas
            </Button>
          </Link>
        </Card>
      </div>

      {/* Tips Section */}
      <Card className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-cyan-200 dark:border-cyan-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          💡 Dica para Iniciantes
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Comece devagar! É melhor correr menos e com mais frequência do que tentar 
          distâncias longas logo no início. Seu corpo precisa de tempo para se adaptar.
        </p>
      </Card>
    </div>
  );
}
