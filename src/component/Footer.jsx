import React from 'react'

const Footer = () => {
    const footeLinks=(element)=> {
        const allFooterLinks = document.querySelectorAll(".footeLinks")
        switch (element) {
            case 0:
                allFooterLinks.forEach((item,index)=> index===0 ? item.style.opacity=1 : item.style.opacity=0.1)
                break;
        
            case 1:
                allFooterLinks.forEach((item,index)=> index===1 ? item.style.opacity=1 : item.style.opacity=0.1)
                break;
        
            case 2:
                allFooterLinks.forEach((item,index)=> index===2 ? item.style.opacity=1 : item.style.opacity=0.1)
                break;
        
            case 3:
                allFooterLinks.forEach((item,index)=> index===3 ? item.style.opacity=1 : item.style.opacity=0.1)
                break;
        
            case 4:
                allFooterLinks.forEach((item,index)=> index===4 ? item.style.opacity=1 : item.style.opacity=0.1)
                break;
        
            case 5:
                allFooterLinks.forEach((item,index)=> index===5 ? item.style.opacity=1 : item.style.opacity=0.1)
                break;
        
            default:
                allFooterLinks.forEach((item,index)=> (item.style.opacity=1))
                break;
        }
    }
    const linksBackToNormal =()=>{
        const allFooterLinks = document.querySelectorAll(".footeLinks")
        allFooterLinks.forEach((item)=> (item.style.opacity=1))
    }
  return (
    <>
        <footer>
            <h3>
                Let's<br />
                #ConnectOnCutting?
            </h3>
            <aside onMouseLeave={linksBackToNormal}>
                <a href="/" className='footeLinks' onMouseOver={()=>footeLinks(0)}>Home</a>
                <a href="/story" className='footeLinks' onMouseOver={()=>footeLinks(1)}>Story</a>
                <a href="/media" className='footeLinks' onMouseOver={()=>footeLinks(2)}>Media</a>
                <a href="/franchise" className='footeLinks' onMouseOver={()=>footeLinks(3)}>Franchise</a>
                <a href="/events" className='footeLinks' onMouseOver={()=>footeLinks(4)}>Events</a>
                <a href="/chaiwalacares" className='footeLinks' onMouseOver={()=>footeLinks(5)}>Chai Wala Cares</a>
            </aside>
            <div>
                <h5>Phone</h5>
                <a href="tel: +91722905222">+91722905222</a>

            </div>
            <div>
                <h5>Email</h5>
                <a href="mailto:Info@mbachaiwala.com" >Info@mbachaiwala.com</a>
                <a href="mailto:Franchise@mbachaiwala.com" >Franchise@mbachaiwala.com</a>
            </div>
            <p>© COPYRIGHT 2023 MBA CHAIWALA. MADE BY </p>
        </footer>
        <div className="footer">
            
        </div>
    </>
  )
}

export default Footer
