<template><div class="contenedor">
    <div id="demo" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
       
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://elportal.com.co/wp-content/uploads/2020/02/mascotas_3937043_20191223105958.jpg" class="d-block w-100" height="350px">
          </div>

          <div class="carousel-item">
            <img src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/NVWQSYGX3RC7ZBEHLPLDVXA3PU.jpg"  class="d-block w-100" height="350px">
          </div>

          <div class="carousel-item">
            <img src="https://s3.amazonaws.com/rtvc-assets-canalinstitucional.tv/s3fs-public/images/ci-viajar-con-mascotas_0.jpg" class="d-block w-100" height="350px">
          </div>
        </div> 

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      
      </div> 
    </div>
</template>
<script>
export default {
  name: 'Carousel',
}
</script>
