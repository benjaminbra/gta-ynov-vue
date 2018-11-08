<template>
    <div id="FicheSalarieForm">
        <b-form>
            <b-form-group
                    id="firstname"
                    label="Prénom"
                    label-for="firstname">
                <b-form-input id="firstname" v-model.trim="salarie.firstname"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="lastname"
                    label="Nom"
                    label-for="lastname">
                <b-form-input id="lastname" v-model.trim="salarie.lastname"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="birth_date"
                    label="Date de Naissance"
                    label-for="birth_date">
                <b-form-input id="birth_date" type="date" v-model="salarie.birth_date"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="address"
                    label="Adresse"
                    label-for="address">
                <b-form-textarea id="address"
                                 v-model.trim="salarie.address"
                                 placeholder="Enter something"
                                 :rows="3"
                                 :max-rows="6">
                </b-form-textarea>
            </b-form-group>
            <b-form-group
                    id="email"
                    label="Email"
                    label-for="email">
                <b-form-input id="email" type="email" v-model.trim="salarie.email"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="phone"
                    label="Téléphone"
                    label-for="phone">
                <b-form-input id="phone" type="tel" v-model.trim="salarie.phone"></b-form-input>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'FicheSalarieForm',
  props: {
    salarie: Object
  }
}
</script>

<style scoped>

</style>
