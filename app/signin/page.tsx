import { getSession } from '@/actions/auth-actions';
import SignInForm from '@/app/signin/components/login-form'
import { redirect } from 'next/navigation';

async function SignInPage() {
    const session = await getSession();
    if (session) {
        redirect("/chat");
    }
    
    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6">
            <SignInForm />
        </div>
    )
}

export default SignInPage