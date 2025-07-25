import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
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