import Logo from '@/components/logo'
import Button from '@/components/button'
import Login from '@/components/login'

export default function Header() {
    return (
        <div className="flex items-center justify-between py-3">
            <Logo />
            {/* for devlopers */}
            {/* for contractors */}
            <div className="flex gap-4">
                <Login />
                <Button />
            </div>
        </div>
    )
}