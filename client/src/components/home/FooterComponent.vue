<template>
    <footer class="footer" id="contact">
        <div class="footer-container">
            <div class="footer-brand">
                <a href="/" class="brand-image"><img src="../../assets/footerlogo.png"/></a>
                <p>&copy; Kofer psihoalata. All rights reserved. Powered by <a href="https://www.linkedin.com/in/tanjadoderovic/">nedoder</a></p>
            </div>
            <div class="social-icons">
                <a href="https://www.facebook.com/" class="facebook">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }" />
                </a>
                <a href="https://www.instagram.com/" class="instagram" >
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                </a>
                <a href="https://www.tiktok.com/" class="tiktok">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'tiktok' }" />
                </a>
                <a href="mailto: koferpsihoalata@gmail.me" class="gmail">
                    <font-awesome-icon  icon = 'envelope'/>
                </a>
                <p>Pišite nam</p>
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
    justify-content: start;
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

.footer-brand, .social-icons {
    width: 50%;
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
    color: #d6249f ;
}
.tiktok svg {
    color: #000000;
}

.gmail svg {
    color: var(--pink);
}


.footer-brand a, .social-icons a {
    text-decoration: none;
    color: var(--black);
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

    .footer-brand, .social-icons {
        width: 100%;
    }
}


</style>