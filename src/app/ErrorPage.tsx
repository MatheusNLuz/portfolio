import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error('App Error:', error);

  let errorMessage = 'Ocorreu um erro inesperado em nosso sistema.';
  let statusCode = '500';

  if (isRouteErrorResponse(error)) {
    statusCode = error.status.toString();
    errorMessage = error.statusText || error.data?.message || errorMessage;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex items-center justify-center p-6 dot-grid">
      <div className="max-w-xl w-full">
        <div className="glass-panel p-8 sm:p-12 flex flex-col items-center text-center space-y-6 relative overflow-hidden group">
          {/* Subtle glow effect on hover */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-sky-500/20 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center relative z-10 shadow-2xl">
            <AlertTriangle className="w-10 h-10 text-sky-500" />
          </div>

          <div className="space-y-2 relative z-10">
            <h1 className="font-display font-extrabold text-4xl text-slate-900 tracking-tight">
              Erro {statusCode}
            </h1>
            <p className="text-slate-600 text-lg">
              {errorMessage}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 w-full text-left relative z-10">
            <p className="text-xs text-slate-600 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              Nossos engenheiros foram notificados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4 relative z-10">
            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full sm:w-auto"
              leftIcon={<RotateCcw className="w-4 h-4" />}
              onClick={() => window.location.reload()}
            >
              Tentar Novamente
            </Button>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto"
              leftIcon={<Home className="w-4 h-4" />}
              onClick={() => window.location.href = '/'}
            >
              Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
