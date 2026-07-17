import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-card border-t border-brand-border py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="Veitik Studio" width={64} height={64} className="w-16 h-16 object-contain" />
            </Link>
            <p className="text-brand-secondary text-lg max-w-sm mb-8 leading-relaxed">
              Премиальная цифровая студия, помогающая малому бизнесу расти онлайн через современные решения.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-brand-white text-lg mb-6">Навигация</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#about" className="text-brand-secondary hover:text-brand-white transition-colors">О нас</Link></li>
              <li><Link href="#services" className="text-brand-secondary hover:text-brand-white transition-colors">Услуги</Link></li>
              <li><Link href="#portfolio" className="text-brand-secondary hover:text-brand-white transition-colors">Работы</Link></li>
              <li><Link href="#faq" className="text-brand-secondary hover:text-brand-white transition-colors">Вопросы</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-brand-white text-lg mb-6">Контакты</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://t.me/scrupix" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-white transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:veityt@yandex.ru" className="text-brand-secondary hover:text-brand-white transition-colors">
                  veityt@yandex.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-secondary/60 text-sm">
            © {new Date().getFullYear()} Veitik Studio. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-brand-secondary/60 hover:text-brand-white text-sm transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
