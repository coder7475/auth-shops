import { useState } from "react";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { LogOut, UserCircle } from "lucide-react";
import type { IShop } from "@/types/shop.types";
import { useAppDispatch } from "@/redux/hook";
import { Link, useNavigate } from "react-router";
import { getShopName } from "@/utils/getShopNames";

export default function DashboardLayout() {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  // State for menu and logout confirmation dialog
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const userName = data?.user_name || "User";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const shop = getShopName();

  const handleLogout = async () => {
    await logout(undefined);

    setShowLogoutConfirm(false);
    setShowMenu(false);

    dispatch(authApi.util.resetApiState());

    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b  shadow-sm">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="relative">
          <button
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => setShowMenu((v) => !v)}
            aria-label="Profile menu"
          >
            <UserCircle className="w-8 h-8 text-gray-600" />
            <span className="hidden sm:inline text-gray-700">{userName}</span>
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg z-10">
              <div className="px-4 py-2 border-b font-semibold text-gray-700">
                Your Shops
              </div>
              <ul className="max-h-48 overflow-y-auto">
                {data?.shops && data.shops.length > 0 ? (
                  data.shops.map((shop: IShop, idx: number) => (
                    <Link
                      key={shop.shop_id || idx}
                      to={`${import.meta.env.VITE_PROTOCOL}://${shop.shop_name}.${import.meta.env.VITE_SHOP_DOMAIN}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 text-gray-800">
                        {shop.shop_name}
                      </li>
                    </Link>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-400 italic">
                    No shops registered
                  </li>
                )}
              </ul>
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 border-t"
                onClick={() => {
                  setShowMenu(false);
                  setShowLogoutConfirm(true);
                }}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="flex-1 p-8">
        <h1 className="text-xl font-bold text-primary">This is {shop} shop</h1>
      </main>
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded shadow-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-2">Confirm Logout</h2>
            <p className="mb-4 text-gray-600">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
