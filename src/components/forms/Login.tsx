import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import ButtonFill from '../button/ButtonFill';
import { Link } from 'react-router';

// Zod schema for form validation
const loginSchema = z.object({
    email: z.string().email('Must be a valid email').min(1, 'Email is required'),
    password: z.string()
        .min(1, 'Password is required')
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Must contain at least one number')
        .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character')
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data: LoginFormData) => {
        console.log(data);
        reset();
    };

    return (
        <div className="w-full p-6 px-6 sm:px-8 md:px-12 rounded-[20px] bg-[#EBF5FF]/50 shadow-[0px_0px_28.2px_0px_#80B0E280_inset]">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 p-8">Welcome to NAPMaster</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className='mb-6'>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className={`h-5 w-5 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} />
                        </div>
                        <input
                            id="email"
                            type="email"
                            placeholder='Enter your email'
                            autoComplete="email"
                            {...register('email')}
                            className={`block w-full pl-10 px-6 py-4 rounded-lg border ${errors.email ? 'border-red-500' : 'border-[#222E48]/20'} shadow-sm focus:outline-none ffocus:ring-1 focus:ring-[#007DFC] focus:border-[#007DFC]`}
                        />
                    </div>
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                <div className='mb-6'>
                    <div className="relative mb-2">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className={`h-5 w-5 ${errors.password ? 'text-red-500' : 'text-gray-400'}`} />
                        </div>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            {...register('password')}
                            className={`block w-full pl-10 px-6 py-4 rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007DFC]`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            ) : (
                                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                    )}
                    <Link to="/forgot-password" className="mt-1 text-sm font-semibold text-[#007DFC]">Forgot your password?</Link>
                </div>

                <ButtonFill btnText='Login' type='submit' className="w-full py-4" />
            </form>
            <p className="mt-4 text-sm font-semibold text-center text-gray-600 mb-5">
                Don't have an account? <Link to="/register" className="text-[#007DFC]">Sign up</Link>
            </p>
        </div>
    );
}