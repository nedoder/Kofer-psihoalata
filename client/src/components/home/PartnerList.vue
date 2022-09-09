<template>
    <div class="partner-list">   
        <div class="partners">
            <div class="partner-text">
                <h3>Partneri</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis numquam, praesentium quia eius consequatur magnam. Itaque possimus non quae odit ut, optio veniam pariatur assumenda deleniti maxime dolores nisi, commodi iste officia sint qui architecto minima enim accusantium quidem quo dignissimos animi? Quo itaque nam dolorem necessitatibus non eveniet ipsum iste hic temporibus, laboriosam voluptatem sunt odio quisquam numquam, fugiat in, amet mollitia quod dolores harum sequi sed? Dolor vero architecto facilis ipsum, iste voluptate. Omnis error eum unde excepturi voluptatem facilis, ut accusamus impedit quia vero dignissimos quibusdam quidem nemo sapiente corporis tempora velit sed voluptatibus! Dignissimos, optio corrupti?</p>
            </div>
            <div class="partner-logo">
               <img src="../../assets/about.png" alt="Partner logo"/>
               <img src="../../assets/about.png" alt="Partner logo"/>
               <img src="../../assets/about.png" alt="Partner logo"/>
               <img src="../../assets/about.png" alt="Partner logo"/>
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
    font-family: 'Ribeye Marrow', cursive;
    font-size: 3rem;
    color: var(--light-black);
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
}

.partner-logo img {
    width: 5rem;
}

@media (max-width: 768px) {
    .partner-list h3 {
        font-size: 2rem;
    }
}

</style>