<template>
    <div class="partner-list">   
        <div class="partners">
            <div class="partner-text">
                <h3>Partneri</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis numquam, praesentium quia eius consequatur magnam. Itaque possimus non quae odit ut, optio veniam pariatur assumenda deleniti maxime dolores nisi, commodi iste officia sint qui architecto minima enim accusantium quidem quo dignissimos animi? Quo itaque nam dolorem necessitatibus non eveniet ipsum iste hic temporibus, laboriosam voluptatem sunt odio quisquam numquam, fugiat in, amet mollitia quod dolores harum sequi sed? Dolor vero architecto facilis ipsum, iste voluptate. Omnis error eum unde excepturi voluptatem facilis, ut accusamus impedit quia vero dignissimos quibusdam quidem nemo sapiente corporis tempora velit sed voluptatibus! Dignissimos, optio corrupti?</p>
            </div>
            <div class="partner-logo">
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
        </div>
    </div>
</template>

<script>
    export default {
       name: 'PartnerList',
    }
</script>

<style scoped>
.partner-list h3 {
    margin: 2rem 0;
}
.partner-list {
    width: 100%;
    padding: 0 calc(5% + 1rem);
}
.partners {
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: justify;
}
.partner-text, .partner-logo {
    width: 100%;
}
.partner-logo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    row-gap: 1rem;
    column-gap: 1rem;
    padding: 2rem 0;
}
.partner-logo img {
    width: 8rem;
}

@media (max-width: 500px) {
    .partner-logo {
        justify-content: space-between;
    }
}

@media (max-width: 350px) {
    .partner-logo {
        justify-content: center;
    }
}

</style>