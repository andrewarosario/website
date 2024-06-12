import { CloseIcon, OpenIcon } from '@/components/Icons';

type ToggleButtonProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const ToggleButton = ({
  isOpenMenu,
  handleToggleMenu
}: ToggleButtonProps) => {
  return (
    <button
      className="flex items-center gap-2"
      onClick={handleToggleMenu}
      aria-expanded={isOpenMenu}
      aria-controls="mobile-menu"
    >
      <span>Menu</span>
      {isOpenMenu && <CloseIcon size={32} data-testid="close-icon" />}
      {!isOpenMenu && <OpenIcon size={32} data-testid="open-icon" />}
    </button>
  );
};
