<template>
  <v-dialog
    :value="show"
    @click:outside="$emit('update:show', !show)"
    scrollable
  >
    <v-card>
      <v-card-title class="text-h6 grey lighten-2">
        <span>
          Vazamento Facebook
        </span>

        <v-btn absolute right icon @click="$emit('update:show', !show)">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text style="height: 200px;">
        <p>
          In April 2021, a large data set of over 500 million Facebook users was
          made freely available for download. Encompassing approximately 20% of
          Facebook's subscribers, the data was allegedly obtained by exploiting
          a vulnerability Facebook advises they rectified in August 2019. The
          primary value of the data is the association of phone numbers to
          identities; whilst each record included phone, only 2.5 million
          contained an email address. Most records contained names and genders
          with many also including dates of birth, location, relationship status
          and employer. In April 2021, a large data set of over 500 million
          Facebook users was made freely available for download. Encompassing
          approximately 20% of Facebook's subscribers, the data was allegedly
          obtained by exploiting a vulnerability Facebook advises they rectified
          in August 2019. The primary value of the data is the association of
          phone numbers to identities; whilst each record included phone, only
          2.5 million contained an email address. Most records contained names
          and genders with many also including dates of birth, location,
          relationship status and employer. In April 2021, a large data set of
          over 500 million Facebook users was made freely available for
          download. Encompassing approximately 20% of Facebook's subscribers,
          the data was allegedly obtained by exploiting a vulnerability Facebook
          advises they rectified in August 2019. The primary value of the data
          is the association of phone numbers to identities; whilst each record
          included phone, only 2.5 million contained an email address. Most
          records contained names and genders with many also including dates of
          birth, location, relationship status and employer.
        </p>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions class="d-flex flex-column align-start leak-info">
        <div><strong>Data:</strong> <span>01 Agosto 2019 </span></div>
        <div><strong>Contas vazadas:</strong> <span>509,458,528</span></div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      Type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.leak-info div span {
  font-size: 14px;
}
</style>
