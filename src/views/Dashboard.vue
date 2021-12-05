<template>
  <v-container
    fluid
  >
    <v-row>
      <v-col cols="12">
        <v-card
          class="pa-3"
          color="grey lighten-4"
        >
          <v-card-title>
            <v-icon
              :color="checking ? 'red lighten-2' : 'indigo'"
              class="mr-12"
              size="64"
              @click="takePulse"
            >
              mdi-heart-pulse
            </v-icon>
            <v-row align="start">
              <div class="text-caption grey--text text-uppercase">
                Heart rate
              </div>
              <div>
                <span
                  class="text-h3 font-weight-black"
                  v-text="avg || '—'"
                />
                <strong v-if="avg">BPM</strong>
              </div>
            </v-row>

            <v-spacer />

            <v-btn
              icon
              class="align-self-start"
              size="28"
            >
              <v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-card-title>

          <v-sheet color="transparent">
            <v-sparkline
              :key="String(avg)"
              :smooth="16"
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :value="heartbeats"
              auto-draw
              stroke-linecap="round"
            />
          </v-sheet>
        </v-card>
      </v-col>
      <v-col
        v-for="count in 4"
        :key="count"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          class="mx-auto text-center"
          color="green"
          dark
        >
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value1"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item">
                  ${{ item.value1 }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">
              Sales Last 24h
            </div>
          </v-card-text>

          <v-divider />

          <v-card-actions class="justify-center">
            <v-btn
              block
              text
            >
              Go to Report
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mt-5 pa-16">
          <v-container fluid>
            <v-sparkline
              :fill="fill"
              :gradient="selectedGradient"
              :line-width="width"
              :padding="padding"
              :smooth="radius || false"
              :value="value2"
              auto-draw
            />

            <v-divider />

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-slider
                  v-model="width"
                  label="Width"
                  min="0.1"
                  max="10"
                  step="0.1"
                  thumb-label
                />
              </v-col>

              <v-col cols="6">
                <v-row
                  class="fill-height"
                  align="center"
                >
                  <v-switch
                    v-model="fill"
                    label="Filled"
                  />
                </v-row>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-slider
                  v-model="radius"
                  label="Radius"
                  min="0"
                  max="25"
                  thumb-label
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
                offset-md="6"
              >
                <v-slider
                  v-model="padding"
                  label="Padding"
                  min="0"
                  max="25"
                  thumb-label
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-row
                  class="fill-height"
                  align="center"
                >
                  <v-item-group
                    v-model="selectedGradient"
                    mandatory
                  >
                    <v-row>
                      <v-item
                        v-for="(gradient, i) in gradients"
                        :key="i"
                        v-slot="{ active, toggle }"
                        :value="gradient"
                      >
                        <v-card
                          :style="{
                            background: gradient.length > 1
                              ? `linear-gradient(0deg, ${gradient})`
                              : gradient[0],
                            border: '2px solid',
                            borderColor: active ? '#222' : 'white'
                          }"
                          width="30"
                          height="30"
                          class="mr-2"
                          @click.native="toggle"
                        />
                      </v-item>
                    </v-row>
                  </v-item-group>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  name: "Dashboard",
  data: () => ({
    checking: false,
    heartbeats: [],
    value1: [
      423,
      446,
      675,
      510,
      590,
      610,
      760,
    ],
    fill: true,
    selectedGradient: gradients[4],
    gradients,
    padding: 8,
    radius: 10,
    value2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
  }),

  computed: {
    avg () {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
      const length = this.heartbeats.length

      if (!sum && !length) return 0

      return Math.ceil(sum / length)
    },
  },

  created () {
    this.takePulse(false)
  },

  methods: {
    heartbeat () {
      return Math.ceil(Math.random() * (120 - 80) + 80)
    },
    async takePulse (inhale = true) {
      this.checking = true

      inhale && await exhale(1000)

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat)

      this.checking = false
    },
  },
}
</script>

<style scoped>

</style>
