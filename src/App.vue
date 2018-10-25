<template>
    <div id="app" class="row no-margin">

        <div class="col-2 no-padding sidebar">
            <div class="logo d-none d-md-block">
                <router-link to="/" class="logo-normal">
                    GTA Ynov Vue
                </router-link>
            </div>
            <div class="sidebar-wrapper">
                <ul class="nav">
                    <router-link tag="li" to="/" class="nav-item" exact-active-class="active">
                        <a class="nav-link">
                            <i class="fa fa-home"></i>
                            Dashboard
                        </a>
                    </router-link>
                    <router-link tag="li" to="/salarie/fiche" class="nav-item" exact-active-class="active">
                        <a class="nav-link">
                            <i class="fa fa-home"></i>
                            Fiche salarié
                        </a>
                    </router-link>
                    <router-link tag="li" to="/salarie/planning" class="nav-item" exact-active-class="active">
                        <a class="nav-link">
                            <i class="fa fa-home"></i>
                            Mon Planning
                        </a>
                    </router-link>
                    <router-link tag="li" to="/salarie/demande"  class="nav-item" exact-active-class="active">
                        <a class="nav-link">
                            <i class="fa fa-home"></i>
                            Mes demandes
                        </a>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="col-10 no-padding content">
            <b-navbar toggleable="md" class="nav_bar">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand href="#" class="d-block d-md-none">GTA Ynov Vue</b-navbar-brand>
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav></b-navbar-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown right>
                            <!-- Using button-content slot -->
                            <template slot="button-content">
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Signout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>

                </b-collapse>
            </b-navbar>
            <router-view/>
        </div>
    </div>
</template>

<script>

</script>

<style>
    html,
    body,
    #app {
        position: relative;
        height: 100%;
    }

    .logo {
        background: #262626;
        color: white;
        height: 55px;
        width: 100%;
        position: relative;
        text-align: center;
        line-height: 55px;
    }

    .nav_bar {
        background: #2d2d2d;
        color: white;
    }

    .logo a {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .logo a,
    .logo a:hover,
    .nav_bar a
    .nav_bar a:hover {
        color: white;
        text-decoration: none;
    }

    .content {
        background: #daebe8;
    }

    .sidebar{
        box-shadow: 4px 0 13px #00000054;
        z-index: 1000;
    }

    .sidebar-wrapper .nav-item{
        margin: 10px auto 0;
        border-radius: 5px;
    }

    .sidebar-wrapper .nav-item a {
        color: grey;
    }

    .sidebar-wrapper .nav-item:hover{
        background: #f1f1f1;
    }

    .sidebar-wrapper .nav-item.active {
        background: purple;
        box-shadow: 3px 3px 10px #ababab;
    }

    .sidebar-wrapper .nav-item.active a {
        color: white;
    }
</style>
