<template>
    <v-container>         
        <div class="row text-center justify-center align-center"> 
            <div>
                <img
                    src="../../assets/notfound.webp"
                    alt="Not found"
                    display="block"
                    margin="auto"
                    object-fit="fill"
                    width="55%"
                />
                <div>
                    <span>Stranica nije pronađena...</span>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
  name: "ErrorView",
};
</script>