import { useEffect, useState } from 'react';
import { ParallaxSection } from '../cops/ParallaxSection';
import { FeatureCard } from '../cops/FeatureCard';
import { AppMockup } from '../cops/AppMockup';
import { HowItWorksStep } from '../cops/HowItWorksStep';
import { PricingCard } from '../cops/PricingCard';
import { FAQItem } from '../cops/FAQItem';
import * as ZeroHunger from "../assets/Zero_Hunger.png"
import * as Sdg from "../assets/UN_SDG.png"
import * as lettuce from "../assets/lettuce-texture.jpg"
import * as test from "../assets/test.jpeg"



import * as Sdg12 from "../assets/Sustainable_Development_Goal_12.png"
import * as Sdg15 from "../assets/Sustainable_Development_Goal_15.png"

import {
  Sprout,
  Smartphone,
  TrendingUp,
  Users,
  Award,
  ArrowDown,
  Menu,
  X,
  Leaf,
  Droplets,
  Sun,
  Settings,
  Package,
  Zap,
  Heart,
  Shield,
  Truck,
  MessageCircle,
  BookOpen,
  Target,
  Clock,
  Lightbulb,
} from 'lucide-react';
import TeamSection12 from '../cops/Team';

function MarkedHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white bg-opacity-95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Lettuce Grow</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
              <a href="#app" className="text-gray-700 hover:text-green-600 transition-colors">App</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Stories</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors" onClick={()=>{
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1");
              }}>
                Get Growing
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-green-600">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-green-600">How It Works</a>
                <a href="#app" className="text-gray-700 hover:text-green-600">App</a>
                <a href="#pricing" className="text-gray-700 hover:text-green-600">Pricing</a>
                <a href="#testimonials" className="text-gray-700 hover:text-green-600">Stories</a>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors w-fit" onClick={()=>{
                                  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1");

                }}>
                  Get Growing
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg"
        // backgroundImage={lettuce.default}
        speed={0.5}
        overlay={true}
        className="flex items-center justify-center"
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <p className='Tooltip'>Pun</p>
            Don't <u>Leaf</u> Your Dreams Behind
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            Turn your thumb from brown to green with our <em>mint-to-be</em> vertical farming kit. 
            It's thyme to grow your own fresh produce, and lettuce show you how!
          </p>
          <button 
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            Start Your Garden Story
          </button>
          <div className="mt-12 animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-white opacity-75" />
          </div>
        </div>
      </ParallaxSection>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              From Couch Potato to <span className="text-green-600">Garden Hero</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Our vertical farming kit is like having a green fairy godmother – it transforms your space 
              into a flourishing garden faster than you can say "photosynthesis." Whether you're a seasoned 
              gardener or someone who's killed a cactus (we don't judge), Lettuce Grow makes farming 
              as easy as pie... or should we say, <em>as easy as peas</em>?
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 relative">
                <p className='Tooltip absolute top-[-2%]'>Allusion</p>
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-gray-700">Less water than traditional farming (<u>Posiedon</u> would be proud)</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">365</div>
                <p className="text-gray-700">Days of fresh produce (seasonal sadness, bye-bye!)</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">0</div>
                <p className="text-gray-700">Green thumb required (seriously, none!)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              How to Go from <span className="text-green-600">Seed to Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is easier than spelling "photosynthesis" (which, let's be honest, took us three tries). 
              Follow these simple steps and you'll be harvesting happiness in no time!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HowItWorksStep
              icon={Package}
              step={1}
              title="Unbox & Assemble"
              description="Easier than dealing with your Ex, we promise! No mysterious leftover screws or existential crises included."
              delay={0}
            />
            <HowItWorksStep
              icon={Zap}
              step={2}
              title="Plug & Connect"
              description="Connect to power and WiFi. Your plants are about to become more connected than your linkedin profile."
              delay={100}
            />
            <HowItWorksStep
              icon={Sprout}
              step={3}
              title="Plant & Pray"
              description="Add your seeds and let the magic begin. No green thumb required – just green dreams!"
              delay={200}
            />
            <HowItWorksStep
              icon={Heart}
              step={4}
              title="Harvest & Celebrate"
              description="Watch your garden grow and your grocery bills shrink. Victory tastes like fresh mint!"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-green-600">Lettuce Grow</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another pretty face in the garden center. Here's why we're the cream of the crop, 
              the pick of the patch, the... okay, we'll stop with the plant puns (just kidding, we won't).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pesticide-Free Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Your veggies will be cleaner than your browser history. No nasty chemicals, just pure, 
                unadulterated plant goodness that would make Mother Earth weep tears of joy.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Zero Food Miles</h3>
              <p className="text-gray-600 leading-relaxed">
                Your salad's carbon footprint is smaller than a fairy's shoe size. From garden to plate 
                in seconds – it's like teleportation, but for vegetables!
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">24/7 Growing Season</h3>
              <p className="text-gray-600 leading-relaxed">
                Winter, spring, summer, or fall – your plants don't care about the weather forecast. 
                They're too busy being fabulous and photogenic.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Educational Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn while you grow! It's like having a botany degree, but with more snacking and 
                less student debt. Your kids will think you're a wizard.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Space-Saving Superstar</h3>
              <p className="text-gray-600 leading-relaxed">
                Perfect for apartments, condos, or anywhere you can fit a small appliance. 
                It's like having a farm in a phone booth (if phone booths still existed).
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a community of growers who share tips, tricks, and terrible plant puns. 
                It's like social media, but everyone's actually growing something meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
                <p className='Tooltip mx-auto'>Hyperbole</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Features That'll Make You Say <span className="text-green-600">"Holy Basil!"</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our kit comes loaded with more features than a Swiss Army knife at a camping convention. 
              Each one designed to make your farming journey smoother than butter lettuce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Sprout}
              title="Vertical Victory"
              description="Grow up, not out! Our vertical design maximizes your harvest while minimizing your footprint. It's like a skyscraper for your salad."
              delay={0}
            />
            <FeatureCard
              icon={Droplets}
              title="Hydroponic Harmony"
              tooltip="Personification"
              description="Water-based growing that's more efficient than a German engineer. "
              underlined="Your plants will be swimming in nutrients, not drowning in confusion."
              delay={100}
            />
            <FeatureCard
              icon={Sun}
              tooltip="Simile"
              title="LED Luminosity"
              description="Full-spectrum LED lights that give your plants the VIP treatment."
              underlined=" It's like having the sun on speed dial, minus the sunburn."
              delay={200}
            />
            <FeatureCard
              icon={Settings}
              title="Automated Awesomeness"
              description="Set it and forget it! Our system handles watering, lighting, and nutrients so you can focus on the important things... like naming your plants."
              delay={300}
            />
            <FeatureCard
              icon={Smartphone}
              title="Smart Supervision"
              description="Monitor your garden from anywhere with our companion app. It's like having a crystal ball, but for vegetables."
              delay={400}
            />
            <FeatureCard
              icon={Award}
              tooltip="Alliteration"
              title="Beginner Brilliant"
              description="So easy, even your houseplant-challenged friends will succeed. We've made gardening more foolproof than a labrador."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Pricing That Won't Make You <span className="text-green-600">Turnip</span> Your Nose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe fresh food shouldn't cost a fortune. Our prices are so reasonable, 
              you'll have more dough left over for... well, actual dough (bread pun intended).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Sprout Starter"
              price="1200TK"
              period="one-time"
              features={[
                "Basic vertical growing tower",
                "LED grow lights included",
                "Starter seed variety pack",
                "Basic mobile app access",
                "Email support",
                "30-day money-back guarantee"
              ]}
              buttonText="Start Small"
              delay={0}
            />
            
            <PricingCard
              title="Garden Guru"
              price="2500TK"
              period="one-time"
              features={[
                "Premium vertical growing system",
                "Advanced LED spectrum control",
                "Premium seed subscription (3 months)",
                "Full app features + analytics",
                "Priority support",
                "Free shipping",
                "60-day money-back guarantee",
                "Bonus herb starter kit"
              ]}
              buttonText="Go Pro"
              popular={true}
              delay={100}
            />
            
            <PricingCard
              title="Farm Fanatic"
              price="6000TK"
              period="one-time"
              features={[
                "Deluxe multi-tower system",
                "Smart automation sensors",
                "Premium seed subscription (12 months)",
                "VIP app features + community",
                "24/7 phone support",
                "Free shipping + setup",
                "90-day money-back guarantee",
                "Exclusive masterclass access"
              ]}
              buttonText="Go All In"
              delay={200}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include free software updates and access to our growing community of plant parents.
            </p>
            <p className="text-sm text-gray-500">
              *Prices in BDT. Shipping costs may apply outside Bangladesh. Plants not included in shipping weight calculations.
            </p>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section id="app" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                The App That's Simply <span className="text-green-600">Unbe-leaf-able</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our companion app is like having a personal garden guru in your pocket. It watches over 
                your plants with the dedication of a helicopter parent and the wisdom of Mother Nature herself.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Growth Tracking</h3>
                    <p className="text-gray-600">Watch your plants grow like you're binge-watching your favorite series, but with more chlorophyll.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Notifications</h3>
                    <p className="text-gray-600">Get alerts that are more helpful than your weather app and less annoying than your social media notifications.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Garden</h3>
                    <p className="text-gray-600">Share your successes, learn from others, and join a community that's rooting for you (pun absolutely intended).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:text-center">
              <AppMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Sdg Section */}
      <section id="sdg" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:text-center flex flex-col flex-1  items-center space-y-4">
              {/* <img src={ZeroHunger.default} alt="Sdg2" className="w-full max-w-[200px] object-contain" /> */}
              {/* <img src={Sdg12.default} alt="Sdg12" className="w-full max-w-[200px] object-contain" /> */}
              {/* <img src={Sdg15.default} alt="Sdg15" className="w-full max-w-[200px] object-contain" /> */}
              <img src={Sdg.default} alt="UN_SDG_Logo" className='w-full' />
            </div>
            <div>
                <p className='Tooltip'>Annaphora</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                <u>Growing</u> greens. More like <u>growing</u> <span className="text-green-600">Goals!</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our incentive is not only beneficial for the plants but for you as well. Covering 3 SDG's and helping to make the world a better place.

              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="  flex-shrink-0">
                    <img src={ZeroHunger.default} alt="Sdg2" className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">SDG-2: Zero Hunger</h3>
                    <p className="text-gray-600">Brings nutrition to your plates directly from your own home.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <div className="bg-blue-100 p-3 rounded-full flex-shrink-0"> */}
                  <div className="flex-shrink-0">
                    {/* <Droplets className="w-6 h-6 text-blue-600" /> */}
                    <img src={Sdg12.default} alt="Sdg12" className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">SDG-12: Responsible consumption and production</h3>
                    <p className="text-gray-600">Encourages eco-freindly farming practices that uses fewer resources</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                        <img src={Sdg15.default} alt="Sdg15" className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">SDG-15: Life on land</h3>
                    <p className="text-gray-600">Allows greater use of available space</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* More Testimonials Section */}
      <section className="py-20 bg-white" id='testimonials'>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Here are some <span className="text-green-600">Glowing</span> Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it – here's what our growing community of plant whisperers, 
              former plant assassins, and newfound green thumbs have to say!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4 italic">
                "My herbs are so fresh, Gordon Ramsay would weep. I've gone from microwave meals to masterchef!"
              </p>
              <div className="text-green-700 font-semibold text-sm">- Chef wannabe Kuddus</div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4 italic">
                "I used to kill succulents. Now I'm growing enough lettuce to feed a small village. It's a miracle!"
              </p>
              <div className="text-blue-700 font-semibold text-sm">- Reformed plant killer Hulka</div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4 italic">
                "My kids think I'm a wizard because I can grow food indoors. I'm not correcting them."
              </p>
              <div className="text-purple-700 font-semibold text-sm">- Jadukari ma Sokhina</div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4 italic">
                "Best investment ever! My grocery bills are down 40% and my Instagram likes are up 200%."
              </p>
              <div className="text-yellow-700 font-semibold text-sm">- Tiktok Influencer Sowad</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers! Here are the most common queries from our 
              community of aspiring agricultural artists and budding botanical bosses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <FAQItem
              question="Do I really need zero gardening experience?"
              answer="Absolutely! Our system is so user-friendly, even people who've killed plastic plants have succeeded. We've designed everything to be foolproof – and we mean that in the nicest way possible. The app guides you through every step, and our community is always there to help if you get stuck."
              delay={0}
            />
            
            <FAQItem
              question="How much space do I need?"
              answer="About as much space as a small refrigerator! Our vertical design maximizes growing potential while minimizing your footprint. Perfect for apartments, condos, or anywhere you can fit a coffee table. If you have room for a houseplant, you have room for a Lettuce Grow system."
              delay={100}
            />
            
            <FAQItem
              question="What can I grow in this thing?"
              answer="Almost anything that doesn't grow on trees! Lettuce, herbs, spinach, kale, cherry tomatoes, peppers, and more. We provide seed recommendations based on your experience level and taste preferences. Start with easy wins like lettuce and herbs, then branch out to more adventurous crops as your confidence grows."
              delay={200}
            />
            
            <FAQItem
              question="How much does it cost to operate?"
              answer="Less than your daily coffee habit! The LED lights are super energy-efficient, using about as much electricity as a few light bulbs. Water and nutrients cost pennies per harvest. Most users save money within the first few months compared to buying organic produce at the store."
              delay={300}
            />
            
            <FAQItem
              question="What if my plants die anyway?"
              answer="First, don't panic – it happens to the best of us! Our app monitors everything and sends alerts before problems become plant-astrophes. Plus, our support team and community are like plant paramedics – always ready to help revive your green dreams. We also offer a satisfaction guarantee because we believe in our system (and in you)!"
              delay={400}
            />
            
            <FAQItem
              question="Is this suitable for kids?"
              answer="Absolutely! Kids love watching plants grow – it's like having a real-life science experiment in your kitchen. The system is safe, educational, and a great way to teach children about where food comes from. Plus, they're more likely to eat vegetables they've grown themselves. It's a win-win-win situation!"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ParallaxSection
        backgroundImage={test.default}
        speed={0.3}
        overlay={true}
        className="flex items-center justify-center"
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Tales from the <span className="text-green-400">Garden Side</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl">
              <p className="text-lg mb-6 italic">
                "I went from plant killer to plant thriller in just three weeks! My neighbors are now calling me the 'Lettuce Whisperer.'"
              </p>
              <div className="text-green-400 font-semibold">- Ohona, Former Plant Assassin</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl">
              <p className="text-lg mb-6 italic">
                "My apartment is now fresher than a mint commercial. I'm growing enough herbs to open my own Italian restaurant!"
              </p>
              <div className="text-green-400 font-semibold">- Saheen, Urban Farmer</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl">
              <p className="text-lg mb-6 italic">
                "The app is so smart, I'm convinced it has a degree in plant psychology. My basil has never been happier!"
              </p>
              <div className="text-green-400 font-semibold">- Baten, Tech Enthusiast</div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <p className='Tooltip mx-auto'>Idiom</p>
            Ready to <u>Turn Over a New Leaf?</u>
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't let this opportunity wilt away! Join thousands of happy growers who've discovered that 
            farming is actually quite ap-pea-ling. Your future self (and your salad bowl) will thank you.
          </p>

          <div className="space-y-6 md:space-y-0 md:flex md:justify-center md:space-x-6">
            <button onClick={()=>{
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1");
            }} className="bg-white text-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl w-full md:w-auto">
              Start Growing Today
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 w-full md:w-auto">
              Learn More
            </button>
          </div>

          <div className="mt-12 text-green-200">
            <p className="text-sm">30-day money-back guarantee • Free shipping • No green thumb required</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Let This Opportunity <span className="text-green-200">Wilt</span> Away!
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy growers who've discovered that the grass really is greener on the other side – 
            especially when you're growing it yourself! Your future self (and your taste buds) will thank you.
          </p>

          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">🌱 Limited Time Offer 🌱</h3>
            <p className="text-green-100 mb-6">
              Order in the next 48 hours and get FREE shipping plus a bonus herb starter pack worth 1000TK!
            </p>
            <div className="text-3xl font-bold text-yellow-300 mb-2">Save 1000TK + Free Shipping</div>
            <div className="text-green-200 text-sm">*Offer expires soon. Don't leaf it too late!</div>
          </div>

          <div className="space-y-6 md:space-y-0 md:flex md:justify-center md:space-x-6">
            <button className="bg-white text-green-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl w-full md:w-auto">
              Claim Your Garden Now
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 w-full md:w-auto">
              Ask a Question
            </button>
          </div>

          <div className="mt-12 text-green-200">
            <p className="text-sm">✅ 30-day money-back guarantee ✅ Free shipping ✅ No green thumb required</p>
            <p className="text-xs mt-2 opacity-75">Over 10,000 happy customers and growing!</p>
          </div>
        </div>
      </section>
      <section className='py-20'>
        <TeamSection12 />
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold">Lettuce Grow</span>
              </div>
              <p className="text-gray-400 mb-4">
                Growing dreams, one plant at a time. From seed to salad, we're with you every step of the way.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">i</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#app" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.facebook.com/groups/400468005045158" target="_blank" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="https://www.facebook.com/sharaf.ahmed.14855" target='_blank' className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="https://www.facebook.com/groups/1318832148625381" target="_blank" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="https://homesteadbrooklyn.com/all/2017/1/21/growing-plants-indoors-a-beginners-guide" target='_blank' className="hover:text-white transition-colors">Growing Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://dontasktoask.com/" target="_blank" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="https://dontasktoask.com/" target="_blank" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="https://dontasktoask.com/" target="_blank" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="https://dontasktoask.com/" target="_blank" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                <p>&copy; 2025 Lettuce Grow. All rights reserved.</p>
                <p className="mt-1 text-sm">Privacy Policy | Terms of Service | Cookie Policy</p>
              </div>
              <div className="text-gray-400 text-center md:text-right">
                <p className="italic text-green-400">Growing dreams, one plant at a time.</p>
                <p className="text-sm mt-1">Made with 💚 for plant lovers everywhere</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default MarkedHome;