<template>
  <div class="online-reporting-details standard-padding">
    <div>
      <b-row>
        <b-col>
          <div class="top-btn-wrapper">
            <b-btn
              squared
              variant="black"
              class="btn-bold btn-fixed-width"
            >
              Matter submission
            </b-btn>
            <b-btn
              squared
              variant="transparent"
              class="btn-bold btn-fixed-width"
            >
              Save changes
            </b-btn>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="headline-wrapper">
          <h3>Matter Submission</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-if="item"
        >
          <!-- TODO: Create dynamic form builder -->
          <b-form @submit.prevent.stop="submitForm">
            <b-form-group
              label="Request name"
              class="form-group-style"
            >
              <b-form-input
                v-model="item.RequestName"
                :disabled="isDisabled()"
                required
                maxlength="255"
              />
            </b-form-group>
            <b-form-group
              label="Requestor"
              class="form-group-style"
            >
              <v-select
                v-model="item.Requestor"
                class="v-select-style"
                :options="requestorOptions()"
                :disabled="isDisabled()"
                :reduce="person => person.value"
                label="text"
              />
            </b-form-group>
            <b-form-group
              label="Good ending"
              class="form-group-style"
            >
              <b-form-radio-group
                v-model="item.GoodEnding"
                :options="goodEndingOptions"
                :disabled="isDisabled()"
                name="radio-inline"
                required
              />
            </b-form-group>
            <b-form-group
              label="Description"
              class="form-group-style"
            >
              <b-form-textarea
                v-model="item.Description"
                :disabled="isDisabled()"
                required
                minlength="255"
                rows="3"
                max-rows="6"
              />
              <div class="mt-2">
                No spoilers please
              </div>
            </b-form-group>
            <b-form-checkbox
              v-model="item.NeedStoryteller"
              :disabled="isDisabled()"
              class="mt-4 form-group-style"
              required
            >
              Need storyteller
            </b-form-checkbox>
            <b-form-group
              v-if="item.NeedStoryteller"
              label="Storyteller"
              class="form-group-style"
            >
              <b-form-select
                v-model="item.Storyteller"
                :options="requestorOptions()"
                :disabled="isDisabled()"
                required
              />
            </b-form-group>
            <b-form-group
              label="Wanted characters"
              class="form-group-style"
            >
              <v-select
                :value="getWantedCharacters()"
                multiple
                :options="randomCharacters"
                :disabled="isDisabled()"
                @input="setWantedCharacters"
              />
            </b-form-group>
            <b-form-group
              label="Deadline"
              class="form-group-style"
            >
              <datepicker
                v-model="item.Deadline"
                input-class="form-control"
                :disabled-dates="{ to: new Date(Date.now() + 2419200000), from: new Date(new Date().getFullYear()+1, 0, 0) }"
                :disabled="isDisabled()"
              />
            </b-form-group>
            <b-form-group
              label="Budget"
              class="form-group-style"
            >
              <b-input-group append="Dollars (FBD)">
                <b-form-input
                  v-model="item.Budget"
                  :disabled="isDisabled()"
                  type="number"
                  min="250000"
                  placeholder="Min 250000"
                  required
                />
              </b-input-group>
            </b-form-group>
            <b-form-group
              label="Status"
              class="form-group-style"
              hidden
            >
              <v-select
                v-model="item.Status"
                class="v-select-style"
                :options="statusOptions"
                disabled
                :reduce="person => person.value"
                label="text"
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
                squared
                variant="black"
                class="btn-bold mr-2 btn-width"
                :disabled="isDisabled()"
                @click="save"
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
import Datepicker from 'vuejs-datepicker'

export default {
  name: "OnlineReportingDetails",
  components: { Datepicker },
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
      isNew: false,
      statusOptions: [
        { text: 'Draft', value: 'Draft' },
        { text: 'New', value: 'New' },
      ]
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

    await this.$store.dispatch('main/fetchUsers')
  },
  methods: {
    isDisabled () {
      if (!this.itemId) {
        return false
      }
      if (this.users && this.item.Requestor) {
        return !this.users.find(user => user.Id === this.item.Requestor).Roles.some(role => role === 'Owner')
      }
    },
    requestorOptions () {
      if(this.users) {
        return this.users.map(user => ({
          value: user.Id,
          text: user.DisplayName
        }))
      }
    },
    setWantedCharacters (data) {
      // FIXME: Move action to store
      this.item.WantedCharacters = data.join(';')
    },
    getWantedCharacters () {
      if (this.item && this.item.WantedCharacters) {
        return this.item.WantedCharacters.split(';')
      }
    },
    async submitForm() {
      // FIXME: Move mutation to store
      this.item.Status = 'New'
      console.log('No i co?')
      await this.$store.dispatch('main/submitItem', this.item)
        .then(() => {
          this.sendEmail()
        })
    },
    save () {
      // FIXME: Move mutation to store
      this.item.Status = 'Draft'

      // TODO: Save to localStorage, sessionStorage
      this.$router.push('/')
    },
    getUser (type) {
      if (this.users && this.item) {
        return this.users.find(user => user.Id === this.item[type])
      }
    },
    async sendEmail () {
      await this.$store.dispatch('main/sendEmail', { requestor: this.getUser('Requestor'), storyteller: this.getUser('Storyteller') })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-width {
  width: 100px;
  padding: 7px 15px;
}
.vs--disabled /deep/ .vs__dropdown-toggle {
  background-color: #e9ecef;
  .vs__selected {
    color: #777;
  }
  input {
    background-color: unset;
  }
}
/deep/.vs__search {
  margin-top: 13px;
  margin-bottom: 5px;
}
/deep/ .vs__dropdown-toggle {
  border-radius: unset;
}
input:disabled {
  color: #777;
}
.datapicker {
  display: block;
  width: 100%;
}
.headline-wrapper {
  margin-bottom: 80px;
}

.btn-fixed-width {
  width: 150px;
  font-size: 14px;
}
.top-btn-wrapper {
  margin-bottom: 30px;
}
.form-group-style {
  margin-bottom: 45px;
}
/deep/.form-control, .custom-select {
  height: 48px;
  border-radius: unset;
  background-color: white;
}
/deep/.form-control:disabled, .custom-select:disabled {
  cursor: not-allowed;
  background-color: #e9ecef;
}
.input-group-append .input-group-text {
  border-radius: unset;
}
</style>
