'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Play, CheckCircle2, Clock, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Exercicio {
  id: string;
  nome: string;
  categoria: 'core' | 'pernas' | 'mobilidade' | 'equilibrio';
  series: string;
  repeticoes: string;
  descricao: string;
  beneficios: string;
  dificuldade: 'facil' | 'medio' | 'dificil';
  concluido?: boolean;
}

export default function FortalecimentoPage() {
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todos');
  const [exerciciosConcluidos, setExerciciosConcluidos] = useState<Set<string>>(new Set());

  const exercicios: Exercicio[] = [
    {
      id: '1',
      nome: 'Prancha Frontal',
      categoria: 'core',
      series: '3 séries',
      repeticoes: '30-60 segundos',
      descricao: 'Apoie os antebraços e pontas dos pés no chão, mantendo o corpo reto como uma prancha',
      beneficios: 'Fortalece abdômen, lombar e melhora a postura durante a corrida',
      dificuldade: 'medio',
    },
    {
      id: '2',
      nome: 'Agachamento',
      categoria: 'pernas',
      series: '3 séries',
      repeticoes: '12-15 repetições',
      descricao: 'Pés na largura dos ombros, desça como se fosse sentar, mantendo joelhos alinhados',
      beneficios: 'Fortalece quadríceps, glúteos e melhora a potência da passada',
      dificuldade: 'facil',
    },
    {
      id: '3',
      nome: 'Ponte de Glúteo',
      categoria: 'pernas',
      series: '3 séries',
      repeticoes: '15-20 repetições',
      descricao: 'Deitado de costas, joelhos dobrados, eleve o quadril formando uma linha reta',
      beneficios: 'Fortalece glúteos e previne dores lombares',
      dificuldade: 'facil',
    },
    {
      id: '4',
      nome: 'Alongamento de Panturrilha',
      categoria: 'mobilidade',
      series: '2 séries',
      repeticoes: '30 segundos cada perna',
      descricao: 'Apoie as mãos na parede, uma perna à frente e outra atrás esticada',
      beneficios: 'Previne canelite e melhora a flexibilidade',
      dificuldade: 'facil',
    },
    {
      id: '5',
      nome: 'Apoio Unipodal',
      categoria: 'equilibrio',
      series: '3 séries',
      repeticoes: '30 segundos cada perna',
      descricao: 'Fique em pé apoiado em uma perna só, mantendo o equilíbrio',
      beneficios: 'Melhora estabilidade e previne torções de tornozelo',
      dificuldade: 'medio',
    },
    {
      id: '6',
      nome: 'Prancha Lateral',
      categoria: 'core',
      series: '3 séries',
      repeticoes: '20-40 segundos cada lado',
      descricao: 'Apoie um antebraço e lateral do pé, mantendo corpo alinhado lateralmente',
      beneficios: 'Fortalece oblíquos e melhora estabilidade lateral',
      dificuldade: 'medio',
    },
    {
      id: '7',
      nome: 'Afundo',
      categoria: 'pernas',
      series: '3 séries',
      repeticoes: '10-12 repetições cada perna',
      descricao: 'Dê um passo à frente e desça até formar 90° nos joelhos',
      beneficios: 'Fortalece pernas de forma unilateral, melhorando equilíbrio muscular',
      dificuldade: 'medio',
    },
    {
      id: '8',
      nome: 'Elevação de Panturrilha',
      categoria: 'pernas',
      series: '3 séries',
      repeticoes: '15-20 repetições',
      descricao: 'Em pé, eleve-se nas pontas dos pés e desça controladamente',
      beneficios: 'Fortalece panturrilhas e previne lesões no tendão de Aquiles',
      dificuldade: 'facil',
    },
    {
      id: '9',
      nome: 'Rotação de Quadril',
      categoria: 'mobilidade',
      series: '2 séries',
      repeticoes: '10 rotações cada lado',
      descricao: 'Em pé, eleve o joelho e faça círculos com o quadril',
      beneficios: 'Melhora mobilidade do quadril e amplitude de movimento',
      dificuldade: 'facil',
    },
    {
      id: '10',
      nome: 'Dead Bug',
      categoria: 'core',
      series: '3 séries',
      repeticoes: '10-12 repetições',
      descricao: 'Deitado de costas, alterne braço e perna opostos mantendo lombar no chão',
      beneficios: 'Fortalece core profundo e melhora coordenação',
      dificuldade: 'medio',
    },
  ];

  const exerciciosFiltrados = filtroCategoria === 'todos' 
    ? exercicios 
    : exercicios.filter(e => e.categoria === filtroCategoria);

  const toggleConcluido = (id: string) => {
    const novosExercicios = new Set(exerciciosConcluidos);
    if (novosExercicios.has(id)) {
      novosExercicios.delete(id);
    } else {
      novosExercicios.add(id);
    }
    setExerciciosConcluidos(novosExercicios);
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'core': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'pernas': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'mobilidade': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'equilibrio': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoriaLabel = (categoria: string) => {
    switch (categoria) {
      case 'core': return 'Core';
      case 'pernas': return 'Pernas';
      case 'mobilidade': return 'Mobilidade';
      case 'equilibrio': return 'Equilíbrio';
      default: return categoria;
    }
  };

  const getDificuldadeColor = (dificuldade: string) => {
    switch (dificuldade) {
      case 'facil': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300';
      case 'medio': return 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300';
      case 'dificil': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getDificuldadeLabel = (dificuldade: string) => {
    switch (dificuldade) {
      case 'facil': return 'Fácil';
      case 'medio': return 'Médio';
      case 'dificil': return 'Difícil';
      default: return dificuldade;
    }
  };

  const totalExercicios = exercicios.length;
  const concluidosHoje = exerciciosConcluidos.size;
  const percentualConcluido = totalExercicios > 0 ? Math.round((concluidosHoje / totalExercicios) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-4 inline-block">
          ← Voltar ao Dashboard
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Fortalecimento 💪
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Exercícios essenciais para prevenir lesões e melhorar performance
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Hoje</span>
          </div>
          <div className="text-3xl font-bold">{concluidosHoje}/{totalExercicios}</div>
          <div className="text-sm opacity-90">Exercícios concluídos</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Progresso</span>
          </div>
          <div className="text-3xl font-bold">{percentualConcluido}%</div>
          <div className="text-sm opacity-90">Completado</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Tempo Estimado</span>
          </div>
          <div className="text-3xl font-bold">20-30</div>
          <div className="text-sm opacity-90">Minutos</div>
        </Card>
      </div>

      {/* Filtros */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filtroCategoria === 'todos' ? 'default' : 'outline'}
            onClick={() => setFiltroCategoria('todos')}
            className="rounded-full"
          >
            Todos
          </Button>
          <Button
            variant={filtroCategoria === 'core' ? 'default' : 'outline'}
            onClick={() => setFiltroCategoria('core')}
            className="rounded-full"
          >
            Core
          </Button>
          <Button
            variant={filtroCategoria === 'pernas' ? 'default' : 'outline'}
            onClick={() => setFiltroCategoria('pernas')}
            className="rounded-full"
          >
            Pernas
          </Button>
          <Button
            variant={filtroCategoria === 'mobilidade' ? 'default' : 'outline'}
            onClick={() => setFiltroCategoria('mobilidade')}
            className="rounded-full"
          >
            Mobilidade
          </Button>
          <Button
            variant={filtroCategoria === 'equilibrio' ? 'default' : 'outline'}
            onClick={() => setFiltroCategoria('equilibrio')}
            className="rounded-full"
          >
            Equilíbrio
          </Button>
        </div>
      </div>

      {/* Lista de Exercícios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exerciciosFiltrados.map((exercicio) => (
          <Card 
            key={exercicio.id} 
            className={`p-6 hover:shadow-lg transition-all duration-300 relative ${
              exerciciosConcluidos.has(exercicio.id) ? 'border-2 border-green-500' : ''
            }`}
          >
            {exerciciosConcluidos.has(exercicio.id) && (
              <div className="absolute top-4 right-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
            )}
            
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white pr-8">
                  {exercicio.nome}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={getCategoriaColor(exercicio.categoria)}>
                  {getCategoriaLabel(exercicio.categoria)}
                </Badge>
                <Badge className={getDificuldadeColor(exercicio.dificuldade)}>
                  {getDificuldadeLabel(exercicio.dificuldade)}
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Dumbbell className="w-4 h-4" />
                  <span>{exercicio.series}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{exercicio.repeticoes}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                <strong>Como fazer:</strong> {exercicio.descricao}
              </p>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg mb-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Benefícios:</strong> {exercicio.beneficios}
                </p>
              </div>
            </div>

            <Button 
              className={`w-full ${
                exerciciosConcluidos.has(exercicio.id)
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
              }`}
              onClick={() => toggleConcluido(exercicio.id)}
            >
              {exerciciosConcluidos.has(exercicio.id) ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Concluído
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Iniciar Exercício
                </>
              )}
            </Button>
          </Card>
        ))}
      </div>

      {/* Dica */}
      <Card className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-cyan-200 dark:border-cyan-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          💡 Dica de Fortalecimento
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Faça esses exercícios 2-3 vezes por semana, preferencialmente após suas corridas 
          ou em dias alternados. A consistência é mais importante que a intensidade no início!
        </p>
      </Card>
    </div>
  );
}
