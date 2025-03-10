<template>
    <div id="banner">
        <NuxtImg 
            class="banner-img"
            src="/images/banner.jpg" 
            alt="Banner" 
            layout="fill"
            object-fit="cover"
            quality="80"
            format="webp"  
        />
        <div class="banner-overlay">
            <div class="banner-text">
                <h1>Bienvenido a Valentech patient tracker</h1>
                <p>Gestión de pacientes fácil y eficiente</p>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

#banner {
    position: relative;
    width: 100%;
    height: 91.2vh;
    overflow: hidden;
    
    .banner-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }

    .banner-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .banner-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
        z-index: 2;
      }

}
</style>