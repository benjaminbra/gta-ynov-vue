<template>
    <div id="SplashScreen">
        <div class="splash-title">
            Gestion de temps et d'activités
        </div>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Chargement...</span>
    </div>
</template>

<script>
export default {
  name: 'SplashScreen'
}
</script>

<style>
    #SplashScreen{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 15% 0 0 0;
        height: 100%;
        background: white;
        display: inline-block;
        z-index: 100000;
        text-align: center
    }

    .splash-title{
        font-size: 50px;
        font-weight: bold;
        font-family: monospace, sans-serif;
    }
</style>
