import Logo from '../assets/Logo.png'
import Logo_1 from '../assets/Logo-1.png'
import {ArrowLeft, Bell, Menu, Mic, Search, Upload, User} from 'lucide-react'
import {Button} from './Button'
import {  useEffect, useState } from 'react'
import { useSidebarContext } from '../contexts/SidebarContext'

export function PageHeader () {
    const [showFullWidthSearch, setShowFullWidthSearh] = useState(false)
    
    return <div className="flex gap-10 lg:gap-20 justify-between p-2 mb-6 mx-4">
        <PageHeaderFirstSection 
        hidden={showFullWidthSearch}
        />
        <form className={` gap-4 flex-grow justify-center ${!showFullWidthSearch ? 'hidden md:flex' : 'flex'}`}>
            {showFullWidthSearch && (<Button onClick={() => setShowFullWidthSearh(false)}
            type="button" size="icon" variant="ghost" className="flex-shrink-0">
                <ArrowLeft/>
            </Button>)}
            <div className='flex flex-grow max-w-[600px]'>
                <input type="search" placeholder='Search'
                className='rounded-l-full border border-neutral-400 
                shadow-inner shadow-neutral-300 py-1 px-4 text-lg w-full
                focus:border-blue-500 outline-none'/>
                <Button className='py-2 px-4 rounded-r-full border border-neutral-400 border-l-0
                flex-shrink-0'>
                    <Search/>
                </Button>
            </div>
            <Button type="button" size="icon" variant="default"
             className="flex-shrink-0">
                <Mic/>
            </Button>
        </form>
        <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
            <Button onClick={() => setShowFullWidthSearh(true)}
             size="icon" variant="ghost" className='md:hidden'>
                <Search/>
           </Button>
           <Button size="icon" variant="ghost" className='md:hidden'>
                <Mic/>
           </Button>
           <Button size="icon" variant="ghost">
                <Upload/>
           </Button>
           <Button size="icon" variant="ghost">
                <Bell/>
           </Button>
           <Button size="icon" variant="ghost">
                <User/>
           </Button>
        </div>
    </div>
}

type PageHeaderFirstSectionProps = {
    hidden? : boolean
}

export function PageHeaderFirstSection({hidden = false} : PageHeaderFirstSectionProps) {
    const {toggle} = useSidebarContext()
    const [isScreenMobile, setIsScreenMobile] = useState(false);

    useEffect(()=>{
        const handler = () => {
            if(window.innerWidth < 500){
                setIsScreenMobile(true)
            }else {
                setIsScreenMobile(false)
            }
        }
        window.addEventListener("resize", handler)

            return () => {
                window.removeEventListener("resize", handler)
            }
    }, [isScreenMobile])

    return <div className={`gap-4 items-center flex-shrink-0 ${hidden ? 'hidden' : 'flex'}`}>
            <Button
            onClick={toggle}
            variant="ghost" size="icon">
                <Menu/>
            </Button>
            <a href="/">
                {(!isScreenMobile) ?
                 <img src={Logo} alt="Logo" className='h-6'/> :
                 <img src={Logo_1} alt="Logo_1" className='w-10'/>}
                
            </a>
        </div>
}