<template>
    <div id="about-us">
        
    <div class="about-us">
    
    <div class="about-text">
        <h4>O nama</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis numquam, praesentium quia eius consequatur magnam. Itaque possimus non quae odit ut, optio veniam pariatur assumenda deleniti maxime dolores nisi, commodi iste officia sint qui architecto minima enim accusantium quidem quo dignissimos animi? Quo itaque nam dolorem necessitatibus non eveniet ipsum iste hic temporibus, laboriosam voluptatem sunt odio quisquam numquam, fugiat in, amet mollitia quod dolores harum sequi sed? Dolor vero architecto facilis ipsum, iste voluptate. Omnis error eum unde excepturi voluptatem facilis, ut accusamus impedit quia vero dignissimos quibusdam quidem nemo sapiente corporis tempora velit sed voluptatibus! Dignissimos, optio corrupti?</p>
    </div>
    <div class="about-image">
       <img src="../../assets/about.png"/>
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

#about-us {
    width: 100%;
    padding: 0 calc(5% + 1rem);
}
#about-us h4 {
    font-family: 'Londrina Outline', cursive;
    font-size: 3rem;
}


.about-us {
    margin: 4rem 0;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: start;
    align-items: center;
   
}

@media (max-width: 768px) {
    .about-image {
    position: absolute;
    z-index: -1;
    opacity: 0.6;
  }
}
</style>