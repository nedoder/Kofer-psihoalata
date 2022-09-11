<template>
    <footer class="footer" id="contact">
        <div class="footer-container">
            <div class="footer-brand">
                <a href="/" class="brand-image" aria-label="Logo"><img src="../../assets/footerlogo.png" alt="Logo"/></a>
            </div>
            <div class="quick-links">
                <a href="/" aria-label="Home">Početna</a>
                <a href="/#about-us" aria-label="About us">O nama</a>
                <a href="/education" aria-label="Blog">Edukacija</a>
                <a href="/support" aria-label="Support">Podrška</a>
                <a href="/join-us" aria-label="Join ua">Postani volonter</a>
                <a href="https://www.patreon.com/" aria-label="Patreon">Podrži nas</a>
            </div>
            <div class="partner-logo first-partner">
                <a href="https://facebook.com/nvoportret" aria-label="NVO Portret">
                    <img src="../../assets/portret logo.png" alt="NVO Portret logo"/>
                </a>
                <a href="https://www.instagram.com/klupko.volonteri/" aria-label="Klupko">
                    <img src="../../assets/klupko logo.png" alt="Klupko logo"/>
                </a>
                <a href="https://www.faktcg.org/odgovorno-i-solidarno-gradjani-preuzimaju-inicijativu-konkurs-za-podrsku-projektima/" aria-label="Odgovorno solidarno">
                    <img src="../../assets/odgovorno solidarno logo.png" alt="Odgovorno solidarno logo"/>
                </a>
                <a href="https://www.aktivnazona.me/" aria-label="NVO Aktivna zona">
                    <img src="../../assets/aktivna zona logo.png" alt="NVO Aktivna zona logo"/>
                </a>  
            </div>
            <div class="partner-logo">
                <a href="https://www.eeas.europa.eu/" aria-label="EU">
                    <img src="../../assets/eu logo.png" alt="EU logo"/>
                </a>
                <a href="https://www.faktcg.org/" aria-label="Fakt">
                    <img src="../../assets/fakt logo.png" alt="Fakt logo"/>
                </a>
                <a href="http://www.zracaknade.co.me/" aria-label="NVO zračak nade">
                    <img src="../../assets/NVO zracak nade logo.png" alt="NVO zračak nade logo"/>
                </a>
                <a href="https://www.gov.me/mju" aria-label="Ministarstvo javne uprave">
                    <img src="../../assets/MJU logo.png" alt="Ministarstvo javne uprave logo"/>
                </a>
            </div>
            <div class="social-icons">
                    <a href="https://www.facebook.com/" class="facebook" aria-label="Facebook">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }" />
                    </a>
                    <a href="https://www.instagram.com/" class="instagram" aria-label="Instagram">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                    </a>
                    <a href="https://www.tiktok.com/" class="tiktok" aria-label="TikTok">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'tiktok' }" />
                    </a>
                    <a href="mailto: koferpsihoalata@gmail.me" class="gmail" aria-label="Gmail">
                        <font-awesome-icon  icon = 'envelope'/>
                    </a>
            </div>
            <p class="copyrights">&copy; Kofer psihoalata. All rights reserved. Powered by <a href="https://www.linkedin.com/in/tanjadoderovic/">nedoder</a></p>
        </div>
    </footer>  
</template>
    

<script>   
    export default {
        name: 'FooterComponent',
    }
</script>

<style scoped>   
.footer {
    width: 100%;
    background: var(--yellow);
    padding: 0 calc(5% + 1rem);
    padding-top: 4rem;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
}

.footer-container {
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 1rem;
    column-gap: 1.5rem;
    padding: 2rem 0;
}

.gmail svg {
    padding: 0 .5rem 0 0;
    height: 1.5rem;
    color: var(--black);
}

.footer-brand {
    width: 100%;
}

.partner-logo, .quick-links {
    width: calc(33% - 1rem);
}

.partner-logo, .quick-links {
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
}

.quick-links a {
    text-decoration: none;
    color: var(--black);
}

.partner-logo {
    align-items: flex-end;
}

.first-partner {
    align-items: center;
}

.quick-links a {
    padding: .5rem 0;
}

.footer-brand img {
    height: 4rem;
}

.partner-logo img {
    width: 8rem;
}
.social-icons svg {
    padding: 0 1em 0 0;
    height: 2rem;
}

.facebook svg {
    color: #4267B2;
}
.instagram svg {
    color: #d6249f ;
}
.tiktok svg {
    color: #000000;
}

.gmail svg {
    color: var(--green);
}


.footer-brand a, .social-icons a, .copyrights a {
    text-decoration: none;
    color: var(--black);
}

.social-icons {
    text-align: left;
}

.copyrights, .social-icons {
    width: 100%;
    text-align: center;
}

@media (max-width: 820px) {
    .footer {
        padding: 3rem calc(5% + 1rem);
    }
}

@media (max-width: 768px) {
    .footer-container  {
        flex-direction: column;
        text-align: center;
    }

    .footer-brand, .social-icons, .partner-logo, .quick-links {
        width: 100%;
        text-align: center;
    }

    .partner-logo img {
        margin: 0 auto;
    }
}


</style>