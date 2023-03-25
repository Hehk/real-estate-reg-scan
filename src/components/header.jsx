import Button from '@/components/Button'

export default function Header() {
    return (
        <div className="flex justify-between py-3">
            <h1 className="text-lg font-black uppercase md:text-5xl 2xl:text-[3.6vw] text-black">
                Logo
            </h1>
            <Button />
        </div>
    )
}