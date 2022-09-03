<template>
    <footer class="footer" id="contact">
        <div class="footer-container">
            <div class="footer-brand">
                <a href="/" class="brand-image"><img src="../../assets/footerlogo.png"/></a>
                <p>&copy; Kofer psihoalata. All rights reserved. Powered by <a href="https://www.linkedin.com/in/tanjadoderovic/">nedoder</a></p>
            </div>
            <div class="footer-contact">
                <p>Kontakt informacije</p>
                <a href="#" class="gmail">
                    <font-awesome-icon  icon = 'envelope'/>
                    <span class="footer-email">koferpsihoalata@gmail.me</span>
                </a>
            </div>
            <div class="social-icons">
                <a href="#" class="facebook">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }" />
                </a>
                <a href="#" class="instagram" >
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                </a>
                <a href="#" class="tiktok">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'tiktok' }" />
                </a>
                <p>Pratite novosti i na društvenim mrežama</p>
            </div>
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
    /* background: rgba(164, 151, 166, 0.5); */
    background: #F4CB82;
    width: 100%;
    padding: 0 calc(5% + 1rem);
    padding-top: 4rem;
}

.footer-container {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    row-gap: 1rem;
    column-gap: 1.5rem;
    padding: 2rem 0;
}

.gmail svg {
    padding: 0 .5rem 0 0;
    height: 1.5rem;
    color: #000000;
}

.footer-brand, .footer-contact, .social-icons {
    width: 33%;
}

.footer-brand img {
    height: 3rem;
}
.social-icons svg {
    padding: 0 1rem;
    height: 2rem;
}

.facebook svg {
    color: #4267B2;
}
.instagram svg {
    /* background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); */
    color: #d6249f ;
}
.tiktok svg {
    color: #000000;
}


.footer-brand a, .footer-contact a {
    text-decoration: none;
    color: #000000;
}

@media (max-width: 820px) {
    .footer {
        padding: 3rem calc(5% + 1rem);
    }
}

@media (max-width: 768px) {
    .footer-container  {
        flex-direction: column;
        text-align: end;
    }

    .footer-brand, .footer-contact, .social-icons {
        width: 100%;
    }
}


</style>