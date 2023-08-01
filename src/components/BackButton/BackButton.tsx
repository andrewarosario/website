import { ArrowLeftIcon } from '@/components/Icons';

import * as S from './styles';

export const BackButton = () => {
  return (
    <S.Link href="/">
      <S.IconContainer>
        <ArrowLeftIcon
          size={20}
          className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
        />
      </S.IconContainer>

      <S.Text>Voltar</S.Text>
    </S.Link>
  );
};
