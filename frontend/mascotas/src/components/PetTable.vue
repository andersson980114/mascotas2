<template>
    <div class="row border p-2">
        <h1 class="card-title text-center pt-5">Nuevas Mascotas</h1>
        <div class="col-3 pt-2">
            <div class="card mx-0">
                <img class="card-img-top" src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?resize=1536,1004" height="150vh">
                <div class="card-body">
                    <h4 class="card-title text-center"></h4>
                    <hr class="my-0">
                    <div class="row">
                        <p class="col-3 font-weight-bold px-1 mx-0 text-left">Raza:</p>
                        <p class="col px-0 mx-0 text-left"></p>
                    </div>
                    <div class="row">
                        <p class="col-4 font-weight-bold px-1 mx-0 text-left">Edad:</p>
                        <p class="col  px-0 mx-0 text-left">años</p>
                    </div>
                    <div class="row">
                        <p class="col-5 font-weight-bold px-0 mx-0 text-left">Género:</p>
                        <p class="col px-0 mx-0 text-left"></p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'PetTable',
}
</script>