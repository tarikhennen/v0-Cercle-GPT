"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Star,
  Check,
  MessageSquare,
  Users,
  Zap,
  Shield,
  Brain,
  Sparkles,
  Mail,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Plus,
  Minus,
  GraduationCap,
  Building2,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Image src="/cercle-gpt-logo.png" alt="Cercle GPT Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Cercle GPT</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Témoignages
            </a>
            <a
              href="#faq"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
            <a href="https://app.cercle-gpt.com/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-transparent">
                Se connecter
              </Button>
            </a>
            <a href="https://app.cercle-gpt.com/register" target="_blank" rel="noopener noreferrer">
              <Button>Accéder à la bêta</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#testimonials"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Témoignages
            </a>
            <a
              href="#faq"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
            <a href="https://app.cercle-gpt.com/login" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full bg-transparent">
                Se connecter
              </Button>
            </a>
            <a href="https://app.cercle-gpt.com/register" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full">Accéder à la bêta</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8"
        >
          <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            Bêta exclusive pour les étudiants IHECS Master 2
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Multipliez vos perspectives
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            académiques
          </span>
          <br />
          avec plusieurs IA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Comparez instantanément les réponses de GPT-4, Claude, Gemini et plus encore. Enrichissez vos mémoires,
          affinez votre pensée critique et découvrez des angles d'analyse inédits pour vos travaux académiques.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
        >
          <a href="https://app.cercle-gpt.com/register" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6">
              Accéder à la bêta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
            Voir la démo
          </Button>
        </motion.div>

        {/* Login Link Below CTA Buttons */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm text-gray-600 dark:text-gray-400 mb-16"
        >
          Vous avez déjà un compte ?{" "}
          <a
            href="https://app.cercle-gpt.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Se connecter
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5+ IA</div>
            <div className="text-gray-600 dark:text-gray-400">Comparées simultanément</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">3x</div>
            <div className="text-gray-600 dark:text-gray-400">Plus de perspectives</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Étudiants IHECS M2</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Features Section Component
function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Comparaison multi-IA en temps réel",
      description:
        "Posez une question et obtenez simultanément les réponses de GPT-4, Claude, Gemini et d'autres modèles. Identifiez les convergences et divergences pour enrichir votre analyse critique.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Pensée critique augmentée",
      description:
        "Confrontez différentes perspectives d'IA pour développer votre esprit critique. Parfait pour analyser des concepts complexes, débattre d'idées et construire des argumentations solides.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Recherche académique accélérée",
      description:
        "Gagnez des heures sur vos recherches de mémoire. Explorez rapidement plusieurs angles d'approche, identifiez des sources pertinentes et structurez vos idées plus efficacement.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration étudiante",
      description:
        "Partagez vos conversations multi-IA avec vos pairs, co-construisez des connaissances et bénéficiez des découvertes de vos collègues pour vos projets de groupe.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Intégrité académique garantie",
      description:
        "Outils de citation automatique et vérification des sources pour respecter les normes académiques. Utilisez l'IA comme assistant de recherche, pas comme substitut.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Synthèse intelligente",
      description:
        "L'IA analyse les réponses multiples et génère des synthèses structurées. Identifiez rapidement les points clés, contradictions et pistes de réflexion pour vos travaux.",
    },
  ]

  return (
    <section id="features" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Votre avantage académique multi-IA</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Des outils conçus pour les étudiants exigeants qui veulent exceller dans leurs mémoires, projets et
            recherches académiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Waitlist Section Component for Other Institutions
function WaitlistSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [submitted, setSubmitted] = useState(false)
  const [gdprConsent, setGdprConsent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!gdprConsent) {
      alert("Veuillez accepter la politique de confidentialité pour continuer.")
      return
    }
    setSubmitted(true)
  }

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Building2 className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Votre établissement souhaite rejoindre la bêta ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cercle GPT est actuellement en phase bêta exclusive pour les étudiants IHECS Master 2. Inscrivez votre
            établissement sur notre liste d'attente pour être parmi les premiers à accéder à la plateforme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="institutionName">Nom de l'établissement *</Label>
                    <Input id="institutionName" placeholder="Université de..." required />
                  </div>
                  <div>
                    <Label htmlFor="institutionType">Type d'établissement *</Label>
                    <Input id="institutionType" placeholder="Université, École..." required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Nom du contact *</Label>
                    <Input id="contactName" placeholder="Prénom Nom" required />
                  </div>
                  <div>
                    <Label htmlFor="contactRole">Fonction *</Label>
                    <Input id="contactRole" placeholder="Professeur, Directeur..." required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contactEmail">Email professionnel *</Label>
                  <Input id="contactEmail" type="email" placeholder="contact@etablissement.edu" required />
                </div>

                <div>
                  <Label htmlFor="studentCount">Nombre d'étudiants potentiels</Label>
                  <Input id="studentCount" type="number" placeholder="100" />
                </div>

                <div>
                  <Label htmlFor="message">Pourquoi Cercle GPT intéresse votre établissement ?</Label>
                  <Textarea id="message" placeholder="Parlez-nous de vos besoins et objectifs..." rows={4} />
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Checkbox
                    id="gdpr-waitlist"
                    checked={gdprConsent}
                    onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                    required
                  />
                  <Label htmlFor="gdpr-waitlist" className="text-sm leading-relaxed cursor-pointer">
                    J'accepte que mes données soient collectées et traitées conformément à la{" "}
                    <a
                      href="https://lecercle.ai/politique-de-confidentialite/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      politique de confidentialité
                    </a>{" "}
                    de Cercle GPT. *
                  </Label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Rejoindre la liste d'attente
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Nous vous contacterons dès que Cercle GPT sera disponible pour votre établissement
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Merci pour votre inscription !
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Votre établissement a été ajouté à notre liste d'attente. Nous vous contacterons très prochainement.
                </p>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials Section Component
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: "Sophie Dubois",
      role: "Étudiante Master 2, Communication",
      university: "IHECS",
      content:
        "Comparer les réponses de 5 IA différentes m'a permis d'identifier des angles d'analyse que je n'aurais jamais trouvés seule. Mon mémoire sur les réseaux sociaux a gagné en profondeur grâce à ces perspectives multiples.",
      avatar: "👩‍🎓",
    },
    {
      name: "Thomas Laurent",
      role: "Étudiant Master 2, Journalisme",
      university: "IHECS",
      content:
        "Pour mes enquêtes journalistiques, pouvoir confronter différentes IA m'aide à vérifier les faits sous plusieurs angles. C'est devenu indispensable pour ma rigueur professionnelle.",
      avatar: "👨‍💼",
    },
    {
      name: "Marie Petit",
      role: "Étudiante Master 2, Relations Publiques",
      university: "IHECS",
      content:
        "J'ai divisé par deux le temps de mes recherches bibliographiques. Les synthèses multi-IA m'aident à structurer mes idées et à identifier rapidement les sources les plus pertinentes.",
      avatar: "👩‍💻",
    },
  ]

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ils excellent avec Cercle GPT</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Découvrez comment les étudiants IHECS utilisent le multi-IA pour leurs travaux académiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.university}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const faqs = [
    {
      question: "Pourquoi utiliser plusieurs IA plutôt qu'une seule ?",
      answer:
        "Chaque modèle d'IA a ses forces : GPT-4 excelle en créativité, Claude en analyse nuancée, Gemini en recherche factuelle. En les comparant, vous obtenez une vision plus complète et développez votre esprit critique, essentiel pour vos travaux académiques.",
    },
    {
      question: "Comment Cercle GPT améliore-t-il mes recherches de mémoire ?",
      answer:
        "En posant la même question à 5 IA différentes, vous découvrez des angles d'analyse variés, identifiez des sources complémentaires et construisez une argumentation plus solide. C'est comme avoir 5 assistants de recherche avec des expertises différentes.",
    },
    {
      question: "Est-ce que l'utilisation de Cercle GPT respecte l'intégrité académique ?",
      answer:
        "Absolument. Cercle GPT est un outil de recherche et d'analyse, pas un générateur de contenu à copier-coller. Nous incluons des outils de citation et encourageons l'utilisation critique des réponses pour enrichir votre réflexion personnelle.",
    },
    {
      question: "Quels types de travaux académiques sont adaptés à Cercle GPT ?",
      answer:
        "Mémoires, projets de recherche, analyses critiques, revues de littérature, préparation d'exposés, brainstorming créatif, vérification de faits journalistiques... Tout travail nécessitant recherche et analyse approfondie.",
    },
    {
      question: "Puis-je collaborer avec d'autres étudiants IHECS ?",
      answer:
        "Oui ! Partagez vos conversations multi-IA, travaillez ensemble sur des projets de groupe et apprenez des découvertes de vos pairs. La collaboration enrichit l'expérience d'apprentissage.",
    },
    {
      question: "Comment mes données académiques sont-elles protégées ?",
      answer:
        "Toutes vos conversations sont chiffrées de bout en bout. Nous ne partageons jamais vos recherches ou données personnelles. Votre travail académique reste strictement confidentiel et vous appartient entièrement.",
    },
  ]

  return (
    <section id="faq" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Questions fréquentes</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Tout ce que vous devez savoir sur Cercle GPT</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [gdprConsent, setGdprConsent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!gdprConsent) {
      alert("Veuillez accepter la politique de confidentialité pour continuer.")
      return
    }
    alert("Message envoyé avec succès !")
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contactez-nous</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Des questions ? Nous serions ravis de vous entendre. Envoyez-nous un message et nous vous répondrons dans
              les plus brefs délais.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">hello@lecercle.ai</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Adresse</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Avenue des Volontaires 19, 1060 Auderghem (Belgique)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Jean" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Dupont" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jean.dupont@ihecs.be" required />
                </div>

                <div>
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" required />
                </div>

                <div>
                  <Label htmlFor="contactMessage">Message</Label>
                  <Textarea id="contactMessage" placeholder="Parlez-nous de votre demande..." rows={5} required />
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Checkbox
                    id="gdpr-contact"
                    checked={gdprConsent}
                    onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                    required
                  />
                  <Label htmlFor="gdpr-contact" className="text-sm leading-relaxed cursor-pointer">
                    J'accepte que mes données soient collectées et traitées conformément à la{" "}
                    <a
                      href="https://lecercle.ai/politique-de-confidentialite/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      politique de confidentialité
                    </a>{" "}
                    de Cercle GPT. *
                  </Label>
                </div>

                <Button type="submit" className="w-full">
                  Envoyer le message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/cercle-gpt-logo.png" alt="Cercle GPT Logo" width={32} height={32} className="rounded-lg" />
              <h3 className="text-2xl font-bold">Cercle GPT</h3>
            </div>
            <p className="text-gray-400 mb-4">Plateforme multi-IA pour les étudiants et chercheurs de l'IHECS.</p>
            <div className="flex gap-4">
              <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Produit */}
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bêta IHECS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Liste d'attente
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Guide d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutoriels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Communauté
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Nous contacter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Statut
                </a>
              </li>
              <li>
                <a
                  href="https://lecercle.ai/politique-de-confidentialite/"
                  className="hover:text-white transition-colors"
                >
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Cercle GPT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Website Component
export default function CercleGPTWebsite() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <WaitlistSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
