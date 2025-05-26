
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { signIn, user } = useAuth();

  // Visual captcha state - not used for authentication
  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  const handleCaptchaChange = () => {
    setCaptchaCompleted(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!email || !password) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // We still show the captcha, but don't actually use the token
    if (!captchaCompleted) {
      toast({
        title: "Erro",
        description: "Por favor, complete o captcha.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Sign in without captcha token
      const { error } = await signIn(email, password);

      if (error) {
        toast({
          title: "Erro no login",
          description: error.message || "Falha no login. Verifique suas credenciais.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sucesso!",
          description: "Login realizado com sucesso.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Ocorreu um erro durante o login.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect if user is already logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Entre na sua conta</h2>
          <p className="mt-2 text-sm text-gray-600">
            Ou{' '}
            <Link to="/register" className="font-medium text-primary hover:text-primary/80">
              cadastre-se agora
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaChange}
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
