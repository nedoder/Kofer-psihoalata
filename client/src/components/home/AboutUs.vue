<template>
    <div id="about-us">  
        <div class="about-us">
            <div class="about-text">
                <h3>O nama</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis numquam, praesentium quia eius consequatur magnam. Itaque possimus non quae odit ut, optio veniam pariatur assumenda deleniti maxime dolores nisi, commodi iste officia sint qui architecto minima enim accusantium quidem quo dignissimos animi? Quo itaque nam dolorem necessitatibus non eveniet ipsum iste hic temporibus, laboriosam voluptatem sunt odio quisquam numquam, fugiat in, amet mollitia quod dolores harum sequi sed? Dolor vero architecto facilis ipsum, iste voluptate. Omnis error eum unde excepturi voluptatem facilis, ut accusamus impedit quia vero dignissimos quibusdam quidem nemo sapiente corporis tempora velit sed voluptatibus! Dignissimos, optio corrupti?</p>
            </div>
            <div class="about-image">
               <img src="../../assets/about.png" alt="About us"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       name: 'About-us',
    }
</script>

<style scoped>

/* ABOUT US SECTION */
#about-us {
    width: 100%;
    padding: 0 calc(5% + 1rem);
    padding-top: 5rem;
}
#about-us h3 {
    font-family: 'Ribeye Marrow', cursive;
    font-size: 3rem;
    color: var(--light-black);
}

.about-us {
    margin: 4rem 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}


@media (max-width: 768px) {
    .about-image {
        display: none;
    }

    #about-us h3 {
        font-size: 2.5rem;
    }

    .about-text {
        text-align: justify;
    }
}
</style>