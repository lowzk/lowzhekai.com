import './Notepad.css';
import redpin from '../../public/RedPin.png'
import Image from 'next/image';

interface NotePadProps {
    children: React.ReactNode;
}

export default function NotePad({ children }: NotePadProps) {
    return (
        <div className='notepad-container'>
            <div className='notepad'>
                <p>{children}</p>
            </div>
            <div className="absolute top-0 left-0 pin">
                <Image
                    src={redpin}
                    alt="red pin"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="absolute bottom-0 right-0 pin">
                <Image
                    src={redpin}
                    alt="red pin"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}