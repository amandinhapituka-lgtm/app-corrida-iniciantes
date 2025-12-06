'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, TrendingUp, Target, Calendar, CheckCircle2, Crown, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Treino {
  id: string;
  nome: string;
  tipo: 'corrida' | 'caminhada' | 'intervalo';
  duracao: string;
  distancia: string;
  nivel: 'iniciante' | 'intermediario' | 'avancado';
  descricao: string;
  objetivo: string;
  concluido?: boolean;
  premium?: boolean;
}

export default function TreinosPage() {
  const router = useRouter();
  const [filtroNivel, setFiltroNivel] = useState<string>('todos');

  const treinos: Treino[] = [
    {
      id: '1',
      nome: 'Primeira Corrida',
      tipo: 'corrida',
      duracao: '20 min',
      distancia: '2 km',
      nivel: 'iniciante',
      descricao: 'Alterne 1 minuto de corrida leve com 2 minutos de caminhada',
      objetivo: 'Adaptação inicial ao movimento da corrida',
      concluido: true,
    },
    {
      id: '2',
      nome: 'Corrida Contínua Curta',
      tipo: 'corrida',
      duracao: '25 min',
      distancia: '3 km',
      nivel: 'iniciante',
      descricao: 'Mantenha um ritmo confortável onde você consegue conversar',
      objetivo: 'Desenvolver resistência aeróbica básica',
    },
    {
      id: '3',
      nome: 'Treino Intervalado Avançado',
      tipo: 'intervalo',
      duracao: '30 min',
      distancia: '3.5 km',
      nivel: 'intermediario',
      descricao: '5 min aquecimento + 8x (2 min rápido + 1 min recuperação) + 5 min volta à calma',
      objetivo: 'Melhorar velocidade e capacidade cardiovascular',
      premium: true,
    },
    {
      id: '4',
      nome: 'Caminhada Ativa',
      tipo: 'caminhada',
      duracao: '30 min',
      distancia: '2.5 km',
      nivel: 'iniciante',
      descricao: 'Caminhada em ritmo acelerado para recuperação ativa',
      objetivo: 'Recuperação e manutenção da rotina',
    },
    {
      id: '5',
      nome: 'Corrida Longa Premium',
      tipo: 'corrida',
      duracao: '40 min',
      distancia: '5 km',
      nivel: 'intermediario',
      descricao: 'Ritmo confortável e constante durante toda a corrida',
      objetivo: 'Aumentar resistência e capacidade aeróbica',
      premium: true,
    },
    {
      id: '6',
      nome: 'Fartlek Iniciante',
      tipo: 'intervalo',
      duracao: '25 min',
      distancia: '3 km',
      nivel: 'iniciante',
      descricao: 'Varie o ritmo naturalmente: acelere em trechos curtos quando se sentir bem',
      objetivo: 'Introdução ao treino de velocidade variada',
    },
    {
      id: '7',
      nome: 'Treino de Velocidade Pro',
      tipo: 'intervalo',
      duracao: '35 min',
      distancia: '4 km',
      nivel: 'avancado',
      descricao: 'Treino intenso com intervalos de alta intensidade e recuperação ativa',
      objetivo: 'Maximizar velocidade e potência aeróbica',
      premium: true,
    },
    {
      id: '8',
      nome: 'Corrida de Resistência Elite',
      tipo: 'corrida',
      duracao: '60 min',
      distancia: '8 km',
      nivel: 'avancado',
      descricao: 'Corrida longa em ritmo constante para construir base aeróbica sólida',
      objetivo: 'Preparação para provas longas',
      premium: true,
    },
  ];

  const treinosFiltrados = filtroNivel === 'todos' 
    ? treinos 
    : treinos.filter(t => t.nivel === filtroNivel);

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'corrida': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'caminhada': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'intervalo': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'iniciante': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300';
      case 'intermediario': return 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300';
      case 'avancado': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Trial Banner */}
      <div className="mb-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6" />
            <div>
              <p className="font-bold">🎉 Teste Grátis por 3 Dias!</p>
              <p className="text-sm opacity-90">Desbloqueie TODOS os treinos premium agora</p>
            </div>
          </div>
          <Button 
            onClick={() => router.push('/pricing')}
            className="bg-white text-green-600 hover:bg-gray-100 font-bold whitespace-nowrap"
          >
            Começar Teste Grátis
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-4 inline-block">
          ← Voltar ao Dashboard
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Seus Treinos Personalizados 🏃‍♂️
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Planos que se adaptam ao seu ritmo e te levam ao próximo nível
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Esta Semana</span>
          </div>
          <div className="text-3xl font-bold">3/4</div>
          <div className="text-sm opacity-90">Treinos concluídos</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Sequência</span>
          </div>
          <div className="text-3xl font-bold">7 dias</div>
          <div className="text-sm opacity-90">Mantendo o ritmo</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Próxima Meta</span>
          </div>
          <div className="text-3xl font-bold">5K</div>
          <div className="text-sm opacity-90">Em 4 semanas</div>
        </Card>
      </div>

      {/* Filtros */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filtroNivel === 'todos' ? 'default' : 'outline'}
            onClick={() => setFiltroNivel('todos')}
            className="rounded-full"
          >
            Todos
          </Button>
          <Button
            variant={filtroNivel === 'iniciante' ? 'default' : 'outline'}
            onClick={() => setFiltroNivel('iniciante')}
            className="rounded-full"
          >
            Iniciante
          </Button>
          <Button
            variant={filtroNivel === 'intermediario' ? 'default' : 'outline'}
            onClick={() => setFiltroNivel('intermediario')}
            className="rounded-full"
          >
            Intermediário
          </Button>
          <Button
            variant={filtroNivel === 'avancado' ? 'default' : 'outline'}
            onClick={() => setFiltroNivel('avancado')}
            className="rounded-full"
          >
            Avançado
          </Button>
        </div>
      </div>

      {/* Lista de Treinos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treinosFiltrados.map((treino) => (
          <Card key={treino.id} className={`p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden ${
            treino.premium ? 'border-2 border-purple-300 dark:border-purple-700' : ''
          }`}>
            {treino.premium && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 text-xs font-bold flex items-center gap-1">
                <Crown className="w-3 h-3" />
                PREMIUM
              </div>
            )}

            {treino.concluido && (
              <div className="absolute top-4 right-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
            )}
            
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white pr-8">
                  {treino.nome}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={getTipoColor(treino.tipo)}>
                  {treino.tipo.charAt(0).toUpperCase() + treino.tipo.slice(1)}
                </Badge>
                <Badge className={getNivelColor(treino.nivel)}>
                  {treino.nivel.charAt(0).toUpperCase() + treino.nivel.slice(1)}
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{treino.duracao}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>{treino.distancia}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                {treino.descricao}
              </p>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg mb-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Objetivo:</strong> {treino.objetivo}
                </p>
              </div>
            </div>

            {treino.premium ? (
              <Button 
                onClick={() => router.push('/pricing')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Crown className="w-4 h-4 mr-2" />
                Desbloquear com Teste Grátis
              </Button>
            ) : (
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                disabled={treino.concluido}
              >
                <Play className="w-4 h-4 mr-2" />
                {treino.concluido ? 'Treino Concluído' : 'Iniciar Treino'}
              </Button>
            )}
          </Card>
        ))}
      </div>

      {/* CTA Premium */}
      <Card className="mt-8 p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Desbloqueie Seu Potencial Máximo</h3>
            </div>
            <p className="text-lg opacity-90 mb-4">
              Acesse treinos avançados, análise com IA e coaching personalizado. 
              <strong> Teste grátis por 3 dias!</strong>
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Treinos ilimitados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>IA adaptativa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => router.push('/pricing')}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 whitespace-nowrap"
          >
            🚀 Começar Teste Grátis
          </Button>
        </div>
      </Card>

      {/* Dica */}
      <Card className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-cyan-200 dark:border-cyan-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          💡 Dica de Ouro
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Consistência vence intensidade.</strong> É melhor treinar 3x por semana de forma regular 
          do que tentar fazer tudo de uma vez e desistir. Respeite seu corpo e os resultados virão!
        </p>
      </Card>
    </div>
  );
}
