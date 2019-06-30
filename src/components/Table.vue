<template>
  <section>
    <div class="container">
      <div class="table-box">
        <!-- table -->
        <table cellpadding="10">
          <!--head --> 
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price	</th>
              <th>Market Cap</th>
              <th>Volume (24Hr)</th>
            </tr>
          </thead>

          <!-- body -->
          <tbody>
            <tr v-for="currency in currencies" :key="currency.id">
              <td>{{ currency.rank }}</td>
              <td>{{ currency.name }}</td>
              <td> {{ currency.priceUsd | currency }}</td>
              <td>${{ abbreviateNumber(currency.marketCapUsd)}}</td>
              <td>${{ abbreviateNumber(currency.volumeUsd24Hr) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <img src="/assets/img/logo.png" :alt="message">
      <p>{{ message }}</p> -->
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      currencies: [],
    }
  },
  created () {
    axios
    .get('https://api.coincap.io/v2/assets')
    .then(response => {
      this.currencies = response.data.data.slice(0, 15)
    })
  },
  methods: {
    intlFormat(num) {
      return new Intl.NumberFormat().format(Math.round(num*100)/100);
    },

    abbreviateNumber(value) {
      let num = Math.floor(value);
      if(num >= 1000000000)
          return this.intlFormat(num/1000000000)+'b';
      if(num >= 1000000)
          return this.intlFormat(num/1000000)+'m';
      if(num >= 1000)
          return this.intlFormat(num/1000)+'k';
      return this.intlFormat(num);
    }
  }
}
</script>

<style lang="scss" scoped>
.table-box {
  width: 100%;
  height: 600px;
  background: #fff;
  box-shadow: 0 10px 10px rgba(0,0,0,0.5);
  overflow: hidden;
  table-layout: fixed;
  &:hover {
      overflow-y: auto;
  }
  th {
    font-weight: normal;
    color: #656569;
  }
}

th:nth-child(1) {
  color: #303133;
}

th:nth-child(2),
td:nth-child(2) {
  padding-right: 50px;
}

@media (max-width: 768px) {
  th:nth-of-type(1),
  th:nth-of-type(4),
  th:nth-of-type(5),
  td:nth-of-type(1),
  td:nth-of-type(4),
  td:nth-of-type(5) {
    display: none;
  }
}

</style>
