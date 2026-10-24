import React from 'react';
import { ActivePage } from '../types/admissions';
import { GraduationCap, Compass, Search, BookOpen, Bookmark, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  savedCount,
}) => {
  const { currentUser, signInWithGoogle, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setActivePage('home')}
            className="flex flex-col text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-md cursor-pointer"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
              THPT Châu Thị Tế
            </span>
            <span className="text-xs text-emerald-700 font-semibold whitespace-nowrap shrink-0">
              Tuyển sinh 2027
            </span>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActivePage('home')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activePage === 'home'
                  ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                  : ''
              }`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => setActivePage('quiz')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 ${
                activePage === 'quiz'
                  ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                  : ''
              }`}
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              Tư vấn ngành học
            </button>
            <button
              onClick={() => setActivePage('universities')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 ${
                activePage === 'universities'
                  ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                  : ''
              }`}
            >
              <Search className="w-4 h-4 text-emerald-600" />
              Tra cứu đại học
            </button>
            <button
              onClick={() => setActivePage('guide')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 ${
                activePage === 'guide'
                  ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                  : ''
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Cẩm nang 2027
            </button>
          </nav>

          {/* Zone 3: Auth & primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            {savedCount > 0 && (
              <button
                onClick={() => setActivePage('universities')}
                title="Các trường đã lưu"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                <span>{savedCount} đã lưu</span>
              </button>
            )}

            {currentUser ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 py-1 px-2.5 rounded-lg border border-slate-200">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || 'User'}
                      referrerPolicy="no-referrer"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                  ) : (
                    <UserIcon className="w-3.5 h-3.5 text-slate-500" />
                  )}
                  <span className="hidden lg:inline max-w-28 truncate font-semibold">
                    {currentUser.displayName || 'Tài khoản'}
                  </span>
                </div>
                <button
                  onClick={() => logout()}
                  title="Đăng xuất"
                  className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => signInWithGoogle()}
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-emerald-600" />
                <span>Đăng nhập</span>
              </button>
            )}

            <button
              onClick={() => setActivePage('quiz')}
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Bắt đầu tư vấn</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation strip */}
        <div className="flex md:hidden items-center justify-around py-2.5 border-t border-slate-100 text-xs font-medium text-slate-600">
          <button
            onClick={() => setActivePage('home')}
            className={`px-2 py-1 ${activePage === 'home' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Trang chủ
          </button>
          <button
            onClick={() => setActivePage('quiz')}
            className={`px-2 py-1 ${activePage === 'quiz' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Tư vấn ngành
          </button>
          <button
            onClick={() => setActivePage('universities')}
            className={`px-2 py-1 ${activePage === 'universities' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Tra cứu trường {savedCount > 0 && `(${savedCount})`}
          </button>
          <button
            onClick={() => setActivePage('guide')}
            className={`px-2 py-1 ${activePage === 'guide' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Cẩm nang 2027
          </button>
        </div>
      </div>
    </header>
  );
};

