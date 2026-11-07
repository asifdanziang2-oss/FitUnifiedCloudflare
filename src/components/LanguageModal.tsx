import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight } from "lucide-react";

export const LanguageModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (isOpen: boolean) => void }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleSelect = (lang: 'en' | 'hi') => {
    setLanguage(lang);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-[24px] p-6 bg-white shadow-2xl dark:bg-slate-950 border-0">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-semibold text-center text-slate-900 dark:text-slate-50 flex flex-col items-center">
            {t('choose_language')}
            <span className="block text-sm font-medium text-slate-500 mt-1 opacity-80">{t('language_subtitle')}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          {(['en', 'hi'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`flex items-center justify-between w-full p-4 rounded-xl border transition-all duration-300 group hover:shadow-md hover:border-primary/50 hover:bg-primary/5 ${
                language === lang 
                  ? 'border-primary bg-primary/5 shadow-sm' 
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  language === lang 
                    ? 'border-primary bg-primary' 
                    : 'border-slate-300 dark:border-slate-600 group-hover:border-primary/50'
                }`}>
                  {language === lang && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className={`text-base font-semibold ${language === lang ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>
                  {t(lang === 'en' ? 'english' : 'hindi')}
                </span>
              </div>
              <ChevronRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${language === lang ? 'text-primary' : 'text-slate-400'}`} />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
