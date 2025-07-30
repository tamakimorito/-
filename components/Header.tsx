import React from 'react';
import { CsvIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-6">
        <div className="flex items-center justify-center gap-4">
            <CsvIcon className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
                コールキュー追加CSV生成マシン
            </h1>
        </div>
        <p className="mt-3 text-lg text-slate-400 max-w-2xl mx-auto">
            コールキューに内線番号を簡単に追加し、修正済みのCSVファイルをダウンロードします。
        </p>
    </header>
  );
};

export default Header;