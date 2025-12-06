'use client';

import { useState, useEffect } from 'react';
import { Check, Star, Users, Trophy, TrendingUp, Zap, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    name: "Maria Silva",
    age: 32,
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    text: "Comecei do zero e em 3 meses já estava correndo 5km sem parar! O RunStart mudou minha vida. Os treinos são progressivos e muito bem estruturados. Perdi 8kg e ganhei muita disposição!",
    achievement: "De sedentária a 5km em 3 meses"
  },
  {
    name: "João Pedro Santos",
    age: 28,
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Sempre tive medo de começar a correr por não saber como fazer direito. O RunStart me deu toda a base que eu precisava. Os exercícios de fortalecimento fizeram toda diferença para evitar lesões!",
    achievement: "Primeira corrida de 10km completada"
  },
  {
    name: "Ana Carolina Oliveira",
    age: 35,
    location: "Belo Horizonte, MG",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    text: "Depois de ter meu segundo filho, precisava voltar a me exercitar. O RunStart foi perfeito! Consegui conciliar os treinos com minha rotina corrida. Em 4 meses já estava correndo 8km. Recomendo demais!",
    achievement: "8kg perdidos e muito mais energia"
  },
  {
    name: "Carlos Eduardo Lima",
    age: 42,
    location: "Curitiba, PR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "Com 42 anos achei que era tarde para começar a correr. O RunStart provou que eu estava errado! O programa é adaptável e respeita meu ritmo. Já completei minha primeira meia maratona!",
    achievement: "Primeira meia maratona aos 42 anos"
  },
  {
    name: "Juliana Ferreira",
    age: 26,
    location: "Brasília, DF",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    rating: 5,
    text: "O acompanhamento do progresso é incrível! Ver minha evolução semana a semana me motivou muito. Os treinos de fortalecimento complementam perfeitamente a corrida. Melhor investimento que fiz!",
    achievement: "De 3km para 15km em 5 meses"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Veja sua evolução já nas primeiras semanas"
  },
  {
    icon: Users,
    title: "Para Iniciantes",
    description: "Método testado e aprovado por milhares de pessoas"
  },
  {
    icon: Trophy,
    title: "Conquiste Metas",
    description: "Do 0 aos 5km, 10km e além"
  },
  {
    icon: Shield,
    title: "Previna Lesões",
    description: "Exercícios de fortalecimento inclusos"
  },
  {
    icon: TrendingUp,
    title: "Acompanhe Progresso",
    description: "Dashboard completo com suas estatísticas"
  },
  {
    icon: Clock,
    title: "Flexível",
    description: "Treine no seu ritmo e horário"
  }
];

const plans = [
  {
    name: "Mensal",
    price: "29,90",
    period: "/mês",
    description: "Ideal para experimentar",
    features: [
      "Acesso completo ao método RunStart",
      "Treinos progressivos personalizados",
      "Exercícios de fortalecimento",
      "Dashboard de progresso",
      "Suporte via email"
    ],
    highlight: false,
    link: "https://pay.kiwify.com.br/9daKa4N"
  },
  {
    name: "Trimestral",
    price: "97",
    period: "/3 meses",
    description: "Mais popular - Economize 31%",
    features: [
      "Tudo do plano mensal",
      "3 meses de acesso garantido",
      "Economia de R$ 44",
      "Suporte prioritário",
      "Grupo exclusivo de alunos"
    ],
    highlight: true,
    badge: "MAIS POPULAR",
    link: "https://pay.kiwify.com.br/DaQ1HFa"
  },
  {
    name: "Anual",
    price: "297",
    period: "/ano",
    description: "Melhor custo-benefício - Economize 47%",
    features: [
      "Tudo do plano trimestral",
      "12 meses de acesso total",
      "Economia de R$ 267",
      "Suporte VIP prioritário",
      "Acesso vitalício ao grupo",
      "Bônus: Plano de nutrição"
    ],
    highlight: false,
    link: "https://pay.kiwify.com.br/ExR16E0"
  }
];

export default function ComprarPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comece a Correr do Zero
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Método comprovado que já transformou a vida de +5.000 pessoas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold">4.9/5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span className="text-lg">+5.000 alunos ativos</span>
            </div>
          </div>
          <a 
            href="https://pay.kiwify.com.br/9daKa4N" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Começar Agora
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Por que escolher o RunStart?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            O que nossos alunos dizem
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Histórias reais de pessoas que transformaram suas vidas
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback se imagem falhar
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.age} anos • {testimonial.location}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                    🏆 {testimonial.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Escolha seu plano
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Comece sua transformação hoje mesmo
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all ${
                  plan.highlight
                    ? 'ring-4 ring-blue-600 transform scale-105'
                    : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    R$ {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 rounded-full font-bold transition-all transform hover:scale-105 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                  }`}
                >
                  Começar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Garantia de 7 dias
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Experimente o RunStart sem riscos. Se não ficar satisfeito nos primeiros 7 dias,
            devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
          <a 
            href="https://pay.kiwify.com.br/9daKa4N"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Começar Agora Sem Riscos
          </a>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Entre em contato conosco pelo email: suporte@runstart.com.br
          </p>
          <Link
            href="/dashboard"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Ou faça o quiz gratuito para conhecer o método →
          </Link>
        </div>
      </section>
    </div>
  );
}
