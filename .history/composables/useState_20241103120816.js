export const useMainToken = () => useState(() => []);
export const useRefreshMainToken = () => useState(() => []);
export const useToken = () => useState(() => []);
export const useSocialMenus = () => useState(() => []);
export const useMainMenus = () => useState(() => []);
export const useMenusFooter = () => useState(() => []);
export const useCurrency = () => useState(() => []);
export const useCartStore = () => useState(() => []);
export const useUserInfo = () => useState(() => []);
export const useAllProductsTypes = () => useState(() => []);
export const useAccountType = () => useState(() => []);
export const useLang = () => useState(() => []);
export const useAgeCategory = () => useState(() => []);
export const useAlltournaments = () => useState(() => []);
export const useGender = () =>
  useState(() => [
    {
      id: 1,
      nameAr: "ذكر",
      nameEn: "Male",
    },
    {
      id: 2,
      nameAr: "انثى",
      nameEn: "Female",
    },
  ]);
export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));
export const useImageLouded = () =>
  useState(() => ({
    loaded: false,
  }));
export const useUserId = () =>
  useState(() => ({
    UserId: null,
  }));

export const useCart = () =>
  useState(() => ({
    items: new Array(),
    totalQty: 0,
    totalPrice: 0,
  }));

export const useOpenNav = () => useState(() => false);
export const princedomORMap = () => useState(() => true);

export const showModal = () => useState(() => false);
export const modalData = () => useState(() => [{ id: 0, info: "", image: "" }]);

export const useSidebar = () => useState(() => false);
export const useActiveLink = () => useState(() => false);
export const useSubActiveLink = () => useState(() => false);
