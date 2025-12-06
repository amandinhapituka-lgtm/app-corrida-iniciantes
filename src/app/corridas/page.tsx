'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Activity, Calendar, Clock, TrendingUp, MapPin, Plus, Edit, Trash2, Crown, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Corrida {
  id: string;
  data: string;
  distancia: number;
  duracao: string;
  pace: string;
  local: string;
  tipo: 'treino' | 'corrida-livre' | 'prova';
  notas?: string;
}

export default function CorridasPage() {
  const router = useRouter();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [corridas, setCorridas] = useState<Corrida[]>([
    {
      id: '1',
      data: '2024-01-15',
      distancia: 3.2,
      duracao: '20:15',
      pace: '6:19 min/km',
      local: 'Parque Ibirapuera',
      tipo: 'treino',
      notas: 'Primeira corrida da semana, ritmo confortável',
    },
    {
      id: '2',
      data: '2024-01-13',
      distancia: 5.0,
      duracao: '32:45',
      pace: '6:33 min/km',
      local: 'Pista de Atletismo',
      tipo: 'treino',
      notas: 'Treino intervalado, me senti bem',
    },
    {
      id: '3',
      data: '2024-01-10',
      distancia: 2.5,
      duracao: '16:20',
      pace: '6:32 min/km',
      local: 'Bairro',
      tipo: 'corrida-livre',
    },
  ]);

  const [novaCorreida, setNovaCorreida] = useState({
    data: '',
    distancia: '',
    duracao: '',
    local: '',
    tipo: 'treino' as const,
    notas: '',
  });

  const calcularPace = (distancia: number, duracao: string) => {
    const [min, seg] = duracao.split(':').map(Number);
    const totalMinutos = min + seg / 60;
    const paceMinutos = totalMinutos / distancia;
    const paceMin = Math.floor(paceMinutos);
    const paceSeg = Math.round((paceMinutos - paceMin) * 60);
    return `${paceMin}:${paceSeg.toString().padStart(2, '0')} min/km`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const distanciaNum = parseFloat(novaCorreida.distancia);
    const pace = calcularPace(distanciaNum, novaCorreida.duracao);
    
    const novaCorrida: Corrida = {
      id: Date.now().toString(),
      data: novaCorreida.data,
      distancia: distanciaNum,
      duracao: novaCorreida.duracao,
      pace,
      local: novaCorreida.local,
      tipo: novaCorreida.tipo,
      notas: novaCorreida.notas || undefined,
    };

    setCorridas([novaCorrida, ...corridas]);
    setMostrarFormulario(false);
    setNovaCorreida({
      data: '',
      distancia: '',
      duracao: '',
      local: '',
      tipo: 'treino',
      notas: '',
    });
  };

  const deletarCorrida = (id: string) => {
    setCorridas(corridas.filter(c => c.id !== id));
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'treino': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'corrida-livre': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'prova': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'treino': return 'Treino';
      case 'corrida-livre': return 'Corrida Livre';
      case 'prova': return 'Prova';
      default: return tipo;
    }
  };

  const formatarData = (data: string) => {
    const date = new Date(data + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // Estatísticas
  const totalDistancia = corridas.reduce((acc, c) => acc + c.distancia, 0);
  const totalCorridas = corridas.length;
  const distanciaMedia = totalCorridas > 0 ? (totalDistancia / totalCorridas).toFixed(1) : '0';

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Trial Banner */}
      <div className="mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-xl shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6" />
            <div>
              <p className="font-bold">⚡ Análise Avançada de Performance</p>
              <p className="text-sm opacity-90">Desbloqueie insights profundos sobre suas corridas</p>
            </div>
          </div>
          <Button 
            onClick={() => router.push('/pricing')}
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold whitespace-nowrap"
          >
            Teste Grátis 3 Dias
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-4 inline-block">
          ← Voltar ao Dashboard
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Histórico de Corridas 🏃
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Cada corrida é uma vitória. Registre e celebre seu progresso!
            </p>
          </div>
          <Button 
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nova Corrida
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Total</span>
          </div>
          <div className="text-3xl font-bold">{totalDistancia.toFixed(1)} km</div>
          <div className="text-sm opacity-90">Distância percorrida</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Corridas</span>
          </div>
          <div className="text-3xl font-bold">{totalCorridas}</div>
          <div className="text-sm opacity-90">Registradas</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium opacity-90">Média</span>
          </div>
          <div className="text-3xl font-bold">{distanciaMedia} km</div>
          <div className="text-sm opacity-90">Por corrida</div>
        </Card>
      </div>

      {/* Formulário de Nova Corrida */}
      {mostrarFormulario && (
        <Card className="p-6 mb-8 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Registrar Nova Corrida
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="data">Data da Corrida</Label>
                <Input
                  id="data"
                  type="date"
                  value={novaCorreida.data}
                  onChange={(e) => setNovaCorreida({ ...novaCorreida, data: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="distancia">Distância (km)</Label>
                <Input
                  id="distancia"
                  type="number"
                  step="0.1"
                  placeholder="Ex: 5.0"
                  value={novaCorreida.distancia}
                  onChange={(e) => setNovaCorreida({ ...novaCorreida, distancia: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="duracao">Duração (mm:ss)</Label>
                <Input
                  id="duracao"
                  type="text"
                  placeholder="Ex: 30:45"
                  value={novaCorreida.duracao}
                  onChange={(e) => setNovaCorreida({ ...novaCorreida, duracao: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="local">Local</Label>
                <Input
                  id="local"
                  type="text"
                  placeholder="Ex: Parque Ibirapuera"
                  value={novaCorreida.local}
                  onChange={(e) => setNovaCorreida({ ...novaCorreida, local: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="tipo">Tipo de Corrida</Label>
                <select
                  id="tipo"
                  value={novaCorreida.tipo}
                  onChange={(e) => setNovaCorreida({ ...novaCorreida, tipo: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="treino">Treino</option>
                  <option value="corrida-livre">Corrida Livre</option>
                  <option value="prova">Prova</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="notas">Notas (opcional)</Label>
                <Input
                  id="notas"
                  type="text"
                  placeholder="Como você se sentiu?"
                  value={novaCorreida.notas}
                  onChange={(e) => setNovaCorreida({ ...novaCorreida, notas: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Salvar Corrida
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setMostrarFormulario(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Lista de Corridas */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Suas Corridas
        </h2>
        
        {corridas.length === 0 ? (
          <Card className="p-12 text-center">
            <Activity className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Nenhuma corrida registrada
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Comece registrando sua primeira corrida!
            </p>
            <Button onClick={() => setMostrarFormulario(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Corrida
            </Button>
          </Card>
        ) : (
          corridas.map((corrida) => (
            <Card key={corrida.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={getTipoColor(corrida.tipo)}>
                      {getTipoLabel(corrida.tipo)}
                    </Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {formatarData(corrida.data)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs">Distância</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {corrida.distancia} km
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">Duração</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {corrida.duracao}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                        <Activity className="w-4 h-4" />
                        <span className="text-xs">Pace</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {corrida.pace}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs">Local</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                        {corrida.local}
                      </div>
                    </div>
                  </div>

                  {corrida.notas && (
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {corrida.notas}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex sm:flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 sm:flex-none text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                    onClick={() => deletarCorrida(corrida.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* CTA Premium */}
      <Card className="mt-8 p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Análise Avançada de Performance</h3>
            </div>
            <p className="text-lg opacity-90 mb-4">
              Veja gráficos detalhados, compare períodos, identifique padrões e receba 
              recomendações personalizadas com IA. <strong>Teste grátis por 3 dias!</strong>
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Gráficos avançados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Comparação de períodos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Insights com IA</span>
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
    </div>
  );
}
