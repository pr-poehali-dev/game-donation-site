import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [selectedRarity, setSelectedRarity] = useState('all');

  const weaponSkins = [
    {
      id: 1,
      name: "Cyber Knife",
      type: "Нож",
      rarity: "legendary",
      price: "2499₽",
      image: "/img/f1ca41f2-1686-4dc2-8423-03fb5a915445.jpg",
      wear: "Factory New",
      rarityColor: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      name: "Neon Assault",
      type: "Автомат",
      rarity: "epic",
      price: "1299₽",
      image: "/img/bfa44825-ef75-470f-81d6-b7b89288305f.jpg",
      wear: "Minimal Wear",
      rarityColor: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      name: "Electric Storm",
      type: "Пистолет",
      rarity: "rare",
      price: "599₽",
      image: "/img/7fd1ff6f-15ae-402a-825f-6d01c1b2c21d.jpg",
      wear: "Field-Tested",
      rarityColor: "from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      name: "Plasma Edge",
      type: "Нож",
      rarity: "legendary",
      price: "3199₽",
      image: "/img/f1ca41f2-1686-4dc2-8423-03fb5a915445.jpg",
      wear: "Factory New",
      rarityColor: "from-yellow-400 to-orange-500"
    },
    {
      id: 5,
      name: "Quantum Rifle",
      type: "Снайперская винтовка",
      rarity: "epic",
      price: "1899₽",
      image: "/img/bfa44825-ef75-470f-81d6-b7b89288305f.jpg",
      wear: "Minimal Wear",
      rarityColor: "from-purple-400 to-pink-500"
    },
    {
      id: 6,
      name: "Digital Fury",
      type: "Пистолет",
      rarity: "common",
      price: "299₽",
      image: "/img/7fd1ff6f-15ae-402a-825f-6d01c1b2c21d.jpg",
      wear: "Well-Worn",
      rarityColor: "from-gray-400 to-gray-600"
    }
  ];

  const rarityFilters = [
    { id: 'all', name: 'Все', count: weaponSkins.length },
    { id: 'legendary', name: 'Легендарные', count: weaponSkins.filter(s => s.rarity === 'legendary').length, color: 'text-yellow-400' },
    { id: 'epic', name: 'Эпические', count: weaponSkins.filter(s => s.rarity === 'epic').length, color: 'text-purple-400' },
    { id: 'rare', name: 'Редкие', count: weaponSkins.filter(s => s.rarity === 'rare').length, color: 'text-blue-400' },
    { id: 'common', name: 'Обычные', count: weaponSkins.filter(s => s.rarity === 'common').length, color: 'text-gray-400' }
  ];

  const filteredSkins = selectedRarity === 'all' 
    ? weaponSkins 
    : weaponSkins.filter(skin => skin.rarity === selectedRarity);

  const donationPackages = [
    {
      id: 1,
      title: "Новичок",
      price: "99₽",
      features: ["Приоритетная поддержка", "Особый ник", "Доступ к VIP чату"],
      color: "bg-gaming-blue",
      popular: false
    },
    {
      id: 2,
      title: "Герой",
      price: "299₽",
      features: ["Все привилегии Новичка", "Уникальные эмоции", "Бонус опыта +50%", "Приватные каналы"],
      color: "bg-gaming-orange",
      popular: true
    },
    {
      id: 3,
      title: "Легенда",
      price: "599₽",
      features: ["Все привилегии Героя", "Персональный ментор", "Эксклюзивные предметы", "Доступ к закрытым турнирам"],
      color: "bg-gaming-dark",
      popular: false
    }
  ];

  const topDonators = [
    { name: "ProGamer2024", amount: 15890, rank: 1, progress: 100 },
    { name: "ElitePlayer", amount: 12450, rank: 2, progress: 78 },
    { name: "GameMaster", amount: 9870, rank: 3, progress: 62 },
    { name: "DigitalHero", amount: 7650, rank: 4, progress: 48 },
    { name: "CyberWarrior", amount: 5430, rank: 5, progress: 34 }
  ];

  const privileges = [
    { icon: "Crown", title: "VIP Статус", desc: "Эксклюзивные привилегии" },
    { icon: "Zap", title: "Бонус Опыта", desc: "Ускоренная прокачка" },
    { icon: "Shield", title: "Приоритет", desc: "Первоочередная поддержка" },
    { icon: "Star", title: "Уникальные Предметы", desc: "Редкие игровые элементы" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-darkBlue to-gaming-accent">
      {/* Header */}
      <header className="border-b border-gaming-blue/20 bg-gaming-dark/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/img/14d6eaff-45d8-41f4-89c2-914c13979c3f.jpg" alt="Gaming Logo" className="w-10 h-10 rounded-lg animate-glow" />
              <h1 className="text-2xl font-orbitron font-bold text-white">GameDonate</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gaming-blue hover:text-gaming-orange transition-colors font-roboto">Главная</a>
              <a href="#donate" className="text-gaming-blue hover:text-gaming-orange transition-colors font-roboto">Донаты</a>
              <a href="#skins" className="text-gaming-blue hover:text-gaming-orange transition-colors font-roboto">Скины</a>
              <a href="#rating" className="text-gaming-blue hover:text-gaming-orange transition-colors font-roboto">Рейтинг</a>
            </nav>
            <Button className="bg-gradient-to-r from-gaming-orange to-gaming-blue hover:scale-105 transition-transform">
              Войти в игру
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-orbitron font-black text-white mb-6 animate-fade-in">
            Поддержи <span className="bg-gradient-to-r from-gaming-orange to-gaming-blue bg-clip-text text-transparent">Игру</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-roboto animate-fade-in">
            Получи эксклюзивные привилегии и помоги развитию проекта
          </p>
          <div className="flex justify-center space-x-4 animate-scale-in">
            <Button size="lg" className="bg-gaming-orange hover:bg-gaming-orange/80 hover:scale-105 transition-all">
              <Icon name="Gamepad2" className="mr-2" />
              Начать донат
            </Button>
            <Button size="lg" variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section id="donate" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center text-white mb-12">Донат Пакеты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {donationPackages.map((pkg) => (
              <Card key={pkg.id} className={`relative overflow-hidden border-2 transition-all hover:scale-105 hover:shadow-2xl bg-gaming-dark/80 backdrop-blur-sm ${pkg.popular ? 'border-gaming-orange animate-glow' : 'border-gaming-blue/30'}`}>
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-gaming-orange text-white animate-float">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-orbitron text-white">{pkg.title}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-gaming-orange">{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Icon name="Check" className="w-4 h-4 text-gaming-blue mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-gaming-orange hover:bg-gaming-orange/80' : 'bg-gaming-blue hover:bg-gaming-blue/80'} transition-all hover:scale-105`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privileges Section */}
      <section className="py-16 px-4 bg-gaming-darkBlue/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center text-white mb-12">Система Привилегий</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {privileges.map((privilege, index) => (
              <Card key={index} className="bg-gaming-dark/60 border-gaming-blue/20 hover:border-gaming-orange/50 transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name={privilege.icon} className="w-12 h-12 text-gaming-orange mx-auto mb-4" />
                  <h3 className="text-lg font-orbitron font-bold text-white mb-2">{privilege.title}</h3>
                  <p className="text-gray-400 text-sm">{privilege.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weapon Skins Section */}
      <section id="skins" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center text-white mb-8">Скины Оружия</h2>
          <p className="text-center text-gray-300 mb-12 font-roboto">Уникальные скины для твоего арсенала</p>
          
          {/* Rarity Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {rarityFilters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedRarity === filter.id ? "default" : "outline"}
                onClick={() => setSelectedRarity(filter.id)}
                className={`transition-all hover:scale-105 ${
                  selectedRarity === filter.id 
                    ? 'bg-gaming-orange hover:bg-gaming-orange/80' 
                    : 'border-gaming-blue/30 text-gray-300 hover:border-gaming-orange/50 hover:text-white'
                }`}
              >
                <span className={filter.color || 'text-current'}>{filter.name}</span>
                <Badge variant="secondary" className="ml-2 bg-gaming-dark/50">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Skins Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkins.map((skin) => (
              <Card key={skin.id} className="bg-gaming-dark/80 border-gaming-blue/30 hover:border-gaming-orange/50 transition-all hover:scale-105 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={skin.image} 
                    alt={skin.name}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${skin.rarityColor} text-white`}>
                    {skin.rarity.toUpperCase()}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-orbitron font-bold text-white text-lg">{skin.name}</h3>
                      <p className="text-gaming-blue text-sm">{skin.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gaming-orange text-lg">{skin.price}</p>
                      <p className="text-xs text-gray-400">{skin.wear}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1 bg-gaming-orange hover:bg-gaming-orange/80">
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-1" />
                      Купить
                    </Button>
                    <Button size="sm" variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white">
                      <Icon name="Eye" className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSkins.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Package" className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 font-roboto">Нет скинов выбранной редкости</p>
            </div>
          )}
        </div>
      </section>

      {/* Top Donators */}
      <section id="rating" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center text-white mb-12">Топ Донатеров</h2>
          <Card className="bg-gaming-dark/80 border-gaming-blue/30">
            <CardContent className="p-6">
              <div className="space-y-4">
                {topDonators.map((donor) => (
                  <div key={donor.rank} className="flex items-center justify-between p-4 rounded-lg bg-gaming-darkBlue/30 hover:bg-gaming-darkBlue/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className={`text-white border-2 ${
                        donor.rank === 1 ? 'border-yellow-400 bg-yellow-400/20' :
                        donor.rank === 2 ? 'border-gray-400 bg-gray-400/20' :
                        donor.rank === 3 ? 'border-amber-600 bg-amber-600/20' : 'border-gaming-blue bg-gaming-blue/20'
                      }`}>
                        #{donor.rank}
                      </Badge>
                      <div>
                        <p className="font-orbitron font-bold text-white">{donor.name}</p>
                        <p className="text-sm text-gray-400">{donor.amount.toLocaleString()}₽ донатов</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Progress value={donor.progress} className="w-24" />
                      <Icon name="Trophy" className="w-5 h-5 text-gaming-orange" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gaming-dark/50 border-t border-gaming-blue/20 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-roboto">© 2024 GameDonate. Все права защищены.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Icon name="Github" className="w-6 h-6 text-gaming-blue hover:text-gaming-orange cursor-pointer transition-colors" />
            <Icon name="Twitter" className="w-6 h-6 text-gaming-blue hover:text-gaming-orange cursor-pointer transition-colors" />
            <Icon name="MessageCircle" className="w-6 h-6 text-gaming-blue hover:text-gaming-orange cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;