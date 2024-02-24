 <!-- footer -->
        <footer class="footer">
            <img src="./logos/logo1.png" alt="" class="logo --revealing-image;">
            <div class="social-icons-container">
                
                <a href="" class="social-icon"><img src="./recursos/tiktok.svg" alt=""></a>
                <a href="" class="social-icon"><img src="./recursos/instagram.svg" alt=""></a>
                
            </div>

            <ul class="footer-menu-container">
                <li class="menu-item"><a href="./solicitatuinspeccion.html">Solicita tu inspección</a></li>
                <li class="menu-item"><a href="./servicios.html">Servicios</a></li>
                <li class="menu-item"><a href="./contacto.html">Contáctanos</a></li>
                
            </ul>
           
            <span class="copyright">&copy;2021 Loss Reckon Services.</span>
        </footer>

        .footer{
    width: 100%;
    height: 60vh;
    bottom: 0;
    left: 0;
    padding: 2rem 8%;
    background-color:var(--bg-titulos);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.logo{
    width: 350px;
    height: 250px;
    margin-bottom: 1rem;


}

.social-icons-container, .footer-menu-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.social-icon{
    height: 60px;
    width: 60px;
    border-radius: 50px;
    border: 2px solid white;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin:1rem;
    
}

.social-icon img{
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-top: 7px;
    color: white;
    filter:invert(1)
    
}

.social-icon:hover{
    background-color:var(--color-titulo);
   
}



.footer-menu-container{
    list-style-type: none;
    color: #f2f2f2;
    font-size: 18px;
}

.menu-item{
justify-content: space-between;
   
}
.menu-item a{
    color: white;
    cursor: pointer;
    opacity: 0.6;
   
}

.menu-item:hover{
    opacity: 1;
}

.copyright{
    color: #f2f2f2;
    opacity: 0.3;
    text-align: center;
    font-size: 25px;
}
