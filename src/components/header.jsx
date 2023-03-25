import Logo from '@/components/logo'
import Button from '@/components/button'

export default function Header() {
    return (
        <div className="flex items-center justify-between py-3">
            <Logo />
            <Button />
        </div>
    )
}