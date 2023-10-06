import {useTranslation} from 'react-i18next';
import cls from './LanguageSwitcher.module.scss';
import {cn} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from '../../../shared/ui/Button/Button';


interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
  const {t, i18n} = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
        className={cn(cls.languageSwitcher, {}, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={toggleLang}>
        {t('language')}
      </Button>
  )
};
