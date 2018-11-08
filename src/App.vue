<template>
    <div id="app" class="row no-margin">

        <div class="col-5 col-md-3 col-lg-2 no-padding sidebar" v-bind:class="{ active: side_bar_active}" id="nav_collapse">
            <div class="logo d-block d-md-none">
                <button class="d-md-none btn btn-secondary" v-on:click="side_bar_active=!side_bar_active">
                    Fermer
                </button>
            </div>
            <div class="logo">
                <router-link to="/" class="logo-normal">
                    GTA Ynov Vue
                </router-link>
            </div>
            <div class="sidebar-wrapper">
                <ul class="nav">
                    <router-link tag="li" to="/" class="nav-item" exact-active-class="active">
                        <a class="nav-link">
                            <i class="fa fa-home"></i>
                            <p> Dashboard</p>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/salarie/fiche" class="nav-item" exact-active-class="active">
                        <a class="nav-link">
                            <i class="far fa-address-card"></i>
                            <p> Fiche salarié</p>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/salarie/planning" class="nav-item" exact-active-class="active">
                        <a class="nav-link">
                            <i class="far fa-calendar-alt"></i>
                            <p> Mon Planning</p>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/salarie/demande" class="nav-item" exact-active-class="active">
                        <a class="nav-link">
                            <i class="far fa-question-circle"></i>
                            <p> Mes demandes</p>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/responsable/gestion/salarie" class="nav-item" exact-active-class="active"
                                 v-if="user.type===user_types_const.RESPONSABLE_EQUIPE.value">
                        <a class="nav-link">
                            <i class="fas fa-users"></i>
                            <p> Gestion salariés</p>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/responsable/planning" class="nav-item" exact-active-class="active"
                                 v-if="user.type===user_types_const.RESPONSABLE_EQUIPE.value">
                        <a class="nav-link">
                            <i class="fa fa-calendar-alt"></i>
                            <p> Planning équipe</p>
                        </a>
                    </router-link>
                    <router-link tag="li" to="/responsable/demande" class="nav-item" exact-active-class="active"
                                 v-if="user.type===user_types_const.RESPONSABLE_EQUIPE.value">
                        <a class="nav-link">
                            <i class="fas fa-exclamation-circle"></i>
                            <p> Gestion demandes</p>
                        </a>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="col-12 col-md-9 col-lg-10 no-padding content">
            <b-navbar toggleable="md" class="nav_bar">
                <button class="d-md-none btn btn-secondary" v-on:click="side_bar_active=!side_bar_active">
                    <i class="fa fa-bars"></i>
                </button>
                <b-form-select v-model="user.type" :options="user_types" class="col-5" size="sm" right/>
                <b-collapse is-nav id="collapse-sidebar">
                    <b-navbar-nav></b-navbar-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item-dropdown right hidden>
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
import UserTypes from './constants/UserTypes'

export default {
  name: 'App',
  data: function () {
    return {
      user_types_const: UserTypes.UserTypes,
      user: {
        type: UserTypes.UserTypes.SALARIE.value
      },
      user_types: [
        UserTypes.UserTypes.SALARIE,
        UserTypes.UserTypes.RESPONSABLE_EQUIPE,
        UserTypes.UserTypes.DRH
      ],
      side_bar_active: false
    }
  }
}
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
        height: 55px;
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

    .sidebar {
        box-shadow: 4px 0 10px #00000040;
        z-index: 1000;
    }

    .sidebar-wrapper .nav-item {
        margin: 10px auto 0;
        border-radius: 5px;
    }

    .sidebar-wrapper .nav-item a {
        color: grey;
    }

    .sidebar-wrapper .nav-item a p {
        display: inline-block;
        margin: 0;
    }

    .sidebar-wrapper .nav-item:hover {
        background: #f1f1f1;
    }

    .sidebar-wrapper .nav-item.active {
        background: purple;
        box-shadow: 3px 3px 10px #ababab;
    }

    .sidebar-wrapper .nav-item.active a {
        color: white;
    }

    a i {
        padding: 0 5px 0 0;
    }

    @media (max-width: 768px) {
        .sidebar{
            display: none;
        }

        .sidebar.active {
            display: block;
            position: absolute;
            height: 100%;
            background: white;
        }
    }
</style>
