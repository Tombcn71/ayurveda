"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Describiría mi carácter como:",
    options: [
      { text: "Valiente, intenso, agudo, ordenado, competitivo", dosha: "pitta" },
      { text: "Creativo, sensible, cambiante, entusiasta", dosha: "vata" },
      { text: "Tranquilo, tolerante, constante, estable", dosha: "kapha" },
    ],
  },
  {
    question: "Mi pelo tiende a ser:",
    options: [
      { text: "Grueso, rizado, graso o abundante", dosha: "pitta" },
      { text: "Seco, fino o quebradizo", dosha: "vata" },
      { text: "Rubio, pelirrojo, canoso o calvo", dosha: "kapha" },
    ],
  },
  {
    question: "Mis deposiciones son:",
    options: [
      { text: "Suelta o en ocasiones rojiza", dosha: "pitta" },
      { text: "Sólidas, suaves o pesadas", dosha: "kapha" },
      { text: "Difíciles, pequeñas y duras", dosha: "vata" },
    ],
  },
  {
    question: "Cuando me relaciono con otras personas:",
    options: [
      { text: "Con frecuencia elijo a mis amigos por sus cualidades", dosha: "pitta" },
      { text: "Me adapto fácilmente a diferentes tipos de personas", dosha: "vata" },
      { text: "Me cuesta hacer nuevos amigos, pero soy muy fiel a ellos", dosha: "kapha" },
    ],
  },
  {
    question: "Describiría mi peso como:",
    options: [
      { text: "Bajo, difícil de ganar peso, fácil de perder", dosha: "vata" },
      { text: "Medio, fácil de perder si lo pretendo", dosha: "pitta" },
      { text: "Pesado, aumento de peso con facilidad y me es difícil perderlo", dosha: "kapha" },
    ],
  },
  {
    question: "Cuando me cuentan algo:",
    options: [
      { text: "Entiendo de inmediato la importancia de lo que me están contando", dosha: "pitta" },
      { text: "Oigo, pero a veces no escucho. Aprendo y olvido rápido", dosha: "vata" },
      { text: "Puede que tarde un momento en entenderlo, pero luego lo retengo", dosha: "kapha" },
    ],
  },
];

const doshaResults = {
  vata: {
    name: "Vata",
    description: "Tu constitución es predominantemente Vata. Eres creativo, entusiasta y lleno de energía. Tu elemento es el aire y el espacio.",
    traits: ["Creativo", "Adaptable", "Energético", "Sensible"],
    color: "from-purple-500 to-indigo-600",
  },
  pitta: {
    name: "Pitta",
    description: "Tu constitución es predominantemente Pitta. Eres decidido, inteligente y con gran capacidad de liderazgo. Tu elemento es el fuego y el agua.",
    traits: ["Decidido", "Inteligente", "Líder", "Intenso"],
    color: "from-orange-500 to-red-600",
  },
  kapha: {
    name: "Kapha",
    description: "Tu constitución es predominantemente Kapha. Eres tranquilo, estable y leal. Tu elemento es la tierra y el agua.",
    traits: ["Tranquilo", "Estable", "Leal", "Fuerte"],
    color: "from-emerald-500 to-teal-600",
  },
};

export const DoshaQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (dosha: string) => {
    const newAnswers = [...answers, dosha];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const calculateResult = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    answers.forEach((answer) => {
      counts[answer as keyof typeof counts]++;
    });
    
    const maxDosha = Object.entries(counts).reduce((a, b) => 
      a[1] > b[1] ? a : b
    )[0] as keyof typeof doshaResults;
    
    return doshaResults[maxDosha];
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="bg-cream/95 backdrop-blur-md rounded-2xl shadow-elevated border border-gold/20 overflow-hidden">
      {/* Header */}
      <div className="bg-[#869266] px-6 py-4">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-gold" />
          <h3 className="font-serif text-xl text-cream font-semibold">Test de Doshas</h3>
        </div>
        <p className="text-cream/80 text-sm">
          Consulta personalizada sobre tu dosha predominante
        </p>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Pregunta {currentStep + 1} de {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-sage-light rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#869266] to-gold"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h4 className="font-serif text-lg text-foreground mb-4">
                {questions[currentStep].question}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.dosha)}
                    className="w-full text-left p-4 rounded-xl border-2 border-border/50 bg-background hover:border-[#869266] hover:bg-sage-light/30 transition-all duration-200 group"
                  >
                    <span className="text-sm text-foreground group-hover:text-[#869266] transition-colors">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              {/* Back Button */}
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Result */}
              {(() => {
                const result = calculateResult();
                return (
                  <>
                    <div className={`bg-gradient-to-r ${result.color} rounded-xl p-6 text-white mb-6`}>
                      <div className="text-center">
                        <span className="text-sm uppercase tracking-wider opacity-80">Tu dosha es</span>
                        <h4 className="font-serif text-4xl font-bold mt-1">{result.name}</h4>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {result.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {result.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 bg-sage-light text-forest text-xs font-medium rounded-full"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <Button variant="gold" className="w-full group" size="lg">
                        <Calendar className="w-4 h-4" />
                        Reservar Consulta Gratis
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      
                      <button
                        onClick={handleReset}
                        className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        Repetir el test
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

