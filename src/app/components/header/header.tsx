import Image from "next/image";

import "./header.scss"

export function Header(){
    return(
        <div className="header">
            <div>
                <h1>Hi, im Daniel 🖖</h1>
                <h2>Backend Developer</h2>
            </div>
            <Image
                    src="/FotoPerfil.png"
                    alt="Vercel Logo"
                    width={325}
                    height={370}
                    priority
            />
      </div>
    )
}