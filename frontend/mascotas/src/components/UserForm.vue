<template>
    <div class="container py-5 h-100 ">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card shadow-2-strong" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-start">
                        <div class="p-0 m-0 text-center">
                            <img src="https://assets.puzzlefactory.pl/puzzle/292/109/original.jpg" width="50%">
                        </div>
                        <div class="form-outline mb-4 mt-4">
                            <label class="form-label ">Nombre de usuario:</label>
                            <input placeholder="Username" type="text" class="form-control form-control-sm" />
                        </div>
                        <div class="form-outline mb-4 ">
                            <label class="form-label ">Email:</label>
                            <input placeholder="Email" type="email" class="form-control form-control-sm" />

                        </div>
                        <div class="form-outline mb-4 ">
                            <label class="form-label ">Teléfono:</label>
                            <input placeholder="Phone" type="text" class="form-control form-control-sm" />

                        </div>
                        <div class="form-outline mb-4">
                            <label class="form-label">Contraseña:</label>
                            <input placeholder="Password" type="password" class="form-control form-control-sm" />

                        </div>
                        <button class="btn btn-primary btn-block">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UserForm',
}
</script>
  