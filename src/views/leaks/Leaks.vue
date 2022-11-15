<template>
  <div>
    <v-col>
      <v-text-field
        outlined
        dense
        placeholder="Pesquise..."
        label="Pesquise..."
        hide-details="auto"
        v-model="search"
      />
    </v-col>
    <v-col>
      <leak-card
        class="mb-2"
        v-for="(leak, index) in leaks"
        :key="index"
        :leak="leak"
        @click="
          showLeakInfo = true
          selectedLeak = leak
        "
      />
    </v-col>

    <leak-info-dialog :show.sync="showLeakInfo" :leak="selectedLeak" />
  </div>
</template>

<script>
import LeakCard from './components/LeakCard.vue'
import LeakInfoDialog from './components/LeakInfoDialog.vue'

class Leak {
  constructor(name, date) {
    this.name = name
    this.date = date
  }
}

export default {
  components: {
    LeakCard,
    LeakInfoDialog
  },

  data() {
    return {
      leaks: [
        {
          name: 'LinkedIn',
          breachDate: '2012-05-05',
          leakedCount: 164611595,
          description:
            'In May 2016, <a href="https://www.troyhunt.com/observations-and-thoughts-on-the-linkedin-data-breach" target="_blank" rel="noopener">LinkedIn had 164 million email addresses and passwords exposed</a>. Originally hacked in 2012, the data remained out of sight until being offered for sale on a dark market site 4 years later. The passwords in the breach were stored as SHA1 hashes without salt, the vast majority of which were quickly cracked in the days following the release of the data.'
        },
        {
          name: 'Adobe',
          breachDate: '2013-10-04',
          leakedCount: 152445165,
          description:
            'In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and many were quickly resolved back to plain text. The unencrypted hints also <a href="http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html" target="_blank" rel="noopener">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.'
        },
        {
          name: 'League of Legends',
          breachDate: '2012-06-11',
          leakedCount: 339487,
          description:
            'In June 2012, the multiplayer online game <a href="https://www.cio.com/article/2395205/security0/european-league-of-legends-game-players-have-their-account-data-compromised.html" target="_blank" rel="noopener">League of Legends suffered a data breach</a>. At the time, the service had more than 32 million registered accounts and the breach affected various personal data attributes including &quot;encrypted&quot; passwords. In 2018, a 339k record subset of the data emerged with email addresses, usernames and plain text passwords, likely cracked from the original cryptographically protected ones.'
        },
        {
          name: 'HLTV',
          breachDate: '2016-06-19',
          leakedCount: 611070,
          description:
            'In June 2016, the &quot;home of competitive Counter Strike&quot; website <a href="http://www.hltv.org/news/18087-security-breach" target="_blank" rel="noopener">HLTV was hacked</a> and 611k accounts were exposed. The attack led to the exposure of names, usernames, email addresses and bcrypt hashes of passwords.'
        }
      ],
      selectedLeak: {},
      showLeakInfo: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
