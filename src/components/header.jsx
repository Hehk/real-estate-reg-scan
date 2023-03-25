import Button from '@/components/button'

export default function Header() {
    return (
        <div className="flex justify-between py-3">
            <h1 className="text-lg md:text-4xl 2xl:text-[3.6vw] font-black text-black">
                ConTrack
            </h1>
            <Button />
        </div>
    )
}