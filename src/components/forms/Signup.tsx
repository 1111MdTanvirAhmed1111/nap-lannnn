import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import ButtonFill from '../button/ButtonFill';
import { Link } from 'react-router';

// Zod schema for form validation
const signupSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Must be a valid email').min(1, 'Email is required'),
    password: z.string()
        .min(1, 'Password is required')
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Must contain at least one number')
        .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character'),
    confirmPassword: z.string().min(1, 'Confirm Password is required')
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema)
    });

    const onSubmit = (data: SignupFormData) => {
        console.log(data);
        reset();
    };

    return (
        <div className="w-full p-6 px-6 md:px-8 sm:px-12 rounded-[20px] bg-[#EBF5FF]/50 shadow-[0px_0px_28.2px_0px_#80B0E280_inset]">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 px-8 py-6">Create Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name field */}
                <div className="mb-6">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className={`h-5 w-5 ${errors.name ? 'text-red-500' : 'text-gray-400'}`} />
                        </div>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            {...register('name')}
                            className={`block w-full pl-10 px-6 py-4 rounded-lg border ${errors.name ? 'border-red-500' : 'border-[#222E48]/20'} shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007DFC] focus:border-[#007DFC]`}
                        />
                    </div>
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                {/* Email field */}
                <div className="mb-6">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className={`h-5 w-5 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} />
                        </div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            {...register('email')}
                            className={`block w-full pl-10 px-6 py-4 rounded-lg border ${errors.email ? 'border-red-500' : 'border-[#222E48]/20'} shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007DFC] focus:border-[#007DFC]`}
                        />
                    </div>
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                {/* Password field */}
                <div className="mb-6">
                    <div className="relative mb-2">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className={`h-5 w-5 ${errors.password ? 'text-red-500' : 'text-gray-400'}`} />
                        </div>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            autoComplete="new-password"
                            {...register('password')}
                            className={`block w-full pl-10 px-6 py-4 rounded-lg border ${errors.password ? 'border-red-500' : 'border-[#222E48]/20'} shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007DFC]`}
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
                </div>

                {/* Confirm Password field */}
                <div className="mb-6">
                    <div className="relative mb-2">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className={`h-5 w-5 ${errors.confirmPassword ? 'text-red-500' : 'text-gray-400'}`} />
                        </div>
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder='Confirm Password'
                            autoComplete="new-password"
                            {...register('confirmPassword')}
                            className={`block w-full pl-10 px-6 py-4 rounded-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-[#222E48]/20'} shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007DFC]`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            ) : (
                                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <ButtonFill btnText="Sign Up" type="submit" className="w-full py-4" />
            </form>
            <p className="mt-4 text-sm font-semibold text-center text-gray-600 mb-5">
                Already have an account? <Link to="/login" className="text-[#007DFC]">Login</Link>
            </p>
        </div>
    );
}