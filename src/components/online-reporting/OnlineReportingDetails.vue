<template>
  <div class="online-reporting-details standard-padding">
    <div>
      <b-row>
        <b-col
          v-if="item"
          cols="6"
        >
          <b-form @submit.prevent.stop="submitForm">
            <b-form-group label="Request name">
              <b-form-input
                v-model="item.RequestName"
                :disabled="isDisabled()"
                required
                maxlength="255"
              />
            </b-form-group>
            <b-form-group label="Requestor">
              <b-form-select
                v-model="item.Requestor"
                :options="requestorOprions()"
                :disabled="isDisabled()"
                required
              />
            </b-form-group>
            <b-form-group label="Good ending">
              <b-form-radio-group
                v-model="item.GoodEnding"
                :options="goodEndingOptions"
                :disabled="isDisabled()"
                name="radio-inline"
                required
              />
            </b-form-group>
            <b-form-group label="Description">
              <b-form-input
                v-model="item.Description"
                :disabled="isDisabled()"
                required
                minlength="255"
              />
              <div class="mt-2">
                No spoilers please
              </div>
            </b-form-group>
            <b-form-checkbox
              v-model="item.NeedStoryteller"
              :disabled="isDisabled()"
              class="mt-4 mb-4"
              required
            >
              Need storyteller
            </b-form-checkbox>
            <b-form-group
              v-if="item.NeedStoryteller"
              label="Storyteller"
            >
              <b-form-select
                v-model="item.Storyteller"
                :options="requestorOprions()"
                :disabled="isDisabled()"
                required
              />
            </b-form-group>
            <b-form-group label="Wanted characters">
              <v-select
                :value="getWantedCharacters()"
                multiple
                :options="randomCharacters"
                :disabled="isDisabled()"
                @input="setWantedCharacters"
              />
            </b-form-group>
            <div>
              <b-btn
                squared
                variant="transparent"
                class="btn-bold mr-2 btn-width"
                @click="$router.push('/')"
              >
                Cancel
              </b-btn>
              <b-btn
                type="submit"
                squared
                variant="black"
                class="btn-bold mr-2 btn-width"
                :disabled="isDisabled()"
              >
                Save
              </b-btn>
              <b-btn
                type="submit"
                squared
                variant="black"
                class="btn-bold mr-2 btn-width"
                :disabled="isDisabled()"
              >
                Submit
              </b-btn>
            </div>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col />
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "OnlineReportingDetails",
  data () {
    return {
      itemId: this.$route.query.id,
      goodEndingOptions: [
        { text: 'Yes', value: 'Yes' },
        { text: 'Depends', value: 'Depends' },
        { text: 'No', value: 'No' },
      ],
      randomCharacters: [
        'iTdxt',
        '00Vsn',
        'oIn91',
        '4uksW',
        '3FdvD',
        'm5qLn',
        'xZf66',
        '1XdBC',
        'ugzAh',
        'Dil39',
        'WKfrL',
        'PfgiX',
        'djPe1',
        'iYuhQ',
        'ufc6G',
        'bdSNe',
        'CtwAs',
        'raTTw',
        'z6mIt',
        'QWxwv',
        '1RuqJ',
        'lS84f',
        'JDr6g',
        'mFmzJ',
        'GFMGp',
        'Fgedl',
        'bTJGb',
        '8JHU5',
        'T1IIf',
        'tmodj',
        'JuVZK',
        'GngAc',
        'SE53j',
        '0cbp4',
        'Cpl4F',
        'ojbdq',
        'ASGUu',
        'OVc4Q',
        '91XZ8',
        'sSQTm',
        'F9PAt',
        '82lAQ',
        '2EoCP',
        '2l8Z6',
        'rg9CV',
        'dcqe0',
        'AbFUo',
        'RtFz2',
        'lwIfT',
        'ZzDde',
        'VlKYk',
        'SE5kw',
        'uuZPo',
        'qDoIn',
        'yMtEQ',
        'kvi0e',
        '4mLlJ',
        'xr2xu',
        'dAES5',
        'Sr0DD',
        'Kg2aD',
        'D5G61',
        '0pk6V',
        'oZzb3',
        'AxsCp',
        'BEnhU',
        'JabzJ',
        'ioJDZ',
        'w15Oz',
        'qnG1j',
        'BdW7v',
        'gWUaY',
        'nCoXi',
        'IaBxO',
        'DqQE5',
        'q8pH6',
        'LmiDu',
        'Yhzvo',
        '3LgqR',
        'stRCh',
        'PQr7R',
        '2EOcV',
        'oyxg5',
        '4Md0d',
        'dxCjR',
        'ow9Yx',
        'QXSZJ',
        'PVY2i',
        'Iiajo',
        'Oha1N',
        'RKmzF',
        'rDUYu',
        'aVXkf',
        '9abcL',
        'xFYLZ',
        'tf6rv',
        'PHWFg',
        'DqEHx',
        '1sbkx',
        'T4iGa'
      ],
      isNew: false
    }
  },
  computed: {
    ...mapState('main', ['item', 'loadingItem', 'users']),
  },
  async mounted () {
    if(this.itemId) {
      await this.$store.dispatch('main/fetchItem', this.itemId)
    } else {
      this.$store.commit('main/setEmptyItem')
      this.isNew = true
    }

    if(!this.users.length) {
      await this.$store.dispatch('main/fetchUsers')
    }
  },
  methods: {
    isDisabled () {
      if (!this.itemId) {
        return false
      }
      if (this.users.length && this.item.Requestor) {
        return !this.users.find(user => user.Id === this.item.Requestor).Roles.some(role => role === 'Owner')
      }
    },
    requestorOprions () {
      return this.users.map(user => ({
        value: user.Id,
        text: user.DisplayName
      }))
    },
    setWantedCharacters (data) {
      this.item.WantedCharacters = data.join(';')
    },
    getWantedCharacters () {
      if (this.item && this.item.WantedCharacters) {
        return this.item.WantedCharacters.split(';')
      }
    },
    submitForm(event) {
      console.log(event, this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-width {
    width: 100px;
    padding: 7px 15px;
  }
</style>
