<template>
      <div class="single-support">
        <div class="single-institution">
            <div class="single-institution-header">
                <p>{{items.name}}</p>
                <p>{{items.proffesion}}</p>
                <p><font-awesome-icon  icon = 'location-dot'/>{{items.location}}</p>
            </div>
         <div class="single-institution-footer">
            <a :href="'callto: ' + items.phone" aria-label="Phone"><font-awesome-icon  icon = 'phone'/></a>
            <a :href="'mailto: ' + items.mail" aria-label="Mail"><font-awesome-icon  icon = 'envelope'/></a>
         </div>
         
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'SupportCard',
    props: ["items"],
  }
  </script>
  