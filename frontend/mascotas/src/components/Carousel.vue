<template>
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://s3.amazonaws.com/rtvc-assets-canalinstitucional.tv/s3fs-public/images/ci-viajar-con-mascotas_0.jpg"
                    class="d-block w-100" height="350px">
                </div>
                <div class="carousel-item">
                    <img src="https://elportal.com.co/wp-content/uploads/2020/02/mascotas_3937043_20191223105958.jpg"
                        class="d-block w-100" height="350px">
                </div>
                <div class="carousel-item">
                    <img src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/NVWQSYGX3RC7ZBEHLPLDVXA3PU.jpg"
                        class="d-block w-100" height="350px">
                </div>
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
    </div>
 
  </template>
  <script>
  export default {
    name: 'Carousel',
  }
  </script>